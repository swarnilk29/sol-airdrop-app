import { useState } from 'react';

export default function AirdropFrontend() {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  // Mock wallet connection
  function connectWallet() {
    setIsConnected(true);
    // Generate a mock Solana address
    setWalletAddress('5xMT56UBKLJLwqarMG9yyQFUyWi22XWMbPxvkWQ4rYxN');
  }

  // Mock airdrop request
  async function reqAirdrop() {
    if (!isConnected) {
      setMessage({ text: 'Please connect your wallet first', type: 'error' });
      return;
    }

    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      setMessage({ text: 'Please enter a valid amount', type: 'error' });
      return;
    }

    setLoading(true);
    setMessage({ text: '', type: '' });

    // Simulate network request
    try {
      // Simulating network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 20% chance of failure to simulate network errors
      if (Math.random() < 0.2) {
        throw new Error('Network error');
      }
      
      setMessage({ 
        text: `Successfully airdropped ${amount} SOL to ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`, 
        type: 'success' 
      });
    } catch (error) {
      setMessage({ 
        text: `Airdrop failed: ${error.message}`, 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Solana Airdrop</h2>
      
      <div className="mb-6">
        {!isConnected ? (
          <div className="flex flex-col">
            <div className="p-4 bg-yellow-800 bg-opacity-30 rounded mb-4 text-yellow-200 text-sm">
              Please connect your wallet to request an airdrop
            </div>
            <button 
              onClick={connectWallet}
              className="py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded font-medium mb-4"
            >
              Connect Wallet
            </button>
          </div>
        ) : (
          <div className="p-4 bg-gray-700 rounded mb-4">
            <p className="text-sm text-gray-300">Connected Wallet</p>
            <p className="font-mono text-xs mt-1 break-all">
              {walletAddress}
            </p>
          </div>
        )}
      </div>
      
      <div className="flex flex-col space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-2">
            SOL Amount
          </label>
          <input
            id="amount"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter SOL amount"
            className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          />
        </div>
        
        <button
          onClick={reqAirdrop}
          disabled={loading || !isConnected}
          className={`w-full py-3 px-4 rounded font-medium transition-colors ${
            loading || !isConnected
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Request Airdrop"
          )}
        </button>
      </div>
      
      {message.text && (
        <div
          className={`mt-4 p-4 rounded ${
            message.type === 'error'
              ? 'bg-red-900 bg-opacity-30 text-red-200'
              : 'bg-green-900 bg-opacity-30 text-green-200'
          }`}
        >
          {message.text}
        </div>
      )}
      
      <div className="mt-6 text-xs text-gray-400 text-center">
        <p>This is a mock interface. In a real implementation, you would integrate with Solana libraries.</p>
        <p className="mt-1">Only available on Solana devnet and testnet</p>
      </div>
    </div>
  );
}