
import React from 'react';

const StructureSlide = () => {
  return (
    <div className="space-y-8 max-w-5xl">
      <h1 className="text-4xl font-bold text-center text-foreground mb-8">
        Modern Cryptic Crossword Structure
      </h1>
      
      <div className="space-y-8">
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">The Standard Format</h3>
          <div className="text-6xl font-bold text-primary mb-4">15×15</div>
          <p className="text-lg text-muted-foreground mb-6">
            The classic British cryptic crossword grid
          </p>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/131ba7f8-e9ae-4f64-97e1-0ed9700c9235.png" 
              alt="15x15 cryptic crossword grid showing numbered squares and black squares in a symmetric pattern"
              className="max-w-md w-full h-auto rounded-lg border border-border shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
              <h4 className="text-xl font-semibold text-foreground mb-3">The Crossing Rule</h4>
              <p className="text-muted-foreground mb-4">
                In crossword terminology, letters are either "checked" (crossed by another word) 
                or "unchecked" (not crossed).
              </p>
              <p className="text-muted-foreground">
                This crossing pattern is crucial for fair solving - it provides multiple ways 
                to arrive at the same answer.
              </p>
            </div>
            
            <div className="bg-secondary/50 rounded-lg p-6 border border-border">
              <h4 className="text-xl font-semibold text-foreground mb-3">Maximum Unchecked</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• No more than <strong>two consecutive</strong> unchecked letters</li>
                <li>• No more than <strong>half the word</strong> should be unchecked</li>
                <li>• This ensures fair play and solvability</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-accent/50 rounded-lg p-6 border border-border">
              <h4 className="text-xl font-semibold text-foreground mb-3">Why This Matters</h4>
              <p className="text-muted-foreground mb-4">
                If too many letters are unchecked, solvers might guess incorrectly without 
                realizing their mistake until much later.
              </p>
              <p className="text-muted-foreground">
                The crossing pattern acts as a built-in verification system.
              </p>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-6 border border-border">
              <h4 className="text-xl font-semibold text-foreground mb-3">Grid Symmetry</h4>
              <p className="text-muted-foreground">
                Most cryptic crosswords feature rotational symmetry - if you rotate the grid 
                180°, the pattern of black and white squares remains identical.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-6 border border-border">
          <h4 className="text-xl font-semibold text-foreground mb-3 text-center">Professional Standards</h4>
          <p className="text-center text-muted-foreground">
            These structural rules, established by publications like <em>The Times</em> and <em>The Guardian</em>, 
            ensure that every cryptic crossword maintains the perfect balance between challenge and fairness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StructureSlide;
