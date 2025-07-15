import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CombinationCluesExampleSlide = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentExample, setCurrentExample] = useState(1);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const nextExample = () => {
    setCurrentExample(prev => prev + 1);
    setCurrentStep(0);
  };

  if (currentExample === 1) {
    return (
      <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
        <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Combination Clue Examples
        </h1>
        
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-12 w-full">
          <div className="text-center mb-12">
            <p className="text-5xl font-semibold text-foreground mb-8 leading-relaxed">
              "Half of Elon Musk's head is wood (3)"
            </p>
          </div>

          {currentStep >= 1 && (
            <div className="grid grid-cols-4 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
                <h4 className="text-2xl font-semibold text-foreground mb-3">Definition</h4>
                <p className="text-2xl text-blue-700 dark:text-blue-300 font-medium">"wood"</p>
              </div>

              {currentStep >= 2 && (
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600 text-center">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">Letter Selection</h4>
                  <p className="text-2xl text-green-700 dark:text-green-300 font-medium">"Half of Elon" = EL</p>
                </div>
              )}

              {currentStep >= 3 && (
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/20 rounded-2xl p-6 border-2 border-orange-300 dark:border-orange-600 text-center">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">First Letters</h4>
                  <p className="text-2xl text-orange-700 dark:text-orange-300 font-medium">"Musk's head" = M</p>
                </div>
              )}

              {currentStep >= 4 && (
                <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600 text-center">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">Charades</h4>
                  <p className="text-2xl text-purple-700 dark:text-purple-300 font-medium">EL + M</p>
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
                Show Letter Selection
              </Button>
            )}

            {currentStep === 2 && (
              <Button 
                onClick={nextStep}
                className="text-2xl px-12 py-6 rounded-xl"
                size="lg"
              >
                Show First Letters
              </Button>
            )}

            {currentStep === 3 && (
              <Button 
                onClick={nextStep}
                className="text-2xl px-12 py-6 rounded-xl"
                size="lg"
              >
                Show Charades
              </Button>
            )}

            {currentStep === 4 && (
              <Button 
                onClick={nextStep}
                className="text-2xl px-12 py-6 rounded-xl"
                size="lg"
              >
                Show Solution
              </Button>
            )}
            
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-600">
                  <p className="text-4xl font-bold text-emerald-700 dark:text-emerald-300 mb-3">
                    ELM
                  </p>
                  <p className="text-3xl text-muted-foreground">
                    EL + M = ELM (type of wood)
                  </p>
                </div>
                <Button 
                  onClick={nextExample}
                  className="text-2xl px-12 py-6 rounded-xl"
                  size="lg"
                >
                  Next Example
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Another Example
      </h1>
      
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-12 w-full">
        <div className="text-center mb-12">
          <p className="text-4xl font-semibold text-foreground mb-8 leading-relaxed">
            "Scientist's rampant sheep that is repeatedly straddling dog (11)"
          </p>
        </div>

        {currentStep >= 1 && (
          <div className="grid grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-3">Definition</h4>
              <p className="text-xl text-blue-700 dark:text-blue-300 font-medium">"Scientist"</p>
            </div>

            {currentStep >= 2 && (
              <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-red-300 dark:border-red-600 text-center">
                <h4 className="text-xl font-semibold text-foreground mb-3">Anagram</h4>
                <p className="text-xl text-red-700 dark:text-red-300 font-medium">"rampant sheep" = MARIE</p>
              </div>
            )}

            {currentStep >= 3 && (
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600 text-center">
                <h4 className="text-xl font-semibold text-foreground mb-3">Repetition</h4>
                <p className="text-xl text-green-700 dark:text-green-300 font-medium">"repeatedly" = CU twice</p>
              </div>
            )}

            {currentStep >= 4 && (
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600 text-center">
                <h4 className="text-xl font-semibold text-foreground mb-3">Container</h4>
                <p className="text-xl text-purple-700 dark:text-purple-300 font-medium">MARIE around CUCU</p>
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
              Show Anagram
            </Button>
          )}

          {currentStep === 2 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show Repetition
            </Button>
          )}

          {currentStep === 3 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show Container
            </Button>
          )}

          {currentStep === 4 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show Solution
            </Button>
          )}
          
          {currentStep === 5 && (
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-600">
              <p className="text-4xl font-bold text-emerald-700 dark:text-emerald-300 mb-3">
                MARIE CURIE
              </p>
              <p className="text-2xl text-muted-foreground">
                MARIE (anagram of "sheep" rampant) containing CU + CU + RI + E = MARIE CURIE (scientist)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CombinationCluesExampleSlide;