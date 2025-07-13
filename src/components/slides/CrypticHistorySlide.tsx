
import React from 'react';

const CrypticHistorySlide = () => {
  return (
    <div className="space-y-8 max-w-5xl">
      <h1 className="text-4xl font-bold text-center text-foreground mb-8">
        The Birth of Cryptic Crosswords
      </h1>
      
      <div className="space-y-8">
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Late 1920s - Early 1930s</h3>
          <p className="text-lg text-muted-foreground mb-4">
            British puzzle setters, finding American-style "quick" crosswords lacking in intellectual challenge, 
            began experimenting with clues that required more than just definitions.
          </p>
          <p className="text-muted-foreground">
            The idea was revolutionary: instead of straightforward definitions, clues would contain wordplay, 
            anagrams, and linguistic tricks that made solving a puzzle an exercise in lateral thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
            <h4 className="text-xl font-semibold text-foreground mb-3">The Times (1930)</h4>
            <p className="text-muted-foreground">
              The Times of London begins publishing what we now recognize as cryptic crosswords, 
              establishing the sophisticated style that would become the British standard.
            </p>
          </div>
          
          <div className="bg-secondary/50 rounded-lg p-6 border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-3">The Observer (1926)</h4>
            <p className="text-muted-foreground">
              Edward Powys Mathers, writing as "Torquemada," creates some of the earliest 
              and most fiendishly difficult cryptic puzzles for The Observer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrypticHistorySlide;
