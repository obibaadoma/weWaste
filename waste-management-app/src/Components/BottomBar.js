import React from "react";

function BottomBar({ selectedSkip, onBack, onContinue }) {
  if (!selectedSkip) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-700 px-4 py-3 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Info and price */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 text-white">
          <span className="font-bold">{selectedSkip.name}</span>
          <span className="text-blue-400 font-bold text-lg md:ml-2">
            £{selectedSkip.price}
          </span>
          <span className="text-gray-400 text-sm md:ml-2">
            {selectedSkip.hire_period_days || 14} day hire
          </span>
        </div>
        {/* Buttons */}
        <div className="flex gap-2 w-full md:w-auto justify-end">
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            onClick={onBack}
          >
            Back
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center gap-1"
            onClick={onContinue}
          >
            Continue <span className="material-icons text-base">arrow_forward</span>
          </button>
        </div>
      </div>
      {/* Info text */}
      <div className="text-gray-400 text-xs text-center mt-2">
        Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
      </div>
    </div>
  );
}

export default BottomBar;