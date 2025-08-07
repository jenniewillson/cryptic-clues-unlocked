import React from 'react';

const SetterNamesImagesSlide = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <header className="text-center mb-6 md:mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Famous Setter Names
        </h1>
        
      </header>

      <main className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Araucaria / Cinephile */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl overflow-hidden">
          <figure className="w-full">
            <img
              src="/lovable-uploads/ab5361f6-6d9f-48ed-a031-2a08c5abac78.png"
              alt="Monkey puzzle tree (Araucaria) – inspiration for setter name Araucaria/Cinephile"
              className="w-full h-48 md:h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="p-5">
              <h3 className="text-2xl font-semibold text-foreground mb-1">Araucaria / Cinephile</h3>
              
            </figcaption>
          </figure>
        </section>

        {/* Torquemada, Ximenes & Azed */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-2xl overflow-hidden">
          <figure className="w-full">
            <img
              src="/lovable-uploads/91a167ab-c7cb-4310-9eda-3d2d1baf11d6.png"
              alt="Historic Inquisition interior with rope – evoking Torquemada and Ximenes; also Azed (Observer)"
              className="w-full h-48 md:h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="p-5">
              <h3 className="text-2xl font-semibold text-foreground mb-1">Torquemada, Ximenes & Azed</h3>
              
            </figcaption>
          </figure>
        </section>
      </main>
    </div>
  );
};

export default SetterNamesImagesSlide;
