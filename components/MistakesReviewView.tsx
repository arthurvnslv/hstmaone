'use client';

import React from 'react';
import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Compass,
  FileText,
  RotateCcw,
  Sparkles,
  XCircle
} from 'lucide-react';
import { AnswerType, CebraspeQuestion } from '@/types/study';

interface MistakesReviewViewProps {
  questions: CebraspeQuestion[];
  userAnswers: Record<number, AnswerType>;
  onGoBackToResults: () => void;
  onRetakeQuiz: () => void;
  onGoToBlock: (blockId: number) => void;
}

export function MistakesReviewView({
  questions,
  userAnswers,
  onGoBackToResults,
  onRetakeQuiz,
  onGoToBlock
}: MistakesReviewViewProps) {
  // Filter questions that were answered incorrectly
  const wrongQuestions = questions.filter((q) => {
    const ans = userAnswers[q.id];
    return ans !== undefined && ans !== q.correctAnswer;
  });

  return (
    <div className="mx-auto max-w-3xl py-6 sm:py-10">
      {/* Header */}
      <header className="border-b border-slate-200 pb-6 dark:border-slate-800">
        <button
          onClick={onGoBackToResults}
          className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Voltar ao Painel Geral de Desempenho</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-1">
          <AlertCircle className="h-4 w-4" />
          <span>Caderno Especial de Erros</span>
        </div>

        <h1 className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Análise Aprofundada dos Deslizes
        </h1>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Você errou <strong>{wrongQuestions.length}</strong> de {questions.length} questões. Analise abaixo o ponto cirúrgico de cada armadilha e a regra para memorizar e não errar na prova da PM-MA.
        </p>
      </header>

      {/* List of Wrong Questions */}
      {wrongQuestions.length === 0 ? (
        <div className="mt-10 rounded-lg border border-emerald-200 bg-emerald-50/60 p-8 text-center dark:border-emerald-900/50 dark:bg-emerald-950/20">
          <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600 dark:text-emerald-400 mb-2" />
          <h2 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
            Nenhum Erro Registrado!
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            Parabéns! Todas as questões respondidas até o momento foram julgadas com precisão.
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-6">
          {wrongQuestions.map((q, idx) => {
            const chosenAnswer = userAnswers[q.id];

            return (
              <article
                key={q.id}
                className="rounded-xl border border-rose-200 bg-white p-5 sm:p-6 shadow-xs dark:border-rose-900/60 dark:bg-slate-900"
              >
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5 mb-3 text-xs dark:border-slate-800">
                  <span className="font-semibold text-rose-700 dark:text-rose-400">
                    Item {String(q.id).padStart(2, '0')} · {q.topic}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500">
                      Sua Escolha: <strong className="text-rose-600">{chosenAnswer}</strong>
                    </span>
                    <span className="text-slate-500">
                      Gabarito: <strong className="text-emerald-600">{q.correctAnswer}</strong>
                    </span>
                  </div>
                </div>

                {/* Assertive text */}
                <p className="font-serif text-sm sm:text-base font-medium text-slate-900 dark:text-white leading-relaxed mb-4">
                  &ldquo;{q.statement}&rdquo;
                </p>

                {/* Detailed Analysis Box */}
                <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50/80 p-4 text-xs sm:text-sm dark:border-slate-800 dark:bg-slate-800/40">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                      Comentário da Banca:
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {q.explanation}
                    </p>
                  </div>

                  {q.wrongPoint && (
                    <div className="border-t border-slate-200/80 pt-2 dark:border-slate-700">
                      <span className="font-semibold text-rose-800 dark:text-rose-300 block mb-0.5">
                        Ponto Exato do Erro:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {q.wrongPoint}
                      </p>
                    </div>
                  )}

                  {q.correctedStatement && (
                    <div className="border-t border-slate-200/80 pt-2 dark:border-slate-700">
                      <span className="font-semibold text-emerald-800 dark:text-emerald-300 block mb-0.5">
                        Forma Correta para Fixar:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                        &ldquo;{q.correctedStatement}&rdquo;
                      </p>
                    </div>
                  )}

                  {q.trapDna && (
                    <div className="border-t border-slate-200/80 pt-2 text-[11px] text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        DNA da Armadilha CEBRASPE:
                      </span>{' '}
                      {q.trapDna}
                    </div>
                  )}

                  {/* Reference to block */}
                  <div className="border-t border-slate-200/80 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    <span>
                      Fundamento: Bloco {q.sourceReference.blockNumber} — {q.sourceReference.blockTitle} ({q.sourceReference.lessonPage})
                    </span>
                    <button
                      onClick={() => onGoToBlock(q.blockId)}
                      className="font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 text-left"
                    >
                      Abrir Bloco {q.sourceReference.blockNumber} →
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Footer Navigation */}
      <footer className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 pt-6 dark:border-slate-800">
        <button
          onClick={onGoBackToResults}
          className="w-full sm:w-auto rounded-md border border-slate-300 bg-white px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          Voltar ao Desempenho
        </button>

        <button
          onClick={onRetakeQuiz}
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Refazer Todas as Questões</span>
        </button>
      </footer>
    </div>
  );
}
