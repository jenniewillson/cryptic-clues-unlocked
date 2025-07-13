
import React from 'react';

const ClueStructureSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
        The Anatomy of a Cryptic Clue
      </h1>
      
      <div className="space-y-12 w-full">
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/20 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-10">
          <h3 className="text-4xl font-semibold text-foreground mb-8 text-center">
            Basic Structure: Two Parts Working Together
          </h3>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-8 border-2 border-emerald-300 dark:border-emerald-700">
              <h4 className="text-3xl font-semibold text-foreground mb-6">
                1. The Definition
              </h4>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                A straightforward synonym or description of the answer
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-emerald-200 dark:border-emerald-600">
                <p className="text-lg text-muted-foreground mb-3">Usually found at:</p>
                <p className="text-xl font-medium text-emerald-700 dark:text-emerald-400">• Beginning of clue</p>
                <p className="text-xl font-medium text-emerald-700 dark:text-emerald-400">• End of clue</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-violet-300 dark:border-violet-700">
              <h4 className="text-3xl font-semibold text-foreground mb-6">
                2. The Wordplay
              </h4>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                A cryptic way to construct the same answer using indicators and fodder
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-violet-200 dark:border-violet-600">
                <p className="text-lg text-muted-foreground mb-3">Contains:</p>
                <p className="text-xl font-medium text-violet-700 dark:text-violet-400">• Indicators (signal the wordplay type)</p>
                <p className="text-xl font-medium text-violet-700 dark:text-violet-400">• Fodder (raw material for the answer)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-800/50 dark:to-gray-800/50 rounded-2xl p-8 border-2 border-slate-300 dark:border-slate-600">
          <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">
            The Golden Rule: No Surplus Words
          </h3>
          <p className="text-xl text-muted-foreground text-center leading-relaxed">
            Every word serves a purpose - either as part of the definition, an indicator, or fodder. 
            The clue is precise and economical, following the fair play principle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClueStructureSlide;
