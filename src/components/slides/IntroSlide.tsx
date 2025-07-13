
import React from 'react';

const IntroSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-8xl font-bold text-center text-foreground mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Cryptic Crosswords
      </h1>
      <h2 className="text-4xl font-semibold text-center text-muted-foreground mb-20">
        An Introduction to the Art of Wordplay
      </h2>
      
      <div className="grid grid-cols-2 gap-16 w-full">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-10">
          <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">What Are Cryptic Crosswords?</h3>
          <p className="text-xl text-muted-foreground text-center leading-relaxed">
            Puzzles where each clue contains both a definition and wordplay that leads to the same answer.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-2xl p-10">
          <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">Why Learn Them?</h3>
          <p className="text-xl text-muted-foreground text-center leading-relaxed">
            They combine vocabulary, logic, and lateral thinking into deeply satisfying "aha!" moments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;
