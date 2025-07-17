import React from 'react';

const StructureRulesSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-8">
      <h1 className="text-5xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
        Grid Construction Rules
      </h1>
      
      <div className="bg-gradient-to-br from-slate-100 to-blue-100 dark:from-slate-900/30 dark:to-blue-900/20 rounded-3xl p-12 border-2 border-slate-300 dark:border-slate-600 shadow-lg w-full max-w-5xl">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <p className="text-3xl text-slate-800 dark:text-slate-300">
              • No more than <strong>two consecutive</strong> unchecked letters
            </p>
            <p className="text-3xl text-slate-800 dark:text-slate-300">
              • No more than <strong>half the word</strong> should be unchecked
            </p>
            <p className="text-3xl text-slate-800 dark:text-slate-300">
              • No two-letter words allowed
            </p>
            <p className="text-3xl text-slate-800 dark:text-slate-300">
              • Grid should be fully connected (no isolated sections)
            </p>
          </div>
          <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 mt-8">
            <p className="text-2xl font-semibold text-primary">
              These rules ensure fair play and maintain solvability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructureRulesSlide;