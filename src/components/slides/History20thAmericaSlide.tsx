import React from 'react';

const History20thAmericaSlide = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-6 md:mb-10 bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
        History & Development – 20th Century America
      </h1>

      <section className="space-y-6 md:space-y-8 w-full">
        <article className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-700 rounded-2xl p-6 md:p-8 shadow-xl">
          
          <p className="text-lg text-muted-foreground text-balance">
            Arthur Wynne created a new puzzle for the New York World – FUN’s “Word-Cross Puzzle”.
          </p>
        </article>

        <article className="bg-gradient-to-br from-orange-50 to-rose-50 dark:from-orange-900/20 dark:to-rose-900/20 border-2 border-orange-200 dark:border-orange-700 rounded-2xl p-6 md:p-8 shadow-xl">
          
          <p className="text-lg text-muted-foreground text-balance">
            Modelled on puzzles he remembered from his childhood in Liverpool, England.
          </p>
        </article>

        <article className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border-2 border-rose-200 dark:border-rose-700 rounded-2xl p-6 md:p-8 shadow-xl">
          
          <p className="text-lg text-muted-foreground text-balance">
            First book of crossword puzzles published — bundled with a free pencil.
          </p>
        </article>

        <article className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border-2 border-amber-300 dark:border-amber-700 rounded-2xl p-6 md:p-8 shadow-xl text-center">
          
          <p className="text-lg text-muted-foreground">Half a million copies sold in the first year.</p>
        </article>
      </section>
    </div>
  );
};

export default History20thAmericaSlide;
