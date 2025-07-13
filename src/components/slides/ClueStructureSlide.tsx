
import React from 'react';

const ClueStructureSlide = () => {
  return (
    <div className="space-y-8 max-w-5xl">
      <h1 className="text-4xl font-bold text-center text-foreground mb-8">
        The Anatomy of a Cryptic Clue
      </h1>
      
      <div className="space-y-8">
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Basic Structure: Two Parts Working Together
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                1. The Definition
              </h4>
              <p className="text-muted-foreground mb-4">
                A straightforward synonym or description of the answer
              </p>
              <div className="bg-background rounded p-3 border">
                <p className="text-sm text-muted-foreground">Usually found at:</p>
                <p className="font-medium">• Beginning of clue</p>
                <p className="font-medium">• End of clue</p>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-6 border border-border">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                2. The Wordplay
              </h4>
              <p className="text-muted-foreground mb-4">
                A cryptic way to construct the same answer using indicators and fodder
              </p>
              <div className="bg-background rounded p-3 border">
                <p className="text-sm text-muted-foreground">Contains:</p>
                <p className="font-medium">• Indicators (signal the wordplay type)</p>
                <p className="font-medium">• Fodder (raw material for the answer)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-accent/30 rounded-lg p-8 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Example Breakdown
          </h3>
          
          <div className="space-y-6">
            <div className="bg-background rounded-lg p-6 border text-center">
              <p className="text-2xl font-semibold text-foreground mb-4">
                "Confused <span className="text-primary">cat in hat</span> is <span className="text-secondary">a mammal</span> (7)"
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Definition</h4>
                <p className="text-primary font-medium">"a mammal"</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Straightforward description of the answer
                </p>
              </div>

              <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/20">
                <h4 className="font-semibold text-foreground mb-2">Indicator</h4>
                <p className="text-destructive font-medium">"Confused"</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Signals an anagram
                </p>
              </div>

              <div className="bg-accent/50 rounded-lg p-4 border border-border">
                <h4 className="font-semibold text-foreground mb-2">Fodder</h4>
                <p className="text-accent-foreground font-medium">"cat in hat"</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Letters to be rearranged
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 border text-center">
              <p className="text-lg font-medium text-foreground">
                Answer: <span className="text-primary text-xl">WILDCAT</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Anagram of "cat in hat" = "wildcat" (a mammal)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            The Golden Rule: No Surplus Words
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-green-600">✓ Good Practice</h4>
              <p className="text-muted-foreground mb-2">
                Every word serves a purpose - either as part of the definition, an indicator, or fodder.
              </p>
              <p className="text-sm text-muted-foreground italic">
                The clue is precise and economical.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-red-600">✗ Poor Practice</h4>
              <p className="text-muted-foreground mb-2">
                Including unnecessary words that don't contribute to either the definition or wordplay.
              </p>
              <p className="text-sm text-muted-foreground italic">
                This breaks the fair play principle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClueStructureSlide;
