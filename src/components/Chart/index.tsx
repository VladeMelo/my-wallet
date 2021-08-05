import React, { useMemo } from 'react';
import { Chart as GoogleChart } from "react-google-charts";
import { useHistory } from 'react-router-dom'

import generateRandomColor from '../../utils/generateRandomColor';
import quickSort from '../../utils/quickSort';

import {
  ChartContainer,
  LegendsContainer,
  Legend,
  Marker
} from './styles'

type sort = 'crescente' | 'decrescente'

interface ChartProps {
  investimentos: [string, number][];
  sort: sort;
}

const Chart: React.FC<ChartProps> = ({ investimentos, sort }) => {
  const { push } = useHistory()

  const investimentoSorted = useMemo(() => {
    return quickSort({ items: investimentos, sort })
  }, [investimentos, sort])

  const colors = useMemo(() => {
    console.log('foi')
    return investimentoSorted.map(() => generateRandomColor())
  }, [investimentoSorted])

  return (
    <ChartContainer isBigList={false} >
      <GoogleChart
        width={'300px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Tipos de Investimentos', 'Patrimônio'], ...investimentoSorted
        ]}
        options={{
          //title: 'My Daily Activities',
          // Just add this option
          pieHole: 0.86,
          legend: 'none',
          // slices: {
          //   2: { offset: 0.2 },
          // },
          colors
        }}
        chartEvents={[
          {
            eventName: "ready",
            callback: ({ chartWrapper, google }) => {
              const chart = chartWrapper.getChart();
              // @ts-ignore
              google.visualization.events.addListener(chart, "click", e => {
                // @ts-ignore
                if (e.targetID === 'slice#1') push('second')
              });
            }
          }
        ]}
      />
      <LegendsContainer>
        {investimentoSorted.map((elem, index) => {
          return (
            <Legend key={index} lastOfTheColumn={(index - 9) % 10 === 0} >
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
