import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CharadesExampleSlide = () => {
  const [revealedAnswer, setRevealedAnswer] = useState(false);

  const revealAnswer = () => {
    setRevealedAnswer(true);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Let's Solve One Together!
      </h1>
      
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-2 border-orange-200 dark:border-orange-700 rounded-2xl p-12 w-full">
        <div className="text-center mb-12">
          <p className="text-5xl font-semibold text-foreground mb-8 leading-relaxed">
            "Star son ray (7)"
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10 mb-12">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-4">Definition</h4>
            <p className="text-3xl text-blue-700 dark:text-blue-300 font-medium">"ray"</p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-300 dark:border-green-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-4">Part 1</h4>
            <p className="text-3xl text-green-700 dark:text-green-300 font-medium">"Star" → SUN</p>
          </div>

          <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-red-300 dark:border-red-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-4">Part 2</h4>
            <p className="text-3xl text-red-700 dark:text-red-300 font-medium">"son" → BEAM</p>
          </div>
        </div>

        <div className="text-center">
          {!revealedAnswer ? (
            <Button 
              onClick={revealAnswer}
              className="text-3xl px-16 py-8 rounded-xl"
              size="lg"
            >
              Reveal Answer
            </Button>
          ) : (
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/20 rounded-2xl p-10 border-2 border-purple-300 dark:border-purple-600">
              <p className="text-6xl font-bold text-purple-700 dark:text-purple-300 mb-6">
                SUNBEAM
              </p>
              <p className="text-3xl text-muted-foreground">
                SUN (star) + BEAM (son) = SUNBEAM (ray of light)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharadesExampleSlide;