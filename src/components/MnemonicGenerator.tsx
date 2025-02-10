import { useState } from "react";
import { generateMnemonic } from "bip39";
import { SolanaWallet } from "./SolanaWallet";
import  EthWallet from "./EthereumWallet";
import Button from "./Button";

export default function MnemonicGenerator() {
  const [mnemonic, setMnemonic] = useState("");

  function mnemonicSet() {
    const mn = generateMnemonic(); // No need for async/await
    setMnemonic(mn); // Store as string
  }

  return (
    <div className="p-6 bg-black text-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Generate Your Seed Phrase!</h1>
      <Button onClick={mnemonicSet} size="lg" placeholder="Generate Mnemonic" className="mb-4" />

      {mnemonic && (
        <div className="p-3 border border-gray-600 rounded-lg mb-6">
          <h3 className="text-lg font-semibold">Your Mnemonic:</h3>
          <p className="text-green-400">{mnemonic}</p>
        </div>
      )}

      {mnemonic && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SolanaWallet mnemonic={mnemonic} />
          <EthWallet mnemonic={mnemonic} />
        </div>
      )}
    </div>
  );
}
