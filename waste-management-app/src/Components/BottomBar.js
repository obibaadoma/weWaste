import React from "react";

function BottomBar({ selectedSkip, onBack, onContinue }) {
  if (!selectedSkip) return null;
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between px-4 py-3 z-50">
      <div className="flex items-center gap-2 text-white">
        <span className="font-bold">{selectedSkip.name}</span>
        <span className="text-blue-400 font-bold text-lg">
          £{selectedSkip.price}
        </span>
        <span className="text-gray-400 text-sm">14 day hire</span>
      </div>
      <div className="flex gap-2 mt-2 md:mt-0">
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default BottomBar;