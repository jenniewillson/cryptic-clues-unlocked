import React from 'react';
import { Trophy, Palette, Users } from 'lucide-react';

const GeneralKnowledgeSlide = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <header className="text-center mb-6 md:mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
          General Knowledge in Cryptic Crosswords
        </h1>
      </header>

      <main className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-6 md:p-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sport */}
          <article className="bg-card/60 rounded-2xl p-5 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Trophy className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Sport</h3>
            </div>
            <p className="text-base md:text-lg">
              Not everyone’s area! Cricket & football terms feature far too prominently in English crosswords.
            </p>
          </article>

          {/* Arts */}
          <article className="bg-card/60 rounded-2xl p-5 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Palette className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Art, Literature, Music</h3>
            </div>
            <p className="text-base md:text-lg">
              Often obscure, but generally fair if the wordplay is clear.
            </p>
          </article>

          {/* People */}
          <article className="bg-card/60 rounded-2xl p-5 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Prominent People</h3>
            </div>
            <p className="text-base md:text-lg">
              Politicians, entertainers, and other well-known figures — dead or alive — can appear as definitions or fodder.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default GeneralKnowledgeSlide;
