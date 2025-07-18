import React from 'react';
import { Newspaper } from 'lucide-react';

const DailyPapersSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600">
      <div className="max-w-7xl mx-auto space-y-12 w-full">
        <h1 className="text-6xl font-bold text-center text-white mb-12 drop-shadow-lg">Where to find cryptic crosswords</h1>
        
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-center text-yellow-300 mb-8 drop-shadow-md">Daily papers</h2>
          
          <div className="bg-gradient-to-br from-white/95 to-gray-100/95 dark:from-gray-800/90 dark:to-gray-900/90 p-12 rounded-3xl border-4 border-white/50 dark:border-gray-600 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <Newspaper className="w-16 h-16 text-blue-600" />
              <h3 className="text-4xl font-bold text-blue-800 dark:text-blue-300">Regular Cryptics: To your taste!</h3>
            </div>
            
            <div className="space-y-10 text-gray-800 dark:text-gray-200">
              <p className="text-2xl leading-relaxed">
                The Guardian cryptics get progressively more difficult from Monday to Friday, with the Prize crossword on Saturday usually being the hardest. The Times Friday is particularly known for being challenging.
              </p>
              
              <div className="space-y-8">
                <h4 className="text-3xl font-bold text-blue-800 dark:text-blue-300">Papers to explore:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center bg-blue-100 dark:bg-blue-800/50 p-6 rounded-2xl border-2 border-blue-300 dark:border-blue-600">
                    <p className="font-bold text-blue-900 dark:text-blue-200 text-2xl">Guardian</p>
                  </div>
                  <div className="text-center bg-red-100 dark:bg-red-800/50 p-6 rounded-2xl border-2 border-red-300 dark:border-red-600">
                    <p className="font-bold text-red-900 dark:text-red-200 text-2xl">Times</p>
                  </div>
                  <div className="text-center bg-pink-100 dark:bg-pink-800/50 p-6 rounded-2xl border-2 border-pink-300 dark:border-pink-600">
                    <p className="font-bold text-pink-900 dark:text-pink-200 text-2xl">Financial Times</p>
                    <p className="text-lg text-pink-700 dark:text-pink-300">(FT)</p>
                  </div>
                  <div className="text-center bg-purple-100 dark:bg-purple-800/50 p-6 rounded-2xl border-2 border-purple-300 dark:border-purple-600">
                    <p className="font-bold text-purple-900 dark:text-purple-200 text-2xl">Telegraph</p>
                  </div>
                  <div className="text-center bg-green-100 dark:bg-green-800/50 p-6 rounded-2xl border-2 border-green-300 dark:border-green-600">
                    <p className="font-bold text-green-900 dark:text-green-200 text-2xl">Independent</p>
                  </div>
                  <div className="text-center bg-orange-100 dark:bg-orange-800/50 p-6 rounded-2xl border-2 border-orange-300 dark:border-orange-600">
                    <p className="font-bold text-orange-900 dark:text-orange-200 text-2xl">Observer</p>
                  </div>
                  <div className="text-center bg-cyan-100 dark:bg-cyan-800/50 p-6 rounded-2xl border-2 border-cyan-300 dark:border-cyan-600">
                    <p className="font-bold text-cyan-900 dark:text-cyan-200 text-2xl">i newspaper</p>
                  </div>
                  <div className="text-center bg-yellow-100 dark:bg-yellow-800/50 p-6 rounded-2xl border-2 border-yellow-300 dark:border-yellow-600">
                    <p className="font-bold text-yellow-900 dark:text-yellow-200 text-2xl">And many more!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyPapersSlide;