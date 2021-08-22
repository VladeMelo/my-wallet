import React, { createContext, useCallback, useState, useContext } from 'react';

type stock = 'ações' | 'fiis' | 'criptomoedas' | 'açõesExterior' | 'bdrs'

interface InvestimentProps {
    código: string;
    quantidade: number;
    type: stock;
}

interface WalletState {
    ações: InvestimentProps[];
    criptomoedas: InvestimentProps[];
    fiis: InvestimentProps[];
    bdrs: InvestimentProps[];
    açõesExterior: InvestimentProps[];
    rendaFixa: number;
}

interface WalletContextData {
    wallet: WalletState;
    addToWallet(investiment: InvestimentProps | number): void;
    removeFromWallet(investiment: InvestimentProps | number): void;
}

const WalletContext = createContext<WalletContextData>(
    {} as WalletContextData /* hack que significa o msm que null */,
);

export const WalletProvider: React.FC = ({ children }) => {
    const [wallet, setWallet] = useState<WalletState>(() => {
        const ações = localStorage.getItem('@MyWallet:ações');
        const criptomoedas = localStorage.getItem('@MyWallet:criptomoedas');
        const fiis = localStorage.getItem('@MyWallet:fiis');
        const bdrs = localStorage.getItem('@MyWallet:bdrs');
        const açõesExterior = localStorage.getItem('@MyWallet:açõesExterior');
        const rendaFixa = localStorage.getItem('@MyWallet:rendaFixa');

        return {
            ações: ações ? JSON.parse(ações) : [],
            criptomoedas: criptomoedas ? JSON.parse(criptomoedas) : [],
            fiis: fiis ? JSON.parse(fiis) : [],
            bdrs: bdrs ? JSON.parse(bdrs) : [],
            açõesExterior: açõesExterior ? JSON.parse(açõesExterior) : [],
            rendaFixa: rendaFixa ? JSON.parse(rendaFixa) : 0,
        } as WalletState;
    });

    const addToWallet = (investiment: InvestimentProps | number) => {
        console.log(investiment)

        if (typeof investiment === 'number') {
            console.log(wallet.rendaFixa)
            
            let walletCopy = {...wallet}
            walletCopy.rendaFixa += investiment

            setWallet(walletCopy)

            localStorage.setItem(`@MyWallet:rendaFixa`, JSON.stringify(walletCopy.rendaFixa))
        } else {
            let walletCopy = {...wallet}
            walletCopy[investiment.type].push(investiment)

            setWallet(walletCopy)

            localStorage.setItem(`@MyWallet:${investiment.type}`, JSON.stringify(walletCopy[investiment.type]))
        }
    }

    const removeFromWallet = useCallback((investiment: InvestimentProps | number) => {
        if (typeof investiment === 'number') {
            if (wallet.rendaFixa < investiment) return
            const newRendaFixa = wallet.rendaFixa - investiment

            setWallet(currState => ({
                ...currState,
                rendaFixa: newRendaFixa
            }))

            localStorage.setItem(`@MyWallet:rendaFixa`, JSON.stringify(newRendaFixa));
        } else {
            const walletCopy = {...wallet}
            walletCopy[investiment.type].filter(elem => elem.código !== investiment.código)

            setWallet(walletCopy)

            localStorage.setItem(`@MyWallet:${investiment.type}`, JSON.stringify(walletCopy[investiment.type]));
        }
    }, [wallet])

    return (
        <WalletContext.Provider
            value={{
                wallet,
                addToWallet,
                removeFromWallet
            }} /* inicializa o WalletProvider e com esse valor */
        >
            {children}
        </WalletContext.Provider>
    );
};

export function useWallet(): WalletContextData {
    const context = useContext(WalletContext);

    if (!context) {
        // se o WalletContext ñ foi criado, ou seja, caso não haja .Provider ao redor
        throw new Error('The context must be used within an .Provider');
    }

    return context;
}
