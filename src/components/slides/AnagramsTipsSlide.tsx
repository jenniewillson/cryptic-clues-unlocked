import React from 'react';

const AnagramsTipsSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
        Key Tips for Anagrams
      </h1>
      
      <div className="grid grid-cols-2 gap-12 w-full">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-10 border-2 border-green-300 dark:border-green-700">
          <h4 className="text-4xl font-semibold text-green-700 dark:text-green-400 mb-8">✓ Remember:</h4>
          <ul className="space-y-4 text-2xl text-muted-foreground">
            <li>• Count the letters carefully</li>
            <li>• Look for obvious indicator words</li>
            <li>• The fodder gives you all the letters</li>
            <li>• Definition is separate from wordplay in the vast majority of clues</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-10 border-2 border-blue-300 dark:border-blue-700">
          <h4 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-8">💡 Pro Tips:</h4>
          <ul className="space-y-4 text-2xl text-muted-foreground">
            <li>• Start with common letter patterns</li>
            <li>• Look for double letters</li>
            <li>• Consider word endings (-ING, -ED, etc.)</li>
            <li>• Practice makes perfect!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnagramsTipsSlide;