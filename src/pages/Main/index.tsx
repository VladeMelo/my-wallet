import React, { useState } from 'react';
import { Plus } from 'react-feather'

import Chart from '../../components/Chart'
import NewStockModal from '../../components/NewStockModal'

import {
  Container,
  CenterContainer,
  FloatContainer,
  Button
} from './styles'

interface DataChartProps {
  investimento: [string, number];
}

type SortSelectedProps = 'crescente' | 'decrescente'

const Main: React.FC = () => {
  const [createStockModalOpen, setCreateStockModalOpen] = useState(false)
  const [dataChart, setDataChart] = useState<DataChartProps[]>([
    {
      investimento: ['Renda Fixa', 2300],
    },
    {
      investimento: ['Renda Variável', 12000],
    },
    {
      investimento: ['Exterior', 5000],
    },
    {
      investimento: ['Criptomoedas', 6000],
    },
    {
      investimento: ['Fundo Imobiliário', 3500],
    }
  ])

  return (
    <Container>
      <CenterContainer>
        <FloatContainer>
          <Button onClick={() => setCreateStockModalOpen(true)} >
            <Plus/>
          </Button>
        </FloatContainer>

        <Chart
          investimentos={dataChart.map(elem => elem.investimento)}
          sort={'decrescente'}
        />
      </CenterContainer>

      {createStockModalOpen &&
        <NewStockModal
          setCreateStockModalOpen={setCreateStockModalOpen}
        />
      }
    </Container>
  );
}

export default Main;
