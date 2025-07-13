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
            "More for one to mash up (6)"
          </p>
        </div>

        {currentStep >= 1 && (
          <div className="space-y-6 mb-10">
            <div className="bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-900/30 dark:to-gray-900/20 rounded-2xl p-6 border-2 border-slate-300 dark:border-slate-600">
              <p className="text-2xl text-foreground mb-4">
                "More for <span className="bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded font-semibold">one</span> to <span className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-semibold">mash up</span> (6)"
              </p>
              <div className="grid grid-cols-3 gap-4 text-lg text-muted-foreground">
                <div><span className="text-purple-600 dark:text-purple-400 font-semibold">Definition by example:</span> "More for one" (example: Thomas More)</div>
                <div><span className="text-amber-600 dark:text-amber-400 font-semibold">Anagram indicator:</span> "mash up"</div>
                <div><span className="text-blue-600 dark:text-blue-400 font-semibold">Fodder:</span> "one" → anagram of "one"</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Solving Process:</h4>
              <div className="space-y-2 text-lg text-muted-foreground">
                <p>1. "More for one" = example of someone called "More" (Thomas More)</p>
                <p>2. "mash up" = anagram indicator</p>
                <p>3. Anagram of "one" + "th" + "mas" = THOMAS</p>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-600 mb-10">
            <p className="text-4xl font-bold text-emerald-700 dark:text-emerald-300 mb-3">
              THOMAS
            </p>
            <p className="text-xl text-muted-foreground">
              Thomas More is an example of "More for one" - the definition works by example rather than direct meaning
            </p>
          </div>
        )}

        <div className="flex justify-center">
          {currentStep < 2 && (
            <Button onClick={nextStep} size="lg" className="text-lg px-8 py-3">
              {currentStep === 0 ? "Show Analysis" : "Show Solution"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DefinitionByExampleSlide;