import React from 'react';

const CombinationCluesIntroSlide = () => {
  return (
    <div className="w-full h-[calc(100vh-120px)] max-h-[600px] p-4 flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl w-full space-y-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Combination Clues
        </h1>
        
        <div className="text-lg md:text-xl text-muted-foreground space-y-4 max-w-3xl mx-auto">
          <p>
            Many cryptic clues combine multiple techniques to create more sophisticated puzzles.
          </p>
          
          <p>
            These <span className="text-primary font-semibold">combination clues</span> blend different clue types 
            together, requiring solvers to identify and apply multiple techniques simultaneously.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mt-8">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Solving Strategy</h3>
            <ul className="text-lg text-muted-foreground space-y-3">
              <li>• Look for multiple indicators</li>
              <li>• Break down the wordplay step by step</li>
              <li>• Consider each part separately</li>
              <li>• Combine the results</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinationCluesIntroSlide;