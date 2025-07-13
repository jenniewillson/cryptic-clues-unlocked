
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CharadesSlide = () => {
  const [revealedAnswers, setRevealedAnswers] = useState<{[key: string]: boolean}>({});

  const revealAnswer = (key: string) => {
    setRevealedAnswers(prev => ({ ...prev, [key]: true }));
  };

  const examples = [
    {
      key: 'sunbeam',
      clue: 'Star son ray (7)',
      definition: 'ray',
      part1: 'Star → SUN',
      part2: 'son → BEAM',
      answer: 'SUNBEAM',
      explanation: 'SUN (star) + BEAM (son) = SUNBEAM (ray of light)'
    }
  ];

  return (
    <div className="space-y-12 max-w-7xl">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
        Charades: Building Words from Parts
      </h1>
      
      <div className="space-y-10">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-200 dark:border-orange-700 rounded-2xl p-10">
          <h3 className="text-4xl font-semibold text-foreground mb-8 text-center">
            How Charades Work
          </h3>
          <p className="text-2xl text-muted-foreground mb-10 text-center leading-relaxed">
            The answer is built by joining together two or more parts, each clued separately.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600">
              <h4 className="text-2xl font-semibold text-foreground mb-4">1. Definition</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Usually at the beginning or end
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-300 dark:border-green-600">
              <h4 className="text-2xl font-semibold text-foreground mb-4">2. Part Clues</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each part of the answer is clued separately
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-8 border-2 border-purple-300 dark:border-purple-600">
              <h4 className="text-2xl font-semibold text-foreground mb-4">3. Join Together</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Parts combine to make the answer
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-10 border-2 border-yellow-200 dark:border-yellow-700">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Common Joining Indicators
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-red-200 dark:border-red-700">
              <p className="text-xl font-medium text-red-700 dark:text-red-400 mb-3">Addition:</p>
              <p className="text-lg text-muted-foreground">with, and, plus, added to</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
              <p className="text-xl font-medium text-blue-700 dark:text-blue-400 mb-3">Following:</p>
              <p className="text-lg text-muted-foreground">after, behind, following</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
              <p className="text-xl font-medium text-green-700 dark:text-green-400 mb-3">Supporting:</p>
              <p className="text-lg text-muted-foreground">on, over, supporting</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700">
              <p className="text-xl font-medium text-purple-700 dark:text-purple-400 mb-3">Sometimes:</p>
              <p className="text-lg text-muted-foreground">No indicator needed!</p>
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

                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">Part 1</h4>
                  <p className="text-2xl text-green-700 dark:text-green-300 font-medium">{example.part1}</p>
                </div>

                <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-red-300 dark:border-red-600">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">Part 2</h4>
                  <p className="text-2xl text-red-700 dark:text-red-300 font-medium">{example.part2}</p>
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

export default CharadesSlide;
