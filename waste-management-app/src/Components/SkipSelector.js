import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import SkipCard from "./SkipCard";
import BottomBar from "./BottomBar";

const API_URL =
  "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

function SkipSelector() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setSkips(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return <div className="text-center py-8 text-white">Loading skips...</div>;

  if (!skips.length)
    return <div className="text-center py-8 text-red-400">No skips available.</div>;

  const selectedSkip = skips.find((s) => s.id === selected);

  // Toggle selection logic
  const handleSelect = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <ProgressBar />
      <div className="text-center mb-2">
        <h1 className="text-3xl font-bold text-white">Choose Your Skip Size</h1>
        <p className="text-gray-400 mt-2">
          Select the skip size that best suits your needs
        </p>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="grid gap-6 px-4 py-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full max-w-6xl mx-auto">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              selected={selected}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
      <BottomBar
        selectedSkip={selectedSkip}
        onBack={() => setSelected(null)}
        onContinue={() => alert("Continue clicked!")}
      />
    </div>
  );
}

export default SkipSelector;