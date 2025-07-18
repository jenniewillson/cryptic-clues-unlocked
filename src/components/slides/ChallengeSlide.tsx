import React from 'react';
import { Zap } from 'lucide-react';

const ChallengeSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto space-y-10 w-full h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-center text-foreground mb-8">Where to find cryptic crosswords</h1>
        
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-center text-primary mb-6">Need even more of a challenge?</h2>
          
          <div className="bg-card p-8 rounded-lg border">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-10 h-10 text-primary" />
              <h3 className="text-3xl font-semibold text-primary">Advanced Cryptic Varieties</h3>
            </div>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-xl leading-relaxed">
                There are lots of other cryptic crossword types and styles out there to find. We will just name a few:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground text-2xl mb-3">Telegraph</h4>
                    <p className="text-lg"><strong>The Telegraph Toughie:</strong> Medium-hard, blocked</p>
                    <p className="text-lg"><strong>Enigmatic Variations:</strong> Hard-Very Hard, Barred</p>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground text-2xl mb-3">i newspaper</h4>
                    <p className="text-lg"><strong>Inquisitor:</strong> Hard-Very Hard, Barred</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground text-2xl mb-3">Observer</h4>
                    <p className="text-lg"><strong>Azed:</strong> Hard-Very Hard, Barred</p>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground text-2xl mb-3">Times</h4>
                    <p className="text-lg"><strong>The Listener:</strong> Very Hard, Barred</p>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-2xl font-semibold text-foreground bg-muted/50 p-4 rounded-lg">
                ...and many more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSlide;