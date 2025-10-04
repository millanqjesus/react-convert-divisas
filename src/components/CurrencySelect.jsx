
import React from "react";

export default function CurrencySelect({ label, options, value, onChange }) {
  return (
    <div className="flex flex-col w-full">
        <label className="text-sm font-medium text-gray-600 mb-1">{label}</label>
        <select
            value={value}
            onChange={onChange}
            className="w-full p-3 border border-sky-300 rounded-lg text-lg bg-white focus:ring-emerald-500 focus:border-emerald-500 transition duration-150 shadow-inner"
        >
            <option value="" disabled>Seleccione...</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
  );
}