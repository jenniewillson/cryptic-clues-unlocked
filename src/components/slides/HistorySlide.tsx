
import React from 'react';

const HistorySlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
        The Birth of Crosswords
      </h1>
      
      <div className="grid grid-cols-2 gap-12 w-full">
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/20 rounded-2xl p-8 border-2 border-emerald-300 dark:border-emerald-600 shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-3xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">December 21, 1913</h3>
            <p className="text-xl text-emerald-700 dark:text-emerald-400">
              Arthur Wynne publishes the first crossword puzzle in the New York World newspaper, calling it a "word-cross."
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600 shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-3xl font-semibold text-blue-800 dark:text-blue-300 mb-4">Early 1920s</h3>
            <p className="text-xl text-blue-700 dark:text-blue-400">
              Crosswords become a craze in America. The first crossword book is published by Simon & Schuster in 1924.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20 rounded-2xl p-8 border-2 border-purple-300 dark:border-purple-600 shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-3xl font-semibold text-purple-800 dark:text-purple-300 mb-4">1920s Britain</h3>
            <p className="text-xl text-purple-700 dark:text-purple-400">
              Crosswords cross the Atlantic. British newspapers begin featuring puzzles, but they're initially dismissed as "American nonsense."
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-rose-300 dark:border-rose-600 shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-3xl font-semibold text-rose-800 dark:text-rose-300 mb-4">The Evolution</h3>
            <p className="text-xl text-rose-700 dark:text-rose-400">
              British constructors began to find American-style crosswords too simplistic, setting the stage for something more sophisticated...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySlide;
