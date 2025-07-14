import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const DefinitionByExampleSlide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 2));
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-background to-muted/20">
      <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-2xl p-10 w-full">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-foreground mb-4">Definition by Example</h2>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Sometimes the definition gives an example rather than a direct meaning
          </p>
        </div>

        <div className="text-center mb-10">
          <p className="text-4xl font-semibold text-foreground mb-6 leading-relaxed">
            {currentStep >= 1 ? (
              <>
                "More <span className="bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded font-semibold">for one</span> <span className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded font-semibold">to mash</span> <span className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-semibold">up</span> (6)"
              </>
            ) : (
              "\"More for one to mash up (6)\""
            )}
          </p>
        </div>

        {currentStep === 1 && (
          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Definition by Example</h4>
              <p className="text-2xl text-purple-700 dark:text-purple-300 font-medium">"More for one"</p>
              <p className="text-sm text-muted-foreground mt-2">(Thomas More)</p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Fodder</h4>
              <p className="text-2xl text-green-700 dark:text-green-300 font-medium">"to mash"</p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-6 border-2 border-amber-300 dark:border-amber-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Anagram Indicator</h4>
              <p className="text-2xl text-amber-700 dark:text-amber-300 font-medium">"up"</p>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-600 mb-10">
            <p className="text-4xl font-bold text-emerald-700 dark:text-emerald-300 mb-3">
              THOMAS
            </p>
              <p className="text-3xl text-muted-foreground">
                Thomas More is an example of "More for one" - the definition works by example rather than direct meaning
              </p>
          </div>
        )}

        <div className="flex justify-center">
          {currentStep === 0 && (
            <Button onClick={nextStep} size="lg" className="text-lg px-8 py-3">
              Break Down Clue
            </Button>
          )}
          {currentStep === 1 && (
            <Button onClick={nextStep} size="lg" className="text-lg px-8 py-3">
              Reveal Answer
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DefinitionByExampleSlide;