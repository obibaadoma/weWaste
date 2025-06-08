import React from 'react';

// Make sure you have Material Icons loaded in your index.html
// or use @mui/icons-material if you prefer SVGs

function ProgressBar() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="py-6 text-sm font-semibold">
      {/* Retain original overall padding */}

      {/* Toggle Button - visible only on small screens (xs), uses menu icon */}
      <div className="sm:hidden flex justify-end items-center mb-2 px-4">
        {/* Aligned to the right */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-md text-blue-500 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-expanded={isExpanded}
          aria-controls="progress-steps-nav"
          aria-label={isExpanded ? "Close progress steps" : "Open progress steps"}
        >
          <span className="material-icons inline">{isExpanded ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Collapsible container for progress steps */}
      <nav
        id="progress-steps-nav"
        className={`
          ${
            isExpanded
              ? "flex flex-col items-start gap-y-3 px-4" // Mobile expanded: vertical list, left-aligned, with padding
              : "hidden" // Mobile collapsed: hidden
          }
          sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:items-center
          sm:gap-x-1 md:gap-x-2 lg:gap-x-4 sm:gap-y-4 sm:px-0 // Tablet+: horizontal, wrapped, justify-start, further adjusted gaps
        `}
      >
        {/* Postcode */}
        <span className="flex items-center gap-1 text-blue-600">
          <span className="material-icons inline">location_on</span>
          <span className="ml-1 sm:hidden md:inline">Postcode</span>
        </span>
        {/* Responsive spacer - hidden on xs, visible on sm+ */}
        <span className="border-b-2 border-blue-600 w-4 sm:w-2 md:w-4 lg:w-6 hidden sm:inline-block" />

        {/* Waste Type */}
        <span className="flex items-center gap-1 text-blue-600">
          <span className="material-icons inline">delete</span>
          <span className="ml-1 sm:hidden md:inline">Waste Type</span>
        </span>
        <span className="border-b-2 border-blue-600 w-4 sm:w-2 md:w-4 lg:w-6 hidden sm:inline-block" />

        {/* Select Skip */}
        <span className="flex items-center gap-1 text-blue-600">
          <span className="material-icons inline">local_shipping</span>
          <span className="ml-1 sm:hidden md:inline">Select Skip</span>
        </span>
        <span className="border-b-2 border-gray-700 w-4 sm:w-2 md:w-4 lg:w-6 hidden sm:inline-block" />

        {/* Permit Check */}
        <span className="flex items-center gap-1 text-gray-400">
          <span className="material-icons inline">shield</span>
          <span className="ml-1 sm:hidden md:inline">Permit Check</span>
        </span>
        <span className="border-b-2 border-gray-700 w-4 sm:w-2 md:w-4 lg:w-6 hidden sm:inline-block" />

        {/* Choose Date */}
        <span className="flex items-center gap-1 text-gray-400">
          <span className="material-icons inline">calendar_today</span>
          <span className="ml-1 sm:hidden md:inline">Choose Date</span>
        </span>
        <span className="border-b-2 border-gray-700 w-4 sm:w-2 md:w-4 lg:w-6 hidden sm:inline-block" />

        {/* Payment */}
        <span className="flex items-center gap-1 text-gray-400">
          <span className="material-icons inline">credit_card</span>
          <span className="ml-1 sm:hidden md:inline">Payment</span>
        </span>
      </nav>
    </div>
  );
}

export default ProgressBar;