import { useState } from "react";
import { mnemonicToSeedSync } from "bip39"; // Use the sync function
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

export function SolanaWallet({ mnemonic }: { mnemonic: string }) {
  console.log("Received mnemonic:", mnemonic);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [keys, setKeys] = useState<{ publicKey: string; privateKey: string }[]>([]);

  function addWallet() {
    const seed = mnemonicToSeedSync(mnemonic); // Convert mnemonic to seed
    const path = `m/44'/501'/${currentIndex}'/0'`; // Solana derivation path
    const derivedSeed = derivePath(path, seed.toString("hex")).key;

    // Generate Keypair
    const keypair = nacl.sign.keyPair.fromSeed(derivedSeed);
    const solanaKeypair = Keypair.fromSecretKey(keypair.secretKey);

    // Extract public & private keys
    const publicKey = solanaKeypair.publicKey.toBase58();
    const privateKey = Buffer.from(solanaKeypair.secretKey).toString("hex"); // Convert to hex

    // Update state
    setCurrentIndex((prev) => prev + 1);
    setKeys((prev) => [...prev, { publicKey, privateKey }]);
  }

  return (
    <div>
      <button onClick={addWallet}>Add Wallet</button>
      {keys.map((key, index) => (
        <div key={index} className="p-3 border border-gray-300 rounded-lg">
          <p><strong>Public Key:</strong> {key.publicKey}</p>
          <p><strong>Private Key:</strong> {key.privateKey}</p>
        </div>
      ))}
    </div>
  );
}
