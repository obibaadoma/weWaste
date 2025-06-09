import React from 'react';
import PropTypes from 'prop-types';

function SkipCard({ skip, selected, onSelect }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onSelect(skip.id);
    }
  };

  // Calculate total price including VAT
  const priceBeforeVat = parseFloat(skip.price_before_vat || 0);
  const vatAmount = priceBeforeVat * (parseInt(skip.vat || 20, 10) / 100);
  const totalPrice = (priceBeforeVat + vatAmount).toFixed(2);
  const hirePeriod = skip.hire_period_days || 14;

  return (
    <div
      className={`relative bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col md:flex-row items-center w-full border-2 transform hover:scale-95 transition-all duration-200 ${
        selected === skip.id
          ? 'border-blue-500 ring-2 ring-blue-400'
          : 'border-transparent hover:border-gray-600'
      }`}
      onClick={() => onSelect(skip.id)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role='button'
      aria-pressed={selected === skip.id}
    >
      {selected === skip.id && (
        <span className='absolute top-3 right-3 text-blue-500'>
          <span className='material-icons' style={{ fontSize: '24px' }}>
            check_circle
          </span>
        </span>
      )}
      <div className='relative w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-lg flex-shrink-0 mr-0 md:mr-4 mb-4 md:mb-0'>
        <img
          src={skip.image || `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
          alt={`${skip.size} yard skip`}
          className='object-cover w-full h-full rounded-lg'
        />
        <span className='absolute top-2 left-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full font-bold shadow-md'>
          {skip.size}
          {' '}
          Yard
          {skip.size > 1 ? 's' : ''}
        </span>
      </div>
      <div className='flex-grow text-center md:text-left'>
        <h2 className='text-lg md:text-xl font-bold text-white mb-1'>
          {skip.size}
          {' '}
          Yard Skip
        </h2>
        <div className='text-gray-400 text-sm mb-2 space-y-1'>
          <p>
            {hirePeriod}
            {' '}
            day hire period
          </p>
          {!skip.allowed_on_road && (
            <p className='text-yellow-400'>Not suitable for road placement</p>
          )}
          {!skip.allows_heavy_waste && (
            <p className='text-yellow-400'>No heavy waste allowed</p>
          )}
        </div>
        <div className='text-blue-400'>
          <div className='font-bold text-md md:text-lg'>
            £
            {totalPrice}
            {' '}
            inc. VAT
          </div>
          <div className='text-xs text-gray-400'>
            (
            {priceBeforeVat.toFixed(2)}
            {' '}
            + £
            {vatAmount.toFixed(2)}
            {' '}
            VAT)
          </div>
        </div>
      </div>
      <div className='mt-4 md:mt-0 md:ml-4 flex-shrink-0 w-full md:w-auto'>
        <button
          type='button'
          className={`w-full md:w-auto px-4 py-2 rounded font-semibold transition ${
            selected === skip.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-blue-700 hover:text-white'
          }`}
          aria-label={`Select ${skip.size} yard skip`}
        >
          {selected === skip.id ? 'Selected' : 'Select'}
        </button>
      </div>
    </div>
  );
}

SkipCard.propTypes = {
  skip: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    price_before_vat: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    vat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hire_period_days: PropTypes.number,
    allowed_on_road: PropTypes.bool,
    allows_heavy_waste: PropTypes.bool,
    image: PropTypes.string,
  }).isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func.isRequired,
};

SkipCard.defaultProps = {
  selected: null,
};

export default SkipCard;