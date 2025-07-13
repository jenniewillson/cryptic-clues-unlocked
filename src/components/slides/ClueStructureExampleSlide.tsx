import React from 'react';

const ClueStructureExampleSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
        Example Breakdown
      </h1>
      
      <div className="space-y-10 w-full">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-10 border-2 border-orange-300 dark:border-orange-600 text-center">
          <p className="text-5xl font-semibold text-foreground mb-6">
            "Confusing <span className="text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-lg">parrot</span> for <span className="text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-lg">bird of prey</span> (6)"
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-4">Definition</h4>
            <p className="text-3xl text-blue-700 dark:text-blue-300 font-medium mb-3">"bird of prey"</p>
            <p className="text-xl text-muted-foreground">
              Straightforward description of the answer
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-red-300 dark:border-red-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-4">Indicator</h4>
            <p className="text-3xl text-red-700 dark:text-red-300 font-medium mb-3">"Confusing"</p>
            <p className="text-xl text-muted-foreground">
              Signals an anagram
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-300 dark:border-green-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-4">Fodder</h4>
            <p className="text-3xl text-green-700 dark:text-green-300 font-medium mb-3">"parrot"</p>
            <p className="text-xl text-muted-foreground">
              Letters to be rearranged
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/20 rounded-2xl p-10 border-2 border-purple-300 dark:border-purple-600 text-center">
          <p className="text-4xl font-medium text-foreground mb-4">
            Answer: <span className="text-purple-700 dark:text-purple-300 text-6xl font-bold">RAPTOR</span>
          </p>
          <p className="text-2xl text-muted-foreground">
            Anagram of "parrot" = "raptor" (bird of prey)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClueStructureExampleSlide;