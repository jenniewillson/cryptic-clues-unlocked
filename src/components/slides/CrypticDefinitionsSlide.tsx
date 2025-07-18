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

            <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-4">⚡ No Wordplay</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike other cryptic clues, there's no separate construction mechanism.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CrypticDefinitionsSlide;