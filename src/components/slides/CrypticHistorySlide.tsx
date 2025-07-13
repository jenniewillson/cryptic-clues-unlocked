
import React from 'react';

const CrypticHistorySlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12">
        The Birth of Cryptic Crosswords
      </h1>
      
      <div className="space-y-10 w-full">
        <div className="bg-card border border-border rounded-2xl p-10">
          <h3 className="text-4xl font-semibold text-foreground mb-6 text-center">Late 1920s - Early 1930s</h3>
          <p className="text-2xl text-muted-foreground mb-6 text-center leading-relaxed">
            British puzzle setters, finding American-style "quick" crosswords lacking in intellectual challenge, 
            began experimenting with clues that required more than just definitions.
          </p>
          <p className="text-xl text-muted-foreground text-center leading-relaxed">
            The idea was revolutionary: instead of straightforward definitions, clues would contain wordplay, 
            anagrams, and linguistic tricks that made solving a puzzle an exercise in lateral thinking.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
            <h4 className="text-3xl font-semibold text-foreground mb-4">The Times (1930)</h4>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Times of London begins publishing what we now recognize as cryptic crosswords, 
              establishing the sophisticated style that would become the British standard.
            </p>
          </div>
          
          <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
            <h4 className="text-3xl font-semibold text-foreground mb-4">The Observer (1926)</h4>
            <p className="text-xl text-muted-foreground leading-relaxed">
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
