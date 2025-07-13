
import React from 'react';

const StructureSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12">
        Modern Cryptic Crossword Structure
      </h1>
      
      <div className="grid grid-cols-2 gap-12 w-full">
        <div className="bg-card border border-border rounded-2xl p-10 text-center">
          <h3 className="text-4xl font-semibold text-foreground mb-6">The Standard Format</h3>
          <div className="text-8xl font-bold text-primary mb-6">15×15</div>
          <p className="text-2xl text-muted-foreground mb-8">
            The classic British cryptic crossword grid
          </p>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/131ba7f8-e9ae-4f64-97e1-0ed9700c9235.png" 
              alt="15x15 cryptic crossword grid showing numbered squares and black squares in a symmetric pattern"
              className="max-w-xs w-full h-auto rounded-lg border border-border shadow-lg"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
            <h4 className="text-3xl font-semibold text-foreground mb-4">The Crossing Rule</h4>
            <p className="text-xl text-muted-foreground mb-4">
              In crossword terminology, letters are either "checked" (crossed by another word) 
              or "unchecked" (not crossed).
            </p>
            <p className="text-xl text-muted-foreground">
              This crossing pattern is crucial for fair solving - it provides multiple ways 
              to arrive at the same answer.
            </p>
          </div>
          
          <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
            <h4 className="text-3xl font-semibold text-foreground mb-4">Maximum Unchecked</h4>
            <ul className="space-y-3 text-xl text-muted-foreground">
              <li>• No more than <strong>two consecutive</strong> unchecked letters</li>
              <li>• No more than <strong>half the word</strong> should be unchecked</li>
              <li>• This ensures fair play and solvability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructureSlide;
