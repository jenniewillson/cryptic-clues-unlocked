import React from 'react';
import { Zap } from 'lucide-react';

const ChallengeSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-foreground mb-8">Where to find cryptic crosswords</h1>
        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Need even more of a challenge?</h2>
          
          <div className="bg-card p-8 rounded-lg border">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold text-primary">Advanced Cryptic Varieties</h3>
            </div>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                There are lots of other cryptic crossword types and styles out there to find. We will just name a few:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-bold text-foreground text-lg">Telegraph</h4>
                    <p className="text-sm"><strong>The Telegraph Toughie:</strong> Medium-hard, blocked</p>
                    <p className="text-sm"><strong>Enigmatic Variations:</strong> Hard-Very Hard, Barred</p>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-bold text-foreground text-lg">i newspaper</h4>
                    <p className="text-sm"><strong>Inquisitor:</strong> Hard-Very Hard, Barred</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-bold text-foreground text-lg">Observer</h4>
                    <p className="text-sm"><strong>Azed:</strong> Hard-Very Hard, Barred</p>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-bold text-foreground text-lg">Times</h4>
                    <p className="text-sm"><strong>The Listener:</strong> Very Hard, Barred</p>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-lg font-semibold text-foreground">
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