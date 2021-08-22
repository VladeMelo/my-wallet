import React, { useState, useCallback } from 'react'
import { Form } from '@unform/web';
import { Tag, ShoppingCart, X } from 'react-feather'

import Input from '../Input'

import { useWallet } from '../../hooks/wallet'

import { Container, InputContainer, BottomContainer, Button, Select } from './styles'

type stock = 'ações' | 'fiis' | 'criptomoedas' | 'rendaFixa' | 'açõesExterior' | 'bdrs'

interface NewStockModalProps {
    setCreateStockModalOpen(value: boolean): void;
}

interface StockFormData {
    código: string;
    quantidade: number;
}

interface RendaFixaFormData {
    valor: number;
}

const NewStockModal: React.FC<NewStockModalProps> = ({ setCreateStockModalOpen }) => {
    const { addToWallet } = useWallet()

    const [stockType, setStockType] = useState<stock>('ações')

    const handleChangeStockType = useCallback((event) => {
        setStockType(event.target.value)
    }, [])

    const handleSubmit = useCallback((data: StockFormData | RendaFixaFormData) => {
        function isStockFormData(object: any): object is StockFormData {
            return 'quantidade' in object;
        }
        
        if (isStockFormData(data)) {
            addToWallet({ 
                código: data.código.toUpperCase(),
                quantidade: Number(data.quantidade),
                type: stockType as Exclude<stock, 'rendaFixa'> 
            })
        } else {
            addToWallet(Number(data.valor))
        }

        setCreateStockModalOpen(false)
    }, [stockType, addToWallet, setCreateStockModalOpen])

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <X 
                    size={20}
                    onClick={() => setCreateStockModalOpen(false)}
                />

                <InputContainer>
                    <h1>Tipo</h1>

                    <Select value={stockType} onChange={(event) => handleChangeStockType(event)} >
                        <option value="ações">Ação</option>
                        <option value="fiis">Fundo Imobiliário</option>
                        <option value="bdrs">BDR</option>
                        <option value="criptomoedas">Criptomoeda</option>
                        <option value="rendaFixa">Renda Fixa</option>
                        <option value="açõesExterior">Exterior</option>
                    </Select>
                </InputContainer>

                <Input
                    name='código'
                    label='Código'
                    icon={Tag}
                    disabled={stockType === 'rendaFixa'}
                    placeholder='Ex.: VALE3'
                />
                
                <BottomContainer>
                    <Input
                        name={stockType === 'rendaFixa' ? 'valor' : 'quantidade'}
                        label={stockType === 'rendaFixa' ? 'Valor' : 'Quantidade'}
                        type='number'
                        icon={ShoppingCart}
                        placeholder={stockType === 'rendaFixa' ? 'Ex.: R$ 90,00' : 'Ex.: 30'}
                    />

                    <Button type='submit' >
                        <h1>Adicionar</h1>
                    </Button>
                </BottomContainer>
            </Form>
        </Container>
    )
}

export default NewStockModal