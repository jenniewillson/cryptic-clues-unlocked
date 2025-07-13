
import React from 'react';

const HistorySlide = () => {
  return (
    <div className="space-y-8 max-w-5xl">
      <h1 className="text-4xl font-bold text-center text-foreground mb-8">
        The Birth of Crosswords
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">December 21, 1913</h3>
            <p className="text-muted-foreground">
              Arthur Wynne publishes the first crossword puzzle in the New York World newspaper, calling it a "word-cross."
            </p>
          </div>
          
          <div className="bg-secondary/50 rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-3">Early 1920s</h3>
            <p className="text-muted-foreground">
              Crosswords become a craze in America. The first crossword book is published by Simon & Schuster in 1924.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-accent/50 rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-3">1920s Britain</h3>
            <p className="text-muted-foreground">
              Crosswords cross the Atlantic. British newspapers begin featuring puzzles, but they're initially dismissed as "American nonsense."
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-3">The Evolution</h3>
            <p className="text-muted-foreground">
              British constructors began to find American-style crosswords too simplistic, setting the stage for something more sophisticated...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySlide;
