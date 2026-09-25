'use client';

import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  Menu,
  Moon,
  Sun,
  Type,
  X
} from 'lucide-react';
import { AppView } from '@/types/study';

interface StudyHeaderProps {
  currentView: AppView;
  activeBlockId: number;
  completedBlocksCount: number;
  totalBlocksCount: number;
  theme: 'light' | 'dark';
  fontSize: 'normal' | 'large' | 'extra';
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  onToggleTheme: () => void;
  onChangeFontSize: (size: 'normal' | 'large' | 'extra') => void;
  onNavigateHome: () => void;
}

export function StudyHeader({
  currentView,
  activeBlockId,
  completedBlocksCount,
  totalBlocksCount,
  theme,
  fontSize,
  isSidebarOpen,
  onToggleSidebar,
  onToggleTheme,
  onChangeFontSize,
  onNavigateHome
}: StudyHeaderProps) {
  // Calculate general progress percentage based on completed blocks and quiz progress
  const progressPercent = Math.round(
    (completedBlocksCount / totalBlocksCount) * 100
  );

  const getStepLabel = () => {
    switch (currentView) {
      case 'intro':
        return 'Visão Geral da Sessão';
      case 'block':
        return `Bloco ${activeBlockId} de ${totalBlocksCount}`;
      case 'quick-review':
        return 'Revisão Rápida';
      case 'quiz-intro':
      case 'quiz':
        return 'Caderno de Questões (CEBRASPE)';
      case 'results':
        return 'Painel de Desempenho';
      case 'mistakes':
        return 'Caderno de Erros';
      default:
        return 'Sessão de Estudos';
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xs transition-colors dark:border-slate-800 dark:bg-slate-900/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side: Mobile toggle + Platform Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            aria-label={isSidebarOpen ? 'Fechar menu lateral' : 'Abrir menu lateral'}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white lg:hidden"
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 text-left focus-visible:outline-2 focus-visible:outline-indigo-600"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-950">
              <BookOpen className="h-4 w-4" />
            </div>
            <div>
              <span className="block font-serif text-sm font-semibold tracking-tight text-slate-900 dark:text-white sm:text-base">
                Maranhão Colonial
              </span>
              <span className="hidden text-[11px] text-slate-500 dark:text-slate-400 sm:block">
                Padrão CEBRASPE · PM-MA 2026
              </span>
            </div>
          </button>
        </div>

        {/* Center: Live Session Progress */}
        <div className="hidden md:flex flex-col items-center justify-center max-w-xs w-full px-4">
          <div className="flex w-full items-center justify-between text-xs text-slate-600 dark:text-slate-300 mb-1">
            <span className="font-medium truncate">{getStepLabel()}</span>
            <span className="font-mono font-semibold">{progressPercent}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              className="h-full bg-emerald-600 transition-all duration-300 dark:bg-emerald-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Right Side: Tools (Font scale & Dark/Light mode) */}
        <div className="flex items-center gap-2">
          {/* Font Size Selector */}
          <div className="flex items-center rounded-md border border-slate-200 bg-slate-50 p-0.5 dark:border-slate-800 dark:bg-slate-800/60">
            <button
              onClick={() => onChangeFontSize('normal')}
              title="Tamanho padrão de fonte"
              className={`px-2 py-1 text-xs font-medium rounded-xs transition-colors ${
                fontSize === 'normal'
                  ? 'bg-white text-slate-900 shadow-2xs dark:bg-slate-700 dark:text-white'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              A
            </button>
            <button
              onClick={() => onChangeFontSize('large')}
              title="Tamanho de fonte ampliado"
              className={`px-2 py-1 text-xs font-semibold rounded-xs transition-colors ${
                fontSize === 'large'
                  ? 'bg-white text-slate-900 shadow-2xs dark:bg-slate-700 dark:text-white'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              A+
            </button>
            <button
              onClick={() => onChangeFontSize('extra')}
              title="Tamanho de fonte máximo para leitura"
              className={`px-2 py-1 text-xs font-bold rounded-xs transition-colors ${
                fontSize === 'extra'
                  ? 'bg-white text-slate-900 shadow-2xs dark:bg-slate-700 dark:text-white'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              A++
            </button>
          </div>

          {/* Theme Selector (Segmented White Mode / Dark Mode) */}
          <div
            className="flex items-center rounded-md border border-slate-200 bg-slate-50 p-0.5 dark:border-slate-800 dark:bg-slate-800/60"
            role="group"
            aria-label="Seleção de Tema Visual"
          >
            <button
              onClick={() => {
                if (theme !== 'light') onToggleTheme();
              }}
              title="Ativar Modo Claro (White Mode)"
              aria-pressed={theme === 'light'}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-xs transition-all ${
                theme === 'light'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <Sun className="h-3.5 w-3.5 text-amber-500" />
              <span className="hidden sm:inline">Claro</span>
            </button>
            <button
              onClick={() => {
                if (theme !== 'dark') onToggleTheme();
              }}
              title="Ativar Modo Escuro (Dark Mode)"
              aria-pressed={theme === 'dark'}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-xs transition-all ${
                theme === 'dark'
                  ? 'bg-slate-700 text-white shadow-2xs font-semibold'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <Moon className="h-3.5 w-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Escuro</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile progress stripe */}
      <div className="md:hidden h-1 w-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full bg-emerald-600 transition-all duration-300 dark:bg-emerald-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  );
}
