import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const DoubleDefinitionsExampleSlide = () => {
  const [revealedAnswer, setRevealedAnswer] = useState(false);

  const revealAnswer = () => {
    setRevealedAnswer(true);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Let's Solve One Together!
      </h1>
      
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-12 w-full">
        <div className="text-center mb-12">
          <p className="text-5xl font-semibold text-foreground mb-8 leading-relaxed">
            "Tree covering made by dog (4)"
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-12">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-4">First Definition</h4>
            <p className="text-3xl text-blue-700 dark:text-blue-300 font-medium">"Tree covering"</p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-300 dark:border-green-600 text-center">
            <h4 className="text-3xl font-semibold text-foreground mb-4">Second Definition</h4>
            <p className="text-3xl text-green-700 dark:text-green-300 font-medium">"made by dog"</p>
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
                BARK
              </p>
              <p className="text-3xl text-muted-foreground">
                BARK means both tree covering and the sound a dog makes
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoubleDefinitionsExampleSlide;