
import React from "react";

export default function CurrencyInput({ label, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col w-full">
        <label className="text-sm font-medium text-gray-600 mb-1">{label}</label>
        <input
            type="number"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            min="0"
            className="w-full p-3 border border-sky-300 rounded-lg text-xl font-semibold text-gray-800 focus:ring-emerald-500 focus:border-emerald-500 transition duration-150 shadow-inner"
        />
    </div>
  );
}
