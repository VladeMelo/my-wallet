import React from 'react'
import { Form } from '@unform/web';
import { Tag, ShoppingCart, X } from 'react-feather'

import Input from '../Input'

import { Container, InputContainer, BottomContainer, Button, Select } from './styles'

interface NewStockModalProps {
    setCreateStockModalOpen(value: boolean): void;
}

const NewStockModal: React.FC<NewStockModalProps> = ({ setCreateStockModalOpen }) => {

    return (
        <Container>
            <Form onSubmit={() => false}>
                <X 
                    size={20}
                    onClick={() => setCreateStockModalOpen(false)}
                />

                <Input
                    name='ação'
                    label='Código'
                    icon={Tag}
                />

                <Input
                    name='quantidade'
                    label='Quantidade'
                    type='number'
                    icon={ShoppingCart}
                />

                <BottomContainer>
                    <InputContainer>
                        <h1>Tipo</h1>

                        <Select>
                            <option value="ação">Ação</option>
                            <option value="fii">Fundo Imobiliário</option>
                            <option value="criptomoeda">Criptomoeda</option>
                            <option value="renda-fixa">Renda Fixa</option>
                            <option value="bdr">BDR</option>
                            <option value="ação-exterior">Ação no Exterior</option>
                        </Select>
                    </InputContainer>

                    <Button>
                        <h1>Adicionar</h1>
                    </Button>
                </BottomContainer>
            </Form>
        </Container>
    )
}

export default NewStockModal