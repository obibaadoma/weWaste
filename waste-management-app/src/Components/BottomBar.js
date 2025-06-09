import React from 'react';
import PropTypes from 'prop-types';

function BottomBar({ selectedSkip, onBack, onContinue }) {
  if (!selectedSkip) return null;

  const infoText = 'Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.';

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
          {/* Left side - Skip Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col space-y-2 sm:space-y-1">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-white truncate">
                  {selectedSkip.name}
                </h3>
                <div className="flex items-center space-x-4">
                  <span className="text-blue-400 font-semibold text-lg">
                    £{selectedSkip.price_before_vat?.toFixed(2) || '0.00'}
                  </span>
                  <span className="text-sm text-gray-300 whitespace-nowrap">
                    {selectedSkip.hire_period_days || 14} day hire
                  </span>
                </div>
              </div>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-1">
                {selectedSkip.allowed_on_road && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Road Access
                  </span>
                )}
                {selectedSkip.allows_heavy_waste && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Heavy Waste Allowed
                  </span>
                )}
              </div>
            </div>

            {/* Transport Cost */}
            {selectedSkip.transport_cost > 0 && (
              <div className="mt-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Transport Cost:</span>
                  <span className="font-medium">
                    £{selectedSkip.transport_cost.toFixed(2)}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right side - Buttons */}
          <div className="flex-shrink-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-2.5 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              onClick={onBack}
            >
              Back
            </button>
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 flex items-center justify-center space-x-1"
              onClick={onContinue}
            >
              <span>Continue</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Info Text */}
        <div className="mt-3 pt-3 border-t border-gray-800">
          <p className="text-xs text-gray-400 text-center">
            {infoText}
          </p>
        </div>
      </div>
    </div>
  );
}

BottomBar.propTypes = {
  selectedSkip: PropTypes.shape({
    name: PropTypes.string,
    price_before_vat: PropTypes.number,
    hire_period_days: PropTypes.number,
    allowed_on_road: PropTypes.bool,
    allows_heavy_waste: PropTypes.bool,
    transport_cost: PropTypes.number,
  }),
  onBack: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
};

BottomBar.defaultProps = {
  selectedSkip: null,
};

export default BottomBar;