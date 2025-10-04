import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import { RefreshCw, ArrowRightLeft, Landmark } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full bg-sky-700 shadow-md">
        <div className="w-full px-4 sm:px-8 p-4 flex justify-center items-center">
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
                <Landmark size={24} /> Conversor Financeiro
            </h1>
        </div>
    </header>
  );
}
