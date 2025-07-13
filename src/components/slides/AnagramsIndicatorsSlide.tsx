import React from 'react';

const AnagramsIndicatorsSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
        Common Anagram Indicators
      </h1>
      
      <div className="grid grid-cols-2 gap-8 w-full">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-red-200 dark:border-red-700">
          <p className="text-3xl font-medium text-red-700 dark:text-red-400 mb-6">Confusion:</p>
          <p className="text-2xl text-muted-foreground leading-relaxed">confused, mixed up, jumbled, muddled, baffled, perplexed</p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-700">
          <p className="text-3xl font-medium text-blue-700 dark:text-blue-400 mb-6">Movement:</p>
          <p className="text-2xl text-muted-foreground leading-relaxed">twisted, turned, shuffled, tossed, spun, stirred</p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-green-200 dark:border-green-700">
          <p className="text-3xl font-medium text-green-700 dark:text-green-400 mb-6">Damage:</p>
          <p className="text-2xl text-muted-foreground leading-relaxed">broken, shattered, ruined, wrecked, smashed, destroyed</p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-700">
          <p className="text-3xl font-medium text-purple-700 dark:text-purple-400 mb-6">Change:</p>
          <p className="text-2xl text-muted-foreground leading-relaxed">reformed, rearranged, adapted, adjusted, revised, altered</p>
        </div>
      </div>
    </div>
  );
};

export default AnagramsIndicatorsSlide;