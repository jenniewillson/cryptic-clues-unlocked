
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const DoubleDefinitionsSlide = () => {
  const [revealedAnswers, setRevealedAnswers] = useState<{[key: string]: boolean}>({});

  const revealAnswer = (key: string) => {
    setRevealedAnswers(prev => ({ ...prev, [key]: true }));
  };

  const examples = [
    {
      key: 'bark',
      clue: 'Tree covering made by dog (4)',
      definition1: 'Tree covering',
      definition2: 'made by dog',
      answer: 'BARK',
      explanation: 'BARK means both tree covering and the sound a dog makes'
    },
    {
      key: 'fair',
      clue: 'Just carnival (4)',
      definition1: 'Just',
      definition2: 'carnival',
      answer: 'FAIR',
      explanation: 'FAIR means both just/reasonable and a carnival/market'
    }
  ];

  return (
    <div className="space-y-12 max-w-7xl">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
        Double Definitions: Two Meanings, One Word
      </h1>
      
      <div className="space-y-10">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-700 rounded-2xl p-10">
          <h3 className="text-4xl font-semibold text-foreground mb-8 text-center">
            How Double Definitions Work
          </h3>
          <p className="text-2xl text-muted-foreground mb-10 text-center leading-relaxed">
            The clue contains two separate definitions of the same word, with no wordplay involved.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600">
              <h4 className="text-2xl font-semibold text-foreground mb-4">✓ Simple Structure</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No indicators or wordplay - just two straightforward definitions joined together.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-300 dark:border-green-600">
              <h4 className="text-2xl font-semibold text-foreground mb-4">⚡ Quick Recognition</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Often the shortest clues - if you can't find wordplay, it might be a double definition!
              </p>
            </div>
          </div>
        </div>

        {/* Space for examples */}
        <div className="space-y-10">
          <h3 className="text-4xl font-semibold text-foreground text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Solve Some Together!
          </h3>
          
          {examples.map((example, index) => (
            <div key={example.key} className={`bg-gradient-to-br ${
              index === 0 ? 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-cyan-200 dark:border-cyan-700' :
              'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700'
            } border-2 rounded-2xl p-10`}>
              <div className="text-center mb-10">
                <p className="text-4xl font-semibold text-foreground mb-4 leading-relaxed">
                  "{example.clue}"
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">First Definition</h4>
                  <p className="text-2xl text-blue-700 dark:text-blue-300 font-medium">"{example.definition1}"</p>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">Second Definition</h4>
                  <p className="text-2xl text-green-700 dark:text-green-300 font-medium">"{example.definition2}"</p>
                </div>
              </div>

              <div className="text-center">
                {!revealedAnswers[example.key] ? (
                  <Button 
                    onClick={() => revealAnswer(example.key)}
                    className="text-2xl px-12 py-6 rounded-xl"
                    size="lg"
                  >
                    Reveal Answer
                  </Button>
                ) : (
                  <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/20 rounded-2xl p-8 border-2 border-purple-300 dark:border-purple-600">
                    <p className="text-5xl font-bold text-purple-700 dark:text-purple-300 mb-4">
                      {example.answer}
                    </p>
                    <p className="text-2xl text-muted-foreground">
                      {example.explanation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Space for additional examples */}
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-2xl p-12 border-2 border-orange-200 dark:border-orange-700">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Practice Space
          </h3>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 border-2 border-orange-300 dark:border-orange-600 min-h-[200px] flex items-center justify-center">
            <p className="text-2xl text-muted-foreground text-center">
              Space for additional examples and practice clues
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleDefinitionsSlide;
