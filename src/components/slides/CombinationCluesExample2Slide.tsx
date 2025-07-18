import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CombinationCluesExample2Slide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Another Example
      </h1>
      
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-12 w-full">
        <div className="text-center mb-12">
          <p className="text-4xl font-semibold text-foreground mb-8 leading-relaxed">
            <span className={currentStep >= 1 ? "bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded font-semibold" : ""}>Scientist's</span>{" "}
            <span className={currentStep >= 2 ? "bg-red-200 dark:bg-red-800 px-2 py-1 rounded font-semibold" : ""}>rampant sheep</span>{" "}
            <span className={currentStep >= 3 ? "bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-semibold" : ""}>that is</span>{" "}
            <span className={currentStep >= 4 ? "bg-green-200 dark:bg-green-800 px-2 py-1 rounded font-semibold" : ""}>repeatedly</span>{" "}
            <span className={currentStep >= 5 ? "bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded font-semibold" : ""}>straddling</span>{" "}
            <span className={currentStep >= 4 ? "bg-green-200 dark:bg-green-800 px-2 py-1 rounded font-semibold" : ""}>dog</span> (11)
          </p>
        </div>

        {currentStep >= 1 && (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-4 border-2 border-blue-300 dark:border-blue-600 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-2">Definition</h4>
              <p className="text-lg text-blue-700 dark:text-blue-300 font-medium">"Scientist"</p>
            </div>

            {currentStep >= 2 && (
              <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-4 border-2 border-red-300 dark:border-red-600 text-center">
                <h4 className="text-lg font-semibold text-foreground mb-2">Reversal</h4>
                <p className="text-lg text-red-700 dark:text-red-300 font-medium">"rampant" reverses "sheep" = MAE</p>
              </div>
            )}

            {currentStep >= 3 && (
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-4 border-2 border-amber-300 dark:border-amber-600 text-center">
                <h4 className="text-lg font-semibold text-foreground mb-2">Abbreviation</h4>
                <p className="text-lg text-amber-700 dark:text-amber-300 font-medium">"that is" = IE</p>
              </div>
            )}

            {currentStep >= 4 && (
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-4 border-2 border-green-300 dark:border-green-600 text-center">
                <h4 className="text-lg font-semibold text-foreground mb-2">Repetition</h4>
                <p className="text-lg text-green-700 dark:text-green-300 font-medium">"repeatedly dog" = CUR + CUR</p>
              </div>
            )}

            {currentStep >= 5 && (
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-4 border-2 border-purple-300 dark:border-purple-600 text-center">
                <h4 className="text-lg font-semibold text-foreground mb-2">Container</h4>
                <p className="text-lg text-purple-700 dark:text-purple-300 font-medium">"straddling" puts CUR+CUR inside MAE+IE</p>
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
              Show Reversal
            </Button>
          )}

          {currentStep === 2 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show Abbreviation
            </Button>
          )}

          {currentStep === 3 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show Repetition
            </Button>
          )}

          {currentStep === 4 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show Container
            </Button>
          )}

          {currentStep === 5 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show Solution
            </Button>
          )}
          
          {currentStep === 6 && (
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-600">
              <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-300 mb-3">
                MARIE CURIE
              </p>
              <p className="text-lg text-muted-foreground">
                MAE (reverse of EWE=sheep) + IE (that is) containing CUR (dog) repeated = MARIE CURIE (scientist)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CombinationCluesExample2Slide;