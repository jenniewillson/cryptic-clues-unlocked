import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const DoubleDefinitionsExampleSlide = () => {
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
        {/* Example 1: Selfish aim */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-8">
          <div className="text-center mb-8">
            <p className="text-4xl font-semibold text-foreground mb-6 leading-relaxed">
              {currentStep >= 1 ? (
                <>
                  "<span className={currentStep >= 1 ? "bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded font-semibold" : ""}>Selfish</span> <span className={currentStep >= 2 ? "bg-green-200 dark:bg-green-800 px-2 py-1 rounded font-semibold" : ""}>aim</span> (4)"
                </>
              ) : (
                "\"Selfish aim (4)\""
              )}
            </p>
          </div>

          {currentStep >= 1 && (
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
                <h4 className="text-2xl font-semibold text-foreground mb-3">First Definition</h4>
                <p className="text-2xl text-blue-700 dark:text-blue-300 font-medium">"Selfish"</p>
              </div>

              {currentStep >= 2 && (
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600 text-center">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">Second Definition</h4>
                  <p className="text-2xl text-green-700 dark:text-green-300 font-medium">"aim"</p>
                </div>
              )}
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-4 border-2 border-emerald-300 dark:border-emerald-600 text-center">
              <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-300 mb-2">
                MEAN
              </p>
              <p className="text-xl text-muted-foreground">
                MEAN = selfish (cruel) AND intend (aim)
              </p>
            </div>
          )}
        </div>
        
        {/* Example 2: Film hen? */}
        {currentStep >= 4 && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-2xl p-8">
            <div className="text-center mb-8">
              <p className="text-4xl font-semibold text-foreground mb-6 leading-relaxed">
                {currentStep >= 5 ? (
                  <>
                    "<span className={currentStep >= 5 ? "bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded font-semibold" : ""}>Film</span> <span className={currentStep >= 6 ? "bg-orange-200 dark:bg-orange-800 px-2 py-1 rounded font-semibold" : ""}>hen</span>? (5)"
                  </>
                ) : (
                  "\"Film hen? (5)\""
                )}
              </p>
            </div>

            {currentStep >= 5 && (
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600 text-center">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">First Definition</h4>
                  <p className="text-2xl text-purple-700 dark:text-purple-300 font-medium">"Film"</p>
                  <p className="text-sm text-muted-foreground mt-2">(thin coating)</p>
                </div>

                {currentStep >= 6 && (
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/20 rounded-2xl p-6 border-2 border-orange-300 dark:border-orange-600 text-center">
                    <h4 className="text-2xl font-semibold text-foreground mb-3">Second Definition</h4>
                    <p className="text-2xl text-orange-700 dark:text-orange-300 font-medium">"hen"</p>
                    <p className="text-sm text-muted-foreground mt-2">(female bird that lays)</p>
                  </div>
                )}
              </div>
            )}
            
            {currentStep === 7 && (
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
        )}
      </div>

      <div className="text-center mt-8">
        {currentStep === 0 && (
          <Button 
            onClick={nextStep}
            className="text-2xl px-12 py-6 rounded-xl"
            size="lg"
          >
            Show First Example
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
        
        {currentStep === 3 && (
          <Button 
            onClick={nextStep}
            className="text-2xl px-12 py-6 rounded-xl"
            size="lg"
          >
            Show Second Example
          </Button>
        )}
        
        {currentStep === 4 && (
          <Button 
            onClick={nextStep}
            className="text-2xl px-12 py-6 rounded-xl"
            size="lg"
          >
            Show First Definition
          </Button>
        )}
        
        {currentStep === 5 && (
          <Button 
            onClick={nextStep}
            className="text-2xl px-12 py-6 rounded-xl"
            size="lg"
          >
            Show Second Definition
          </Button>
        )}
        
        {currentStep === 6 && (
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

export default DoubleDefinitionsExampleSlide;