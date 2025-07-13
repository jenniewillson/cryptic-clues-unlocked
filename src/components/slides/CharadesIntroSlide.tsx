import React from 'react';

const CharadesIntroSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-7xl font-bold text-center text-foreground mb-16 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
        Charades
      </h1>
      <h2 className="text-4xl font-semibold text-center text-muted-foreground mb-16">
        Building Words from Parts
      </h2>
      
      <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-200 dark:border-orange-700 rounded-2xl p-12 w-full">
        <h3 className="text-4xl font-semibold text-foreground mb-8 text-center">
          How Charades Work
        </h3>
        <p className="text-3xl text-muted-foreground mb-12 text-center leading-relaxed">
          The answer is built by joining together two or more parts, each clued separately.
        </p>
        
        <div className="grid grid-cols-3 gap-10">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-6">1. Definition</h4>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Usually at the beginning or end
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-300 dark:border-green-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-6">2. Part Clues</h4>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Each part of the answer is clued separately
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-violet-300 dark:border-violet-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-6">3. Assembly</h4>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Parts are joined in the order they appear
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharadesIntroSlide;