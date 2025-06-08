import React from "react";

// Make sure you have Material Icons loaded in your index.html or use @mui/icons-material if you prefer SVGs

function ProgressBar() {
  return (
    <nav className="flex justify-center items-center gap-6 py-6 text-sm font-semibold">
      {/* Postcode */}
      <span className="flex items-center gap-1 text-blue-600">
        <span className="material-icons">location_on</span> Postcode
      </span>
      <span className="border-b-2 border-blue-600 w-8"></span>
      {/* Waste Type */}
      <span className="flex items-center gap-1 text-blue-600">
        <span className="material-icons">delete</span> Waste Type
      </span>
      <span className="border-b-2 border-blue-600 w-8"></span>
      {/* Select Skip */}
      <span className="flex items-center gap-1 text-blue-600">
        <span className="material-icons">local_shipping</span> Select Skip
      </span>
      <span className="border-b-2 border-gray-700 w-8"></span>
      {/* Permit Check */}
      <span className="flex items-center gap-1 text-gray-400">
        <span className="material-icons">shield</span> Permit Check
      </span>
      <span className="border-b-2 border-gray-700 w-8"></span>
      {/* Choose Date */}
      <span className="flex items-center gap-1 text-gray-400">
        <span className="material-icons">calendar_today</span> Choose Date
      </span>
      <span className="border-b-2 border-gray-700 w-8"></span>
      {/* Payment */}
      <span className="flex items-center gap-1 text-gray-400">
        <span className="material-icons">credit_card</span> Payment
      </span>
    </nav>
  );
}

export default ProgressBar;