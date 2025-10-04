
import { ArrowRightLeft } from 'lucide-react';

export default function SwapButton({ onClick }) {
  return (
    <button
        onClick={onClick}
        className="p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg transition duration-200 transform hover:scale-110 active:scale-95"
        aria-label="Intercambiar Monedas"
        title="Intercambiar"
    >
        <ArrowRightLeft size={20} />
    </button>
  );
}

