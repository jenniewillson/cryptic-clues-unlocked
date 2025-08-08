import React from 'react';

const SpoonerismIntroSlide = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
        Spoonerisms: Swapping Sounds
      </h1>
      
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-2xl p-12 w-full">
        <h3 className="text-5xl font-semibold text-foreground mb-10 text-center">
          How Spoonerisms Work
        </h3>
        <p className="text-3xl text-muted-foreground mb-12 text-center leading-relaxed">
          Named after Reverend Spooner, these clues involve swapping the initial sounds of words.
        </p>
        
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
              "Spooner's" or "Reverend's" or similar references
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-violet-300 dark:border-violet-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-6">3. Words to Swap</h4>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Two words whose initial sounds will be swapped
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-amber-100 dark:bg-amber-900/30 p-8 rounded-2xl border-2 border-amber-300 dark:border-amber-600">
          <h4 className="text-2xl font-semibold text-foreground mb-4 text-center">Classic Example:</h4>
          <p className="text-2xl text-center text-muted-foreground">
            "Funny bone" becomes "Bunny phone" in a Spoonerism - don't forget we are only worried about the sounds, not the actual letters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpoonerismIntroSlide;