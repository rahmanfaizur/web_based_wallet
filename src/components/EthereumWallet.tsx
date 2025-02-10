import { useState } from "react";
import { mnemonicToSeedSync } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";
import Button from "./Button";

export default function EthWallet({ mnemonic }: { mnemonic: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ethAddresses, setEthAddresses] = useState<{ address: string; privateKey: string }[]>([]);

  async function addEthWallet() {
    const seed = await mnemonicToSeedSync(mnemonic);
    const derivationPath = `m/44'/60'/${currentIndex}'/0'`; // Ethereum derivation path
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);

    const privateKey = child.privateKey;
    const wallet = new Wallet(privateKey);

    setCurrentIndex((prev) => prev + 1);
    setEthAddresses((prev) => [...prev, { address: wallet.address, privateKey }]);
  }

  return (
    <div className="p-4 bg-black text-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Ethereum Wallet</h2>
      <Button onClick={addEthWallet} size="md" placeholder="Add ETH Wallet" className="mb-4" />

      {ethAddresses.map((eth, index) => (
        <div key={index} className="p-3 border border-gray-600 rounded-lg mb-2">
          <p><strong>Address:</strong> {eth.address}</p>
          <p><strong>Private Key:</strong> {eth.privateKey}</p>
        </div>
      ))}
    </div>
  );
}
