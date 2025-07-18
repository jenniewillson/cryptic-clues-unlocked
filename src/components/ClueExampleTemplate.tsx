import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ClueHighlight {
  text: string;
  step: number;
  color: 'blue' | 'red' | 'green' | 'amber' | 'purple' | 'pink' | 'cyan';
}

interface ExplanationBox {
  step: number;
  title: string;
  content: string;
  color: 'blue' | 'red' | 'green' | 'amber' | 'purple' | 'pink' | 'cyan';
}

interface ClueExampleTemplateProps {
  title: string;
  titleGradient?: string;
  backgroundGradient?: string;
  borderColor?: string;
  clueText: string;
  clueHighlights: ClueHighlight[];
  explanationBoxes: ExplanationBox[];
  buttonLabels: string[];
  solution?: {
    answer: string;
    explanation: string;
  };
  maxSteps: number;
  gridCols?: number;
}

const colorVariants = {
  blue: {
    bg: 'bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/20',
    border: 'border-blue-300 dark:border-blue-600',
    text: 'text-blue-700 dark:text-blue-300',
    highlight: 'bg-blue-200 dark:bg-blue-800'
  },
  red: {
    bg: 'bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/20',
    border: 'border-red-300 dark:border-red-600',
    text: 'text-red-700 dark:text-red-300',
    highlight: 'bg-red-200 dark:bg-red-800'
  },
  green: {
    bg: 'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/20',
    border: 'border-green-300 dark:border-green-600',
    text: 'text-green-700 dark:text-green-300',
    highlight: 'bg-green-200 dark:bg-green-800'
  },
  amber: {
    bg: 'bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/20',
    border: 'border-amber-300 dark:border-amber-600',
    text: 'text-amber-700 dark:text-amber-300',
    highlight: 'bg-amber-200 dark:bg-amber-800'
  },
  purple: {
    bg: 'bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/20',
    border: 'border-purple-300 dark:border-purple-600',
    text: 'text-purple-700 dark:text-purple-300',
    highlight: 'bg-purple-200 dark:bg-purple-800'
  },
  pink: {
    bg: 'bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/20',
    border: 'border-pink-300 dark:border-pink-600',
    text: 'text-pink-700 dark:text-pink-300',
    highlight: 'bg-pink-200 dark:bg-pink-800'
  },
  cyan: {
    bg: 'bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/20',
    border: 'border-cyan-300 dark:border-cyan-600',
    text: 'text-cyan-700 dark:text-cyan-300',
    highlight: 'bg-cyan-200 dark:bg-cyan-800'
  }
};

const ClueExampleTemplate: React.FC<ClueExampleTemplateProps> = ({
  title,
  titleGradient = "from-purple-600 to-pink-600",
  backgroundGradient = "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
  borderColor = "border-purple-200 dark:border-purple-700",
  clueText,
  clueHighlights,
  explanationBoxes,
  buttonLabels,
  solution,
  maxSteps,
  gridCols = 3
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const renderHighlightedClue = () => {
    let highlightedText = clueText;
    
    // Sort highlights by step to apply them in order
    const sortedHighlights = clueHighlights.sort((a, b) => a.step - b.step);
    
    // Replace each highlight text with spans
    sortedHighlights.forEach(highlight => {
      const highlightClass = currentStep >= highlight.step 
        ? `${colorVariants[highlight.color].highlight} px-2 py-1 rounded font-semibold`
        : "";
      
      if (highlightClass) {
        highlightedText = highlightedText.replace(
          highlight.text,
          `<span class="${highlightClass}">${highlight.text}</span>`
        );
      }
    });

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  const getVisibleBoxes = () => {
    return explanationBoxes.filter(box => currentStep >= box.step);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-8">
      <h1 className={`text-6xl font-bold text-center text-foreground mb-12 bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}>
        {title}
      </h1>
      
      <div className={`bg-gradient-to-br ${backgroundGradient} border-2 ${borderColor} rounded-2xl p-12 w-full`}>
        <div className="text-center mb-12">
          <p className="text-4xl font-semibold text-foreground mb-8 leading-relaxed">
            {renderHighlightedClue()}
          </p>
        </div>

        {currentStep >= 1 && (
          <div className={`grid grid-cols-1 md:grid-cols-${Math.min(gridCols, getVisibleBoxes().length)} gap-4 mb-12`}>
            {getVisibleBoxes().map((box, index) => {
              const colors = colorVariants[box.color];
              return (
                <div key={index} className={`${colors.bg} rounded-2xl p-4 border-2 ${colors.border} text-center`}>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{box.title}</h4>
                  <p className={`text-lg ${colors.text} font-medium`}>{box.content}</p>
                </div>
              );
            })}
          </div>
        )}

        <div className="text-center">
          {currentStep < maxSteps && (
            <Button 
              onClick={nextStep}
              className={`${currentStep === 0 ? 'text-3xl px-16 py-8' : 'text-2xl px-12 py-6'} rounded-xl`}
              size="lg"
            >
              {buttonLabels[currentStep] || `Step ${currentStep + 1}`}
            </Button>
          )}
          
          {currentStep === maxSteps && solution && (
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/20 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-600">
              <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-300 mb-3">
                {solution.answer}
              </p>
              <p className="text-lg text-muted-foreground">
                {solution.explanation}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClueExampleTemplate;