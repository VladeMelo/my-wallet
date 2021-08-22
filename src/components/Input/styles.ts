import styled, { css } from 'styled-components';

interface InputContainerProps {
    isErrored: boolean;
    isDisabled?: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 16px;
        margin-bottom: 4px;
    }

    @media(max-width: 410px) {
        &:nth-child(3) {
            margin-top: 16px;
        }
    }
`

export const InputContainer = styled.div<InputContainerProps>`
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

    ${props =>
        props.isDisabled &&
        css`
            background: #e7e7e7;
            border: 1px solid #6a6a6a;
        `
    }

    input {
        width: 100%;
        background: transparent;
        border: 0;
        color: #232129;

        &::placeholder {
            color: #6a6a6a;
            text-transform: none;
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

        ${props =>
            props.isDisabled &&
            css`
                color: #6a6a6a;
            `
        }
    }

    @media(max-width: 410px) {
        width: 14rem;
    }
`;
