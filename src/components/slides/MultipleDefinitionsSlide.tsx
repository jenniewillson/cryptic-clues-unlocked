import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const MultipleDefinitionsSlide = () => {
  const [step, setStep] = useState(0);
  const next = () => setStep((s) => s + 1);

  return (
    <div className="h-full flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-6 md:mb-8 bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
        Multiple Definitions (Rare)
      </h1>

      <section className="w-full space-y-6">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-700 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-lg md:text-xl text-muted-foreground">
            Occasionally, a clue can have more than two definitions. These “multiple definition” clues are uncommon but elegant when each word is a valid definition of the same answer.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-6 md:p-8">
          <div className="text-center mb-6">
            <p className="text-2xl md:text-4xl font-semibold text-foreground leading-relaxed">
              "
              <span className={step >= 1 ? 'bg-cyan-200/70 dark:bg-cyan-800/60 px-2 py-1 rounded font-semibold' : ''}>Woman</span>
              {' '} 
              <span className={step >= 1 ? 'bg-blue-200/70 dark:bg-blue-800/60 px-2 py-1 rounded font-semibold' : ''}>grew</span>
              {' '} 
              <span className={step >= 1 ? 'bg-indigo-200/70 dark:bg-indigo-800/60 px-2 py-1 rounded font-semibold' : ''}>flower?</span>
              " (4)
            </p>
          </div>

          {false && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-cyan-100 to-sky-100 dark:from-cyan-900/30 dark:to-sky-900/20 rounded-2xl p-4 md:p-6 border-2 border-cyan-300 dark:border-cyan-600 text-center">
                <h4 className="text-lg md:text-2xl font-semibold text-foreground mb-2">Definition 1</h4>
                <p className="text-xl text-cyan-700 dark:text-cyan-300 font-medium">Woman</p>
                <p className="text-sm text-muted-foreground mt-1">A woman's name: Rose</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-2xl p-4 md:p-6 border-2 border-blue-300 dark:border-blue-600 text-center">
                <h4 className="text-lg md:text-2xl font-semibold text-foreground mb-2">Definition 2</h4>
                <p className="text-xl text-blue-700 dark:text-blue-300 font-medium">grew</p>
                <p className="text-sm text-muted-foreground mt-1">Past tense of rise: rose</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/20 rounded-2xl p-4 md:p-6 border-2 border-indigo-300 dark:border-indigo-600 text-center">
                <h4 className="text-lg md:text-2xl font-semibold text-foreground mb-2">Definition 3</h4>
                <p className="text-xl text-indigo-700 dark:text-indigo-300 font-medium">flower?</p>
                <p className="text-sm text-muted-foreground mt-1">A flower (the plant): rose</p>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-4 border-2 border-emerald-300 dark:border-emerald-600 text-center">
              <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-300 mb-1">ROSE</p>
              <p className="text-base md:text-lg text-muted-foreground">
                ROSE = woman (name), grew (past tense of rise), flower (the plant)
              </p>
            </div>
          )}
        </div>

        <div className="text-center">
          {step === 0 && (
            <Button onClick={next} size="lg" className="text-xl md:text-2xl px-8 md:px-12 py-5 md:py-6 rounded-xl">Show Solution</Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default MultipleDefinitionsSlide;
