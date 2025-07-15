import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ReversalsSlide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-6xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Reversals
      </h1>
      <h2 className="text-3xl font-semibold text-center text-muted-foreground mb-8">
        Words or Parts Written Backwards
      </h2>
      
      <div className="space-y-8 w-full">
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border-2 border-indigo-200 dark:border-indigo-700 rounded-2xl p-8">
          <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">
            How Reversals Work
          </h3>
          <p className="text-xl text-muted-foreground mb-6 text-center leading-relaxed">
            The answer or part of it is spelled backwards from what appears in the clue.
          </p>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-red-300 dark:border-red-600 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-3">Direction</h4>
              <p className="text-lg text-muted-foreground">"back", "reverse", "returning"</p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-3">Movement</h4>
              <p className="text-lg text-muted-foreground">"turned", "reflected", "withdrawn"</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-3">Opposition</h4>
              <p className="text-lg text-muted-foreground">"against", "opposite", "contrary"</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-2 border-amber-200 dark:border-amber-700 rounded-2xl p-8">
          <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">
            Direction Matters!
          </h3>
          <p className="text-xl text-muted-foreground mb-6 text-center leading-relaxed">
            The reversal indicators must work with the direction of the clue itself:
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-3">Down Clues</h4>
              <p className="text-lg text-muted-foreground">"up" only works for down clues</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-3">Across Clues</h4>
              <p className="text-lg text-muted-foreground">"from the East" only works for across clues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReversalsSlide;