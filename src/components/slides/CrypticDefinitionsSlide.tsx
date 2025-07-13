
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CrypticDefinitionsSlide = () => {
  const [revealedAnswers, setRevealedAnswers] = useState<{[key: string]: boolean}>({});

  const revealAnswer = (key: string) => {
    setRevealedAnswers(prev => ({ ...prev, [key]: true }));
  };

  const examples = [
    {
      key: 'spine',
      clue: 'What holds a book together and keeps you upright (5)',
      answer: 'SPINE',
      explanation: 'A SPINE both holds a book together (book spine) and keeps you upright (backbone)'
    }
  ];

  return (
    <div className="space-y-12 max-w-7xl">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Cryptic Definitions: The Art of Clever Description
      </h1>
      
      <div className="space-y-10">
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border-2 border-indigo-200 dark:border-indigo-700 rounded-2xl p-10">
          <h3 className="text-4xl font-semibold text-foreground mb-8 text-center">
            How Cryptic Definitions Work
          </h3>
          <p className="text-2xl text-muted-foreground mb-10 text-center leading-relaxed">
            The entire clue is one clever, indirect description of the answer - no separate wordplay involved.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20 rounded-2xl p-8 border-2 border-green-300 dark:border-green-600">
              <h4 className="text-2xl font-semibold text-foreground mb-4">✓ What They Are</h4>
              <ul className="text-lg text-muted-foreground space-y-3 leading-relaxed">
                <li>• Witty, indirect descriptions</li>
                <li>• Often use double meanings</li>
                <li>• Require lateral thinking</li>
                <li>• Pure definition, no wordplay</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600">
              <h4 className="text-2xl font-semibold text-foreground mb-4">💡 Recognition Tips</h4>
              <ul className="text-lg text-muted-foreground space-y-3 leading-relaxed">
                <li>• No obvious wordplay indicators</li>
                <li>• Unusually clever or funny phrasing</li>
                <li>• Describes the answer uniquely</li>
                <li>• Often quite short</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-10 border-2 border-purple-200 dark:border-purple-700">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Types of Cryptic Definitions
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-red-200 dark:border-red-700">
              <h4 className="text-xl font-medium text-red-700 dark:text-red-400 mb-3">Double Meaning:</h4>
              <p className="text-lg text-muted-foreground">Uses multiple senses of words to create a clever description</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
              <h4 className="text-xl font-medium text-blue-700 dark:text-blue-400 mb-3">Lateral Thinking:</h4>
              <p className="text-lg text-muted-foreground">Requires you to think outside the box about what the answer could be</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
              <h4 className="text-xl font-medium text-green-700 dark:text-green-400 mb-3">Witty Description:</h4>
              <p className="text-lg text-muted-foreground">Often humorous or surprising way to describe something familiar</p>
            </div>
          </div>
        </div>

        {/* Space for examples */}
        <div className="space-y-10">
          <h3 className="text-4xl font-semibold text-foreground text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Solve Some Together!
          </h3>
          
          {examples.map((example) => (
            <div key={example.key} className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-10">
              <div className="text-center mb-10">
                <p className="text-4xl font-semibold text-foreground mb-4 leading-relaxed">
                  "{example.clue}"
                </p>
              </div>

              <div className="text-center mb-10">
                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-6 border-2 border-amber-300 dark:border-amber-600 inline-block">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">Think About...</h4>
                  <p className="text-xl text-muted-foreground">What could fit this clever description?</p>
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

        {/* Space for additional examples */}
        <div className="bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-800/50 dark:to-gray-800/50 rounded-2xl p-12 border-2 border-slate-300 dark:border-slate-600">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Practice Space
          </h3>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 border-2 border-slate-300 dark:border-slate-600 min-h-[200px] flex items-center justify-center">
            <p className="text-2xl text-muted-foreground text-center">
              Space for additional examples and practice clues
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-8 border-2 border-emerald-300 dark:border-emerald-600">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            💡 Pro Tip
          </h3>
          <p className="text-xl text-muted-foreground text-center leading-relaxed">
            When you can't find any wordplay indicators in a clue, consider whether it might be a cryptic definition. Look for clever, unusual, or humorous ways to describe the answer!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrypticDefinitionsSlide;
