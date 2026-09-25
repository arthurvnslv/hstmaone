'use client';

import React from 'react';
import {
  AlertCircle,
  BarChart3,
  BookCheck,
  CheckCircle2,
  Circle,
  Clock,
  Compass,
  FileQuestion,
  HelpCircle,
  Home,
  Moon,
  RotateCcw,
  Sparkles,
  Sun
} from 'lucide-react';
import { AppView, StudyBlock } from '@/types/study';

interface StudySidebarProps {
  blocks: StudyBlock[];
  currentView: AppView;
  activeBlockId: number;
  completedBlocks: number[];
  quizAnswerCount: number;
  totalQuestionsCount: number;
  hasErrors: boolean;
  isOpenMobile: boolean;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onSelectIntro: () => void;
  onSelectBlock: (blockId: number) => void;
  onSelectQuickReview: () => void;
  onSelectQuiz: () => void;
  onSelectResults: () => void;
  onSelectMistakes: () => void;
  onCloseMobile: () => void;
}

export function StudySidebar({
  blocks,
  currentView,
  activeBlockId,
  completedBlocks,
  quizAnswerCount,
  totalQuestionsCount,
  hasErrors,
  isOpenMobile,
  theme,
  onToggleTheme,
  onSelectIntro,
  onSelectBlock,
  onSelectQuickReview,
  onSelectQuiz,
  onSelectResults,
  onSelectMistakes,
  onCloseMobile
}: StudySidebarProps) {
  const isBlockCompleted = (id: number) => completedBlocks.includes(id);

  const handleNav = (action: () => void) => {
    action();
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-2xs lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-72 sm:w-80 flex-col border-r border-slate-200 bg-slate-50/95 backdrop-blur-xs transition-transform duration-300 dark:border-slate-800 dark:bg-slate-950/95 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:translate-x-0 ${
          isOpenMobile ? 'flex translate-x-0' : 'hidden lg:flex -translate-x-full'
        }`}
      >
        {/* Sidebar Header Info */}
        <div className="border-b border-slate-200 p-4 dark:border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span className="font-semibold uppercase tracking-wider">Trilha Pedagógica</span>
            <span>{completedBlocks.length}/{blocks.length} blocos</span>
          </div>
          <div className="text-[13px] font-medium text-slate-800 dark:text-slate-200 truncate">
            História do Maranhão Colonial
          </div>
        </div>

        {/* Scrollable Navigation List */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 text-sm">
          {/* 1. Introdução */}
          <button
            onClick={() => handleNav(onSelectIntro)}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left font-medium transition-colors ${
              currentView === 'intro'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950'
                : 'text-slate-700 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800/60'
            }`}
          >
            <Home className="h-4 w-4 shrink-0" />
            <span className="truncate">Introdução & Objetivos</span>
          </button>

          {/* Section Divider: Blocos de Conteúdo */}
          <div className="pt-3 pb-1 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Blocos de Conteúdo
          </div>

          {/* 2. Blocos Pedagógicos 01 a 08 */}
          {blocks.map((b) => {
            const isCompleted = isBlockCompleted(b.id);
            const isActive = currentView === 'block' && activeBlockId === b.id;

            return (
              <button
                key={b.id}
                onClick={() => handleNav(() => onSelectBlock(b.id))}
                className={`group flex w-full items-start gap-2.5 rounded-md px-3 py-2 text-left transition-colors ${
                  isActive
                    ? 'bg-indigo-50 border-l-4 border-indigo-600 text-indigo-950 font-semibold dark:bg-indigo-950/40 dark:border-indigo-400 dark:text-indigo-100'
                    : 'text-slate-700 hover:bg-slate-200/50 dark:text-slate-300 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isCompleted ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  ) : isActive ? (
                    <div className="h-4 w-4 rounded-full border-2 border-indigo-600 flex items-center justify-center dark:border-indigo-400">
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                    </div>
                  ) : (
                    <Circle className="h-4 w-4 text-slate-300 dark:text-slate-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <span>Bloco {b.number}</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="h-3 w-3" />
                      {b.estimatedMinutes}m
                    </span>
                  </div>
                  <div className="truncate text-xs font-medium leading-snug">
                    {b.title}
                  </div>
                </div>
              </button>
            );
          })}

          {/* Section Divider: Consolidação & Teste */}
          <div className="pt-3 pb-1 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Consolidação & Teste
          </div>

          {/* 3. Revisão Rápida */}
          <button
            onClick={() => handleNav(onSelectQuickReview)}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left font-medium transition-colors ${
              currentView === 'quick-review'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950'
                : 'text-slate-700 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800/60'
            }`}
          >
            <BookCheck className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
            <span className="truncate">Revisão Rápida</span>
          </button>

          {/* 4. Caderno de Questões */}
          <button
            onClick={() => handleNav(onSelectQuiz)}
            className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left font-medium transition-colors ${
              currentView === 'quiz' || currentView === 'quiz-intro'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950'
                : 'text-slate-700 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800/60'
            }`}
          >
            <div className="flex items-center gap-3 truncate">
              <FileQuestion className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
              <span className="truncate">Questões CEBRASPE</span>
            </div>
            <span className="text-[11px] font-mono opacity-80">
              {quizAnswerCount}/{totalQuestionsCount}
            </span>
          </button>

          {/* 5. Painel de Resultados (apenas se respondeu a pelo menos 1 questão ou completou) */}
          {quizAnswerCount > 0 && (
            <button
              onClick={() => handleNav(onSelectResults)}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left font-medium transition-colors ${
                currentView === 'results'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950'
                  : 'text-slate-700 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800/60'
              }`}
            >
              <BarChart3 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span className="truncate">Painel de Desempenho</span>
            </button>
          )}

          {/* 6. Caderno de Erros (se houver erros) */}
          {hasErrors && (
            <button
              onClick={() => handleNav(onSelectMistakes)}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left font-medium transition-colors ${
                currentView === 'mistakes'
                  ? 'bg-rose-900 text-white dark:bg-rose-200 dark:text-rose-950'
                  : 'text-rose-700 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/40'
              }`}
            >
              <AlertCircle className="h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" />
              <span className="truncate">Caderno de Erros</span>
            </button>
          )}
        </nav>

        {/* Footer in Sidebar */}
        <div className="border-t border-slate-200 p-3.5 dark:border-slate-800 space-y-3">
          {/* Theme switcher */}
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Tema de Estudo
            </span>
            <div className="grid grid-cols-2 gap-1.5 rounded-md border border-slate-200 bg-slate-100/80 p-1 dark:border-slate-800 dark:bg-slate-900">
              <button
                onClick={() => {
                  if (theme !== 'light') onToggleTheme();
                }}
                className={`flex items-center justify-center gap-1.5 rounded-sm py-1.5 px-2 text-xs font-medium transition-all ${
                  theme === 'light'
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                <Sun className="h-3.5 w-3.5 text-amber-500" />
                <span>Claro</span>
              </button>
              <button
                onClick={() => {
                  if (theme !== 'dark') onToggleTheme();
                }}
                className={`flex items-center justify-center gap-1.5 rounded-sm py-1.5 px-2 text-xs font-medium transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-700 text-white shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                <Moon className="h-3.5 w-3.5 text-indigo-400" />
                <span>Escuro</span>
              </button>
            </div>
          </div>

          <div className="pt-1 text-[11px] text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5 font-medium">
              <Compass className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Foco no Edital PM-MA 2026</span>
            </div>
            <p className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">
              Fonte: Aula 04 · Prof. Sergio Henrique
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
