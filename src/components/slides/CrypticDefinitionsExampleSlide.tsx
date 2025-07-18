import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CrypticDefinitionsExampleSlide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Here are examples:
      </h1>
      
      <div className="space-y-8">
        {/* Example 1: A good place to go if you're looking for trouble! */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-8">
          <div className="text-center mb-8">
            <p className="text-4xl font-semibold text-foreground mb-6 leading-relaxed">
              "<span className={currentStep >= 1 ? "bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-semibold" : ""}>A good place to go if you're looking for trouble!</span> (10)"
            </p>
          </div>

          {currentStep >= 1 && (
            <div className="grid grid-cols-1 gap-8 mb-8">
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-6 border-2 border-amber-300 dark:border-amber-600 text-center">
                <h4 className="text-2xl font-semibold text-foreground mb-3">Cryptic Definition</h4>
                <p className="text-lg text-muted-foreground">Think literally about where you would look for trouble - what kind of building would be used to "watch" or "look for" trouble?</p>
              </div>
            </div>
          )}
          
          {currentStep >= 2 && (
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-4 border-2 border-emerald-300 dark:border-emerald-600 text-center">
              <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-300 mb-2">
                WATCHTOWER
              </p>
              <p className="text-xl text-muted-foreground">
                A watchtower is literally where you "watch" for "trouble"!
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="text-center mt-8">
        {currentStep === 0 && (
          <Button 
            onClick={nextStep}
            className="text-2xl px-12 py-6 rounded-xl"
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
            Show Solution
          </Button>
        )}
      </div>
    </div>
  );
};

export default CrypticDefinitionsExampleSlide;