import styled, { css } from 'styled-components';

interface ContainerProps {
    isErrored: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 16px;
        margin-bottom: 4px;
    }

    @media(max-width: 410px) {
        &:nth-child(2) {
            margin-top: 16px;
        }
    }
`

export const InputContainer = styled.div<ContainerProps>`
    border-radius: 10px;
    border: 1px solid #000;
    padding: 16px 12px 16px 36px;
    width: 10rem;
    height: 36px;
    display: flex;
    align-items: center;
    position: relative;

    ${props =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `
    }

    input {
        width: 100%;
        background: transparent;
        border: 0;
        color: #232129;

        &::placeholder {
            color: #232129;
        }  

        &[type=number]::-webkit-inner-spin-button, 
        &[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        }
    }

    svg {
        position: absolute;
        left: 8px;
    }

    @media(max-width: 410px) {
        width: 14rem;
    }
`;
