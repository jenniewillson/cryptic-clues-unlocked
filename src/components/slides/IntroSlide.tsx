
import React from 'react';

const IntroSlide = () => {
  return (
    <div className="text-center space-y-12 max-w-6xl">
      <div className="space-y-8">
        <h1 className="text-7xl font-bold text-foreground bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
          Cryptic Crosswords
        </h1>
        <h2 className="text-4xl text-muted-foreground font-semibold">
          An Introduction to the Art of Wordplay
        </h2>
      </div>
      
      <div className="space-y-8 text-2xl text-muted-foreground leading-relaxed">
        <p className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          Welcome to the fascinating world of cryptic crosswords—where every clue is a puzzle within a puzzle.
        </p>
        <p className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-2xl p-8 border border-green-200 dark:border-green-800">
          Today we'll explore the rich history, ingenious construction, and elegant complexity that makes cryptic crosswords the crown jewel of word puzzles.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50 dark:from-orange-950/20 dark:via-yellow-950/20 dark:to-orange-950/20 rounded-2xl p-10 border-2 border-orange-200 dark:border-orange-800">
        <blockquote className="text-3xl italic text-foreground font-medium">
          "A cryptic crossword is not just a test of vocabulary, but a celebration of language itself."
        </blockquote>
      </div>
    </div>
  );
};

export default IntroSlide;
