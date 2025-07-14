import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const SpoonerismExampleSlide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Here is an example:
      </h1>
      
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-2xl p-10 w-full">
        <div className="text-center mb-10">
          <p className="text-4xl font-semibold text-foreground mb-6 leading-relaxed">
            {currentStep >= 1 ? (
              <>
                "<span className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded font-semibold">Charon provides role model for</span> <span className="bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded font-semibold">Spooner's</span> <span className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-semibold">inebriated supporter</span> (8)"
              </>
            ) : (
              "\"Charon provides role model for Spooner's inebriated supporter (8)\""
            )}
          </p>
        </div>

        {currentStep === 1 && (
          <div className="grid grid-cols-3 gap-8 mb-10">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Definition</h4>
              <p className="text-2xl text-blue-700 dark:text-blue-300 font-medium">"Charon provides role model for"</p>
              <p className="text-sm text-muted-foreground mt-2">(Charon was the ferryman in Greek mythology)</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Indicator</h4>
              <p className="text-2xl text-purple-700 dark:text-purple-300 font-medium">"Spooner's"</p>
              <p className="text-sm text-muted-foreground mt-2">(indicates spoonerism)</p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-6 border-2 border-amber-300 dark:border-amber-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Words to Swap</h4>
              <p className="text-2xl text-amber-700 dark:text-amber-300 font-medium">"inebriated supporter"</p>
              <p className="text-sm text-muted-foreground mt-2">(merry fan → ferry man)</p>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="mb-10 space-y-6">
            <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/20 rounded-2xl p-6 border-2 border-orange-300 dark:border-orange-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Step 1: Identify the Words</h4>
              <p className="text-2xl text-muted-foreground">
                "inebriated supporter" = <span className="font-bold text-orange-700 dark:text-orange-300">MERRY FAN</span>
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/20 rounded-2xl p-6 border-2 border-pink-300 dark:border-pink-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Step 2: Apply Spooner's Swap</h4>
              <p className="text-2xl text-muted-foreground">
                <span className="font-bold text-pink-700 dark:text-pink-300">M</span>ERRY <span className="font-bold text-pink-700 dark:text-pink-300">F</span>AN → <span className="font-bold text-pink-700 dark:text-pink-300">F</span>ERRY <span className="font-bold text-pink-700 dark:text-pink-300">M</span>AN
              </p>
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
              Show Spoonerism
            </Button>
          )}
          
          {currentStep === 2 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show Answer
            </Button>
          )}
          
          {currentStep === 3 && (
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-600">
              <p className="text-4xl font-bold text-emerald-700 dark:text-emerald-300 mb-3">
                FERRYMAN
              </p>
              <p className="text-2xl text-muted-foreground">
                MERRY FAN → FERRY MAN = FERRYMAN (8 letters)
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                Perfect match for "Charon provides role model for" (Charon was the ferryman)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpoonerismExampleSlide;