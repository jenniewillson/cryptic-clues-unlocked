import React from 'react';
import { Calendar, Clock, BookOpen, Play, Newspaper, TrendingUp } from 'lucide-react';

const LearningResourcesSlide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500">
      <div className="max-w-7xl mx-auto space-y-12 w-full">
        <h1 className="text-6xl font-bold text-center text-white mb-12 drop-shadow-lg">Where to find cryptic crosswords</h1>
        
        {/* Starting off section */}
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-center text-yellow-300 mb-8 drop-shadow-md">Starting off...</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Guardian Quick Cryptic */}
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-800/80 dark:to-cyan-800/60 p-10 rounded-2xl border-4 border-blue-300 dark:border-blue-600 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <Calendar className="w-12 h-12 text-blue-700 dark:text-blue-300" />
                <h3 className="text-3xl font-bold text-blue-800 dark:text-blue-200">Guardian Quick Cryptic</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-2xl">
                  <BookOpen className="w-7 h-7 text-blue-700" />
                  <span className="font-bold text-blue-900 dark:text-blue-100">Perfect for Beginners</span>
                </div>
                
                <div className="space-y-4 text-blue-800 dark:text-blue-200 text-lg">
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
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-800/80 dark:to-emerald-800/60 p-10 rounded-2xl border-4 border-green-300 dark:border-green-600 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <Clock className="w-12 h-12 text-green-700 dark:text-green-300" />
                <h3 className="text-3xl font-bold text-green-800 dark:text-green-200">Minute Cryptic</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-2xl">
                  <Play className="w-7 h-7 text-green-700" />
                  <span className="font-bold text-green-900 dark:text-green-100">Daily Learning</span>
                </div>
                
                <div className="space-y-4 text-green-800 dark:text-green-200 text-lg">
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