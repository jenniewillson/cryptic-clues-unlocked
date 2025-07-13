
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import IntroSlide from './slides/IntroSlide';
import HistorySlide from './slides/HistorySlide';
import CrypticHistorySlide from './slides/CrypticHistorySlide';
import XimenesSlide from './slides/XimenesSlide';
import StructureSlide from './slides/StructureSlide';
import ClueStructureSlide from './slides/ClueStructureSlide';
import ClueTypesOverviewSlide from './slides/ClueTypesOverviewSlide';
import AnagramsSlide from './slides/AnagramsSlide';

const slides = [
  { id: 1, component: IntroSlide, title: "Introduction" },
  { id: 2, component: HistorySlide, title: "History of Crosswords" },
  { id: 3, component: CrypticHistorySlide, title: "Birth of Cryptic Crosswords" },
  { id: 4, component: XimenesSlide, title: "Ximenes and the Golden Age" },
  { id: 5, component: StructureSlide, title: "Modern Structure" },
  { id: 6, component: ClueStructureSlide, title: "Clue Structure" },
  { id: 7, component: ClueTypesOverviewSlide, title: "Types of Clues" },
  { id: 8, component: AnagramsSlide, title: "Anagrams" }
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Cryptic Crosswords: An Introduction</h1>
          <div className="text-sm text-muted-foreground">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl h-full max-h-[600px] bg-card rounded-lg shadow-lg border border-border overflow-hidden">
          <div className="h-full p-12 flex items-center justify-center">
            <CurrentSlideComponent />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-card border-t border-border p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          {/* Slide indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? 'bg-primary'
                    : 'bg-muted hover:bg-muted-foreground/20'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
