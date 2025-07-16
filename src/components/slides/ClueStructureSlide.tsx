
import React from 'react';

const ClueStructureSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-6 py-6">
      <h1 className="text-4xl font-bold text-center text-foreground mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
        The Anatomy of a Cryptic Clue
      </h1>
      
      <div className="space-y-6 w-full">
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/20 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-6">
          <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">
            Two Parts Working Together
          </h3>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-700">
              <h4 className="text-2xl font-semibold text-foreground mb-4">
                1. The Definition
              </h4>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                A straightforward synonym or description of the answer
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border-2 border-emerald-200 dark:border-emerald-600">
                <p className="text-sm text-muted-foreground mb-2">Usually found at:</p>
                <p className="text-base font-medium text-emerald-700 dark:text-emerald-400">• Beginning of clue</p>
                <p className="text-base font-medium text-emerald-700 dark:text-emerald-400">• End of clue</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/20 rounded-2xl p-6 border-2 border-violet-300 dark:border-violet-700">
              <h4 className="text-2xl font-semibold text-foreground mb-4">
                2. The Wordplay
              </h4>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                A cryptic way to construct the same answer using indicators and fodder
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border-2 border-violet-200 dark:border-violet-600">
                <p className="text-sm text-muted-foreground mb-2">Contains:</p>
                <p className="text-base font-medium text-violet-700 dark:text-violet-400">• Indicators (signal the wordplay type)</p>
                <p className="text-base font-medium text-violet-700 dark:text-violet-400">• Fodder (raw material for the answer)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-700">
          <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
            The Golden Rule Origins
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-center">
            <strong className="text-foreground">Afrit's 1949</strong> golden rule of cryptic cluing:
          </p>
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-4 border-2 border-indigo-200 dark:border-indigo-700">
            <p className="text-xl font-bold text-indigo-700 dark:text-indigo-300 text-center">
              "I need not mean what I say, but I must say what I mean."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClueStructureSlide;
