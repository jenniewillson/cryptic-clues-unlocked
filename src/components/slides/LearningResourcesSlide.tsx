import React from 'react';
import { Calendar, Clock, BookOpen, Play } from 'lucide-react';

const LearningResourcesSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto space-y-10 w-full h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-center text-foreground mb-8">Where to find cryptic crosswords</h1>
        
        {/* Starting off section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-center text-primary mb-6">Starting off...</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Guardian Quick Cryptic */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 p-8 rounded-lg border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-10 h-10 text-blue-600" />
                <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">Guardian Quick Cryptic</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xl">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-foreground">Perfect for Beginners</span>
                </div>
                
                <div className="space-y-3 text-muted-foreground text-base">
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
                <Clock className="w-10 h-10 text-green-600" />
                <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300">Minute Cryptic</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xl">
                  <Play className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-foreground">Daily Learning</span>
                </div>
                
                <div className="space-y-3 text-muted-foreground text-base">
                  <p>• <strong>Format:</strong> One clue per day</p>
                  <p>• <strong>Teaching Method:</strong> Explanation video with each clue</p>
                  <p>• <strong>Learning Focus:</strong> Step-by-step solving techniques</p>
                  <p>• <strong>Ideal for:</strong> Daily practice and skill building</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningResourcesSlide;