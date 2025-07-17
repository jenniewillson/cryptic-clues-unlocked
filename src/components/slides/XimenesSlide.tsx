
import React from 'react';

const XimenesSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-6 py-4">
      <h1 className="text-4xl font-bold text-center text-foreground mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Ximenes: The Master of Fair Play
      </h1>
      
      <div className="space-y-6 w-full max-h-[calc(100vh-160px)] flex flex-col justify-center">
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/20 border-2 border-violet-200 dark:border-violet-700 rounded-3xl p-8 text-center shadow-xl">
          <h3 className="text-3xl font-semibold text-violet-800 dark:text-violet-300 mb-3">Derrick Somerset Macnutt</h3>
          <p className="text-xl text-violet-600 dark:text-violet-400">(1902-1971) • Writing as "Ximenes" for The Observer</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/20 rounded-3xl p-8 border-2 border-emerald-300 dark:border-emerald-600 shadow-lg">
            <h4 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">The Ximenes Principles</h4>
            <ul className="space-y-2 text-lg text-emerald-700 dark:text-emerald-400">
              <li>• Fair and solvable clues</li>
              <li>• Grammatically sound</li>
              <li>• No obscure words</li>
              <li>• Elegant wordplay</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/20 rounded-3xl p-8 border-2 border-rose-300 dark:border-rose-600 shadow-lg">
            <h4 className="text-2xl font-semibold text-rose-800 dark:text-rose-300 mb-4">The Golden Age (1939-1971)</h4>
            <p className="text-lg text-rose-700 dark:text-rose-400 leading-relaxed">
              Ximenes elevated cryptic crosswords to an art form, establishing rules and conventions 
              that transformed arbitrary puzzles into fair, logical challenges.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-3xl p-8 border-2 border-amber-300 dark:border-amber-600 shadow-lg text-center">
          <h4 className="text-2xl font-semibold text-amber-800 dark:text-amber-300 mb-4">Legacy</h4>
          <p className="text-lg text-amber-700 dark:text-amber-400 leading-relaxed">
            His book "Ximenes on the Art of the Crossword" (1966) remains the definitive guide 
            to cryptic crossword construction and solving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default XimenesSlide;
