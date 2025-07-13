import React from 'react';

const CombinationCluesExampleSlide = () => {
  return (
    <div className="w-full h-[calc(100vh-120px)] max-h-[600px] p-4 flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl w-full space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
          Combination Clue Examples
        </h1>
        
        <div className="space-y-6">
          {/* Placeholder for examples - will be filled when user provides them */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="text-center space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                Examples Coming Soon
              </h2>
              <p className="text-muted-foreground">
                This slide will be populated with specific combination clue examples 
                as provided by the instructor.
              </p>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  "I will give examples of these later" - User
                </p>
              </div>
            </div>
          </div>
          
          {/* Template structure for when examples are added */}
          <div className="bg-muted/10 p-4 rounded-lg border-2 border-dashed border-muted">
            <h3 className="text-lg font-semibold text-foreground mb-3">Example Structure Template:</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><strong>Clue:</strong> [Example clue text]</div>
              <div><strong>Answer:</strong> [Answer]</div>
              <div><strong>Breakdown:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• First technique: [explanation]</li>
                <li>• Second technique: [explanation]</li>
                <li>• How they combine: [explanation]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinationCluesExampleSlide;