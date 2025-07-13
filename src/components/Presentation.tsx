import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ExportSlides from './ExportSlides';
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
import DoubleDefinitionsIntroSlide from './slides/DoubleDefinitionsIntroSlide';
import DoubleDefinitionsExampleSlide from './slides/DoubleDefinitionsExampleSlide';
import CharadesIntroSlide from './slides/CharadesIntroSlide';
import CharadesExampleSlide from './slides/CharadesExampleSlide';
import HiddenWordsIntroSlide from './slides/HiddenWordsIntroSlide';
import HiddenWordsExampleSlide from './slides/HiddenWordsExampleSlide';
import HomophonesIntroSlide from './slides/HomophonesIntroSlide';
import HomophonesExampleSlide from './slides/HomophonesExampleSlide';
import LetterSelectionsSlide from './slides/LetterSelectionsSlide';
import ReversalsSlide from './slides/ReversalsSlide';
import DeletionSubstitutionSlide from './slides/DeletionSubstitutionSlide';
import CrypticDefinitionsSlide from './slides/CrypticDefinitionsSlide';
import CombinationCluesIntroSlide from './slides/CombinationCluesIntroSlide';
import CombinationCluesExampleSlide from './slides/CombinationCluesExampleSlide';
import LastLettersExampleSlide from './slides/LastLettersExampleSlide';
import DefinitionByExampleSlide from './slides/DefinitionByExampleSlide';

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
  { id: 10, component: AnagramsExampleSlide, title: "Anagrams - Example" },
  { id: 11, component: AnagramsIndicatorsSlide, title: "Anagrams - Indicators" },
  { id: 12, component: AnagramsTipsSlide, title: "Anagrams - Tips" },
  { id: 13, component: DoubleDefinitionsIntroSlide, title: "Double Definitions - Introduction" },
  { id: 14, component: DoubleDefinitionsExampleSlide, title: "Double Definitions - Example" },
  { id: 15, component: CharadesIntroSlide, title: "Charades - Introduction" },
  { id: 16, component: CharadesExampleSlide, title: "Charades - Example" },
  { id: 17, component: HiddenWordsIntroSlide, title: "Hidden Words - Introduction" },
  { id: 18, component: HiddenWordsExampleSlide, title: "Hidden Words - Example" },
  { id: 19, component: HomophonesIntroSlide, title: "Homophones - Introduction" },
  { id: 20, component: HomophonesExampleSlide, title: "Homophones - Example" },
  { id: 21, component: LetterSelectionsSlide, title: "Letter Selections" },
  { id: 22, component: LastLettersExampleSlide, title: "Last Letters - Example" },
  { id: 23, component: ReversalsSlide, title: "Reversals" },
  { id: 24, component: DeletionSubstitutionSlide, title: "Deletion/Substitution" },
  { id: 25, component: CrypticDefinitionsSlide, title: "Cryptic Definitions" },
  { id: 26, component: DefinitionByExampleSlide, title: "Definition by Example" },
  { id: 27, component: CombinationCluesIntroSlide, title: "Combination Clues - Introduction" },
  { id: 28, component: CombinationCluesExampleSlide, title: "Combination Clues - Examples" }
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
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-foreground">Cryptic Crosswords: An Introduction</h1>
            <ExportSlides />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 text-sm">
                Slide {currentSlide + 1} of {slides.length}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 max-h-96 overflow-y-auto">
              {slides.map((slide, index) => (
                <DropdownMenuItem
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={index === currentSlide ? "bg-accent" : ""}
                >
                  <span className="text-xs text-muted-foreground mr-3 w-6">
                    {index + 1}.
                  </span>
                  {slide.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
