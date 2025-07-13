import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const HiddenWordsExampleSlide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Let's Solve One Together!
      </h1>
      
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-10 w-full">
        <div className="text-center mb-10">
          <p className="text-4xl font-semibold text-foreground mb-6 leading-relaxed">
            "Snare found in extra parts (4)"
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-10">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
            <h4 className="text-2xl font-semibold text-foreground mb-3">Definition</h4>
            <p className="text-2xl text-blue-700 dark:text-blue-300 font-medium">"Snare"</p>
          </div>

          <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-red-300 dark:border-red-600 text-center">
            <h4 className="text-2xl font-semibold text-foreground mb-3">Indicator</h4>
            <p className="text-2xl text-red-700 dark:text-red-300 font-medium">"found in"</p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600 text-center">
            <h4 className="text-2xl font-semibold text-foreground mb-3">Container</h4>
            <p className="text-2xl text-green-700 dark:text-green-300 font-medium">"extra parts"</p>
          </div>
        </div>

        <div className="text-center">
          {currentStep === 0 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Break Down Clue
            </Button>
          )}
          
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-900/30 dark:to-gray-900/20 rounded-2xl p-6 border-2 border-slate-300 dark:border-slate-600">
                <p className="text-2xl text-foreground mb-4">
                  "Snare <span className="bg-cyan-200 dark:bg-cyan-800 px-2 py-1 rounded font-semibold">found in</span> <span className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-semibold">extra parts</span> (4)"
                </p>
                <div className="space-y-2 text-lg text-muted-foreground">
                  <p><span className="text-cyan-600 dark:text-cyan-400 font-semibold">Indicator:</span> "found in" (signals hidden word)</p>
                  <p><span className="text-amber-600 dark:text-amber-400 font-semibold">Container:</span> "extra parts"</p>
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
                TRAP
              </p>
              <p className="text-xl text-muted-foreground">
                Hidden in "ex<span className="bg-emerald-200 dark:bg-emerald-700 px-1 rounded font-bold">TRA P</span>arts" = TRAP
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HiddenWordsExampleSlide;