import { Toggle } from "./Toggle";

export default function Header() {
    return (
        <div className="text-3xl font-extrabold flex justify-between items-center px-4 py-6">
            <div>VaultX</div>
            <div><Toggle></Toggle></div>
        </div>
    )
}