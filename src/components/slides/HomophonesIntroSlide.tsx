import React from 'react';

const HomophonesIntroSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-5xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
        Homophones
      </h1>
      <h2 className="text-2xl font-semibold text-center text-muted-foreground mb-8">
        When Words Sound Alike
      </h2>
      
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-2 border-pink-200 dark:border-pink-700 rounded-2xl p-8 w-full">
        <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">
          How Homophones Work
        </h3>
        <p className="text-xl text-muted-foreground mb-8 text-center leading-relaxed">
          The answer sounds the same as another word that is clued in the wordplay.
        </p>
        
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-4 border-2 border-blue-300 dark:border-blue-600 text-center">
            <h4 className="text-xl font-semibold text-foreground mb-3">1. Definition</h4>
            <p className="text-base text-muted-foreground leading-relaxed">
              Straightforward meaning of the answer
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-4 border-2 border-red-300 dark:border-red-600 text-center">
            <h4 className="text-xl font-semibold text-foreground mb-3">2. Homophone Indicator</h4>
            <p className="text-base text-muted-foreground leading-relaxed">
              Shows that we are concerned with the 'sound' of a word
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-4 border-2 border-green-300 dark:border-green-600 text-center">
            <h4 className="text-xl font-semibold text-foreground mb-3">3. Definition of Homophone</h4>
            <p className="text-base text-muted-foreground leading-relaxed">
              Definition or synonym for a word that sounds like the solution
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-6 border-2 border-amber-300 dark:border-amber-600">
            <h4 className="text-2xl font-semibold text-foreground mb-4 text-center">
              Homophone Indicators
            </h4>
            <div className="space-y-3 text-lg text-muted-foreground leading-relaxed">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-amber-200 dark:border-amber-600">
                <p className="font-semibold text-amber-700 dark:text-amber-300 mb-1">Basic Sound Words</p>
                <p className="text-base">sounds like, said, out loud</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-amber-200 dark:border-amber-600">
                <p className="font-semibold text-amber-700 dark:text-amber-300 mb-1">Communication</p>
                <p className="text-base">on the radio, broadcast</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/20 rounded-2xl p-6 border-2 border-orange-300 dark:border-orange-600">
            <h4 className="text-2xl font-semibold text-foreground mb-4 text-center">
              Local Variations
            </h4>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              These might be clued with a dialect indicator, such as 'as they say in London...' but this is rare and has to be done very carefully!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomophonesIntroSlide;