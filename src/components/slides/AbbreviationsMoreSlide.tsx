import React from 'react';
import { Compass, Globe2, Ruler, Hash } from 'lucide-react';

const AbbreviationsMoreSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-4">
      <h1 className="text-5xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
        More Standard Abbreviations
      </h1>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-8 w-full">
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Geographic Directions */}
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-5 border-2 border-blue-300 dark:border-blue-600">
            <div className="flex items-center gap-3 mb-3">
              <Compass className="w-7 h-7 text-blue-600" />
              <h3 className="text-xl font-semibold text-foreground">Geographic Directions</h3>
            </div>
            <div className="space-y-1 text-base">
              <p><span className="font-bold text-blue-700 dark:text-blue-300">N, S, E, W</span> = North, South, East, West</p>
              <p><span className="font-bold text-blue-700 dark:text-blue-300">NE, SW</span> etc. = Northeast, Southwest</p>
            </div>
          </div>

          {/* Countries */}
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-5 border-2 border-green-300 dark:border-green-600">
            <div className="flex items-center gap-3 mb-3">
              <Globe2 className="w-7 h-7 text-green-600" />
              <h3 className="text-xl font-semibold text-foreground">Countries & States</h3>
            </div>
            <div className="space-y-1 text-base">
              <p><span className="font-bold text-green-700 dark:text-green-300">UK, USA, FR</span> = ISO country codes</p>
              <p><span className="font-bold text-green-700 dark:text-green-300">NY, CA, TX</span> = US state codes</p>
              <p><span className="font-bold text-green-700 dark:text-green-300">NY</span> = New York (well-known towns)</p>
            </div>
          </div>

          {/* Units */}
          <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-5 border-2 border-purple-300 dark:border-purple-600">
            <div className="flex items-center gap-3 mb-3">
              <Ruler className="w-7 h-7 text-purple-600" />
              <h3 className="text-xl font-semibold text-foreground">Standard Units</h3>
            </div>
            <div className="space-y-1 text-base">
              <p><span className="font-bold text-purple-700 dark:text-purple-300">km, cl, mm</span> = kilometres, centilitres, millimetres</p>
              <p><span className="font-bold text-purple-700 dark:text-purple-300">ft, in, y</span> = feet, inches, yards</p>
              <p><span className="font-bold text-purple-700 dark:text-purple-300">m</span> = miles or metres</p>
              <p><span className="font-bold text-purple-700 dark:text-purple-300">F</span> = furlongs, fathoms, farthings</p>
            </div>
          </div>

          {/* Roman Numerals */}
          <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-5 border-2 border-amber-300 dark:border-amber-600">
            <div className="flex items-center gap-3 mb-3">
              <Hash className="w-7 h-7 text-amber-600" />
              <h3 className="text-xl font-semibold text-foreground">Roman Numerals</h3>
            </div>
            <div className="space-y-1 text-base">
              <p><span className="font-bold text-amber-700 dark:text-amber-300">I, V, X, L, C, D, M</span></p>
              <p className="text-sm text-muted-foreground">1, 5, 10, 50, 100, 500, 1000</p>
              <p className="text-sm text-muted-foreground">Often combined: IV (4), IX (9), XL (40), etc.</p>
            </div>
          </div>
        </div>

        {/* Reference */}
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/20 rounded-2xl p-5 border-2 border-cyan-300 dark:border-cyan-600 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Globe2 className="w-5 h-5 text-cyan-600" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Remember</h3>
          <p className="text-base text-muted-foreground mb-2">
            These abbreviations work both ways - you might need the abbreviation to get the word, or the word to get the abbreviation!
          </p>
          <p className="text-base font-semibold text-cyan-700 dark:text-cyan-300">
            www.crosswordunclued.com for comprehensive lists
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbbreviationsMoreSlide;