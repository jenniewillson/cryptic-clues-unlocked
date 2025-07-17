import React from 'react';

const AnagramsIntroSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-7xl font-bold text-center text-foreground mb-16 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
        Anagrams
      </h1>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-12 w-full">
        <h3 className="text-5xl font-semibold text-foreground mb-10 text-center">
          How Anagrams Work
        </h3>
        <p className="text-3xl text-muted-foreground mb-8 text-center leading-relaxed">
          The letters of one or more words are rearranged to form the answer.
        </p>
        
        <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 mb-10 text-center">
          <p className="text-2xl font-semibold text-primary">
            ⭐ Most Common Clue Type ⭐
          </p>
          <p className="text-xl text-muted-foreground mt-2">
            Most cryptic crosswords will have three, four or more anagrams in each puzzle
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-10">
          <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-8 border-2 border-emerald-300 dark:border-emerald-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-6">1. Definition</h4>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Usually at the start or end of the clue
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-red-300 dark:border-red-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-6">2. Indicator</h4>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Words suggesting mixing or confusion
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-violet-300 dark:border-violet-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-6">3. Fodder</h4>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The letters to be rearranged
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnagramsIntroSlide;