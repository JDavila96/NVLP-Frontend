import React from 'react';
import { Sparkles } from 'lucide-react';

const SmartTags = ({ tags = [] }) => {
  return (
    <div className="bg-white shadow rounded-xl p-5">
      {/* Title Section */}
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-5 h-5 text-purple-600" />
        <h2 className="text-lg font-bold text-gray-800">AI Personalization Active</h2>
      </div>

      {/* The Tags Section */}
      {tags.length === 0 ? (
        <p className="text-gray-400 text-sm">No active AI filters.</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SmartTags;