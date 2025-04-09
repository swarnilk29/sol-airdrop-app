// import { useConnection, useWallet } from '@solana/wallet-adapter-react'
// import React from 'react'

// function Airdrop() {
//     const wallet = useWallet();
//     const { connection } = useConnection();


//     async function SendAirdrop (){
//         const amount = document.getElementById("publicKey").value
//         await connection.requestAirdrop(wallet.publicKey, amount * 1000000000)
//         alert("Airdroped")
//     }
   
//   return (
//     <div>
//         <input id='publicKey' type="text" placeholder='Amount' />
//         <button onClick={SendAirdrop}>Request Airdrop</button>
//     </div>
//   )
// }

// export default Airdrop



import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function reqAirdrop() {
        let amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }

    return <div>
        <br/><br/>
        <input id="amount" type="text" placeholder="Amount" />
        <button onClick={reqAirdrop}>Request Airdrop</button>
    </div>
}