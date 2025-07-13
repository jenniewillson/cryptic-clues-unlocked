
import React from 'react';

const ClueTypesOverviewSlide = () => {
  return (
    <div className="space-y-12 max-w-7xl">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Types of Cryptic Clues
      </h1>
      
      <div className="space-y-10">
        <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/30 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-10">
          <p className="text-2xl text-muted-foreground mb-10 text-center leading-relaxed">
            Now that we understand the basic structure, let's explore the common types of wordplay used in cryptic clues.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-8 border-2 border-emerald-300 dark:border-emerald-600 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">Anagrams</h3>
              <p className="text-lg text-emerald-700 dark:text-emerald-400">
                Rearranging letters to form the answer
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-4">Double Definitions</h3>
              <p className="text-lg text-blue-700 dark:text-blue-400">
                Two different meanings of the same word
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/20 rounded-2xl p-8 border-2 border-orange-300 dark:border-orange-600 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold text-orange-800 dark:text-orange-300 mb-4">Charades</h3>
              <p className="text-lg text-orange-700 dark:text-orange-400">
                Building words by joining parts together
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-8 border-2 border-purple-300 dark:border-purple-600 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-300 mb-4">Hidden Words</h3>
              <p className="text-lg text-purple-700 dark:text-purple-400">
                Answer hidden within other words
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-teal-300 dark:border-teal-600 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold text-teal-800 dark:text-teal-300 mb-4">Homophones</h3>
              <p className="text-lg text-teal-700 dark:text-teal-400">
                Words that sound like the answer
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-rose-300 dark:border-rose-600 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold text-rose-800 dark:text-rose-300 mb-4">Cryptic Definitions</h3>
              <p className="text-lg text-rose-700 dark:text-rose-400">
                Clever, indirect descriptions
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-8 border-2 border-amber-300 dark:border-amber-600 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold text-amber-800 dark:text-amber-300 mb-4">Letter Selections</h3>
              <p className="text-lg text-amber-700 dark:text-amber-400">
                Taking specific letters from words
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/20 rounded-2xl p-8 border-2 border-indigo-300 dark:border-indigo-600 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">Reversals</h3>
              <p className="text-lg text-indigo-700 dark:text-indigo-400">
                Words or parts written backwards
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-900/30 dark:to-gray-900/20 rounded-2xl p-8 border-2 border-slate-300 dark:border-slate-600 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-300 mb-4">Deletion/Substitution</h3>
              <p className="text-lg text-slate-700 dark:text-slate-400">
                Removing or replacing letters
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-2xl text-muted-foreground italic font-medium">
              ...and many more fascinating techniques!
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl p-10 border-2 border-yellow-200 dark:border-yellow-700">
          <h3 className="text-4xl font-semibold text-foreground mb-8 text-center">
            What We'll Cover
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/20 rounded-2xl p-8 border-2 border-indigo-300 dark:border-indigo-600">
              <h4 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-300 mb-6">For Each Clue Type:</h4>
              <ul className="space-y-3 text-lg text-indigo-700 dark:text-indigo-400">
                <li>• How it works</li>
                <li>• Common indicators</li>
                <li>• Worked examples</li>
                <li>• Practice clues</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-300 dark:border-green-600">
              <h4 className="text-2xl font-semibold text-green-800 dark:text-green-300 mb-6">Special Topics:</h4>
              <ul className="space-y-3 text-lg text-green-700 dark:text-green-400">
                <li>• Acceptable abbreviations</li>
                <li>• Accent challenges in homophones</li>
                <li>• &lit clues (all-in-one)</li>
                <li>• Advanced techniques</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/20 rounded-2xl p-10 border-2 border-violet-300 dark:border-violet-600 text-center">
          <p className="text-3xl font-medium text-violet-800 dark:text-violet-300 mb-4">
            Interactive Learning
          </p>
          <p className="text-xl text-violet-700 dark:text-violet-400 leading-relaxed">
            Each section includes examples where you can reveal answers step by step as we solve them together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClueTypesOverviewSlide;
