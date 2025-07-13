import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import IntroSlide from './slides/IntroSlide';
import HistorySlide from './slides/HistorySlide';
import CrypticHistorySlide from './slides/CrypticHistorySlide';
import XimenesSlide from './slides/XimenesSlide';
import StructureSlide from './slides/StructureSlide';
import ClueStructureSlide from './slides/ClueStructureSlide';
import ClueStructureExampleSlide from './slides/ClueStructureExampleSlide';
import ClueTypesOverviewSlide from './slides/ClueTypesOverviewSlide';
import AnagramsIntroSlide from './slides/AnagramsIntroSlide';
import AnagramsIndicatorsSlide from './slides/AnagramsIndicatorsSlide';
import AnagramsExampleSlide from './slides/AnagramsExampleSlide';
import AnagramsTipsSlide from './slides/AnagramsTipsSlide';
import DoubleDefinitionsSlide from './slides/DoubleDefinitionsSlide';
import CharadesSlide from './slides/CharadesSlide';
import HiddenWordsSlide from './slides/HiddenWordsSlide';
import HomophonesSlide from './slides/HomophonesSlide';
import CrypticDefinitionsSlide from './slides/CrypticDefinitionsSlide';

const slides = [
  { id: 1, component: IntroSlide, title: "Introduction" },
  { id: 2, component: HistorySlide, title: "History of Crosswords" },
  { id: 3, component: CrypticHistorySlide, title: "Birth of Cryptic Crosswords" },
  { id: 4, component: XimenesSlide, title: "Ximenes and the Golden Age" },
  { id: 5, component: StructureSlide, title: "Modern Structure" },
  { id: 6, component: ClueStructureSlide, title: "Clue Structure" },
  { id: 7, component: ClueStructureExampleSlide, title: "Clue Example" },
  { id: 8, component: ClueTypesOverviewSlide, title: "Types of Clues" },
  { id: 9, component: AnagramsIntroSlide, title: "Anagrams - Introduction" },
  { id: 10, component: AnagramsIndicatorsSlide, title: "Anagrams - Indicators" },
  { id: 11, component: AnagramsExampleSlide, title: "Anagrams - Example" },
  { id: 12, component: AnagramsTipsSlide, title: "Anagrams - Tips" },
  { id: 13, component: DoubleDefinitionsSlide, title: "Double Definitions" },
  { id: 14, component: CharadesSlide, title: "Charades" },
  { id: 15, component: HiddenWordsSlide, title: "Hidden Words" },
  { id: 16, component: HomophonesSlide, title: "Homophones" },
  { id: 17, component: CrypticDefinitionsSlide, title: "Cryptic Definitions" }
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
      <div className="bg-card border-b border-border p-2">
        <div className="w-full flex justify-between items-center px-6">
          <h1 className="text-xl font-bold text-foreground">Cryptic Crosswords: An Introduction</h1>
          <div className="text-sm text-muted-foreground">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>
      </div>

      {/* Main content - 16:9 optimized */}
      <div className="flex-1 bg-card overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-card border-t border-border p-3">
        <div className="w-full flex justify-between items-center px-6">
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
