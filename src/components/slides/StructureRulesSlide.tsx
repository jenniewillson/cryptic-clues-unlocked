import React from 'react';

const StructureRulesSlide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8 py-8">
      <h1 className="text-5xl font-bold text-center text-foreground mb-8 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
        Grid Construction Rules
      </h1>
      
      <div className="space-y-6 w-full max-w-5xl">
        <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-8 border-2 border-emerald-300 dark:border-emerald-600 shadow-lg">
          <h4 className="text-3xl font-semibold text-emerald-800 dark:text-emerald-300 mb-6">The Crossing Rule</h4>
          <p className="text-xl text-emerald-700 dark:text-emerald-400 mb-4">
            Letters are either "checked" (crossed by another word) or "unchecked" (not crossed).
          </p>
          <p className="text-xl text-emerald-700 dark:text-emerald-400">
            This provides multiple ways to arrive at the same answer and helps ensure fair solvability.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/20 rounded-2xl p-8 border-2 border-orange-300 dark:border-orange-600 shadow-lg">
          <h4 className="text-3xl font-semibold text-orange-800 dark:text-orange-300 mb-6">Maximum Unchecked Letters</h4>
          <ul className="space-y-3 text-xl text-orange-700 dark:text-orange-400">
            <li>• No more than <strong>two consecutive</strong> unchecked letters</li>
            <li>• No more than <strong>half the word</strong> should be unchecked</li>
            <li>• This ensures fair play and maintains solvability</li>
            <li>• Prevents guessing and encourages logical solving</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-600 shadow-lg">
          <h4 className="text-3xl font-semibold text-blue-800 dark:text-blue-300 mb-6">Additional Guidelines</h4>
          <ul className="space-y-3 text-xl text-blue-700 dark:text-blue-400">
            <li>• Every letter in the grid must be part of both an across and down answer</li>
            <li>• No two-letter words allowed</li>
            <li>• Grid should be fully connected (no isolated sections)</li>
            <li>• About 1/4 to 1/3 of the grid is typically black squares</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StructureRulesSlide;