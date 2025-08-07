import React from 'react';

const GridStylesSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6 md:mb-8">Other Grid Styles</h1>
        
        <div className="bg-card p-6 rounded-lg border flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center md:text-left">Barred Grids</h2>
            <div className="space-y-2 text-muted-foreground text-center md:text-left">
              <p>• American cryptics often use bars instead of black squares</p>
              <p>• British barred puzzles:</p>
              <p className="pl-4">- The Inquisitor (in the ‘i’ paper, print only)</p>
              <p className="pl-4">- The Listener (in The Times)</p>
              <p>• Usually more challenging and frequently themed</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/lovable-uploads/5b357082-7a24-4295-996e-7fec2279dd3c.png"
              alt="Example of a barred crossword grid with numbered squares"
              className="w-56 md:w-72 h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Other Variations */}
        <div className="bg-card p-6 rounded-lg border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-primary">Other Crossword Types</h2>
              <ul className="text-muted-foreground space-y-2 list-disc pl-5 text-left">
                <li>Shaped crosswords where entries form a picture or outline</li>
                <li>Different sizes: mini, 13×13, 15×15, 21×21, jumbo specials</li>
                <li>Themes and extra challenges: jigsaw, carte blanche, misprints, extra letters</li>
              </ul>
            </div>
            <figure className="bg-muted p-3 rounded border flex flex-col items-center">
              <img
                src="/lovable-uploads/b214b32d-1cde-40a3-a9b1-699b03406eb5.png"
                alt="Shaped crossword example forming a swan outline"
                loading="lazy"
                className="w-56 md:w-80 h-auto object-contain"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground">
                Example shaped grid
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridStylesSlide;
