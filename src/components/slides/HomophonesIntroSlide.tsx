import React from 'react';

const HomophonesIntroSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
        Homophones
      </h1>
      <h2 className="text-3xl font-semibold text-center text-muted-foreground mb-12">
        When Words Sound Alike
      </h2>
      
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-2 border-pink-200 dark:border-pink-700 rounded-2xl p-10 w-full">
        <h3 className="text-4xl font-semibold text-foreground mb-8 text-center">
          How Homophones Work
        </h3>
        <p className="text-2xl text-muted-foreground mb-10 text-center leading-relaxed">
          The answer sounds the same as another word that is clued in the wordplay.
        </p>
        
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
            <h4 className="text-2xl font-semibold text-foreground mb-4">1. Definition</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Straightforward meaning of the answer
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-red-300 dark:border-red-600 text-center">
            <h4 className="text-2xl font-semibold text-foreground mb-4">2. Sound Indicator</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shows that we're dealing with sounds
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600 text-center">
            <h4 className="text-2xl font-semibold text-foreground mb-4">3. Sound-alike Word</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A word that sounds like the answer
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-8 border-2 border-amber-300 dark:border-amber-600 mt-10">
          <h4 className="text-3xl font-semibold text-foreground mb-6 text-center">
            Important Considerations
          </h4>
          <div className="space-y-4 text-xl text-muted-foreground leading-relaxed">
            <p className="text-center">
              <strong className="text-foreground">Pronunciation matters!</strong> Homophones depend on how words sound, which can vary based on:
            </p>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-amber-200 dark:border-amber-600">
                <p className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Regional Accents</p>
                <p className="text-lg">Different regions may pronounce words differently, affecting what sounds alike</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-amber-200 dark:border-amber-600">
                <p className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Local Variations</p>
                <p className="text-lg">Some homophones work better in certain dialects or pronunciations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomophonesIntroSlide;