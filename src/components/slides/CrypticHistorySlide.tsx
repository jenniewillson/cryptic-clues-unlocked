
import React from 'react';

const CrypticHistorySlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
        The Birth of Cryptic Crosswords
      </h1>
      
      <div className="space-y-10 w-full">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-700 rounded-2xl p-10 shadow-xl">
          <h3 className="text-4xl font-semibold text-amber-800 dark:text-amber-300 mb-6 text-center">Late 1920s - Early 1930s</h3>
          <p className="text-2xl text-amber-700 dark:text-amber-400 mb-6 text-center leading-relaxed">
            British puzzle setters, finding American-style "quick" crosswords lacking in intellectual challenge, 
            began experimenting with clues that required more than just definitions.
          </p>
          <p className="text-xl text-amber-600 dark:text-amber-500 text-center leading-relaxed">
            The idea was revolutionary: instead of straightforward definitions, clues would contain wordplay, 
            anagrams, and linguistic tricks that made solving a puzzle an exercise in lateral thinking.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600 shadow-lg transform hover:scale-105 transition-transform">
            <h4 className="text-3xl font-semibold text-blue-800 dark:text-blue-300 mb-4">The Times (1930)</h4>
            <p className="text-xl text-blue-700 dark:text-blue-400 leading-relaxed">
              The Times of London begins publishing what we now recognize as cryptic crosswords, 
              establishing the sophisticated style that would become the British standard.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-8 border-2 border-purple-300 dark:border-purple-600 shadow-lg transform hover:scale-105 transition-transform">
            <h4 className="text-3xl font-semibold text-purple-800 dark:text-purple-300 mb-4">The Observer (1926)</h4>
            <p className="text-xl text-purple-700 dark:text-purple-400 leading-relaxed">
              Edward Powys Mathers, writing as "Torquemada," creates some of the earliest 
              and most fiendishly difficult cryptic puzzles for The Observer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrypticHistorySlide;
