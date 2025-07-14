import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const HomophonesExampleSlide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Here is an example:
      </h1>
      
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-10 w-full">
        <div className="text-center mb-10">
          <p className="text-4xl font-semibold text-foreground mb-6 leading-relaxed">
            {currentStep >= 1 ? (
              <>
                "<span className="bg-cyan-200 dark:bg-cyan-800 px-2 py-1 rounded font-semibold">Reported</span> <span className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-semibold">end</span> of <span className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded font-semibold">European country</span> (7)"
              </>
            ) : (
              "\"Reported end of European country (7)\""
            )}
          </p>
        </div>

        {currentStep === 1 && (
          <div className="grid grid-cols-3 gap-8 mb-10">
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/20 rounded-2xl p-6 border-2 border-cyan-300 dark:border-cyan-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Sound Indicator</h4>
              <p className="text-2xl text-cyan-700 dark:text-cyan-300 font-medium">"Reported"</p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-6 border-2 border-amber-300 dark:border-amber-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Sounds Like</h4>
              <p className="text-2xl text-amber-700 dark:text-amber-300 font-medium">"end" → finish</p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Definition</h4>
              <p className="text-2xl text-blue-700 dark:text-blue-300 font-medium">"European country"</p>
            </div>
          </div>
        )}

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
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show Solution
            </Button>
          )}
          
          {currentStep === 2 && (
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-600">
              <p className="text-4xl font-bold text-emerald-700 dark:text-emerald-300 mb-3">
                FINNISH
              </p>
              <p className="text-3xl text-muted-foreground">
                FINNISH sounds like "finish" (end) when reported
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomophonesExampleSlide;