import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar";
import CurrencyInput from "./components/CurrencyInput";
import CurrencySelect from "./components/CurrencySelect";
import SwapButton from "./components/SwapButton";
import './App.css'

function App() {
  const [amount, setAmount] = useState("");

  const [moeda, setMoeda] = useState("");

  const [moedaFinal, setMoedaFinal] = useState("");

  const moedas = [
    { value: "USD", label: "Dólar Americano" },
    { value: "EUR", label: "Euro" },
    { value: "BRL", label: "Real Brasileiro" },
    { value: "JPY", label: "Iene Japonês" },
  ];

  // Función para intercambiar valores
  const handleSwap = () => {
    const temp = moeda;
    setMoeda(moedaFinal);
    setMoedaFinal(temp);
  };

  return (
    <>
      <div className="w-full flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center">

          <div className="flex flex-row gap-8">
            <div className="flex flex-col items-center justify-center bg-slate-50 gap-2 py-8">
              <CurrencySelect
                label="Convertir De"
                options={moedas}
                value={moeda}
                onChange={(e) => setMoeda(e.target.value)}
                />
            </div>

            {/* Botón de intercambio */}
            <SwapButton onClick={handleSwap} />

            <div className="flex flex-col items-center justify-center bg-slate-50 gap-2 py-8">
              <CurrencySelect
                label="Convertir A"
                options={moedas}
                value={moedaFinal}
                onChange={(e) => setMoedaFinal(e.target.value)}
                />
            </div>
          </div>

          <div className="flex flex-row items-center gap-8 bg-slate-50 p-6 rounded-lg shadow">
            {/* Input */}
            <div className="flex flex-col gap-2">
              <CurrencyInput
                label={"Monto en " + moeda}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Ingrese un valor"
              />
            </div>

            {/* Resultado */}
            <div className="flex flex-col gap-2">
              <p className="text-slate-700 text-lg">
                Valor ingresado:{" "}
                <span className="font-semibold text-blue-700">${amount}</span>
              </p>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}

export default App
