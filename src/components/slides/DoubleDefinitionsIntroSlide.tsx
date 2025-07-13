import React from 'react';

const DoubleDefinitionsIntroSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-7xl font-bold text-center text-foreground mb-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
        Double Definitions
      </h1>
      <h2 className="text-4xl font-semibold text-center text-muted-foreground mb-16">
        Two Meanings, One Word
      </h2>
      
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-700 rounded-2xl p-12 w-full">
        <h3 className="text-4xl font-semibold text-foreground mb-8 text-center">
          How Double Definitions Work
        </h3>
        <p className="text-3xl text-muted-foreground mb-12 text-center leading-relaxed">
          The clue contains two separate definitions of the same word, with no wordplay involved.
        </p>
        
        <div className="grid grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-6">✓ Simple Structure</h4>
            <p className="text-xl text-muted-foreground leading-relaxed">
              No indicators or wordplay - just two straightforward definitions joined together.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-300 dark:border-green-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-6">⚡ Quick Recognition</h4>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Often the shortest clues - if you can't find wordplay, it might be a double definition!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleDefinitionsIntroSlide;