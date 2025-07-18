import React from 'react';
import { TrendingUp } from 'lucide-react';

const ProgressingSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
      <div className="max-w-7xl mx-auto space-y-12 w-full">
        <h1 className="text-6xl font-bold text-center text-white mb-12 drop-shadow-lg">Where to find cryptic crosswords</h1>
        
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-center text-yellow-300 mb-8 drop-shadow-md">Progressing...</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-800/80 dark:to-red-800/60 p-10 rounded-2xl border-4 border-orange-300 dark:border-orange-600 shadow-2xl">
              <h3 className="text-3xl font-bold text-orange-800 dark:text-orange-200 mb-6">Times Quick Cryptic</h3>
              <div className="space-y-4 text-orange-800 dark:text-orange-200 text-lg">
                <p>• <strong>When:</strong> Daily except Sunday</p>
                <p>• <strong>Size:</strong> 13×13 grid</p>
                <p>• <strong>Aim:</strong> Quicker than main Times cryptic</p>
                <p>• <strong>Good for:</strong> Building confidence</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-800/80 dark:to-indigo-800/60 p-10 rounded-2xl border-4 border-purple-300 dark:border-purple-600 shadow-2xl">
              <h3 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-6">Guardian Quiptic</h3>
              <div className="space-y-4 text-purple-800 dark:text-purple-200 text-lg">
                <p>• <strong>When:</strong> Sundays only</p>
                <p>• <strong>Aim:</strong> Easier than main Guardian cryptic</p>
                <p>• <strong>Perfect for:</strong> Weekend practice</p>
                <p>• <strong>Style:</strong> Guardian's accessible approach</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-800/80 dark:to-cyan-800/60 p-10 rounded-2xl border-4 border-teal-300 dark:border-teal-600 shadow-2xl">
              <h3 className="text-3xl font-bold text-teal-800 dark:text-teal-200 mb-6">Everyman (Observer)</h3>
              <div className="space-y-4 text-teal-800 dark:text-teal-200 text-lg">
                <p>• <strong>When:</strong> Sundays only</p>
                <p>• <strong>Setter:</strong> Consistent setter</p>
                <p>• <strong>Style:</strong> Reasonably straightforward clues</p>
                <p>• <strong>Good for:</strong> Building cryptic confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressingSlide;