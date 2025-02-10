import { useState } from "react";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import Button from "./Button";

export function SolanaWallet({ mnemonic }: { mnemonic: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [solanaKeys, setSolanaKeys] = useState<{ publicKey: string; privateKey: string }[]>([]);

  function addSolanaWallet() {
    const seed = mnemonicToSeedSync(mnemonic);
    const path = `m/44'/501'/${currentIndex}'/0'`; // Solana derivation path
    const derivedSeed = derivePath(path, seed.toString("hex")).key;

    const keypair = nacl.sign.keyPair.fromSeed(derivedSeed);
    const solanaKeypair = Keypair.fromSecretKey(keypair.secretKey);

    const publicKey = solanaKeypair.publicKey.toBase58();
    const privateKey = Buffer.from(solanaKeypair.secretKey).toString("hex");

    setCurrentIndex((prev) => prev + 1);
    setSolanaKeys((prev) => [...prev, { publicKey, privateKey }]);
  }

  return (
    <div className="p-4 bg-black text-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Solana Wallet</h2>
      <Button onClick={addSolanaWallet} size="md" placeholder="Add Solana Wallet" className="mb-4" />

      {solanaKeys.map((key, index) => (
        <div key={index} className="p-3 border border-gray-600 rounded-lg mb-2">
          <p><strong>Public Key:</strong> {key.publicKey}</p>
          <p><strong>Private Key:</strong> {key.privateKey}</p>
        </div>
      ))}
    </div>
  );
}
