import React from 'react';
import { Calendar, Clock, BookOpen, Play, Newspaper, TrendingUp } from 'lucide-react';

const LearningResourcesSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-foreground mb-8">Learning Resources</h1>
        
        {/* Starting off section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Starting off...</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Guardian Quick Cryptic */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 p-8 rounded-lg border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Guardian Quick Cryptic</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg">
                  <BookOpen className="w-5 h-5 text-blue-600" />
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
            </div>

            {/* Minute Cryptic */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 p-8 rounded-lg border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300">Minute Cryptic</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg">
                  <Play className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-foreground">Daily Learning</span>
                </div>
                
                <div className="space-y-3 text-muted-foreground">
                  <p>• <strong>Format:</strong> One clue per day</p>
                  <p>• <strong>Teaching Method:</strong> Explanation video with each clue</p>
                  <p>• <strong>Learning Focus:</strong> Step-by-step solving techniques</p>
                  <p>• <strong>Ideal for:</strong> Daily practice and skill building</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Moving on section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Moving on...</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Times Quick Cryptic</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• <strong>When:</strong> Daily except Sunday</p>
                <p>• <strong>Size:</strong> 13×13 grid</p>
                <p>• <strong>Aim:</strong> Quicker than main Times cryptic</p>
                <p>• <strong>Good for:</strong> Building confidence</p>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Guardian Quiptic</h3>
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
            <h2 className="text-3xl font-semibold text-primary">Regular Cryptics: To your taste!</h2>
          </div>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              The Guardian cryptics get progressively more difficult from Monday to Friday, with the Prize crossword on Saturday usually being the hardest. The Times Friday is particularly known for being challenging.
            </p>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Other papers worth exploring:</h3>
              <div className="space-y-2 text-sm">
                <p>• Financial Times (FT)</p>
                <p>• Telegraph</p>
                <p>• Independent</p>
                <p>• And many more!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningResourcesSlide;