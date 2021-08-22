import styled from 'styled-components'

interface ButtonProps {
    isBigList: boolean;
}

interface SelectProps {
    isBigList: boolean;
}

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
`

export const CenterContainer = styled.div`
    position: relative;
`

export const FloatContainer = styled.div`
    position: absolute;
    left: -60px;
    top: 0;
    z-index: 1;

    display: flex;
    align-items: flex-start;

    @media (max-width: 820px) {
        left: 20px;
    }
`

export const Button = styled.div<ButtonProps>`
    width: 36px;
    height: 36px;
    border: 1px solid #000;
    border-radius: 8px;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.4);

    svg {
        width: 20px;
    }
`

export const Select = styled.select<SelectProps>`
    margin-left: 120px;

    cursor: pointer;
    border: none;
    font-weight: 500;
    font-family: 'Roboto Slab', serif;
    background: transparent;

    option {
        font-weight: 500;
        font-family: 'Roboto Slab', serif;
    }
`