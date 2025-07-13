
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const HiddenWordsSlide = () => {
  const [revealedAnswers, setRevealedAnswers] = useState<{[key: string]: boolean}>({});

  const revealAnswer = (key: string) => {
    setRevealedAnswers(prev => ({ ...prev, [key]: true }));
  };

  const examples = [
    {
      key: 'trap',
      clue: 'Snare found in extra parts (4)',
      definition: 'Snare',
      indicator: 'found in',
      container: 'extra parts',
      answer: 'TRAP',
      explanation: 'TRAP is hidden in "exTRA Parts"'
    }
  ];

  return (
    <div className="space-y-12 max-w-7xl">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Hidden Words: Finding Treasure in Plain Sight
      </h1>
      
      <div className="space-y-10">
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 border-2 border-violet-200 dark:border-violet-700 rounded-2xl p-10">
          <h3 className="text-4xl font-semibold text-foreground mb-8 text-center">
            How Hidden Words Work
          </h3>
          <p className="text-2xl text-muted-foreground mb-10 text-center leading-relaxed">
            The answer is literally hidden within the letters of other words in the clue.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600">
              <h4 className="text-2xl font-semibold text-foreground mb-4">1. Definition</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Straightforward meaning of the answer
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-red-300 dark:border-red-600">
              <h4 className="text-2xl font-semibold text-foreground mb-4">2. Indicator</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Shows that something is hidden or contained
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-300 dark:border-green-600">
              <h4 className="text-2xl font-semibold text-foreground mb-4">3. Container</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Words that contain the hidden answer
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-10 border-2 border-amber-200 dark:border-amber-700">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Common Hidden Word Indicators
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-red-200 dark:border-red-700">
              <p className="text-xl font-medium text-red-700 dark:text-red-400 mb-3">Location:</p>
              <p className="text-lg text-muted-foreground">in, within, inside, among</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
              <p className="text-xl font-medium text-blue-700 dark:text-blue-400 mb-3">Discovery:</p>
              <p className="text-lg text-muted-foreground">found, seen, held, kept</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
              <p className="text-xl font-medium text-green-700 dark:text-green-400 mb-3">Parts:</p>
              <p className="text-lg text-muted-foreground">some, part of, bit of</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700">
              <p className="text-xl font-medium text-purple-700 dark:text-purple-400 mb-3">Concealment:</p>
              <p className="text-lg text-muted-foreground">hidden, buried, covered</p>
            </div>
          </div>
        </div>

        {/* Space for examples */}
        <div className="space-y-10">
          <h3 className="text-4xl font-semibold text-foreground text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Solve Some Together!
          </h3>
          
          {examples.map((example) => (
            <div key={example.key} className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-10">
              <div className="text-center mb-10">
                <p className="text-4xl font-semibold text-foreground mb-4 leading-relaxed">
                  "{example.clue}"
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">Definition</h4>
                  <p className="text-2xl text-blue-700 dark:text-blue-300 font-medium">"{example.definition}"</p>
                </div>

                <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-red-300 dark:border-red-600">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">Indicator</h4>
                  <p className="text-2xl text-red-700 dark:text-red-300 font-medium">"{example.indicator}"</p>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">Container</h4>
                  <p className="text-2xl text-green-700 dark:text-green-300 font-medium">"{example.container}"</p>
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
        <div className="bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-800/50 dark:to-gray-800/50 rounded-2xl p-12 border-2 border-slate-300 dark:border-slate-600">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Practice Space
          </h3>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 border-2 border-slate-300 dark:border-slate-600 min-h-[200px] flex items-center justify-center">
            <p className="text-2xl text-muted-foreground text-center">
              Space for additional examples and practice clues
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenWordsSlide;
