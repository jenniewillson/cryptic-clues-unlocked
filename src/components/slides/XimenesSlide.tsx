
import React from 'react';

const XimenesSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-5xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Ximenes: The Master of Fair Play
      </h1>
      
      <div className="space-y-6 w-full">
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/20 border-2 border-violet-200 dark:border-violet-700 rounded-2xl p-6 text-center shadow-xl">
          <h3 className="text-3xl font-semibold text-violet-800 dark:text-violet-300 mb-2">Derrick Somerset Macnutt</h3>
          <p className="text-xl text-violet-600 dark:text-violet-400">(1902-1971) • Writing as "Ximenes" for The Observer</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/20 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-600 shadow-lg">
              <h4 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-300 mb-3">The Ximenes Principles</h4>
              <ul className="space-y-2 text-lg text-emerald-700 dark:text-emerald-400">
                <li>• Every clue must be fair and solvable</li>
                <li>• The grammar must make sense</li>
                <li>• No unnecessarily obscure words</li>
                <li>• Wordplay should be elegant, not forced</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-6 border-2 border-amber-300 dark:border-amber-600 shadow-lg">
              <h4 className="text-2xl font-semibold text-amber-800 dark:text-amber-300 mb-3">Legacy</h4>
              <p className="text-lg text-amber-700 dark:text-amber-400 leading-relaxed">
                His book "Ximenes on the Art of the Crossword" (1966) remains the definitive guide 
                to cryptic crossword construction and solving.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-rose-300 dark:border-rose-600 shadow-lg">
              <h4 className="text-2xl font-semibold text-rose-800 dark:text-rose-300 mb-3">The Golden Age</h4>
              <p className="text-lg text-rose-700 dark:text-rose-400 mb-3 leading-relaxed">
                From 1939 to 1971, Ximenes elevated cryptic crosswords to an art form, 
                establishing rules and conventions still followed today.
              </p>
              <p className="text-lg text-rose-700 dark:text-rose-400 leading-relaxed">
                He transformed what could be arbitrary puzzles into fair, logical challenges 
                that rewarded cleverness over guesswork.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/20 rounded-2xl p-6 border-2 border-cyan-300 dark:border-cyan-600 shadow-lg">
              <h4 className="text-2xl font-semibold text-cyan-800 dark:text-cyan-300 mb-3">Modern Influence</h4>
              <p className="text-lg text-cyan-700 dark:text-cyan-400 leading-relaxed">
                Today's top cryptic setters, from Azed to Paul, still follow the principles 
                Ximenes established for fair and elegant puzzle construction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XimenesSlide;
