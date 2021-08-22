import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.6);

    form {
        width: 25rem;
        border-radius: 16px;
        padding: 36px 16px 24px;
        background: #fff;
        
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        
        box-shadow: 2px 2px 16px 8px rgba(0, 0, 0, 0.4);
        position: relative;

        > svg {
            position: absolute;
            right: 10px;
            top: 10px;
            cursor: pointer;
        }
        
        @media(max-width: 410px) {
            flex-direction: column;
            align-items: center;
            padding: 24px 4px;
            margin: 16px;
        }
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 16px;
        margin-bottom: 4px;
    }
`

export const Select = styled.select`
    width: 10rem;
    height: 36px;

    border: 1px solid #000;
    border-radius: 8px;

    position: relative;
    cursor: pointer;

    @media(max-width: 410px) {        
        width: 14rem;
    }
`

export const Input = styled.div`
    width: 10rem;
    height: 36px;

    border: 1px solid #000;
    border-radius: 8px;

    @media(max-width: 410px) {        
        width: 14rem;
    }
`

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin: 16px 0 auto 0;

    @media(max-width: 410px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Button = styled.button`
    width: 10rem;
    height: 36px;
    background: #000;
    border: none;
    border-radius: 8px;

    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    h1 {
        font-size: 16px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 500;
    }

    @media(max-width: 410px) {
        align-self: center;
        margin-top: 24px;
        width: 14rem;
    }
`