import React from 'react';

const ContainersExampleSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-4xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
        Containers Example
      </h1>
      
      <div className="w-full max-w-5xl">
        <div className="bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-900/30 dark:to-green-900/30 border-2 border-lime-200 dark:border-lime-700 rounded-2xl p-8 shadow-xl">
          
          {/* The Clue */}
          <div className="text-center mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-lime-300 dark:border-lime-600 shadow-lg">
              <h2 className="text-2xl font-bold text-lime-800 dark:text-lime-300 mb-2">The Clue</h2>
              <p className="text-3xl font-bold text-slate-800 dark:text-slate-200 italic">
                "Brought about fuel slump"
              </p>
              <p className="text-lg text-muted-foreground mt-2">(3)</p>
            </div>
          </div>

          {/* Analysis */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white/70 dark:bg-slate-800/50 rounded-xl p-6 border border-lime-200 dark:border-lime-700">
              <h3 className="text-xl font-semibold text-lime-800 dark:text-lime-300 mb-4">Breaking it down</h3>
              <div className="space-y-3 text-lime-700 dark:text-lime-400">
                <p><span className="font-semibold">Definition:</span> "fuel"</p>
                <p><span className="font-semibold">Container word:</span> "brought about" = GA (Go Around backwards)</p>
                <p><span className="font-semibold">Contents:</span> "slump" = S</p>
                <p><span className="font-semibold">Indicator:</span> "about" (surrounding)</p>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-slate-800/50 rounded-xl p-6 border border-lime-200 dark:border-lime-700">
              <h3 className="text-xl font-semibold text-lime-800 dark:text-lime-300 mb-4">The wordplay</h3>
              <div className="space-y-3 text-lime-700 dark:text-lime-400">
                <p>1. "brought" = GO</p>
                <p>2. "about" = indicates reversal AND container</p>
                <p>3. GO reversed = OG</p>
                <p>4. "slump" = S (first letter)</p>
                <p>5. Put S inside G_G</p>
              </div>
            </div>
          </div>

          {/* Visual Solution */}
          <div className="bg-gradient-to-r from-lime-100 to-green-100 dark:from-lime-900/50 dark:to-green-900/50 rounded-xl p-8 border-2 border-lime-300 dark:border-lime-600">
            <h3 className="text-2xl font-bold text-center text-lime-800 dark:text-lime-300 mb-6">The Solution</h3>
            
            <div className="flex justify-center items-center space-x-6 text-2xl font-mono">
              <div className="bg-orange-200 dark:bg-orange-800 px-4 py-2 rounded-lg">
                <span className="text-orange-800 dark:text-orange-200">G</span>
              </div>
              <div className="text-lime-600 dark:text-lime-400 text-xl">+</div>
              <div className="bg-blue-200 dark:bg-blue-800 px-4 py-2 rounded-lg">
                <span className="text-blue-800 dark:text-blue-200">A</span>
              </div>
              <div className="text-lime-600 dark:text-lime-400 text-xl">+</div>
              <div className="bg-purple-200 dark:bg-purple-800 px-4 py-2 rounded-lg">
                <span className="text-purple-800 dark:text-purple-200">S</span>
              </div>
              <div className="text-lime-600 dark:text-lime-400 text-xl">=</div>
              <div className="bg-emerald-200 dark:bg-emerald-800 px-6 py-3 rounded-lg border-2 border-emerald-400 dark:border-emerald-600">
                <span className="text-emerald-800 dark:text-emerald-200 font-bold text-3xl">GAS</span>
              </div>
            </div>

            <p className="text-center text-lime-700 dark:text-lime-400 mt-6 text-lg">
              G (from "brought about") contains A + S = <strong>GAS</strong> (fuel)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainersExampleSlide;