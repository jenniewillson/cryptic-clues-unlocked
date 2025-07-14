
import React from 'react';

const ClueStructureSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-6 py-6">
      <h1 className="text-4xl font-bold text-center text-foreground mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
        The Anatomy of a Cryptic Clue
      </h1>
      
      <div className="space-y-6 w-full max-h-[calc(100vh-160px)] overflow-hidden">
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/20 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
            Basic Structure: Two Parts Working Together
          </h3>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-4 border-2 border-emerald-300 dark:border-emerald-700">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                1. The Definition
              </h4>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                A straightforward synonym or description of the answer
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border-2 border-emerald-200 dark:border-emerald-600">
                <p className="text-xs text-muted-foreground mb-1">Usually found at:</p>
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">• Beginning of clue</p>
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">• End of clue</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/20 rounded-2xl p-4 border-2 border-violet-300 dark:border-violet-700">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                2. The Wordplay
              </h4>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                A cryptic way to construct the same answer using indicators and fodder
              </p>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border-2 border-violet-200 dark:border-violet-600">
                <p className="text-xs text-muted-foreground mb-1">Contains:</p>
                <p className="text-sm font-medium text-violet-700 dark:text-violet-400">• Indicators (signal the wordplay type)</p>
                <p className="text-sm font-medium text-violet-700 dark:text-violet-400">• Fodder (raw material for the answer)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-800/50 dark:to-gray-800/50 rounded-2xl p-4 border-2 border-slate-300 dark:border-slate-600">
          <h3 className="text-lg font-semibold text-foreground mb-3 text-center">
            No Surplus Words
          </h3>
          <p className="text-sm text-muted-foreground text-center leading-relaxed mb-3">
            Every word serves a purpose - either as part of the definition, an indicator, or fodder. 
            The clue is precise and economical, following the fair play principle.
          </p>
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl p-3 border-2 border-amber-200 dark:border-amber-700">
            <p className="text-xs text-amber-700 dark:text-amber-300 font-medium mb-2">Exception: Link Words</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              'Link' words are permitted to connect wordplay and definition grammatically. Examples: 
              <span className="font-medium text-amber-600 dark:text-amber-400"> WORDPLAY for DEFINITION</span>, 
              <span className="font-medium text-amber-600 dark:text-amber-400"> DEFINITION is WORDPLAY</span>, or 
              <span className="font-medium text-amber-600 dark:text-amber-400"> WORDPLAY to find DEFINITION</span>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-4 border-2 border-purple-200 dark:border-purple-700">
          <h3 className="text-lg font-semibold text-foreground mb-3 text-center">
            The Golden Rule Origins
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            <strong className="text-foreground">Afrit's 1949</strong> introduction to his collection of puzzles set out (in bold type) for the first time what became the golden rule of cryptic cluing:
          </p>
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-3 border-2 border-indigo-200 dark:border-indigo-700 mb-3">
            <p className="text-sm font-bold text-indigo-700 dark:text-indigo-300 text-center">
              "I need not mean what I say, but I must say what I mean."
            </p>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            This key injunction to crossword setters was a play on the exchange in <em>Alice in Wonderland</em> where the March Hare says, 
            "Then you should say what you mean." Alice replies, "I do, at least - at least I mean what I say - that's the same thing, you know."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClueStructureSlide;
