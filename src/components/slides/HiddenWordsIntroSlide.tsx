import React from 'react';

const HiddenWordsIntroSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Hidden Words
      </h1>
      <h2 className="text-3xl font-semibold text-center text-muted-foreground mb-12">
        Finding Treasure in Plain Sight
      </h2>
      
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 border-2 border-violet-200 dark:border-violet-700 rounded-2xl p-10 w-full">
        <h3 className="text-4xl font-semibold text-foreground mb-8 text-center">
          How Hidden Words Work
        </h3>
        <p className="text-2xl text-muted-foreground mb-10 text-center leading-relaxed">
          The answer is literally hidden within the letters of other words in the clue.
        </p>
        
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
            <h4 className="text-2xl font-semibold text-foreground mb-4">1. Definition</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Straightforward meaning of the answer
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-red-300 dark:border-red-600 text-center">
            <h4 className="text-2xl font-semibold text-foreground mb-4">2. Indicator</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shows that something is hidden or contained
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600 text-center">
            <h4 className="text-2xl font-semibold text-foreground mb-4">3. Container</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Words that contain the hidden answer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenWordsIntroSlide;