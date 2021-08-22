import React, { useMemo, useEffect } from 'react'
import { Chart as GoogleChart } from "react-google-charts"
import { useHistory } from 'react-router-dom'

import Aos from 'aos'
import 'aos/dist/aos.css'

import generateRandomColor from '../../utils/generateRandomColor'
import quickSort from '../../utils/quickSort'

import {
  ChartContainer,
  LegendsContainer,
  Legend,
  Marker
} from './styles'

type sort = 'crescente' | 'decrescente'

interface ChartProps {
  investimentos: [string, number][];
  sort?: sort;
}

const investimentCodes = {
  ['Renda Fixa'.length]: 'rendaFixa',
  ['Criptomoedas'.length]: 'criptomoedas',
  ['Ações no Exterior'.length]: 'açõesExterior',
  ['BDRs'.length]: 'bdrs',
  ['Fundos Imobilários'.length]: 'fiis',
  ['Ações'.length]: 'ações',
}

const Chart: React.FC<ChartProps> = ({ investimentos, sort }) => {
  const { push } = useHistory()

  useEffect(() => {
    Aos.init({ duration: 1200  })
  }, [])

  const investimentosSorted = useMemo(() => {
    console.log(investimentos)
    return quickSort({ items: investimentos, sort: sort || 'decrescente' })
  }, [investimentos, sort])

  const colors = useMemo(() => {
    return investimentosSorted.map(() => generateRandomColor())
  }, [investimentosSorted])

  const sliceToInvestiment = useMemo(() => {
    let currSlice = -1

    return investimentosSorted.reduce((total, atual) => { 
      if (atual[1] > 0) {
        currSlice += 1

        return {
          ...total,
          [`slice#${currSlice}`]: investimentCodes[atual[0].length]
        }
      }

      return total
    }, {})
  }, [investimentosSorted])

  return (
    <ChartContainer isBigList={false} >
      <GoogleChart
        width={'300px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Tipos de Investimentos', 'Patrimônio'], ...investimentosSorted
        ]}
        options={{
          //title: 'My Daily Activities',
          // Just add this option
          pieHole: 0.88,
          legend: 'none',
          // slices: {
          //   2: { offset: 0.2 },
          // },
          colors
        }}
        chartEvents={sort ? [] : [
          {
            eventName: "ready",
            callback: ({ chartWrapper, google }) => {
              const chart = chartWrapper.getChart();
              // @ts-ignore
              google.visualization.events.addListener(chart, "click", e => {
                console.log(e)
                // @ts-ignore
                const currInvestiment = sliceToInvestiment[e.targetID]

                if (currInvestiment !== undefined) {
                  push({ 
                    pathname: 'second', 
                    state: {
                      currInvestiment
                    } 
                  })
                }
              });
            }
          }
        ]}
      />
      <LegendsContainer>
        {investimentosSorted.map((elem, index) => {
          return (
            <Legend 
              key={index} 
              lastOfTheColumn={(index - 9) % 10 === 0} 
              data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              data-aos-delay={index * 100}
            >
              <Marker color={colors[index]} />
              <h1>{`${elem[0]} - `}</h1>
              <h1>R$ {elem[1]}</h1>
            </Legend>
          )
        })}
      </LegendsContainer>
    </ChartContainer>
  );
}

export default Chart;
