import React from 'react';
import { Globe2, Book, Info } from 'lucide-react';

const ForeignWordsSlide = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <header className="text-center mb-6 md:mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Foreign Words in Clues
        </h1>
      </header>

      <main className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-6 md:p-8">
        <section className="text-center mb-6">
          <p className="text-muted-foreground text-lg">
            As you might expect, a limited vocabulary!
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Articles and nationalities */}
          <article className="bg-card/60 rounded-2xl p-5 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Book className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Articles & Nationalities</h3>
            </div>
            <div className="space-y-2 text-base md:text-lg">
              <p>
                “The French” → <span className="font-semibold">LE</span>, <span className="font-semibold">LA</span>, occasionally <span className="font-semibold">LES</span>.
              </p>
              <p>
                Similarly “The Italian” or “The Spanish”.
              </p>
              <p>
                Indefinite articles are less common, but do appear.
              </p>
            </div>
          </article>

          {/* Common greetings & polar answers */}
          <article className="bg-card/60 rounded-2xl p-5 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Globe2 className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Common Words & Greetings</h3>
            </div>
            <div className="space-y-2 text-base md:text-lg">
              <p>
                YES & NO
              </p>
              <p>
                HELLO & GOODBYE
              </p>
              <p className="text-muted-foreground">
                …from several European languages & occasionally others
              </p>
            </div>
          </article>

          {/* Alcoholic drinks */}
          <article className="bg-card/60 rounded-2xl p-5 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Globe2 className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Alcoholic Drinks</h3>
            </div>
            <div className="space-y-2 text-base md:text-lg">
              <p>
                Alcoholic drinks are popular indicators — “French wine”, “wine from France” may indicate:
              </p>
              <p className="font-semibold">VIN, ROUGE, BLANC</p>
              <p className="text-muted-foreground">…or almost any variety of French wine you have heard of!</p>
            </div>
          </article>

          {/* EST caution */}
          <article className="bg-card/60 rounded-2xl p-5 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Info className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Watch out for “EST”</h3>
            </div>
            <div className="space-y-2 text-base md:text-lg">
              <p>
                “EST” may be indicated by “East of France” or “Eastern Standard Time” — or even <span className="font-semibold">Estonia</span>.
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default ForeignWordsSlide;
