import React from 'react';
import { Newspaper } from 'lucide-react';

const DailyPapersSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto space-y-10 w-full h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-center text-foreground mb-8">Where to find cryptic crosswords</h1>
        
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-center text-primary mb-6">Daily papers</h2>
          
          <div className="bg-card p-8 rounded-lg border">
            <div className="flex items-center gap-3 mb-6">
              <Newspaper className="w-10 h-10 text-primary" />
              <h3 className="text-3xl font-semibold text-primary">Regular Cryptics: To your taste!</h3>
            </div>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-xl leading-relaxed">
                The Guardian cryptics get progressively more difficult from Monday to Friday, with the Prize crossword on Saturday usually being the hardest. The Times Friday is particularly known for being challenging.
              </p>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-foreground">Papers to explore:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center bg-muted/50 p-4 rounded-lg">
                    <p className="font-bold text-foreground text-lg">Guardian</p>
                  </div>
                  <div className="text-center bg-muted/50 p-4 rounded-lg">
                    <p className="font-bold text-foreground text-lg">Times</p>
                  </div>
                  <div className="text-center bg-muted/50 p-4 rounded-lg">
                    <p className="font-bold text-foreground text-lg">Financial Times</p>
                    <p className="text-sm text-muted-foreground">(FT)</p>
                  </div>
                  <div className="text-center bg-muted/50 p-4 rounded-lg">
                    <p className="font-bold text-foreground text-lg">Telegraph</p>
                  </div>
                  <div className="text-center bg-muted/50 p-4 rounded-lg">
                    <p className="font-bold text-foreground text-lg">Independent</p>
                  </div>
                  <div className="text-center bg-muted/50 p-4 rounded-lg">
                    <p className="font-bold text-foreground text-lg">Observer</p>
                  </div>
                  <div className="text-center bg-muted/50 p-4 rounded-lg">
                    <p className="font-bold text-foreground text-lg">i newspaper</p>
                  </div>
                  <div className="text-center bg-muted/50 p-4 rounded-lg">
                    <p className="font-bold text-foreground text-lg">And many more!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyPapersSlide;