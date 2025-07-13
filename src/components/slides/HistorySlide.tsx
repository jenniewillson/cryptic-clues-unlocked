
import React from 'react';

const HistorySlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12">
        The Birth of Crosswords
      </h1>
      
      <div className="grid grid-cols-2 gap-12 w-full">
        <div className="space-y-8">
          <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-3xl font-semibold text-foreground mb-4">December 21, 1913</h3>
            <p className="text-xl text-muted-foreground">
              Arthur Wynne publishes the first crossword puzzle in the New York World newspaper, calling it a "word-cross."
            </p>
          </div>
          
          <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
            <h3 className="text-3xl font-semibold text-foreground mb-4">Early 1920s</h3>
            <p className="text-xl text-muted-foreground">
              Crosswords become a craze in America. The first crossword book is published by Simon & Schuster in 1924.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-accent/50 rounded-2xl p-8 border border-border">
            <h3 className="text-3xl font-semibold text-foreground mb-4">1920s Britain</h3>
            <p className="text-xl text-muted-foreground">
              Crosswords cross the Atlantic. British newspapers begin featuring puzzles, but they're initially dismissed as "American nonsense."
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-2xl p-8 border border-border">
            <h3 className="text-3xl font-semibold text-foreground mb-4">The Evolution</h3>
            <p className="text-xl text-muted-foreground">
              British constructors began to find American-style crosswords too simplistic, setting the stage for something more sophisticated...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySlide;
