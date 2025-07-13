import React from 'react';

const ClueTypesOverviewSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-5xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Types of Cryptic Clues
      </h1>
      
      <div className="w-full">
        <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/30 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-6">
          <p className="text-xl text-muted-foreground mb-6 text-center leading-relaxed">
            Now that we understand the basic structure, let's explore the common types of wordplay used in cryptic clues.
          </p>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-4 border-2 border-emerald-300 dark:border-emerald-600 transform hover:scale-105 transition-transform text-center">
              <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Anagrams</h3>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">
                Rearranging letters to form the answer
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-4 border-2 border-blue-300 dark:border-blue-600 transform hover:scale-105 transition-transform text-center">
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2">Double Definitions</h3>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Two different meanings of the same word
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/20 rounded-2xl p-4 border-2 border-orange-300 dark:border-orange-600 transform hover:scale-105 transition-transform text-center">
              <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-300 mb-2">Charades</h3>
              <p className="text-sm text-orange-700 dark:text-orange-400">
                Building words by joining parts together
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-4 border-2 border-purple-300 dark:border-purple-600 transform hover:scale-105 transition-transform text-center">
              <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-2">Hidden Words</h3>
              <p className="text-sm text-purple-700 dark:text-purple-400">
                Answer hidden within other words
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/20 rounded-2xl p-4 border-2 border-teal-300 dark:border-teal-600 transform hover:scale-105 transition-transform text-center">
              <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-2">Homophones</h3>
              <p className="text-sm text-teal-700 dark:text-teal-400">
                Words that sound like the answer
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/20 rounded-2xl p-4 border-2 border-rose-300 dark:border-rose-600 transform hover:scale-105 transition-transform text-center">
              <h3 className="text-xl font-semibold text-rose-800 dark:text-rose-300 mb-2">Cryptic Definitions</h3>
              <p className="text-sm text-rose-700 dark:text-rose-400">
                Clever, indirect descriptions
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-4 border-2 border-amber-300 dark:border-amber-600 transform hover:scale-105 transition-transform text-center">
              <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-2">Letter Selections</h3>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                Taking specific letters from words
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/20 rounded-2xl p-4 border-2 border-indigo-300 dark:border-indigo-600 transform hover:scale-105 transition-transform text-center">
              <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Reversals</h3>
              <p className="text-sm text-indigo-700 dark:text-indigo-400">
                Words or parts written backwards
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-900/30 dark:to-gray-900/20 rounded-2xl p-4 border-2 border-slate-300 dark:border-slate-600 transform hover:scale-105 transition-transform text-center">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-300 mb-2">Deletion/Substitution</h3>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                Removing or replacing letters
              </p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xl text-muted-foreground italic font-medium">
              ...and many more fascinating techniques!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClueTypesOverviewSlide;