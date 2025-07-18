import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import IntroSlide from './slides/IntroSlide';
import SpeakersIntroSlide from './slides/SpeakersIntroSlide';
import HistorySlide from './slides/HistorySlide';
import CrypticHistorySlide from './slides/CrypticHistorySlide';
import XimenesSlide from './slides/XimenesSlide';
import StructureBasicsSlide from './slides/StructureBasicsSlide';
import StructureRulesSlide from './slides/StructureRulesSlide';
import GridStylesSlide from './slides/GridStylesSlide';
import ClueStructureSlide from './slides/ClueStructureSlide';
import ClueStructureExampleSlide from './slides/ClueStructureExampleSlide';
import ClueTypesOverviewSlide from './slides/ClueTypesOverviewSlide';
import AnagramsIntroSlide from './slides/AnagramsIntroSlide';
import AnagramsIndicatorsSlide from './slides/AnagramsIndicatorsSlide';
import AnagramsExampleSlide from './slides/AnagramsExampleSlide';
import DoubleDefinitionsIntroSlide from './slides/DoubleDefinitionsIntroSlide';
import DoubleDefinitionsExampleSlide from './slides/DoubleDefinitionsExampleSlide';
import DoubleDefinitionsExample2Slide from './slides/DoubleDefinitionsExample2Slide';
import AbbreviationsSlide from './slides/AbbreviationsSlide';
import AbbreviationsMoreSlide from './slides/AbbreviationsMoreSlide';
import CharadesIntroSlide from './slides/CharadesIntroSlide';
import CharadesExampleSlide from './slides/CharadesExampleSlide';
import HiddenWordsIntroSlide from './slides/HiddenWordsIntroSlide';
import HiddenWordsExampleSlide from './slides/HiddenWordsExampleSlide';
import HomophonesIntroSlide from './slides/HomophonesIntroSlide';
import HomophonesExampleSlide from './slides/HomophonesExampleSlide';
import SpoonerismIntroSlide from './slides/SpoonerismIntroSlide';
import SpoonerismExampleSlide from './slides/SpoonerismExampleSlide';
import LetterSelectionsSlide from './slides/LetterSelectionsSlide';
import LetterSelectionsExampleSlide from './slides/LetterSelectionsExampleSlide';
import ReversalsSlide from './slides/ReversalsSlide';
import ReversalsExampleSlide from './slides/ReversalsExampleSlide';
import DeletionSubstitutionSlide from './slides/DeletionSubstitutionSlide';
import DeletionSubstitutionExampleSlide from './slides/DeletionSubstitutionExampleSlide';
import CrypticDefinitionsSlide from './slides/CrypticDefinitionsSlide';
import CrypticDefinitionsExampleSlide from './slides/CrypticDefinitionsExampleSlide';

import CombinationCluesExampleSlide from './slides/CombinationCluesExampleSlide';
import CombinationCluesExample2Slide from './slides/CombinationCluesExample2Slide';
import ImportantWordsSlide from './slides/ImportantWordsSlide';
import LearningResourcesSlide from './slides/LearningResourcesSlide';
import ProgressingSlide from './slides/ProgressingSlide';
import DailyPapersSlide from './slides/DailyPapersSlide';
import ChallengeSlide from './slides/ChallengeSlide';
import ContainersIntroSlide from './slides/ContainersIntroSlide';
import ContainersExampleSlide from './slides/ContainersExampleSlide';
import LastLettersExampleSlide from './slides/LastLettersExampleSlide';
import DefinitionByExampleSlide from './slides/DefinitionByExampleSlide';

const slides = [
  { id: 1, component: IntroSlide, title: "Introduction" },
  { id: 2, component: SpeakersIntroSlide, title: "Meet Your Presenters" },
  { id: 3, component: HistorySlide, title: "History of Crosswords" },
  { id: 4, component: CrypticHistorySlide, title: "Birth of Cryptic Crosswords" },
  { id: 5, component: XimenesSlide, title: "Ximenes and the Golden Age" },
  { id: 6, component: StructureBasicsSlide, title: "Modern Structure - Basics" },
  { id: 7, component: StructureRulesSlide, title: "Modern Structure - Rules" },
  { id: 8, component: GridStylesSlide, title: "Grid Styles" },
  { id: 9, component: ClueStructureSlide, title: "Clue Structure" },
  { id: 10, component: ClueStructureExampleSlide, title: "Clue Example" },
  { id: 11, component: ClueTypesOverviewSlide, title: "Types of Clues" },
  { id: 12, component: AnagramsIntroSlide, title: "Anagrams - Introduction" },
  { id: 13, component: AnagramsExampleSlide, title: "Anagrams - Example" },
  { id: 14, component: AnagramsIndicatorsSlide, title: "Anagrams - Indicators" },
  { id: 15, component: DoubleDefinitionsIntroSlide, title: "Double Definitions - Introduction" },
  { id: 16, component: DoubleDefinitionsExampleSlide, title: "Double Definitions - Example" },
  { id: 17, component: DoubleDefinitionsExample2Slide, title: "Double Definitions - Example 2" },
  { id: 18, component: AbbreviationsSlide, title: "Abbreviations in Clues" },
  { id: 19, component: AbbreviationsMoreSlide, title: "More Abbreviations" },
  { id: 20, component: CharadesIntroSlide, title: "Charades - Introduction" },
  { id: 21, component: CharadesExampleSlide, title: "Charades - Example" },
  { id: 22, component: HiddenWordsIntroSlide, title: "Hidden Words - Introduction" },
  { id: 23, component: HiddenWordsExampleSlide, title: "Hidden Words - Example" },
  { id: 24, component: HomophonesIntroSlide, title: "Homophones - Introduction" },
  { id: 25, component: HomophonesExampleSlide, title: "Homophones - Example" },
  { id: 26, component: SpoonerismIntroSlide, title: "Spoonerisms - Introduction" },
  { id: 27, component: SpoonerismExampleSlide, title: "Spoonerisms - Example" },
  { id: 28, component: LetterSelectionsSlide, title: "Letter Selections" },
  { id: 29, component: LetterSelectionsExampleSlide, title: "Letter Selections - Example" },
  { id: 30, component: LastLettersExampleSlide, title: "Last Letters - Example" },
  { id: 31, component: ReversalsSlide, title: "Reversals" },
  { id: 32, component: ReversalsExampleSlide, title: "Reversals - Example" },
  { id: 33, component: DeletionSubstitutionSlide, title: "Deletion/Substitution" },
  { id: 34, component: DeletionSubstitutionExampleSlide, title: "Deletion/Substitution - Example" },
  { id: 35, component: CrypticDefinitionsSlide, title: "Cryptic Definitions" },
  { id: 36, component: CrypticDefinitionsExampleSlide, title: "Cryptic Definitions - Example" },
  { id: 37, component: ContainersIntroSlide, title: "Containers - Introduction" },
  { id: 38, component: ContainersExampleSlide, title: "Containers - Example" },
  { id: 39, component: DefinitionByExampleSlide, title: "Definition by Example" },
  { id: 40, component: CombinationCluesExampleSlide, title: "Combination Clues - Example 1" },
  { id: 41, component: CombinationCluesExample2Slide, title: "Combination Clues - Example 2" },
  { id: 42, component: ImportantWordsSlide, title: "Every Word Matters!" },
  { id: 43, component: LearningResourcesSlide, title: "Starting off" },
  { id: 44, component: ProgressingSlide, title: "Progressing..." },
  { id: 45, component: DailyPapersSlide, title: "Daily papers" },
  { id: 46, component: ChallengeSlide, title: "Need even more of a challenge?" }
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
      <div className="flex-1 bg-card overflow-hidden relative">
        {/* Left navigation area */}
        <div 
          className="absolute left-0 top-0 w-1/4 h-full z-10 cursor-pointer"
          onClick={prevSlide}
        ></div>
        
        {/* Right navigation area */}
        <div 
          className="absolute right-0 top-0 w-1/4 h-full z-10 cursor-pointer"
          onClick={nextSlide}
        ></div>
        
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
