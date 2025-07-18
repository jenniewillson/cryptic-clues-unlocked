import React from 'react';
import { Zap } from 'lucide-react';

const ChallengeSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500">
      <div className="max-w-7xl mx-auto space-y-12 w-full">
        <h1 className="text-6xl font-bold text-center text-white mb-12 drop-shadow-lg">Where to find cryptic crosswords</h1>
        
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-center text-yellow-200 mb-8 drop-shadow-md">Need even more of a challenge?</h2>
          
          <div className="bg-gradient-to-br from-white/95 to-gray-100/95 dark:from-gray-800/90 dark:to-gray-900/90 p-12 rounded-3xl border-4 border-white/50 dark:border-gray-600 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <Zap className="w-16 h-16 text-orange-600" />
              <h3 className="text-4xl font-bold text-orange-800 dark:text-orange-300">Advanced Cryptic Varieties</h3>
            </div>
            
            <div className="space-y-10 text-gray-800 dark:text-gray-200">
              <p className="text-2xl leading-relaxed">
                There are lots of other cryptic crossword types and styles out there to find. We will just name a few:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800/70 dark:to-blue-900/70 p-8 rounded-2xl border-3 border-blue-300 dark:border-blue-600">
                    <h4 className="font-bold text-blue-900 dark:text-blue-200 text-3xl mb-4">Telegraph</h4>
                    <p className="text-xl text-blue-800 dark:text-blue-300"><strong>The Telegraph Toughie:</strong> Medium-hard, blocked</p>
                    <p className="text-xl text-blue-800 dark:text-blue-300"><strong>Enigmatic Variations:</strong> Hard-Very Hard, Barred</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800/70 dark:to-purple-900/70 p-8 rounded-2xl border-3 border-purple-300 dark:border-purple-600">
                    <h4 className="font-bold text-purple-900 dark:text-purple-200 text-3xl mb-4">i newspaper</h4>
                    <p className="text-xl text-purple-800 dark:text-purple-300"><strong>Inquisitor:</strong> Hard-Very Hard, Barred</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800/70 dark:to-green-900/70 p-8 rounded-2xl border-3 border-green-300 dark:border-green-600">
                    <h4 className="font-bold text-green-900 dark:text-green-200 text-3xl mb-4">Observer</h4>
                    <p className="text-xl text-green-800 dark:text-green-300"><strong>Azed:</strong> Hard-Very Hard, Barred</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-100 to-red-200 dark:from-red-800/70 dark:to-red-900/70 p-8 rounded-2xl border-3 border-red-300 dark:border-red-600">
                    <h4 className="font-bold text-red-900 dark:text-red-200 text-3xl mb-4">Times</h4>
                    <p className="text-xl text-red-800 dark:text-red-300"><strong>The Listener:</strong> Very Hard, Barred</p>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-3xl font-bold text-orange-800 dark:text-orange-300 bg-gradient-to-r from-yellow-200 to-orange-200 dark:from-yellow-800/50 dark:to-orange-800/50 p-6 rounded-2xl border-2 border-orange-300 dark:border-orange-600">
                ...and many more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSlide;