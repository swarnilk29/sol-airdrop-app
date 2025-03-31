import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletConnectButton,
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import Airdrop  from './Airdrop';
// import { clusterApiUrl } from '@solana/web3.js'; // beacause we hardcoded the endpoint

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

 
function App() {

  return (
    <ConnectionProvider endpoint={"your rpc link"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                    <div>
                      hii
                    </div>
                    <Airdrop></Airdrop>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default App
