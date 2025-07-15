import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const DeletionSubstitutionSlide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-5xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
        Deletion & Substitution
      </h1>
      <h2 className="text-3xl font-semibold text-center text-muted-foreground mb-8">
        Removing or Replacing Letters
      </h2>
      
      <div className="space-y-8 w-full">
        <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-8">
          <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">
            How Deletion & Substitution Work
          </h3>
          <p className="text-xl text-muted-foreground mb-6 text-center leading-relaxed">
            Remove specific letters from words, or replace one letter with another.
          </p>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-red-300 dark:border-red-600 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-3">Deletion</h4>
              <p className="text-lg text-muted-foreground">"without", "losing", "minus"</p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-3">Substitution</h4>
              <p className="text-lg text-muted-foreground">"for", "replacing", "instead of"</p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-3">Change</h4>
              <p className="text-lg text-muted-foreground">"becomes", "turns into", "altered"</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DeletionSubstitutionSlide;