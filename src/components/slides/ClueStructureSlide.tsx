
import React from 'react';

const ClueStructureSlide = () => {
  return (
    <div className="space-y-10 max-w-7xl">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
        The Anatomy of a Cryptic Clue
      </h1>
      
      <div className="space-y-12">
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/20 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-12">
          <h3 className="text-4xl font-semibold text-foreground mb-8 text-center">
            Basic Structure: Two Parts Working Together
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
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

        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-2xl p-12 border-2 border-orange-200 dark:border-orange-700">
          <h3 className="text-4xl font-semibold text-foreground mb-10 text-center">
            Example Breakdown
          </h3>
          
          <div className="space-y-10">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-orange-300 dark:border-orange-600 text-center">
              <p className="text-4xl font-semibold text-foreground mb-6">
                "Confusing <span className="text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-lg">parrot</span> for <span className="text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-lg">bird of prey</span> (6)"
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600">
                <h4 className="text-2xl font-semibold text-foreground mb-4">Definition</h4>
                <p className="text-2xl text-blue-700 dark:text-blue-300 font-medium mb-3">"bird of prey"</p>
                <p className="text-lg text-muted-foreground">
                  Straightforward description of the answer
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-red-300 dark:border-red-600">
                <h4 className="text-2xl font-semibold text-foreground mb-4">Indicator</h4>
                <p className="text-2xl text-red-700 dark:text-red-300 font-medium mb-3">"Confusing"</p>
                <p className="text-lg text-muted-foreground">
                  Signals an anagram
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600">
                <h4 className="text-2xl font-semibold text-foreground mb-4">Fodder</h4>
                <p className="text-2xl text-green-700 dark:text-green-300 font-medium mb-3">"parrot"</p>
                <p className="text-lg text-muted-foreground">
                  Letters to be rearranged
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600 text-center">
              <p className="text-3xl font-medium text-foreground mb-3">
                Answer: <span className="text-purple-700 dark:text-purple-300 text-4xl font-bold">RAPTOR</span>
              </p>
              <p className="text-xl text-muted-foreground">
                Anagram of "parrot" = "raptor" (bird of prey)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-800/50 dark:to-gray-800/50 rounded-2xl p-10 border-2 border-slate-300 dark:border-slate-600">
          <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">
            The Golden Rule: No Surplus Words
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border-2 border-green-300 dark:border-green-700">
              <h4 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">✓ Good Practice</h4>
              <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                Every word serves a purpose - either as part of the definition, an indicator, or fodder.
              </p>
              <p className="text-base text-muted-foreground italic">
                The clue is precise and economical.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-6 border-2 border-red-300 dark:border-red-700">
              <h4 className="text-2xl font-semibold text-red-700 dark:text-red-400 mb-4">✗ Poor Practice</h4>
              <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                Including unnecessary words that don't contribute to either the definition or wordplay.
              </p>
              <p className="text-base text-muted-foreground italic">
                This breaks the fair play principle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClueStructureSlide;
