import React from 'react';

const StructureBasicsSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-8">
      <h1 className="text-5xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
        Modern Cryptic Crossword Structure
      </h1>
      
      <div className="grid grid-cols-2 gap-8 w-full h-full max-h-[calc(100vh-200px)]">
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/20 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-8 text-center shadow-xl flex flex-col justify-center">
          <h3 className="text-3xl font-semibold text-slate-800 dark:text-slate-300 mb-6">The Standard Format</h3>
          <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-6">15×15</div>
          <p className="text-2xl text-slate-700 dark:text-slate-400 mb-8">
            The classic British cryptic crossword grid
          </p>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/131ba7f8-e9ae-4f64-97e1-0ed9700c9235.png" 
              alt="15x15 cryptic crossword grid showing numbered squares and black squares in a symmetric pattern"
              className="max-w-[350px] w-full h-auto rounded-lg border border-border shadow-lg"
            />
          </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
          <div className="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/20 rounded-2xl p-6 border-2 border-violet-300 dark:border-violet-600 shadow-lg">
            <h4 className="text-2xl font-semibold text-violet-800 dark:text-violet-300 mb-4">180° Rotational Symmetry</h4>
            <p className="text-lg text-violet-700 dark:text-violet-400">
              The grid pattern is identical when rotated 180 degrees, creating elegant, balanced puzzles.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-600 shadow-lg">
            <h4 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">Standard Dimensions</h4>
            <ul className="space-y-2 text-lg text-emerald-700 dark:text-emerald-400">
              <li>• <strong>15×15 grid</strong> - British standard</li>
              <li>• <strong>Usually 28-32 clues</strong> total</li>
              <li>• <strong>13-16 across</strong>, 13-16 down</li>
              <li>• <strong>Each answer 3+ letters</strong> long</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructureBasicsSlide;