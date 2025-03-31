import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();


    async function SendAirdrop (){
        const amount = document.getElementById("publicKey").value
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000)
        alert("Airdroped")
    }
   
  return (
    <div>
        <input id='publicKey' type="text" placeholder='Amount' />
        <button onClick={SendAirdrop}>Request Airdrop</button>
    </div>
  )
}

export default Airdrop