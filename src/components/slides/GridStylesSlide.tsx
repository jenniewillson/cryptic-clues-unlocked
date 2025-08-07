import React from 'react';

const GridStylesSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center text-foreground mb-8">Other Grid Styles</h1>
        
        <div className="bg-card p-6 rounded-lg border flex items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Barred Grids</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>• <strong>American cryptics:</strong> Use bars instead of black squares</p>
              <p>• <strong>British barred puzzles:</strong></p>
              <p className="ml-4">- The Inquisitor (in 'i' paper, print only)</p>
              <p className="ml-4">- The Listener (in The Times)</p>
              <p>• More challenging, often themed</p>
            </div>
          </div>
          <div className="bg-muted p-4 rounded">
            <img 
              src="/lovable-uploads/5b357082-7a24-4295-996e-7fec2279dd3c.png"
              alt="Example barred crossword grid with numbered squares"
              className="w-64 h-auto"
            />
          </div>
        </div>

        {/* Other Variations */}
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Other Grid Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Shaped Crosswords</h3>
              <figure className="bg-muted p-3 rounded border flex flex-col items-center">
                <img
                  src="/lovable-uploads/b214b32d-1cde-40a3-a9b1-699b03406eb5.png"
                  alt="Shaped crossword example in a swan outline (Christmas Swan by Clarsach)"
                  loading="lazy"
                  className="w-56 md:w-72 h-auto object-contain"
                />
                <figcaption className="mt-2 text-xs text-muted-foreground">
                  Example of a shaped grid (the entries form a swan)
                </figcaption>
              </figure>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Different Sizes</h3>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Themes and Extra Challenges</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridStylesSlide;
