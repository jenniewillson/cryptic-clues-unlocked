import React from 'react';
import { Calendar, Clock, BookOpen, Play, Newspaper, TrendingUp } from 'lucide-react';

const LearningResourcesSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-foreground mb-8">Learning Resources</h1>
        
        {/* Guardian Quick Cryptic */}
        <div className="bg-card p-8 rounded-lg border">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-semibold text-primary">Guardian Quick Cryptic</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Perfect for Beginners</span>
              </div>
              
              <div className="space-y-3 text-muted-foreground">
                <p>• <strong>When:</strong> Every Saturday (print & online)</p>
                <p>• <strong>Size:</strong> 11×11 grid (quicker to solve)</p>
                <p>• <strong>History:</strong> Started ~18 months ago</p>
                <p>• <strong>Popularity:</strong> Very popular with learners</p>
                <p>• <strong>Key Feature:</strong> Uses only 4 different clue types</p>
                <p>• <strong>Learning Aid:</strong> All clue types explained at the start</p>
              </div>
            </div>
            
            {/* Placeholder for example image */}
            <div className="bg-muted p-6 rounded-lg border-2 border-dashed border-border">
              <div className="text-center space-y-4">
                <div className="text-lg font-semibold text-foreground">Example Quick Cryptic</div>
                <div className="text-sm text-muted-foreground">
                  [Example image can be added here showing the clue type explanations and 11×11 grid]
                </div>
                <div className="grid grid-cols-6 gap-1 mx-auto w-fit mt-4">
                  {Array.from({length: 36}, (_, i) => (
                    <div key={i} className={`w-4 h-4 ${[0,1,5,6,12,18,24,30,35].includes(i) ? 'bg-foreground' : 'bg-background border border-border'}`}></div>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground">Sample 11×11 grid layout</div>
              </div>
            </div>
          </div>
        </div>

        {/* Minute Cryptic */}
        <div className="bg-card p-8 rounded-lg border">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-semibold text-primary">Minute Cryptic</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg">
                <Play className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Daily Learning</span>
              </div>
              
              <div className="space-y-3 text-muted-foreground">
                <p>• <strong>Format:</strong> One clue per day</p>
                <p>• <strong>Teaching Method:</strong> Explanation video with each clue</p>
                <p>• <strong>Learning Focus:</strong> Step-by-step solving techniques</p>
                <p>• <strong>Ideal for:</strong> Daily practice and skill building</p>
              </div>
            </div>
            
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 text-center">
              <Play className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-lg font-semibold text-foreground mb-2">Daily Clue + Video</div>
              <div className="text-sm text-muted-foreground">
                Learn cryptic solving step-by-step with expert explanations every day
              </div>
            </div>
          </div>
        </div>

        {/* Quick Cryptics for Progression */}
        <div className="bg-card p-8 rounded-lg border">
          <div className="flex items-center gap-3 mb-6">
            <Newspaper className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-semibold text-primary">Next Steps: Quick Cryptics</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Times Quick Cryptic</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• <strong>When:</strong> Daily except Sunday</p>
                <p>• <strong>Size:</strong> 13×13 grid</p>
                <p>• <strong>Aim:</strong> Quicker than main Times cryptic</p>
                <p>• <strong>Good for:</strong> Building confidence</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Guardian Quiptic</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• <strong>When:</strong> Sundays only</p>
                <p>• <strong>Aim:</strong> Easier than main Guardian cryptic</p>
                <p>• <strong>Perfect for:</strong> Weekend practice</p>
                <p>• <strong>Style:</strong> Guardian's accessible approach</p>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Cryptics */}
        <div className="bg-card p-8 rounded-lg border">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-semibold text-primary">Regular Cryptics: A Matter of Taste</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Guardian Weekly Pattern</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-sm">
                <div className="text-center p-3 bg-green-100 dark:bg-green-900/30 rounded">
                  <div className="font-semibold">Mon</div>
                  <div className="text-xs text-muted-foreground">Easiest</div>
                </div>
                <div className="text-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded">
                  <div className="font-semibold">Tue</div>
                  <div className="text-xs text-muted-foreground">Easy</div>
                </div>
                <div className="text-center p-3 bg-orange-100 dark:bg-orange-900/30 rounded">
                  <div className="font-semibold">Wed</div>
                  <div className="text-xs text-muted-foreground">Medium</div>
                </div>
                <div className="text-center p-3 bg-red-100 dark:bg-red-900/30 rounded">
                  <div className="font-semibold">Thu</div>
                  <div className="text-xs text-muted-foreground">Hard</div>
                </div>
                <div className="text-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded">
                  <div className="font-semibold">Fri</div>
                  <div className="text-xs text-muted-foreground">Harder</div>
                </div>
                <div className="text-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <div className="font-semibold">Sat</div>
                  <div className="text-xs text-muted-foreground">Prize</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Notable Mentions</h3>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• <strong>Times Friday:</strong> Particularly challenging</p>
                  <p>• <strong>Guardian Saturday:</strong> Prize crossword (toughest)</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Other Quality Papers</h3>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• Financial Times (FT)</p>
                  <p>• Telegraph</p>
                  <p>• Independent</p>
                  <p>• And many more!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">Find Your Style</h3>
          <p className="text-muted-foreground">
            Start with learning resources, progress through quick cryptics, then explore different papers to find your preferred style and difficulty level</p>
        </div>
      </div>
    </div>
  );
};

export default LearningResourcesSlide;