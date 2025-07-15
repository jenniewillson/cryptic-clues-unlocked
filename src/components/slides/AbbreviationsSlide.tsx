import React from 'react';
import { Book, Globe, Music, Calendar } from 'lucide-react';

const AbbreviationsSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Abbreviations in Clues
      </h1>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-8 w-full max-h-[calc(100vh-200px)] overflow-y-auto">
        <div className="text-center mb-6">
          <p className="text-xl text-muted-foreground mb-3">
            Many standard abbreviations are regularly used in cryptic clues
          </p>
          <p className="text-lg text-primary font-semibold">
            ⚡ They can work both ways round! ⚡
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Elements */}
          <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-red-300 dark:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">H</div>
              <h3 className="text-2xl font-semibold text-foreground">Elements</h3>
            </div>
            <div className="space-y-2 text-lg">
              <p><span className="font-bold text-red-700 dark:text-red-300">H</span> = Hydrogen</p>
              <p><span className="font-bold text-red-700 dark:text-red-300">O</span> = Oxygen</p>
              <p><span className="font-bold text-red-700 dark:text-red-300">C</span> = Carbon</p>
              <p><span className="font-bold text-red-700 dark:text-red-300">Au</span> = Gold</p>
            </div>
          </div>

          {/* Currencies */}
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">£</div>
              <h3 className="text-2xl font-semibold text-foreground">Currencies</h3>
            </div>
            <div className="space-y-2 text-lg">
              <p><span className="font-bold text-green-700 dark:text-green-300">£</span> = L (libra)</p>
              <p><span className="font-bold text-green-700 dark:text-green-300">$</span> = Dollar</p>
              <p><span className="font-bold text-green-700 dark:text-green-300">p</span> = Penny/Pence</p>
              <p><span className="font-bold text-green-700 dark:text-green-300">d</span> = Old penny</p>
            </div>
          </div>

          {/* Musical Notes */}
          <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600">
            <div className="flex items-center gap-3 mb-4">
              <Music className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-semibold text-foreground">Musical Notes & Directions</h3>
            </div>
            <div className="space-y-2 text-lg">
              <p><span className="font-bold text-purple-700 dark:text-purple-300">Doh, Re, Me, Fa, So, La, Ti</span></p>
              <p><span className="font-bold text-purple-700 dark:text-purple-300">p</span> = piano (quiet)</p>
              <p><span className="font-bold text-purple-700 dark:text-purple-300">f</span> = forte (loud)</p>
              <p><span className="font-bold text-purple-700 dark:text-purple-300">mp, ff, pp</span> etc.</p>
            </div>
          </div>

          {/* Days of the Week */}
          <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-6 border-2 border-amber-300 dark:border-amber-600">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-amber-600" />
              <h3 className="text-2xl font-semibold text-foreground">Days of the Week</h3>
            </div>
            <div className="space-y-2 text-lg">
              <p><span className="font-bold text-amber-700 dark:text-amber-300">M, T, W, T, F, S, S</span></p>
              <p><span className="font-bold text-amber-700 dark:text-amber-300">Mon, Tue, Wed</span> etc.</p>
              <p><span className="font-bold text-amber-700 dark:text-amber-300">Sunday, Monday</span> etc.</p>
            </div>
          </div>
        </div>

        {/* Reference */}
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/20 rounded-2xl p-5 border-2 border-cyan-300 dark:border-cyan-600 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Globe className="w-5 h-5 text-cyan-600" />
            <Book className="w-5 h-5 text-cyan-600" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Find More Abbreviations</h3>
          <p className="text-base text-muted-foreground mb-2">
            Lists of abbreviations can be found in dictionaries & on the web
          </p>
          <p className="text-base font-semibold text-cyan-700 dark:text-cyan-300">
            www.crosswordunclued.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbbreviationsSlide;