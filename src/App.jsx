import React, { useState, useEffect } from 'react';
import { RefreshCw, ArrowRightLeft, Landmark } from 'lucide-react';
import Navbar from "./components/Navbar";
import CurrencyInput from "./components/CurrencyInput";
import CurrencySelect from "./components/CurrencySelect";
import SwapButton from "./components/SwapButton";


// COMPONENTE PRINCIPAL DE LA APLICACIÓN
function App() {
    // Inicializamos con valores por defecto para evitar estados vacíos en el display
    const [amount, setAmount] = useState(100);
    const [moeda, setMoeda] = useState("USD");
    const [moedaFinal, setMoedaFinal] = useState("EUR");
    const [conversionResult, setConversionResult] = useState(null); // Nuevo estado para el resultado
    const [isLoading, setIsLoading] = useState(false);
    
    // Tasa de cambio simulada (Debe ser reemplazada por una API real)
    const MOCK_RATE = 0.92; // 1 USD = 0.92 EUR

    const moedas = [
        { value: "USD", label: "Dólar Americano" },
        { value: "EUR", label: "Euro" },
        { value: "BRL", label: "Real Brasileiro" },
        { value: "JPY", label: "Iene Japonés" },
    ];

    // Función para el intercambio
    const handleSwap = () => {
        setMoeda(moedaFinal);
        setMoedaFinal(moeda);
    };

    // Función de cálculo simulado
    useEffect(() => {
        if (amount > 0 && moeda && moedaFinal) {
            setIsLoading(true);
            
            // Simulación de una llamada a API
            setTimeout(() => {
                let result = 0;
                // Lógica simple: si es USD a EUR, usa MOCK_RATE. Si es EUR a USD, usa 1/MOCK_RATE
                if (moeda === "USD" && moedaFinal === "EUR") {
                    result = amount * MOCK_RATE;
                } else if (moeda === "EUR" && moedaFinal === "USD") {
                    result = amount * (1 / MOCK_RATE);
                } else {
                    // Si no es USD/EUR, solo muestra el valor ingresado para la simulación
                    result = amount;
                }
                
                // Formateo del resultado
                const formatter = new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: moedaFinal || 'USD',
                  minimumFractionDigits: 2,
                });
                
                setConversionResult(formatter.format(result));
                setIsLoading(false);
            }, 500);
        } else {
            setConversionResult("0,00");
        }
    }, [amount, moeda, moedaFinal]);


    return (
        // Contenedor principal: Centrado vertical y horizontal, fondo suave
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            
            <main className="flex-1 flex flex-col items-center justify-center p-4">
                
                <div className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border-t-4 border-sky-600">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                        Calculadora de moeda
                    </h2>

                    {/* 1. SELECCIÓN DE MONEDAS Y BOTÓN DE INTERCAMBIO */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                        
                        {/* Moeda que tienes */}
                        <div className="w-full sm:w-5/12">
                            <CurrencySelect
                                label="Converter de"
                                options={moedas}
                                value={moeda}
                                onChange={(e) => setMoeda(e.target.value)}
                            />
                        </div>

                        {/* Botón de Intercambio (centrado y ajustado para mobile/desktop) */}
                        <div className="sm:mt-6 mt-2">
                            <SwapButton onClick={handleSwap} />
                        </div>

                        {/* Moeda que quieres */}
                        <div className="w-full sm:w-5/12">
                            <CurrencySelect
                                label="Converter para"
                                options={moedas}
                                value={moedaFinal}
                                onChange={(e) => setMoedaFinal(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    {/* 2. INPUT DE MONTO */}
                    <div className="mb-8 p-4 bg-sky-50 rounded-xl border border-sky-200">
                        <CurrencyInput
                            label={`Eu monto ${moeda}`}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Insira um valor"
                        />
                    </div>

                    {/* 3. RESULTADO DE LA CONVERSIÓN */}
                    <div className="pt-6 border-t border-gray-100">
                        <p className="text-base text-gray-600 font-medium mb-2">Resultado da conversão:</p>
                        <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl shadow-lg">
                            <span className="text-2xl font-bold text-gray-700">
                                {moedaFinal}
                            </span>
                            <p className="text-4xl font-extrabold text-emerald-800">
                                {isLoading ? (
                                    <span className="text-sky-600 flex items-center gap-2">
                                        <RefreshCw size={24} className="animate-spin" /> Carregando...
                                    </span>
                                ) : (
                                    conversionResult
                                )}
                            </p>
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    );
}

export default App;
