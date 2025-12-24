import React, { useState } from 'react';
import { AiFillSound, AiOutlineBulb, AiOutlineCheckCircle } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";
import { Sparkles, Moon, Volume2, Film } from 'lucide-react';

// --- COMPONENT 1: SENSORY PANEL (Built-in) ---
const SensoryPanel = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLowAudio, setIsLowAudio] = useState(false);
  const [areAnimationsOn, setAnimations] = useState(true);

  const toggle = (setter, val) => setter(!val);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="font-bold text-gray-800 mb-3">Sensory Controls</h2>
      <div className="flex flex-wrap gap-2">
        {/* Dark Mode Toggle */}
        <button 
          onClick={() => toggle(setIsDarkMode, isDarkMode)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
            isDarkMode ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-gray-50 text-gray-500 border-gray-200'
          }`}
        >
          <Moon size={16} />
          <span className="text-sm font-medium">Dark Mode</span>
        </button>

        {/* Audio Toggle */}
        <button 
          onClick={() => toggle(setIsLowAudio, isLowAudio)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
            isLowAudio ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-gray-50 text-gray-500 border-gray-200'
          }`}
        >
          <Volume2 size={16} />
          <span className="text-sm font-medium">Low Audio</span>
        </button>

        {/* Animation Toggle */}
        <button 
          onClick={() => toggle(setAnimations, areAnimationsOn)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
            !areAnimationsOn ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-gray-50 text-gray-500 border-gray-200'
          }`}
        >
          <Film size={16} />
          <span className="text-sm font-medium">Reduce Motion</span>
        </button>
      </div>
    </div>
  );
};

// --- COMPONENT 2: SMART TAGS (Built-in) ---
const SmartTags = ({ tags = [] }) => {
  return (
    <div className="bg-white shadow rounded-xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-5 h-5 text-purple-600" />
        <h2 className="text-lg font-bold text-gray-800">AI Personalization Active</h2>
      </div>

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

// --- MAIN DASHBOARD ---
const LearningPath = () => <div className="bg-white p-4 rounded shadow">Learning Path Module</div>;

const StudentDashboard = ({ data }) => {
  const studentName = data?.name || "Student";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-6">
      <header className="flex justify-between items-center bg-white shadow-sm rounded-xl p-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">NVLP Student Dashboard</h1>
        <div className="text-lg text-gray-500">Welcome, {studentName}</div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* LEFT SIDEBAR */}
        <div className="lg:col-span-1 flex flex-col gap-6">
           <SensoryPanel />
           <SmartTags tags={["Content Chunking", "Text-to-Speech", "Focus Mode"]} />
        </div>

        {/* MAIN CONTENT */}
        <div className="lg:col-span-3 flex flex-col gap-6">
           <LearningPath />
           <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Ready to learn?</h2>
                <p className="opacity-90">Resume your Math lesson where you left off.</p>
              </div>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition">
                <FaPlayCircle /> Start
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;