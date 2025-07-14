import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ContainersExampleSlide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Here is an example:
      </h1>
      
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-12 w-full">
        <div className="text-center mb-12">
          <p className="text-5xl font-semibold text-foreground mb-8 leading-relaxed">
            {currentStep >= 1 ? (
              <>
                {currentStep >= 2 && <span className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-semibold">Brought about</span>}{currentStep >= 2 && " "}
                <span className={currentStep >= 1 ? "bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded font-semibold" : ""}>fuel</span>
                {currentStep >= 3 && " "}<span className={currentStep >= 3 ? "bg-cyan-200 dark:bg-cyan-800 px-2 py-1 rounded font-semibold" : ""}>{currentStep >= 3 ? "slump" : currentStep === 0 ? " slump" : ""}</span> (3)"
              </>
            ) : (
              "\"Brought about fuel slump (3)\""
            )}
          </p>
        </div>

        {currentStep >= 1 && (
          <div className="grid grid-cols-3 gap-10 mb-12">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600 text-center">
              <h4 className="text-3xl font-semibold text-foreground mb-4">Definition</h4>
              <p className="text-3xl text-blue-700 dark:text-blue-300 font-medium">"fuel"</p>
            </div>

            {currentStep >= 2 && (
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-8 border-2 border-amber-300 dark:border-amber-600 text-center">
                <h4 className="text-3xl font-semibold text-foreground mb-4">Container/Indicator</h4>
                <p className="text-3xl text-amber-700 dark:text-amber-300 font-medium">"Brought about"</p>
                <p className="text-xl text-amber-600 dark:text-amber-400 mt-2">G_A backwards</p>
              </div>
            )}

            {currentStep >= 3 && (
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/20 rounded-2xl p-8 border-2 border-cyan-300 dark:border-cyan-600 text-center">
                <h4 className="text-3xl font-semibold text-foreground mb-4">Contents</h4>
                <p className="text-3xl text-cyan-700 dark:text-cyan-300 font-medium">"slump" = S</p>
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
              Show Container
            </Button>
          )}

          {currentStep === 2 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show Contents
            </Button>
          )}

          {currentStep === 3 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show Solution
            </Button>
          )}
          
          {currentStep === 4 && (
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-600">
              <p className="text-4xl font-bold text-emerald-700 dark:text-emerald-300 mb-3">
                GAS
              </p>
              <p className="text-3xl text-muted-foreground">
                G + A backwards with S inside = GAS (fuel)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContainersExampleSlide;