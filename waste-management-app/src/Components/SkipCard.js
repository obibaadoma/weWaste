import React from 'react';
import PropTypes from 'prop-types';

function SkipCard({ skip, selected, onSelect }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onSelect(skip.id);
    }
  };
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
      {/* Selected Tick Icon */}
      {selected === skip.id && (
        <span className='absolute top-3 right-3 text-blue-500'>
          <span className='material-icons' style={{ fontSize: '24px' }}>
            check_circle
          </span>
        </span>
      )}
      {/* Image Section */}
      <div className='relative w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-lg flex-shrink-0 mr-0 md:mr-4 mb-4 md:mb-0'>
        <img
          src={skip.image || `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
          alt={skip.name}
          className='object-cover w-full h-full rounded-lg'
        />
        <span className='absolute top-2 left-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full font-bold shadow-md'>
          {/* Moved size badge to top-left to avoid clash with selection tick */}
          {skip.size}
          {' Yards'}
        </span>
      </div>

      {/* Details Section */}
      <div className='flex-grow text-center md:text-left'>
        <h2 className='text-lg md:text-xl font-bold text-white mb-1'>{skip.name}</h2>
        <p className='text-gray-400 text-sm mb-1'>14 day hire period</p>
        <span className='text-blue-400 font-bold text-md md:text-lg'>
          £
          {skip.price}
          {' '}
          <span className='text-gray-400 font-normal text-xs md:text-sm'>/ 14 day hire</span>
        </span>
      </div>

      {/* Button Section */}
      <div className='mt-4 md:mt-0 md:ml-4 flex-shrink-0 w-full md:w-auto'>
        <button
          type='button'
          className={`w-full md:w-auto px-4 py-2 rounded font-semibold transition ${
            selected === skip.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-blue-700 hover:text-white'
          }`}
          aria-label={`Select ${skip.name}`}
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
    image: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func.isRequired,
};

SkipCard.defaultProps = {
  selected: null,
};

export default SkipCard;