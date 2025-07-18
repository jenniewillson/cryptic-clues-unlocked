import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const DoubleDefinitionsExample2Slide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Another Example:
      </h1>
    
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-2xl p-8 w-full">
        <div className="text-center mb-8">
          <p className="text-4xl font-semibold text-foreground mb-6 leading-relaxed">
            "<span className={currentStep >= 1 ? "bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded font-semibold" : ""}>Film</span> <span className={currentStep >= 2 ? "bg-orange-200 dark:bg-orange-800 px-2 py-1 rounded font-semibold" : ""}>hen</span>? (5)"
          </p>
        </div>

        {currentStep >= 1 && currentStep < 3 && (
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-3">First Definition</h4>
              <p className="text-2xl text-purple-700 dark:text-purple-300 font-medium">"Film"</p>
              <p className="text-sm text-muted-foreground mt-2">(thin coating)</p>
            </div>

            {currentStep >= 2 && (
              <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/20 rounded-2xl p-6 border-2 border-orange-300 dark:border-orange-600 text-center">
                <h4 className="text-2xl font-semibold text-foreground mb-3">Second Definition</h4>
                <p className="text-2xl text-orange-700 dark:text-orange-300 font-medium">"hen"</p>
                <p className="text-sm text-muted-foreground mt-2">(female bird that lays)</p>
              </div>
            )}
          </div>
        )}
        
        {currentStep === 3 && (
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-4 border-2 border-emerald-300 dark:border-emerald-600 text-center">
            <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-300 mb-2">
              LAYER
            </p>
            <p className="text-xl text-muted-foreground">
              LAYER = film (coating) AND hen (one that lays eggs)
            </p>
          </div>
        )}
      </div>

      <div className="text-center mt-8">
        {currentStep === 0 && (
          <Button 
            onClick={nextStep}
            className="text-2xl px-12 py-6 rounded-xl"
            size="lg"
          >
            Show First Definition
          </Button>
        )}
        
        {currentStep === 1 && (
          <Button 
            onClick={nextStep}
            className="text-2xl px-12 py-6 rounded-xl"
            size="lg"
          >
            Show Second Definition
          </Button>
        )}

        {currentStep === 2 && (
          <Button 
            onClick={nextStep}
            className="text-2xl px-12 py-6 rounded-xl"
            size="lg"
          >
            Show Solution
          </Button>
        )}
      </div>
    </div>
  );
};

export default DoubleDefinitionsExample2Slide;