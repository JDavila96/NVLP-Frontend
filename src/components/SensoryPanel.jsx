import React, { useState } from 'react';
import { Moon, Volume2, Film } from 'lucide-react';

const SensoryPanel = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLowAudio, setIsLowAudio] = useState(false);
  const [areAnimationsOn, setAreAnimationsOn] = useState(true);

  // Helper function to toggle state
  const toggle = (setter) => {
    setter((prev) => !prev);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Sensory Controls</h2>
      
      <div className="flex flex-col gap-3">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => toggle(setIsDarkMode)}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${
            isDarkMode
              ? 'bg-blue-100 text-blue-700 border-blue-200'
              : 'bg-gray-50 text-gray-500 border-gray-200'
          }`}
        >
          <Moon size={20} />
          <span className="font-medium">Dark Mode</span>
        </button>

        {/* Low Audio Toggle */}
        <button
          onClick={() => toggle(setIsLowAudio)}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${
            isLowAudio
              ? 'bg-blue-100 text-blue-700 border-blue-200'
              : 'bg-gray-50 text-gray-500 border-gray-200'
          }`}
        >
          <Volume2 size={20} />
          <span className="font-medium">Low Audio</span>
        </button>

        {/* Animations Toggle */}
        <button
          onClick={() => toggle(setAreAnimationsOn)}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${
            areAnimationsOn
              ? 'bg-blue-100 text-blue-700 border-blue-200'
              : 'bg-gray-50 text-gray-500 border-gray-200'
          }`}
        >
          <Film size={20} />
          <span className="font-medium">Animations</span>
        </button>
      </div>
    </div>
  );
};

export default SensoryPanel;

