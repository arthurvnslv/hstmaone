'use client';

import React from 'react';
import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookCheck,
  CheckCircle2,
  Compass,
  FileQuestion,
  HelpCircle,
  RefreshCw,
  RotateCcw,
  Sparkles,
  Target,
  XCircle
} from 'lucide-react';
import { AnswerType, CebraspeQuestion, StudyBlock } from '@/types/study';

interface QuizResultsViewProps {
  questions: CebraspeQuestion[];
  blocks: StudyBlock[];
  userAnswers: Record<number, AnswerType>;
  onReviewMistakes: () => void;
  onRetakeQuiz: () => void;
  onGoToQuickReview: () => void;
  onGoToBlock: (blockId: number) => void;
}

export function QuizResultsView({
  questions,
  blocks,
  userAnswers,
  onReviewMistakes,
  onRetakeQuiz,
  onGoToQuickReview,
  onGoToBlock
}: QuizResultsViewProps) {
  const totalQuestions = questions.length;
  let correctCount = 0;
  let wrongCount = 0;

  // Track per-block performance
  const blockStats: Record<
    number,
    { title: string; total: number; correct: number; wrong: number }
  > = {};

  blocks.forEach((b) => {
    blockStats[b.id] = { title: b.title, total: 0, correct: 0, wrong: 0 };
  });

  // Track error patterns
  const detectedErrorPatterns: string[] = [];

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (ans) {
      if (ans === q.correctAnswer) {
        correctCount++;
        if (blockStats[q.blockId]) {
          blockStats[q.blockId].correct++;
          blockStats[q.blockId].total++;
        }
      } else {
        wrongCount++;
        if (blockStats[q.blockId]) {
          blockStats[q.blockId].wrong++;
          blockStats[q.blockId].total++;
        }
        if (q.trapDna && !detectedErrorPatterns.includes(q.trapDna)) {
          detectedErrorPatterns.push(q.trapDna);
        }
      }
    }
  });

  const percentScore = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="mx-auto max-w-4xl py-6 sm:py-10">
      {/* Header */}
      <header className="border-b border-slate-200 pb-6 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
          <BarChart3 className="h-4 w-4" />
          <span>Etapa 4 · Diagnóstico de Desempenho</span>
        </div>

        <h1 className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Resultado da Sessão de Questões
        </h1>

        <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
          Relatório estatístico objetivo do caderno de {totalQuestions} assertivas inéditas resolvidas no padrão CEBRASPE.
        </p>
      </header>

      {/* Main Score Metrics Grid */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {/* Total Questions */}
        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Total de Itens
          </span>
          <span className="mt-1 block font-mono text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {totalQuestions}
          </span>
          <span className="mt-1 block text-xs text-slate-500">100% julgados</span>
        </div>

        {/* Hits */}
        <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4 dark:border-emerald-900/60 dark:bg-emerald-950/20">
          <span className="block text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
            Acertos
          </span>
          <span className="mt-1 block font-mono text-2xl sm:text-3xl font-bold text-emerald-700 dark:text-emerald-300">
            {correctCount}
          </span>
          <span className="mt-1 block text-xs text-emerald-700/80 dark:text-emerald-400/80">
            Itens validados
          </span>
        </div>

        {/* Errors */}
        <div className="rounded-lg border border-rose-200 bg-rose-50/50 p-4 dark:border-rose-900/60 dark:bg-rose-950/20">
          <span className="block text-xs font-semibold uppercase tracking-wider text-rose-800 dark:text-rose-400">
            Erros
          </span>
          <span className="mt-1 block font-mono text-2xl sm:text-3xl font-bold text-rose-700 dark:text-rose-300">
            {wrongCount}
          </span>
          <span className="mt-1 block text-xs text-rose-700/80 dark:text-rose-400/80">
            Pontos de revisão
          </span>
        </div>

        {/* Percentage */}
        <div className="rounded-lg border border-indigo-200 bg-indigo-50/50 p-4 dark:border-indigo-900/60 dark:bg-indigo-950/20">
          <span className="block text-xs font-semibold uppercase tracking-wider text-indigo-800 dark:text-indigo-400">
            Aproveitamento
          </span>
          <span className="mt-1 block font-mono text-2xl sm:text-3xl font-bold text-indigo-700 dark:text-indigo-300">
            {percentScore}%
          </span>
          <span className="mt-1 block text-xs text-indigo-700/80 dark:text-indigo-400/80">
            {correctCount} de {totalQuestions} corretas
          </span>
        </div>
      </div>

      {/* Breakdown by Topic / Pedagogical Block */}
      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          Desempenho por Assunto e Bloco
        </h2>

        <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
          {blocks.map((b) => {
            const stats = blockStats[b.id] || { total: 0, correct: 0, wrong: 0 };
            const rate = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
            const hasErrorInTopic = stats.wrong > 0;

            return (
              <div
                key={b.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 hover:bg-slate-50/60 transition-colors dark:hover:bg-slate-800/40"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      Bloco {b.number}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{b.topicTag}</span>
                  </div>
                  <div className="font-serif text-sm font-semibold text-slate-900 dark:text-white truncate">
                    {b.title}
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                  <div className="text-right">
                    <span className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {stats.correct}/{stats.total} acertos
                    </span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                      {rate}% aproveitamento
                    </span>
                  </div>

                  {hasErrorInTopic ? (
                    <button
                      onClick={() => onGoToBlock(b.id)}
                      className="rounded-md border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-900 hover:bg-amber-100 transition-colors dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300"
                    >
                      Revisar Bloco →
                    </button>
                  ) : (
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      Consolidado ✓
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Error Patterns Diagnostic */}
      {detectedErrorPatterns.length > 0 && (
        <section className="mt-8 rounded-lg border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            <Compass className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span>Padrões de Armadilha Incidentes nas Respostas Incorretas</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
            O sistema mapeou os mecanismos específicos da banca CEBRASPE que demandam atenção na sua leitura:
          </p>

          <div className="flex flex-wrap gap-2">
            {detectedErrorPatterns.map((dna, idx) => (
              <div
                key={idx}
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-2xs dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {dna}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Main Action Buttons */}
      <footer className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
        {wrongCount > 0 && (
          <button
            onClick={onReviewMistakes}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md bg-rose-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-rose-700 transition-colors focus-visible:outline-2 focus-visible:outline-rose-600"
          >
            <AlertCircle className="h-4 w-4" />
            <span>REVISAR MEUS ERROS ({wrongCount})</span>
          </button>
        )}

        <button
          onClick={onRetakeQuiz}
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          <RotateCcw className="h-4 w-4 text-slate-500" />
          <span>REFAZER QUESTÕES</span>
        </button>

        <button
          onClick={onGoToQuickReview}
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          <BookCheck className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <span>REVISAR CONTEÚDO</span>
        </button>
      </footer>
    </div>
  );
}
