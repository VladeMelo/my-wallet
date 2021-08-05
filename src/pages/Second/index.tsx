import React, { useCallback, useState, useMemo } from 'react';
import { Plus } from 'react-feather'

import Chart from '../../components/Chart'

import {
  Container,
  CenterContainer,
  FloatContainer,
  Button,
  Select
} from './styles'

interface DataChartProps {
  investimento: [string, number];
}

type SortSelectedProps = 'crescente' | 'decrescente'

const Second: React.FC = () => {
  const [dataChart, setDataChart] = useState<DataChartProps[]>([
    {
      investimento: ['ITSA4', 8300], 
    },
    {
      investimento: ['BBSA3', 3000], 
    },
    {
      investimento: ['SAPR11', 15000], 
    },
    {
      investimento: ['GOAU4', 36000],
    },
    {
      investimento: ['PETZ3', 5439],
    },
    {
      investimento: ['BIDI11', 12940],
    },
    {
      investimento: ['VALE3', 3400],
    },
    {
      investimento: ['SAPR11', 15000], 
    },
    {
      investimento: ['GOAU4', 36000],
    },
    {
      investimento: ['PETZ3', 5439],
    },
    {
      investimento: ['BIDI11', 12940],
    },
    {
      investimento: ['VALE3', 3400],
    },
    {
      investimento: ['SAPR11', 15000], 
    },
    {
      investimento: ['GOAU4', 36000],
    },
    {
      investimento: ['PETZ3', 5439],
    },
    // {
    //   investimento: ['BIDI11', 12940],
    // },
    // {
    //   investimento: ['VALE3', 3400],
    // },
    // {
    //   investimento: ['PETZ3', 5439],
    // },
    // {
    //   investimento: ['BIDI11', 12940],
    // },
    // {
    //   investimento: ['VALE3', 3400],
    // },
    // {
    //   investimento: ['VALE3', 3400],
    // },
    // {
    //   investimento: ['PETZ3', 5439],
    // },
    // {
    //   investimento: ['BIDI11', 12940],
    // },
    // {
    //   investimento: ['VALE3', 3400],
    // },
    // {
    //   investimento: ['VALE3', 3400],
    // },
    // {
    //   investimento: ['PETZ3', 5439],
    // },
    // {
    //   investimento: ['BIDI11', 12940],
    // },
    // {
    //   investimento: ['VALE3', 3400],
    // },
    // {
    //   investimento: ['VALE3', 3400],
    // },
    // {
    //   investimento: ['PETZ3', 5439],
    // }
  ])

  const [sortSelected, setSortSelected] = useState<SortSelectedProps>('crescente')

  const handleChangeSelect = useCallback((event) => {
    setSortSelected(event.target.value);
  }, [setSortSelected])

  const a = useMemo(() => {
    return dataChart.map(item => item.investimento)
  }, [dataChart])

  return (
    <Container>
      <CenterContainer>
        <FloatContainer>
          <Button isBigList={false} >
            <Plus/>
          </Button>

          <Select value={sortSelected} onChange={(e) => handleChangeSelect(e)} isBigList={false} >
            <option value="decrescente">Decrescente</option>
            <option value="crescente">Crescente</option>
          </Select>
        </FloatContainer>

        <Chart
          investimentos={a}
          sort={sortSelected}
        />
      </CenterContainer>
    </Container>
  );
}

export default Second;
