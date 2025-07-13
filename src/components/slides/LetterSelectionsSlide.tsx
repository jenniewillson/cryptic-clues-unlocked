import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const LetterSelectionsSlide = () => {
  const [revealedAnswer, setRevealedAnswer] = useState(false);

  const revealAnswer = () => {
    setRevealedAnswer(true);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-6xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
        Letter Selections
      </h1>
      <h2 className="text-3xl font-semibold text-center text-muted-foreground mb-8">
        Taking Specific Letters from Words
      </h2>
      
      <div className="space-y-8 w-full">
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-2 border-amber-200 dark:border-amber-700 rounded-2xl p-8">
          <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">
            How Letter Selections Work
          </h3>
          <p className="text-xl text-muted-foreground mb-6 text-center leading-relaxed">
            Take specific letters from words - first letters, last letters, alternate letters, etc.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-3">First Letters</h4>
              <p className="text-lg text-muted-foreground">"initially", "starts", "leaders"</p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-3">Last Letters</h4>
              <p className="text-lg text-muted-foreground">"finally", "ends", "tails"</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-3">Alternate Letters</h4>
              <p className="text-lg text-muted-foreground">"regularly", "odd", "even"</p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-amber-300 dark:border-amber-600 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-3">Middle Letters</h4>
              <p className="text-lg text-muted-foreground">"central", "heart", "core"</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-8">
          <div className="text-center mb-6">
            <p className="text-3xl font-semibold text-foreground mb-4">
              "Initially, every team is competent (4)"
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
                  ETIC
                </p>
                <p className="text-xl text-muted-foreground">
                  Initial letters of "Every Team Is Competent" = ETIC
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterSelectionsSlide;