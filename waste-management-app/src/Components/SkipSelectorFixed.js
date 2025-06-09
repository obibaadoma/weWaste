import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import SkipCard from './SkipCard';
import BottomBar from './BottomBar';

const API_URL = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

function SkipSelector() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  // Filter state
  const [filterMode, setFilterMode] = useState('all'); // 'all' or 'custom'
  const [formSizeMin, setFormSizeMin] = useState('');
  const [formSizeMax, setFormSizeMax] = useState('');
  const [formPriceMin, setFormPriceMin] = useState('');
  const [formPriceMax, setFormPriceMax] = useState('');
  const [appliedFilter, setAppliedFilter] = useState({ mode: 'all' });

  // Update filter when filter mode changes
  useEffect(() => {
    if (filterMode === 'all') {
      setAppliedFilter({ mode: 'all' });
    } else {
      setAppliedFilter({
        mode: 'custom',
        sizeMin: formSizeMin,
        sizeMax: formSizeMax,
        priceMin: formPriceMin,
        priceMax: formPriceMax,
      });
    }
  }, [filterMode, formSizeMin, formSizeMax, formPriceMin, formPriceMax]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setSkips(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Get min/max for size and price from skips
  const sizeValues = skips.map(s => Number(s.size)).filter(Boolean);
  const priceValues = skips.map(s => Number(s.price_before_vat)).filter(Boolean);
  const minSize = sizeValues.length ? Math.min(...sizeValues) : 0;
  const maxSize = sizeValues.length ? Math.max(...sizeValues) : 100;
  const minPrice = priceValues.length ? Math.min(...priceValues) : 0;
  const maxPrice = priceValues.length ? Math.max(...priceValues) : 1000;

  // Set default form values on skips load
  useEffect(() => {
    setFormSizeMin(minSize);
    setFormSizeMax(maxSize);
    setFormPriceMin(minPrice);
    setFormPriceMax(maxPrice);
  }, [minSize, maxSize, minPrice, maxPrice]);

  if (loading) {
    return <div className='text-center py-8 text-white'>Loading skips...</div>;
  }

  if (!skips.length) {
    return <div className='text-center py-8 text-red-400'>No skips available.</div>;
  }

  const selectedSkip = skips.find((s) => s.id === selected);

  // Toggle selection logic
  const handleSelect = (id) => {
    setSelected(selected === id ? null : id);
  };

  // Filter skips by applied filter
  let filteredSkips = skips;
  if (appliedFilter.mode === 'custom') {
    filteredSkips = skips.filter((s) => {
      const size = Number(s.size);
      const price = Number(s.price_before_vat);
      return (
        (isNaN(Number(appliedFilter.sizeMin)) || size >= Number(appliedFilter.sizeMin)) &&
        (isNaN(Number(appliedFilter.sizeMax)) || size <= Number(appliedFilter.sizeMax)) &&
        (isNaN(Number(appliedFilter.priceMin)) || price >= Number(appliedFilter.priceMin)) &&
        (isNaN(Number(appliedFilter.priceMax)) || price <= Number(appliedFilter.priceMax))
      );
    });
  }

  // Handle filter form submit
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    if (filterMode === 'all') {
      setAppliedFilter({ mode: 'all' });
    } else {
      setAppliedFilter({
        mode: 'custom',
        sizeMin: formSizeMin,
        sizeMax: formSizeMax,
        priceMin: formPriceMin,
        priceMax: formPriceMax,
      });
    }
  };

  return (
    <div className='bg-gray-900 min-h-screen flex flex-col'>
      <ProgressBar />
      <div className='text-center mb-2'>
        <h1 className='text-3xl font-bold text-white'>Choose Your Skip Size</h1>
        <p className='text-gray-400 mt-2'>
          Select the skip size that best suits your needs
        </p>
        {/* Filter Form: Filter by skip size and price */}
        <form
          className="flex flex-wrap justify-center items-end gap-4 mt-4 mb-2 bg-gray-800/80 p-4 rounded-xl shadow"
          onSubmit={handleFilterSubmit}
        >
          <div className="flex flex-row flex-wrap items-center gap-4 w-full sm:w-auto justify-center sm:justify-start mb-2 sm:mb-0">
            <label className="flex items-center gap-2 text-gray-300 cursor-pointer font-semibold">
              <input
                type="radio"
                name="filter-mode"
                value="all"
                checked={filterMode === 'all'}
                onChange={() => setFilterMode('all')}
                className="accent-blue-500"
              />
              All
            </label>
            <label className="flex items-center gap-2 text-gray-300 cursor-pointer font-semibold">
              <input
                type="radio"
                name="filter-mode"
                value="custom"
                checked={filterMode === 'custom'}
                onChange={() => setFilterMode('custom')}
                className="accent-blue-500"
              />
              Filter by size/price
            </label>
          </div>
          <div className="flex flex-col items-center min-w-[160px]">
            <label className="text-gray-300 mb-1 font-semibold" htmlFor="size-min">Skip Size (Yards)</label>
            <div className="flex items-center gap-2 w-full">
              <input
                id="size-min"
                type="number"
                min={minSize}
                max={maxSize}
                value={formSizeMin}
                onChange={e => setFormSizeMin(e.target.value)}
                className="w-16 px-2 py-1 rounded bg-gray-700 text-white border border-gray-600 text-center"
                disabled={filterMode !== 'custom'}
              />
              <span className="text-gray-400">to</span>
              <input
                id="size-max"
                type="number"
                min={minSize}
                max={maxSize}
                value={formSizeMax}
                onChange={e => setFormSizeMax(e.target.value)}
                className="w-16 px-2 py-1 rounded bg-gray-700 text-white border border-gray-600 text-center"
                disabled={filterMode !== 'custom'}
              />
            </div>
          </div>
          <div className="flex flex-col items-center min-w-[180px]">
            <label className="text-gray-300 mb-1 font-semibold" htmlFor="price-min">Price (£)</label>
            <div className="flex items-center gap-2 w-full">
              <input
                id="price-min"
                type="number"
                min={minPrice}
                max={maxPrice}
                value={formPriceMin}
                onChange={e => setFormPriceMin(e.target.value)}
                className="w-20 px-2 py-1 rounded bg-gray-700 text-white border border-gray-600 text-center"
                disabled={filterMode !== 'custom'}
              />
              <span className="text-gray-400">to</span>
              <input
                id="price-max"
                type="number"
                min={minPrice}
                max={maxPrice}
                value={formPriceMax}
                onChange={e => setFormPriceMax(e.target.value)}
                className="w-20 px-2 py-1 rounded bg-gray-700 text-white border border-gray-600 text-center"
                disabled={filterMode !== 'custom'}
              />
            </div>
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              Filter
            </button>
          </div>
        </form>
      </div>
      <div className='flex-1 flex flex-col'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8'>
          {filteredSkips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              selected={selected === skip.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
      <BottomBar selectedSkip={selectedSkip} />
    </div>
  );
}

export default SkipSelector;
