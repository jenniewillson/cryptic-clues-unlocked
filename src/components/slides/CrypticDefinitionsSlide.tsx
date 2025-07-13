import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CrypticDefinitionsSlide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-6xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
        Cryptic Definitions
      </h1>
      <h2 className="text-3xl font-semibold text-center text-muted-foreground mb-8">
        Clever, Indirect Descriptions
      </h2>
      
      <div className="space-y-8 w-full">
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border-2 border-rose-200 dark:border-rose-700 rounded-2xl p-8">
          <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">
            How Cryptic Definitions Work
          </h3>
          <p className="text-xl text-muted-foreground mb-6 text-center leading-relaxed">
            The entire clue is one clever, indirect definition with no separate wordplay.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-4">✓ Think Laterally</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Often involves puns, metaphors, or alternative meanings of common phrases.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-4">⚡ No Wordplay</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike other cryptic clues, there's no separate construction mechanism.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-8">
          <div className="text-center mb-6">
            <p className="text-3xl font-semibold text-foreground mb-4">
              "A good place to go if you're looking for trouble! (10)"
            </p>
          </div>

          <div className="text-center">
            {currentStep === 0 && (
              <Button 
                onClick={nextStep}
                className="text-xl px-8 py-4 rounded-xl"
                size="lg"
              >
                Think About It
              </Button>
            )}
            
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-900/30 dark:to-gray-900/20 rounded-2xl p-6 border-2 border-slate-300 dark:border-slate-600">
                  <p className="text-2xl text-foreground mb-4">
                    "<span className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-semibold">A good place to go if you're looking for trouble!</span> (10)"
                  </p>
                  <div className="space-y-2 text-lg text-muted-foreground">
                    <p><span className="text-amber-600 dark:text-amber-400 font-semibold">Cryptic Definition:</span> Think literally about where you would look for trouble</p>
                    <p>What kind of building would be used to "watch" or "look for" trouble?</p>
                  </div>
                </div>
                
                <Button 
                  onClick={nextStep}
                  className="text-2xl px-12 py-6 rounded-xl"
                  size="lg"
                >
                  Show Solution
                </Button>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-600">
                <p className="text-4xl font-bold text-emerald-700 dark:text-emerald-300 mb-3">
                  WATCHTOWER
                </p>
                <p className="text-xl text-muted-foreground">
                  A watchtower is literally where you "watch" for "trouble"!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrypticDefinitionsSlide;