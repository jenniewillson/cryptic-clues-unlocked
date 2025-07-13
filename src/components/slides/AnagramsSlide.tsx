
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const AnagramsSlide = () => {
  const [revealedAnswers, setRevealedAnswers] = useState<{[key: string]: boolean}>({});

  const revealAnswer = (key: string) => {
    setRevealedAnswers(prev => ({ ...prev, [key]: true }));
  };

  const examples = [
    {
      key: 'wildcat',
      clue: 'Confused cat in hat is a mammal (7)',
      definition: 'a mammal',
      indicator: 'Confused',
      fodder: 'cat in hat',
      answer: 'WILDCAT',
      explanation: 'Anagram of "catinhat" → WILDCAT'
    },
    {
      key: 'teacher',
      clue: 'Educator becomes a cheat, terribly (7)',
      definition: 'Educator',
      indicator: 'terribly',
      fodder: 'a cheat',
      answer: 'TEACHER',
      explanation: 'Anagram of "acheat" → TEACHER'
    },
    {
      key: 'rescue',
      clue: 'Save secure arrangement (6)',
      definition: 'Save',
      indicator: 'arrangement',
      fodder: 'secure',
      answer: 'RESCUE',
      explanation: 'Anagram of "secure" → RESCUE'
    }
  ];

  return (
    <div className="space-y-8 max-w-5xl">
      <h1 className="text-4xl font-bold text-center text-foreground mb-8">
        Anagrams: Rearranging Letters
      </h1>
      
      <div className="space-y-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
            How Anagrams Work
          </h3>
          <p className="text-lg text-muted-foreground mb-6 text-center">
            The letters of one or more words are rearranged to form the answer.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">1. Definition</h4>
              <p className="text-sm text-muted-foreground">
                Usually at the start or end of the clue
              </p>
            </div>

            <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/20">
              <h4 className="font-semibold text-foreground mb-2">2. Indicator</h4>
              <p className="text-sm text-muted-foreground">
                Words suggesting mixing or confusion
              </p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 border border-border">
              <h4 className="font-semibold text-foreground mb-2">3. Fodder</h4>
              <p className="text-sm text-muted-foreground">
                The letters to be rearranged
              </p>
            </div>
          </div>
        </div>

        <div className="bg-accent/30 rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Common Anagram Indicators
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-background rounded p-3 border">
              <p className="font-medium text-foreground mb-2">Confusion:</p>
              <p className="text-sm text-muted-foreground">confused, mixed up, jumbled, muddled</p>
            </div>
            <div className="bg-background rounded p-3 border">
              <p className="font-medium text-foreground mb-2">Movement:</p>
              <p className="text-sm text-muted-foreground">twisted, turned, shuffled, tossed</p>
            </div>
            <div className="bg-background rounded p-3 border">
              <p className="font-medium text-foreground mb-2">Damage:</p>
              <p className="text-sm text-muted-foreground">broken, shattered, ruined, wrecked</p>
            </div>
            <div className="bg-background rounded p-3 border">
              <p className="font-medium text-foreground mb-2">Change:</p>
              <p className="text-sm text-muted-foreground">reformed, rearranged, adapted, adjusted</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground text-center">
            Let's Solve Some Together!
          </h3>
          
          {examples.map((example) => (
            <div key={example.key} className="bg-card border border-border rounded-lg p-6">
              <div className="text-center mb-6">
                <p className="text-2xl font-semibold text-foreground mb-2">
                  "{example.clue}"
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">Definition</h4>
                  <p className="text-primary font-medium">"{example.definition}"</p>
                </div>

                <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/20">
                  <h4 className="font-semibold text-foreground mb-2">Indicator</h4>
                  <p className="text-destructive font-medium">"{example.indicator}"</p>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Fodder</h4>
                  <p className="text-secondary-foreground font-medium">"{example.fodder}"</p>
                </div>
              </div>

              <div className="text-center">
                {!revealedAnswers[example.key] ? (
                  <Button 
                    onClick={() => revealAnswer(example.key)}
                    className="mb-4"
                  >
                    Reveal Answer
                  </Button>
                ) : (
                  <div className="bg-muted/50 rounded-lg p-4 border">
                    <p className="text-2xl font-bold text-primary mb-2">
                      {example.answer}
                    </p>
                    <p className="text-muted-foreground">
                      {example.explanation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-muted/30 rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Key Tips for Anagrams
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-green-600">✓ Remember:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Count the letters carefully</li>
                <li>• Look for obvious indicator words</li>
                <li>• The fodder gives you all the letters</li>
                <li>• Definition is separate from wordplay</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-blue-600">💡 Pro Tips:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Start with common letter patterns</li>
                <li>• Look for double letters</li>
                <li>• Consider word endings (-ING, -ED, etc.)</li>
                <li>• Practice makes perfect!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnagramsSlide;
