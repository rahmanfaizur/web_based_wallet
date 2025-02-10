import Button from "./components/Button";
import Header from "./components/Header";
import MnemonicGenerator from "./components/MnemonicGenerator";

export default function App() {
  return (
    <div className="bg-black w-screen h-screen text-white">
      <Header></Header>
      <MnemonicGenerator></MnemonicGenerator>
    </div>
  )
}