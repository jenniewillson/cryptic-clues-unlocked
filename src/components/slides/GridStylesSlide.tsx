import React from 'react';

const GridStylesSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center text-foreground mb-8">Grid Styles</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* British Standard */}
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold text-primary mb-4">British Standard (15×15)</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>• Black squares separate words</p>
              <p>• Rotational symmetry</p>
              <p>• Every letter "checked" (part of both across and down answers)</p>
              <p>• Standard format for most UK newspapers</p>
            </div>
            <div className="mt-4 bg-muted p-4 rounded">
              <div className="text-xs text-center text-muted-foreground mb-2">Example: Standard blocked grid</div>
              <div className="grid grid-cols-8 gap-px mx-auto w-fit">
                {Array.from({length: 64}, (_, i) => (
                  <div key={i} className={`w-3 h-3 ${[0,1,2,8,16,24,32,40,48,55,56,57,58,59,60,61,62,63].includes(i) ? 'bg-foreground' : 'bg-background border border-border'}`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* American/Barred */}
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold text-primary mb-4">Barred Grids</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>• <strong>American cryptics:</strong> Use bars instead of black squares</p>
              <p>• <strong>British barred puzzles:</strong></p>
              <p className="ml-4">- The Inquisitor (in 'i' paper, print only)</p>
              <p className="ml-4">- The Listener (in The Times)</p>
              <p>• More challenging, often themed</p>
            </div>
            <div className="mt-4 bg-muted p-4 rounded">
              <div className="text-xs text-center text-muted-foreground mb-2">Example: Barred grid</div>
              <div className="grid grid-cols-8 gap-px mx-auto w-fit">
                {Array.from({length: 64}, (_, i) => (
                  <div key={i} className="relative">
                    <div className="w-3 h-3 bg-background border border-border"></div>
                    {[7,15,23,31,39,47].includes(i) && <div className="absolute right-0 top-0 w-px h-3 bg-foreground"></div>}
                    {[24,25,26,27,28,29,30,31].includes(i) && <div className="absolute bottom-0 left-0 w-3 h-px bg-foreground"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Variations */}
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Other Grid Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Shaped Crosswords</h3>
              <p className="text-sm text-muted-foreground">Grids in special shapes - circles, diamonds, or themed outlines</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Different Sizes</h3>
              <p className="text-sm text-muted-foreground">
                <strong>Smaller:</strong> 11×11, 13×13 (quicker solve)<br/>
                <strong>Larger:</strong> 17×17, 19×19 (longer challenge)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Time Considerations</h3>
              <p className="text-sm text-muted-foreground">Grid size typically designed to match intended solving time and difficulty level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridStylesSlide;
