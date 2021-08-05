import styled from 'styled-components'

interface ChartContainerProps {
    isBigList?: boolean; // list with more than 20 elements
}

interface LegendProps {
    lastOfTheColumn?: boolean; // Ex.: 9, 19, ...
}

interface MarkerProps {
    color: string
}
  
export const ChartContainer = styled.div<ChartContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: ${props => props.isBigList ? -400 : -80}px;

    @media (max-width: 820px) {
        flex-direction: column;
        margin-left: 0;
    }
`
  
export const LegendsContainer = styled.div`
    max-height: 370px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (max-width: 820px) {
        max-height: 100%;
    }
`

export const Legend = styled.div<LegendProps>`
    display: flex;
    align-items: center;
    margin-left: 12px;

    h1 {
        margin-left: 8px;
        font-size: 16px;

        & + h1 {
            font-weight: 500;
        }
    }

    @media (min-width: 820px) {
        & + div {
            margin-top: ${props => props.lastOfTheColumn ? 0 : 16}px;
        }
    }

    @media (max-width: 820px) {
        & + div {
            margin-top: 16px;
        }
    }
`
  
export const Marker = styled.div<MarkerProps>`
    width: 6px;
    height: 20px;
    border-radius: 10px;
    background: ${props => props.color};
`