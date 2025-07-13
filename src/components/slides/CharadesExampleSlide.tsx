import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CharadesExampleSlide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Let's Solve One Together!
      </h1>
      
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-2 border-orange-200 dark:border-orange-700 rounded-2xl p-12 w-full">
        <div className="text-center mb-12">
          <p className="text-5xl font-semibold text-foreground mb-8 leading-relaxed">
            {currentStep >= 1 ? (
              <>
                "<span className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-semibold">Over</span> <span className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-semibold">100</span> <span className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-semibold">college and university</span> <span className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-semibold">runs</span> <span className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded font-semibold">take place</span> (5)"
              </>
            ) : (
              "\"Over 100 college and university runs take place (5)\""
            )}
          </p>
        </div>

        {currentStep >= 1 && (
          <div className="grid grid-cols-3 gap-10 mb-12">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600 text-center">
              <h4 className="text-3xl font-semibold text-foreground mb-4">Definition</h4>
              <p className="text-3xl text-blue-700 dark:text-blue-300 font-medium">"take place"</p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-300 dark:border-green-600 text-center">
              <h4 className="text-3xl font-semibold text-foreground mb-4">Parts</h4>
              <p className="text-3xl text-green-700 dark:text-green-300 font-medium">"Over" + "100" + "CU" + "runs"</p>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-red-300 dark:border-red-600 text-center">
              <h4 className="text-3xl font-semibold text-foreground mb-4">Breakdown</h4>
              <p className="text-3xl text-red-700 dark:text-red-300 font-medium">O + C + CU + R</p>
            </div>
          </div>
        )}

        <div className="text-center">
          {currentStep === 0 && (
            <Button 
              onClick={nextStep}
              className="text-3xl px-16 py-8 rounded-xl"
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
                OCCUR
              </p>
              <p className="text-xl text-muted-foreground">
                O (over) + C (100) + CU (college & university) + R (runs) = OCCUR
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharadesExampleSlide;