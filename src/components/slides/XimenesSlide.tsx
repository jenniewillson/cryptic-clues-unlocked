
import React from 'react';

const XimenesSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-5xl font-bold text-center text-foreground mb-8">
        Ximenes: The Master of Fair Play
      </h1>
      
      <div className="space-y-6 w-full">
        <div className="bg-card border border-border rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-semibold text-foreground mb-2">Derrick Somerset Macnutt</h3>
          <p className="text-xl text-muted-foreground">(1902-1971) • Writing as "Ximenes" for The Observer</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <h4 className="text-2xl font-semibold text-foreground mb-3">The Ximenes Principles</h4>
              <ul className="space-y-2 text-lg text-muted-foreground">
                <li>• Every clue must be fair and solvable</li>
                <li>• The grammar must make sense</li>
                <li>• No unnecessarily obscure words</li>
                <li>• Wordplay should be elegant, not forced</li>
              </ul>
            </div>
            
            <div className="bg-accent/50 rounded-2xl p-6 border border-border">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Legacy</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                His book "Ximenes on the Art of the Crossword" (1966) remains the definitive guide 
                to cryptic crossword construction and solving.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
              <h4 className="text-2xl font-semibold text-foreground mb-3">The Golden Age</h4>
              <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                From 1939 to 1971, Ximenes elevated cryptic crosswords to an art form, 
                establishing rules and conventions still followed today.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                He transformed what could be arbitrary puzzles into fair, logical challenges 
                that rewarded cleverness over guesswork.
              </p>
            </div>
            
            <div className="bg-muted/50 rounded-2xl p-6 border border-border">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Modern Influence</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today's top cryptic setters, from Azed to Paul, still follow the principles 
                Ximenes established for fair and elegant puzzle construction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XimenesSlide;
