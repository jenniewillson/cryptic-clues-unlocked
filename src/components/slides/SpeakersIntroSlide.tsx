import React from 'react';

const SpeakersIntroSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h1 className="text-6xl font-bold text-foreground mb-10">Meet Your Presenters</h1>
        
        <div className="grid grid-cols-2 gap-10 mb-10">
          <div className="bg-card p-8 rounded-lg border">
            <h2 className="text-4xl font-semibold text-primary mb-4">Val</h2>
            <p className="text-2xl text-muted-foreground">Sets as <span className="font-semibold text-foreground">Clarsach</span></p>
          </div>
          <div className="bg-card p-8 rounded-lg border">
            <h2 className="text-4xl font-semibold text-primary mb-4">Jennie</h2>
            <p className="text-2xl text-muted-foreground">Sets as <span className="font-semibold text-foreground">Guinevere</span> or <span className="font-semibold text-foreground">Dice</span></p>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border text-left">
          <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">The Tradition of Setter Names</h3>
          <p className="text-xl text-muted-foreground mb-8 text-center">
            It's traditional for cryptic crossword setters to not go by their real names. Here are some fascinating examples:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-primary">Imogen:</span> A name the setter and his wife planned to give a daughter, but they only had sons
              </div>
              <div>
                <span className="font-semibold text-primary">Paul:</span> Named after the setter's brother who died young
              </div>
              <div>
                <span className="font-semibold text-primary">Vigo/Carpathian:</span> Victoria Godfrey uses the first letters of her names for Vigo (Independent), and Carpathian (Guardian) after the Ghostbusters II character 'Vigo the Carpathian'
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-primary">Anto:</span> A childhood nickname the setter wanted to reclaim
              </div>
              <div>
                <span className="font-semibold text-primary">Boatman:</span> Simply because the setter used to live on a boat!
              </div>
              <div className="text-muted-foreground italic">
                ...and many more fascinating stories behind the names!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersIntroSlide;