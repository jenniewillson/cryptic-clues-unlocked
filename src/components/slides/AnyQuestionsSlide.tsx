import React from 'react';

const AnyQuestionsSlide: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center max-w-5xl mx-auto px-8 py-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Any questions?
      </h1>
      <div className="bg-gradient-to-br from-muted/40 to-background border border-border rounded-2xl p-8 w-full text-center">
        <p className="text-xl md:text-2xl text-muted-foreground">
          We’re happy to clarify anything before we wrap up.
        </p>
      </div>
    </div>
  );
};

export default AnyQuestionsSlide;
