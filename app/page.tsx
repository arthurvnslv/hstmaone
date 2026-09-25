'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { studySession } from '@/data/studySession';
import { AnswerType, AppView } from '@/types/study';
import { StudyHeader } from '@/components/StudyHeader';
import { StudySidebar } from '@/components/StudySidebar';
import { StudyIntro } from '@/components/StudyIntro';
import { StudyBlockView } from '@/components/StudyBlockView';
import { QuickReviewView } from '@/components/QuickReviewView';
import { QuizIntroView } from '@/components/QuizIntroView';
import { QuizRunnerView } from '@/components/QuizRunnerView';
import { QuizResultsView } from '@/components/QuizResultsView';
import { MistakesReviewView } from '@/components/MistakesReviewView';

const STORAGE_KEY = 'maranhao_cebraspe_study_v1';

interface StudyState {
  currentView: AppView;
  activeBlockId: number;
  completedBlocks: number[];
  quizAnswers: Record<number, AnswerType>;
  currentQuestionIndex: number;
  theme: 'light' | 'dark';
  fontSize: 'normal' | 'large' | 'extra';
}

const DEFAULT_STATE: StudyState = {
  currentView: 'intro',
  activeBlockId: 1,
  completedBlocks: [],
  quizAnswers: {},
  currentQuestionIndex: 0,
  theme: 'light',
  fontSize: 'normal'
};

let memoryState: StudyState = DEFAULT_STATE;
let isInitialized = false;
const listeners = new Set<() => void>();

function getSnapshot(): StudyState {
  if (!isInitialized && typeof window !== 'undefined') {
    isInitialized = true;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        memoryState = {
          currentView: parsed.currentView || DEFAULT_STATE.currentView,
          activeBlockId:
            typeof parsed.activeBlockId === 'number'
              ? parsed.activeBlockId
              : DEFAULT_STATE.activeBlockId,
          completedBlocks: Array.isArray(parsed.completedBlocks)
            ? parsed.completedBlocks
            : DEFAULT_STATE.completedBlocks,
          quizAnswers:
            parsed.quizAnswers && typeof parsed.quizAnswers === 'object'
              ? parsed.quizAnswers
              : DEFAULT_STATE.quizAnswers,
          currentQuestionIndex:
            typeof parsed.currentQuestionIndex === 'number'
              ? parsed.currentQuestionIndex
              : DEFAULT_STATE.currentQuestionIndex,
          theme: parsed.theme === 'dark' ? 'dark' : 'light',
          fontSize: ['normal', 'large', 'extra'].includes(parsed.fontSize)
            ? parsed.fontSize
            : DEFAULT_STATE.fontSize
        };
      }
    } catch {
      // Ignore parse errors
    }
  }
  return memoryState;
}

function getServerSnapshot(): StudyState {
  return DEFAULT_STATE;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function updateState(updater: (prev: StudyState) => StudyState) {
  memoryState = updater(memoryState);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryState));
  } catch {
    // Ignore storage quota errors
  }
  listeners.forEach((l) => l());
}

