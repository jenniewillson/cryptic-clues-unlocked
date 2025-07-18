import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ImportantWordsSlide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
        Don't Forget, Every Word Matters!
      </h1>
      
      <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-200 dark:border-red-700 rounded-2xl p-12 w-full">
        <div className="text-center mb-12">
          <p className="text-5xl font-semibold text-foreground mb-8 leading-relaxed">
            "<span className={currentStep >= 1 ? "bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded font-semibold" : ""}>Threat</span> <span className={currentStep >= 4 ? "bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded font-semibold" : ""}>is</span> <span className={currentStep >= 2 ? "bg-red-200 dark:bg-red-800 px-2 py-1 rounded font-semibold" : ""}>circumvented</span> by <span className={currentStep >= 3 ? "bg-green-200 dark:bg-green-800 px-2 py-1 rounded font-semibold" : ""}>rook</span> and <span className={currentStep >= 3 ? "bg-green-200 dark:bg-green-800 px-2 py-1 rounded font-semibold" : ""}>king</span>" (4)
          </p>
        </div>

        {currentStep >= 1 && currentStep < 5 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
              <h4 className="text-2xl font-semibold text-foreground mb-3">Definition</h4>
              <p className="text-2xl text-blue-700 dark:text-blue-300 font-medium">"Threat"</p>
            </div>

            {currentStep >= 2 && (
              <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-red-300 dark:border-red-600 text-center">
                <h4 className="text-2xl font-semibold text-foreground mb-3">Container Indicator</h4>
                <p className="text-2xl text-red-700 dark:text-red-300 font-medium">"circumvented"</p>
              </div>
            )}

            {currentStep >= 3 && (
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600 text-center">
                <h4 className="text-2xl font-semibold text-foreground mb-3">Chess Pieces</h4>
                <p className="text-2xl text-green-700 dark:text-green-300 font-medium">"rook" = R, "king" = K</p>
              </div>
            )}

            {currentStep >= 4 && (
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-6 border-2 border-amber-300 dark:border-amber-600 text-center">
                <h4 className="text-2xl font-semibold text-foreground mb-3">Key Word!</h4>
                <p className="text-2xl text-amber-700 dark:text-amber-300 font-medium">"IS"</p>
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
              Show Container Indicator
            </Button>
          )}

          {currentStep === 2 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show Chess Pieces
            </Button>
          )}

          {currentStep === 3 && (
            <Button 
              onClick={nextStep}
              className="text-2xl px-12 py-6 rounded-xl"
              size="lg"
            >
              Show the Important Word
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
                  RISK
                </p>
                <p className="text-3xl text-muted-foreground">
                  R (rook) + IS (circumvented by) + K (king) = RISK (threat)
                </p>
              </div>
              <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/20 rounded-2xl p-6 border-2 border-red-300 dark:border-red-600">
                <p className="text-2xl text-red-700 dark:text-red-300">
                  It's easy to overlook the important word "IS" in this clue!
                </p>
              </div>
            </div>
          )}
        </div>

        {currentStep === 5 && (
          <div className="mt-10 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600">
            <h4 className="text-3xl font-semibold text-foreground mb-6 text-center">
              About Link Words
            </h4>
            <p className="text-xl text-muted-foreground leading-relaxed text-center">
              You will see link words in clues - more in some puzzles than others, but they should be really clearly link words (ideally quite short in most cases) that make sense and do not affect the cryptic reading of the clue.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImportantWordsSlide;