import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const LastLettersExampleSlide = () => {
  const [revealedAnswer, setRevealedAnswer] = useState(false);

  const revealAnswer = () => {
    setRevealedAnswer(true);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-6xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Last Letters Example
      </h1>
      <h2 className="text-3xl font-semibold text-center text-muted-foreground mb-8">
        Acrostics Using Final Letters
      </h2>
      
      <div className="space-y-8 w-full">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-700 rounded-2xl p-8">
          <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">
            How Last Letters Work
          </h3>
          <p className="text-xl text-muted-foreground mb-6 text-center leading-relaxed">
            Take the final letter from each word in sequence to spell out the answer.
          </p>
          
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
            <h4 className="text-xl font-semibold text-foreground mb-3">Indicator Words</h4>
            <p className="text-lg text-muted-foreground">"tails", "finally", "ends", "ultimately", "last", "back"</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-8">
          <div className="text-center mb-6">
            <p className="text-3xl font-semibold text-foreground mb-4">
              "The tails of common hippopotami hypnotic and inimitable - lovely! (4)"
            </p>
          </div>

          <div className="text-center">
            {!revealedAnswer ? (
              <Button 
                onClick={revealAnswer}
                className="text-xl px-8 py-4 rounded-xl"
                size="lg"
              >
                Reveal Answer
              </Button>
            ) : (
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600">
                <p className="text-4xl font-bold text-purple-700 dark:text-purple-300 mb-3">
                  NICE
                </p>
                <p className="text-xl text-muted-foreground mb-2">
                  Last letters of "commoN hippopotamI hypnotiC and inimitablE" = NICE
                </p>
                <p className="text-lg text-muted-foreground/80">
                  "Tails" indicates we need the final letters from each word
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastLettersExampleSlide;