import React from 'react';

const LaterHistory19thSlide = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-6 md:mb-10 bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
        History & Development – Later History (19th Century)
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
        <article className="bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-indigo-900/20 dark:to-sky-900/20 border-2 border-indigo-200 dark:border-indigo-700 rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-foreground mb-3">1880</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            St Nicholas Magazine published a “Cross Word Enigma”.
          </p>
        </article>

        <article className="bg-gradient-to-br from-sky-50 to-teal-50 dark:from-sky-900/20 dark:to-teal-900/20 border-2 border-sky-200 dark:border-sky-700 rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-foreground mb-3">Diamond puzzles</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            Clues whose answers could be arranged to make a diamond shape.
          </p>
        </article>

        <article className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 border-2 border-teal-200 dark:border-teal-700 rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-foreground mb-3">1890</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            Airoldi published a word square puzzle in Milan… it didn’t catch on!
          </p>
        </article>

        <aside className="bg-gradient-to-br from-cyan-100 to-sky-100 dark:from-cyan-900/30 dark:to-sky-900/30 border-2 border-cyan-300 dark:border-cyan-700 rounded-2xl p-6 md:p-8 shadow-xl flex items-center justify-center">
          <div
            role="grid"
            aria-label="4x4 word square example"
            className="inline-grid grid-cols-4 gap-1 sm:gap-2 bg-card/60 rounded-xl p-4 border border-border"
          >
            {[
              "R","I","P","A",
              "O","D","E","R",
              "S","E","R","A",
              "A","M","E","N",
            ].map((ch, i) => (
              <div
                key={i}
                role="gridcell"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-md bg-background/60 text-foreground text-lg sm:text-xl md:text-2xl font-mono font-semibold"
              >
                {ch}
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default LaterHistory19thSlide;
