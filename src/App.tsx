import React from 'react'

import Routes from './routes'

import { WalletProvider } from './hooks/wallet'

import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <WalletProvider>
      <Routes/>
      <GlobalStyle/>
    </WalletProvider>
  );
}

export default App;