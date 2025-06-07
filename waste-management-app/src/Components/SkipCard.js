import React from "react";

function SkipCard({ skip, selected, onSelect }) {
  return (
    <div
      className={`relative bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center border-2 transition-all duration-200 ${
        selected === skip.id
          ? "border-blue-500 ring-2 ring-blue-400"
          : "border-transparent"
      }`}
      onClick={() => onSelect(skip.id)}
      tabIndex={0}
      role="button"
    >
      <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
        <img
          src={skip.image || "https://via.placeholder.com/200x120?text=Skip"}
          alt={skip.name}
          className="object-contain h-full"
        />
        <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow">
          {skip.size} Yards
        </span>
      </div>
      <h2 className="text-xl font-bold text-white mb-1">{skip.name}</h2>
      <p className="text-gray-400 text-sm mb-2">14 day hire period</p>
      <span className="text-blue-400 font-bold text-lg mb-4">
        £{skip.price}{" "}
        <span className="text-gray-400 font-normal text-sm">14 day hire</span>
      </span>
      <button
        className={`mt-auto px-4 py-2 rounded font-semibold transition ${
          selected === skip.id
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-300 hover:bg-blue-700 hover:text-white"
        }`}
      >
        {selected === skip.id ? "Selected" : "Choose"}
      </button>
    </div>
  );
}

export default SkipCard;