export default function Home() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState<boolean>(false);

  const {
    currentView,
    activeBlockId,
    completedBlocks,
    quizAnswers,
    currentQuestionIndex,
    theme,
    fontSize
  } = state;

  // Synchronize dark class on root document element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Handlers
  const handleToggleTheme = () => {
    updateState((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light'
    }));
  };

  const handleSelectBlock = (blockId: number) => {
    updateState((prev) => ({
      ...prev,
      activeBlockId: blockId,
      currentView: 'block'
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMarkCompleteAndNext = () => {
    updateState((prev) => {
      const nextCompleted = prev.completedBlocks.includes(prev.activeBlockId)
        ? prev.completedBlocks
        : [...prev.completedBlocks, prev.activeBlockId];

      if (prev.activeBlockId < studySession.blocks.length) {
        return {
          ...prev,
          completedBlocks: nextCompleted,
          activeBlockId: prev.activeBlockId + 1
        };
      } else {
        return {
          ...prev,
          completedBlocks: nextCompleted,
          currentView: 'quick-review'
        };
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswerQuestion = (questionId: number, answer: AnswerType) => {
    updateState((prev) => ({
      ...prev,
      quizAnswers: {
        ...prev.quizAnswers,
        [questionId]: answer
      }
    }));
  };

  const handleNextQuestion = () => {
    updateState((prev) => {
      if (prev.currentQuestionIndex < studySession.questions.length - 1) {
        return {
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1
        };
      } else {
        return {
          ...prev,
          currentView: 'results'
        };
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreviousQuestion = () => {
    updateState((prev) => {
      if (prev.currentQuestionIndex > 0) {
        return {
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex - 1
        };
      }
      return prev;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetakeQuiz = () => {
    updateState((prev) => ({
      ...prev,
      quizAnswers: {},
      currentQuestionIndex: 0,
      currentView: 'quiz'
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setView = (view: AppView) => {
    updateState((prev) => ({ ...prev, currentView: view }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setFontSize = (size: 'normal' | 'large' | 'extra') => {
    updateState((prev) => ({ ...prev, fontSize: size }));
  };

  // Find active block data
  const currentBlock =
    studySession.blocks.find((b) => b.id === activeBlockId) ||
    studySession.blocks[0];

  // Calculate if there are wrong answers for the error notebook
  const hasErrors = studySession.questions.some((q) => {
    const ans = quizAnswers[q.id];
    return ans !== undefined && ans !== q.correctAnswer;
  });

  return (
    <div className="min-h-screen bg-slate-50/60 font-sans text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 flex flex-col">
      {/* Persistent App Header */}
      <StudyHeader
        currentView={currentView}
        activeBlockId={activeBlockId}
        completedBlocksCount={completedBlocks.length}
        totalBlocksCount={studySession.blocks.length}
        theme={theme}
        fontSize={fontSize}
        isSidebarOpen={isSidebarOpenMobile}
        onToggleSidebar={() => setIsSidebarOpenMobile((prev) => !prev)}
        onToggleTheme={handleToggleTheme}
        onChangeFontSize={setFontSize}
        onNavigateHome={() => setView('intro')}
      />

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Persistent Modular Sidebar */}
        <StudySidebar
          blocks={studySession.blocks}
          currentView={currentView}
          activeBlockId={activeBlockId}
          completedBlocks={completedBlocks}
          quizAnswerCount={Object.keys(quizAnswers).length}
          totalQuestionsCount={studySession.questions.length}
          hasErrors={hasErrors}
          isOpenMobile={isSidebarOpenMobile}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onSelectIntro={() => setView('intro')}
          onSelectBlock={handleSelectBlock}
          onSelectQuickReview={() => setView('quick-review')}
          onSelectQuiz={() => {
            if (Object.keys(quizAnswers).length === studySession.questions.length) {
              setView('results');
            } else {
              setView('quiz');
            }
          }}
          onSelectResults={() => setView('results')}
          onSelectMistakes={() => setView('mistakes')}
          onCloseMobile={() => setIsSidebarOpenMobile(false)}
        />

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 lg:px-12 py-4">
          {currentView === 'intro' && (
            <StudyIntro
              session={studySession}
              onStartSession={() => handleSelectBlock(1)}
              onGoToQuickReview={() => setView('quick-review')}
              onGoToQuiz={() => setView('quiz-intro')}
            />
          )}

          {currentView === 'block' && (
            <StudyBlockView
              block={currentBlock}
              totalBlocks={studySession.blocks.length}
              isCompleted={completedBlocks.includes(activeBlockId)}
              fontSize={fontSize}
              onMarkCompleteAndNext={handleMarkCompleteAndNext}
              onPreviousBlock={
                activeBlockId > 1
                  ? () => handleSelectBlock(activeBlockId - 1)
                  : undefined
              }
              onGoToQuickReview={() => setView('quick-review')}
            />
          )}

          {currentView === 'quick-review' && (
            <QuickReviewView
              topics={studySession.quickReview}
              totalQuestions={studySession.questions.length}
              onGoToQuestions={() => setView('quiz-intro')}
              onGoToBlock={handleSelectBlock}
            />
          )}

          {currentView === 'quiz-intro' && (
            <QuizIntroView
              totalQuestions={studySession.questions.length}
              onStartQuiz={() => setView('quiz')}
              onBackToReview={() => setView('quick-review')}
            />
          )}

          {currentView === 'quiz' && (
            <QuizRunnerView
              questions={studySession.questions}
              currentIndex={currentQuestionIndex}
              userAnswers={quizAnswers}
              fontSize={fontSize}
              onAnswerQuestion={handleAnswerQuestion}
              onNextQuestion={handleNextQuestion}
              onPreviousQuestion={handlePreviousQuestion}
              onFinishQuiz={() => setView('results')}
              onGoToBlockReview={handleSelectBlock}
            />
          )}

          {currentView === 'results' && (
            <QuizResultsView
              questions={studySession.questions}
              blocks={studySession.blocks}
              userAnswers={quizAnswers}
              onReviewMistakes={() => setView('mistakes')}
              onRetakeQuiz={handleRetakeQuiz}
              onGoToQuickReview={() => setView('quick-review')}
              onGoToBlock={handleSelectBlock}
            />
          )}

          {currentView === 'mistakes' && (
            <MistakesReviewView
              questions={studySession.questions}
              userAnswers={quizAnswers}
              onGoBackToResults={() => setView('results')}
              onRetakeQuiz={handleRetakeQuiz}
              onGoToBlock={handleSelectBlock}
            />
          )}
        </main>
      </div>

      {/* Global Academic Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500 transition-colors dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            Plataforma Educacional de Estudos · PM-MA (Padrão CEBRASPE/CESPE)
          </span>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">
            Base Factual: Aula 04 (Sergio Henrique) · Metodologia: Manual de Itens CEBRASPE
          </span>
        </div>
      </footer>
    </div>
  );
}
