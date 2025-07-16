import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ClueStructureExampleSlide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
        Example Breakdown
      </h1>
      
      <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-200 dark:border-orange-700 rounded-2xl p-12 w-full">
        <div className="text-center mb-12">
          <p className="text-5xl font-semibold text-foreground mb-8 leading-relaxed">
            "Confusing parrot for <span className={currentStep >= 1 ? "bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded font-semibold" : ""}>bird of prey</span> (6)"
          </p>
        </div>

        {currentStep >= 1 && (
          <div className="grid grid-cols-3 gap-10 mb-12">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600 text-center">
              <h4 className="text-3xl font-semibold text-foreground mb-4">Definition</h4>
              <p className="text-3xl text-blue-700 dark:text-blue-300 font-medium mb-3">"bird of prey"</p>
              <p className="text-xl text-muted-foreground">
                Straightforward description of the answer
              </p>
            </div>

            {currentStep >= 2 && (
              <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-red-300 dark:border-red-600 text-center">
                <h4 className="text-3xl font-semibold text-foreground mb-4">Indicator</h4>
                <p className="text-3xl text-red-700 dark:text-red-300 font-medium mb-3">"Confusing"</p>
                <p className="text-xl text-muted-foreground">
                  Signals an anagram
                </p>
              </div>
            )}

            {currentStep >= 3 && (
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-300 dark:border-green-600 text-center">
                <h4 className="text-3xl font-semibold text-foreground mb-4">Fodder</h4>
                <p className="text-3xl text-green-700 dark:text-green-300 font-medium mb-3">"parrot"</p>
                <p className="text-xl text-muted-foreground">
                  Letters to be rearranged
                </p>
              </div>
            )}
          </div>
        )}

        <div className="text-center">
          {currentStep === 0 && (
            <Button 
              onClick={nextStep}
              className="text-3xl px-16 py-8 rounded-xl"
              size="lg"
            >
              Show Definition
            </Button>
          )}
          
          {currentStep === 1 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show Indicator
            </Button>
          )}
          
          {currentStep === 2 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show Fodder
            </Button>
          )}
          
          {currentStep === 3 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Reveal Answer
            </Button>
          )}
          
          {currentStep === 4 && (
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600">
              <p className="text-4xl font-bold text-purple-700 dark:text-purple-300 mb-3">
                RAPTOR
              </p>
              <p className="text-xl text-muted-foreground">
                Anagram of "parrot" = RAPTOR (bird of prey)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClueStructureExampleSlide;