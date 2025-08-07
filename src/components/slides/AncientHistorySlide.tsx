import React from 'react';

const AncientHistorySlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-5xl font-bold text-center text-foreground mb-10 bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
        History & Development – Ancient History
      </h1>

      <section className="space-y-8 w-full" aria-labelledby="ancient-history-heading">
        <div className="bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-sky-900/20 dark:to-cyan-900/20 border-2 border-sky-200 dark:border-sky-700 rounded-2xl p-8 shadow-xl">
          <p className="text-xl text-muted-foreground text-center leading-relaxed">
            Word puzzles have probably been around as long as writing.
          </p>
        </div>

        <article className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-center text-foreground mb-4">
            Roman examples – the SATOR/ROTAS square
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-6">
            Two were famously found in Pompeii.
          </p>
          <div className="flex justify-center">
            <pre aria-label="SATOR square" className="text-2xl font-mono tracking-widest text-foreground text-center leading-9 bg-card/60 rounded-xl p-6 border border-border">
ROTAS
OPERA
TENET
AREPO
SATOR
            </pre>
          </div>
        </article>
      </section>
    </div>
  );
};

export default AncientHistorySlide;
