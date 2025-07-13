
import React from 'react';

const ClueTypesOverviewSlide = () => {
  return (
    <div className="space-y-8 max-w-5xl">
      <h1 className="text-4xl font-bold text-center text-foreground mb-8">
        Types of Cryptic Clues
      </h1>
      
      <div className="space-y-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-lg text-muted-foreground mb-6 text-center">
            Now that we understand the basic structure, let's explore the common types of wordplay used in cryptic clues.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">Anagrams</h3>
              <p className="text-sm text-muted-foreground">
                Rearranging letters to form the answer
              </p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <h3 className="font-semibold text-foreground mb-2">Double Definitions</h3>
              <p className="text-sm text-muted-foreground">
                Two different meanings of the same word
              </p>
            </div>

            <div className="bg-accent/50 rounded-lg p-4 border border-border">
              <h3 className="font-semibold text-foreground mb-2">Charades</h3>
              <p className="text-sm text-muted-foreground">
                Building words by joining parts together
              </p>
            </div>

            <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-2">Hidden Words</h3>
              <p className="text-sm text-muted-foreground">
                Answer hidden within other words
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <h3 className="font-semibold text-foreground mb-2">Homophones</h3>
              <p className="text-sm text-muted-foreground">
                Words that sound like the answer
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">Cryptic Definitions</h3>
              <p className="text-sm text-muted-foreground">
                Clever, indirect descriptions
              </p>
            </div>
          </div>
        </div>

        <div className="bg-accent/30 rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            What We'll Cover
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">For Each Clue Type:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• How it works</li>
                <li>• Common indicators</li>
                <li>• Worked examples</li>
                <li>• Practice clues</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Special Topics:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Acceptable abbreviations</li>
                <li>• Accent challenges in homophones</li>
                <li>• &lit clues (all-in-one)</li>
                <li>• Advanced techniques</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-6 border border-primary/20 text-center">
          <p className="text-lg font-medium text-foreground mb-2">
            Interactive Learning
          </p>
          <p className="text-muted-foreground">
            Each section includes examples where you can reveal answers step by step as we solve them together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClueTypesOverviewSlide;
