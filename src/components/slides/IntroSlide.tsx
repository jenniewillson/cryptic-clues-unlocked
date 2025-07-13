
import React from 'react';

const IntroSlide = () => {
  return (
    <div className="text-center space-y-8 max-w-4xl">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-foreground">
          Cryptic Crosswords
        </h1>
        <h2 className="text-2xl text-muted-foreground">
          An Introduction to the Art of Wordplay
        </h2>
      </div>
      
      <div className="space-y-6 text-lg text-muted-foreground">
        <p>
          Welcome to the fascinating world of cryptic crosswords—where every clue is a puzzle within a puzzle.
        </p>
        <p>
          Today we'll explore the rich history, ingenious construction, and elegant complexity that makes cryptic crosswords the crown jewel of word puzzles.
        </p>
      </div>

      <div className="bg-muted/30 rounded-lg p-6 border border-border">
        <blockquote className="text-xl italic text-foreground">
          "A cryptic crossword is not just a test of vocabulary, but a celebration of language itself."
        </blockquote>
      </div>
    </div>
  );
};

export default IntroSlide;
