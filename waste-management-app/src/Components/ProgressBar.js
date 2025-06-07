import React from "react";

function ProgressBar() {
  return (
    <nav className="flex justify-center gap-6 py-6 text-blue-400 text-sm font-semibold">
      <span className="flex items-center gap-1">
        <span className="material-icons">location_on</span> Postcode
      </span>
      <span className="border-b-2 border-blue-400 w-8"></span>
      <span className="flex items-center gap-1">
        <span className="material-icons">delete</span> Waste Type
      </span>
      <span className="border-b-2 border-blue-400 w-8"></span>
      <span className="flex items-center gap-1 text-blue-300">
        <span className="material-icons">check_box</span> Select Skip
      </span>
      <span className="border-b-2 border-gray-700 w-8"></span>
      <span className="flex items-center gap-1 text-gray-500">
        <span className="material-icons">event</span> Permit Check
      </span>
      <span className="border-b-2 border-gray-700 w-8"></span>
      <span className="flex items-center gap-1 text-gray-500">
        <span className="material-icons">calendar_today</span> Choose Date
      </span>
      <span className="border-b-2 border-gray-700 w-8"></span>
      <span className="flex items-center gap-1 text-gray-500">
        <span className="material-icons">payment</span> Payment
      </span>
    </nav>
  );
}

export default ProgressBar;