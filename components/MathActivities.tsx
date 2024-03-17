import { useState } from 'react';

const MathActivities = () => {
  const [activeActivity, setActiveActivity] = useState<string | null>(null);

  const handleActivityClick = (activity: string | null) => {
    setActiveActivity(activity);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <img
        src="/hi.jpg"
        alt="Duolingo Math Animation"
        className="w-full max-w-xl mb-8 rounded-lg shadow-lg"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          className={`p-4 border rounded-md text-lg ${
            activeActivity === 'addition' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
          } hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          onClick={() => handleActivityClick('addition')}
        >
          Addition
        </button>
        <button
          className={`p-4 border rounded-md text-lg ${
            activeActivity === 'subtraction' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
          } hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          onClick={() => handleActivityClick('subtraction')}
        >
          Subtraction
        </button>
        <button
          className={`p-4 border rounded-md text-lg ${
            activeActivity === 'multiplication' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
          } hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          onClick={() => handleActivityClick('multiplication')}
        >
          Multiplication
        </button>
      </div>
    </div>
  );
};

export default MathActivities;
