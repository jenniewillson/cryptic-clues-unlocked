import React from 'react';

const ContainersIntroSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-5xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
        Containers
      </h1>
      
      <div className="w-full max-w-4xl">
        <div className="bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-900/30 dark:to-green-900/30 border-2 border-lime-200 dark:border-lime-700 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <p className="text-2xl text-lime-800 dark:text-lime-300 font-medium mb-4">
              One word placed inside another word
            </p>
            <p className="text-lg text-lime-700 dark:text-lime-400 leading-relaxed">
              Container clues involve placing one word or part of a word inside another word. 
              The wordplay typically uses indicators that suggest inclusion or surrounding.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/50 dark:bg-slate-800/30 rounded-xl p-6 border border-lime-200 dark:border-lime-700">
              <h3 className="text-xl font-semibold text-lime-800 dark:text-lime-300 mb-4">Common Indicators</h3>
              <div className="space-y-2 text-lime-700 dark:text-lime-400">
                <p><strong>Inside:</strong> "in", "within", "inside"</p>
                <p><strong>Around:</strong> "around", "about", "surrounding"</p>
                <p><strong>Holding:</strong> "holding", "containing", "embracing"</p>
                <p><strong>Eating:</strong> "eating", "swallowing", "consuming"</p>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/30 rounded-xl p-6 border border-lime-200 dark:border-lime-700">
              <h3 className="text-xl font-semibold text-lime-800 dark:text-lime-300 mb-4">How It Works</h3>
              <div className="space-y-3 text-lime-700 dark:text-lime-400">
                <p>1. Identify the container word</p>
                <p>2. Identify what goes inside</p>
                <p>3. Place the inner word inside the outer word</p>
                <p>4. The result gives you the answer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContainersIntroSlide;