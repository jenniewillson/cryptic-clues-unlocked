import React from 'react';

const AnyQuestionsSlide: React.FC = () => {
  return (
    <div className="relative min-h-[70vh] flex flex-col justify-center items-center max-w-5xl mx-auto px-8 py-12">
      {/* Decorative gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-secondary/30 via-accent/30 to-primary/30 blur-3xl" />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold text-center mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow">
        Any questions?
      </h1>
    </div>
  );
};

export default AnyQuestionsSlide;
