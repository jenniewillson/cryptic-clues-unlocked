
import React from 'react';

const StructureSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-6 py-6">
      <h1 className="text-4xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
        Modern Cryptic Crossword Structure
      </h1>
      
      <div className="grid grid-cols-2 gap-8 w-full h-full max-h-[calc(100vh-200px)]">
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/20 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center shadow-xl flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-300 mb-4">The Standard Format</h3>
          <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">15×15</div>
          <p className="text-lg text-slate-700 dark:text-slate-400 mb-6">
            The classic British cryptic crossword grid
          </p>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/131ba7f8-e9ae-4f64-97e1-0ed9700c9235.png" 
              alt="15x15 cryptic crossword grid showing numbered squares and black squares in a symmetric pattern"
              className="max-w-[300px] w-full h-auto rounded-lg border border-border shadow-lg"
            />
          </div>
        </div>

        <div className="space-y-4 flex flex-col justify-center">
          <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-5 border-2 border-emerald-300 dark:border-emerald-600 shadow-lg">
            <h4 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-3">The Crossing Rule</h4>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-2">
              Letters are either "checked" (crossed by another word) or "unchecked" (not crossed).
            </p>
            <p className="text-sm text-emerald-700 dark:text-emerald-400">
              This provides multiple ways to arrive at the same answer.
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/20 rounded-2xl p-5 border-2 border-violet-300 dark:border-violet-600 shadow-lg">
            <h4 className="text-xl font-semibold text-violet-800 dark:text-violet-300 mb-3">180° Rotational Symmetry</h4>
            <p className="text-sm text-violet-700 dark:text-violet-400">
              The grid pattern is identical when rotated 180 degrees, creating elegant, balanced puzzles.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/20 rounded-2xl p-5 border-2 border-orange-300 dark:border-orange-600 shadow-lg">
            <h4 className="text-xl font-semibold text-orange-800 dark:text-orange-300 mb-3">Maximum Unchecked</h4>
            <ul className="space-y-1 text-sm text-orange-700 dark:text-orange-400">
              <li>• No more than <strong>two consecutive</strong> unchecked letters</li>
              <li>• No more than <strong>half the word</strong> should be unchecked</li>
              <li>• This ensures fair play and solvability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructureSlide;
