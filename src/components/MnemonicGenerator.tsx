import { useState } from "react";
import { generateMnemonic } from "bip39";

export default function MnemonicGenerator() {
  const [mnemonic, setMnemonic] = useState<string[]>([]);

  function mnemonicSet() {
    const mn = generateMnemonic(); // No need for async/await
    setMnemonic(mn.split(" ")); // Convert to array
  }

  return (
    <div>
      <div>Generate Your Seed Phrase!</div>
      <button onClick={mnemonicSet}>Generate</button>
      <div>
        <MnemonicTable mnemonics={mnemonic} />
      </div>
    </div>
  );
}

export function MnemonicTable({ mnemonics }: { mnemonics: string[] }) {
  return (
    <div className="flex justify-center">
      <table className="border border-gray-300 rounded-lg shadow-lg">
        <tbody>
          {Array.from({ length: 3 }).map((_, row) => (
            <tr key={row} className="border border-gray-300">
              {Array.from({ length: 4 }).map((_, col) => {
                const index = row * 4 + col;
                return (
                  <td
                    key={col}
                    className="p-3 border border-gray-300 text-center font-semibold"
                  >
                    {mnemonics[index] || ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
