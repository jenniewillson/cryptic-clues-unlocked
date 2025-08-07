import React from 'react';

const History20thEnglandSlide = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-6 md:mb-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
        History & Development – 20th Century England
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
        <article className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 border-2 border-indigo-200 dark:border-indigo-700 rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-foreground mb-2">1922</h2>
          <p className="text-lg text-muted-foreground text-balance">
            “A New Form of Puzzle in the Shape of a Word Square” appeared in Pearson’s Magazine.
          </p>
        </article>

        <article className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-foreground mb-2">November 1924</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Arthur Wynne’s first “British” puzzle was printed in the Sunday Express.
          </p>
        </article>

        <article className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-foreground mb-2">July 1925</h2>
          <p className="text-lg text-muted-foreground text-balance">
            The Daily Telegraph became the first British daily paper to include a crossword.
          </p>
        </article>

        <article className="bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30 border-2 border-teal-300 dark:border-teal-700 rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-foreground mb-2">Since 1930</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Most daily newspapers (Times, Guardian, Telegraph, etc.) include crosswords — often more than one per day.
          </p>
        </article>
      </section>
    </div>
  );
};

export default History20thEnglandSlide;
