import React, { useState } from 'react';
import { Plus } from 'react-feather'

import Chart from '../../components/Chart'
import NewStockModal from '../../components/NewStockModal'

import { useWallet } from '../../hooks/wallet'

import {
  Container,
  CenterContainer,
  FloatContainer,
  Button
} from './styles'

type DataChartProps = [string, number]

const Main: React.FC = () => {
  const { wallet } = useWallet()

  const [createStockModalOpen, setCreateStockModalOpen] = useState(false)
  const [dataChart, setDataChart] = useState<DataChartProps[]>([
    ['Ações', wallet.ações.reduce((total, atual) => total + atual.quantidade, 0)],
    ['Renda Fixa', wallet.rendaFixa],
    ['Ações no Exterior',  wallet.açõesExterior.reduce((total, atual) => total + atual.quantidade, 0)],
    ['Criptomoedas',  wallet.criptomoedas.reduce((total, atual) => total + atual.quantidade, 0)],
    ['BDRs',  wallet.bdrs.reduce((total, atual) => total + atual.quantidade, 0)],
    ['Fundos Imobiliários',  wallet.fiis.reduce((total, atual) => total + atual.quantidade, 0)],
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
          investimentos={dataChart}
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
