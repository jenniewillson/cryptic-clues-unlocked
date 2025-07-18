import React from 'react';

const ProgressingSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto space-y-10 w-full h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-center text-foreground mb-8">Where to find cryptic crosswords</h1>
        
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-center text-primary mb-6">Progressing...</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Times Quick Cryptic</h3>
              <div className="space-y-2 text-muted-foreground text-base">
                <p>• <strong>When:</strong> Daily except Sunday</p>
                <p>• <strong>Size:</strong> 13×13 grid</p>
                <p>• <strong>Aim:</strong> Quicker than main Times cryptic</p>
                <p>• <strong>Good for:</strong> Building confidence</p>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Guardian Quiptic</h3>
              <div className="space-y-2 text-muted-foreground text-base">
                <p>• <strong>When:</strong> Sundays only</p>
                <p>• <strong>Aim:</strong> Easier than main Guardian cryptic</p>
                <p>• <strong>Perfect for:</strong> Weekend practice</p>
                <p>• <strong>Style:</strong> Guardian's accessible approach</p>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Everyman (Observer)</h3>
              <div className="space-y-2 text-muted-foreground text-base">
                <p>• <strong>When:</strong> Sundays only</p>
                <p>• <strong>Setter:</strong> Consistent setter</p>
                <p>• <strong>Style:</strong> Reasonably straightforward clues</p>
                <p>• <strong>Good for:</strong> Building cryptic confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressingSlide;