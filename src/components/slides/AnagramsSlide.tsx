
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const AnagramsSlide = () => {
  const [revealedAnswers, setRevealedAnswers] = useState<{[key: string]: boolean}>({});

  const revealAnswer = (key: string) => {
    setRevealedAnswers(prev => ({ ...prev, [key]: true }));
  };

  const examples = [
    {
      key: 'wildcat',
      clue: 'Confused cat in hat is a mammal (7)',
      definition: 'a mammal',
      indicator: 'Confused',
      fodder: 'cat in hat',
      answer: 'WILDCAT',
      explanation: 'Anagram of "catinhat" → WILDCAT'
    },
    {
      key: 'teacher',
      clue: 'Educator becomes a cheat, terribly (7)',
      definition: 'Educator',
      indicator: 'terribly',
      fodder: 'a cheat',
      answer: 'TEACHER',
      explanation: 'Anagram of "acheat" → TEACHER'
    },
    {
      key: 'rescue',
      clue: 'Save secure arrangement (6)',
      definition: 'Save',
      indicator: 'arrangement',
      fodder: 'secure',
      answer: 'RESCUE',
      explanation: 'Anagram of "secure" → RESCUE'
    }
  ];

  return (
    <div className="space-y-12 max-w-7xl">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
        Anagrams: Rearranging Letters
      </h1>
      
      <div className="space-y-10">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-10">
          <h3 className="text-4xl font-semibold text-foreground mb-8 text-center">
            How Anagrams Work
          </h3>
          <p className="text-2xl text-muted-foreground mb-10 text-center leading-relaxed">
            The letters of one or more words are rearranged to form the answer.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-8 border-2 border-emerald-300 dark:border-emerald-600">
              <h4 className="text-2xl font-semibold text-foreground mb-4">1. Definition</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Usually at the start or end of the clue
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-red-300 dark:border-red-600">
              <h4 className="text-2xl font-semibold text-foreground mb-4">2. Indicator</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Words suggesting mixing or confusion
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-violet-300 dark:border-violet-600">
              <h4 className="text-2xl font-semibold text-foreground mb-4">3. Fodder</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The letters to be rearranged
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-2xl p-10 border-2 border-orange-200 dark:border-orange-700">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Common Anagram Indicators
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-red-200 dark:border-red-700">
              <p className="text-xl font-medium text-red-700 dark:text-red-400 mb-3">Confusion:</p>
              <p className="text-lg text-muted-foreground leading-relaxed">confused, mixed up, jumbled, muddled</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
              <p className="text-xl font-medium text-blue-700 dark:text-blue-400 mb-3">Movement:</p>
              <p className="text-lg text-muted-foreground leading-relaxed">twisted, turned, shuffled, tossed</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
              <p className="text-xl font-medium text-green-700 dark:text-green-400 mb-3">Damage:</p>
              <p className="text-lg text-muted-foreground leading-relaxed">broken, shattered, ruined, wrecked</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700">
              <p className="text-xl font-medium text-purple-700 dark:text-purple-400 mb-3">Change:</p>
              <p className="text-lg text-muted-foreground leading-relaxed">reformed, rearranged, adapted, adjusted</p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <h3 className="text-4xl font-semibold text-foreground text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Solve Some Together!
          </h3>
          
          {examples.map((example, index) => (
            <div key={example.key} className={`bg-gradient-to-br ${
              index === 0 ? 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-cyan-200 dark:border-cyan-700' :
              index === 1 ? 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700' :
              'from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 border-violet-200 dark:border-violet-700'
            } border-2 rounded-2xl p-10`}>
              <div className="text-center mb-10">
                <p className="text-4xl font-semibold text-foreground mb-4 leading-relaxed">
                  "{example.clue}"
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-600">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">Definition</h4>
                  <p className="text-2xl text-blue-700 dark:text-blue-300 font-medium">"{example.definition}"</p>
                </div>

                <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-red-300 dark:border-red-600">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">Indicator</h4>
                  <p className="text-2xl text-red-700 dark:text-red-300 font-medium">"{example.indicator}"</p>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-6 border-2 border-green-300 dark:border-green-600">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">Fodder</h4>
                  <p className="text-2xl text-green-700 dark:text-green-300 font-medium">"{example.fodder}"</p>
                </div>
              </div>

              <div className="text-center">
                {!revealedAnswers[example.key] ? (
                  <Button 
                    onClick={() => revealAnswer(example.key)}
                    className="text-2xl px-12 py-6 rounded-xl"
                    size="lg"
                  >
                    Reveal Answer
                  </Button>
                ) : (
                  <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/20 rounded-2xl p-8 border-2 border-purple-300 dark:border-purple-600">
                    <p className="text-5xl font-bold text-purple-700 dark:text-purple-300 mb-4">
                      {example.answer}
                    </p>
                    <p className="text-2xl text-muted-foreground">
                      {example.explanation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-800/50 dark:to-gray-800/50 rounded-2xl p-10 border-2 border-slate-300 dark:border-slate-600">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Key Tips for Anagrams
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border-2 border-green-300 dark:border-green-700">
              <h4 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-6">✓ Remember:</h4>
              <ul className="space-y-3 text-xl text-muted-foreground">
                <li>• Count the letters carefully</li>
                <li>• Look for obvious indicator words</li>
                <li>• The fodder gives you all the letters</li>
                <li>• Definition is separate from wordplay</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-8 border-2 border-blue-300 dark:border-blue-700">
              <h4 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-6">💡 Pro Tips:</h4>
              <ul className="space-y-3 text-xl text-muted-foreground">
                <li>• Start with common letter patterns</li>
                <li>• Look for double letters</li>
                <li>• Consider word endings (-ING, -ED, etc.)</li>
                <li>• Practice makes perfect!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnagramsSlide;
