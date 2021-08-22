import React, { useCallback, useState, useMemo } from 'react';
import { Plus } from 'react-feather'
import { useLocation } from 'react-router-dom'

import Chart from '../../components/Chart'

import { useWallet } from '../../hooks/wallet'
import NewStockModal from '../../components/NewStockModal'

import {
  Container,
  CenterContainer,
  FloatContainer,
  Button,
  Select
} from './styles'

type DataChartProps =  [string, number];

type SortSelectedProps = 'crescente' | 'decrescente'

type stock = 'ações' | 'fiis' | 'criptomoedas' | 'açõesExterior' | 'bdrs' | 'rendaFixa'

interface LocationProps {
  currInvestiment: stock
}

const Second: React.FC = () => {
  const { wallet } = useWallet()

  const location = useLocation()
  console.log(location)
  const { currInvestiment } = location. state as LocationProps

  const [createStockModalOpen, setCreateStockModalOpen] = useState(false)
  const [sortSelected, setSortSelected] = useState<SortSelectedProps>('decrescente')

  const handleChangeSelect = useCallback((event) => {
    setSortSelected(event.target.value);
  }, [setSortSelected])

  const investimentos: DataChartProps[] = useMemo(() => {
    return currInvestiment === 'rendaFixa'
            ? [['Renda Fixa', wallet.rendaFixa]]
            : wallet[currInvestiment].map(elem => [elem.código, elem.quantidade])
  }, [wallet, currInvestiment])

  return (
    <Container>
      <CenterContainer>
        <FloatContainer>
          <Button isBigList={false} onClick={() => setCreateStockModalOpen(true)} >
            <Plus/>
          </Button>

          {currInvestiment !== 'rendaFixa' && 
            <Select value={sortSelected} onChange={(e) => handleChangeSelect(e)} isBigList={false} >
              <option value="decrescente">Decrescente</option>
              <option value="crescente">Crescente</option>
            </Select>
          }
        </FloatContainer>

        <Chart
          investimentos={investimentos}
          sort={sortSelected}
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

export default Second;
