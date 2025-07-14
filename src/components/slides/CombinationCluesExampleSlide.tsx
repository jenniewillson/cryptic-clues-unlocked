import React from 'react';

const CombinationCluesExampleSlide = () => {
  return (
    <div className="w-full h-[calc(100vh-120px)] max-h-[600px] p-4 flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl w-full space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
          Combination Clue Examples
        </h1>
        
        <div className="space-y-8">
          {/* Example 1: Half of Elon Musk's head is wood */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="text-center space-y-6">
              <div className="text-2xl font-mono text-foreground">
                "Half of Elon Musk's head is wood"
              </div>
              
              <div className="text-4xl font-bold text-primary">
                ELM
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg text-left space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">How it works:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded text-sm font-semibold">Letter Selection</span>
                    <span className="text-muted-foreground">"Half of Elon" = <strong>EL</strong> (first half of ELON)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded text-sm font-semibold">First Letters</span>
                    <span className="text-muted-foreground">"Musk's head" = <strong>M</strong> (first letter of MUSK)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded text-sm font-semibold">Charades</span>
                    <span className="text-muted-foreground">EL + M = <strong>ELM</strong></span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded text-sm font-semibold">Definition</span>
                    <span className="text-muted-foreground">"is wood" = ELM (type of tree/wood)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Placeholder for additional examples */}
          <div className="bg-muted/10 p-6 rounded-lg border-2 border-dashed border-muted">
            <div className="text-center space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                Additional Examples
              </h2>
              <p className="text-muted-foreground">
                More combination clue examples will be added here as provided.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinationCluesExampleSlide;