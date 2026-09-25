'use client';

import React from 'react';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  FileQuestion,
  HelpCircle,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

interface QuizIntroViewProps {
  totalQuestions: number;
  onStartQuiz: () => void;
  onBackToReview: () => void;
}

export function QuizIntroView({
  totalQuestions,
  onStartQuiz,
  onBackToReview
}: QuizIntroViewProps) {
  return (
    <div className="mx-auto max-w-2xl py-8 sm:py-12">
      <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900 text-center">
        {/* Badge */}
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-400">
          <FileQuestion className="h-6 w-6" />
        </div>

        <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
          Etapa 3 · Julgamento de Assertivas
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Hora de Testar o que Você Aprendeu
        </h1>

        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mx-auto">
          Você enfrentará um caderno com <strong>{totalQuestions} itens inéditos</strong> no formato de julgamento <strong>CERTO ou ERRADO</strong>, modelados segundo as diretrizes de elaboração da banca <strong>CEBRASPE/CESPE</strong>.
        </p>

        {/* Orientation Box */}
        <div className="my-6 rounded-lg border border-slate-200 bg-slate-50/70 p-4 text-left text-xs sm:text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-300 space-y-2">
          <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5 text-xs uppercase tracking-wider">
            <ShieldAlert className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            Orientações de Resolução:
          </div>
          <p className="leading-relaxed">
            • <strong>Julgamento Integral da Assertiva:</strong> Uma assertiva CERTA deve ser inteiramente verdadeira. Se contiver um único detalhe, competência, prazo ou relação incorreta, julgue-a como <strong>ERRADO</strong>.
          </p>
          <p className="leading-relaxed">
            • <strong>Sem Pistas Artificiais:</strong> Palavras como &ldquo;sempre&rdquo; ou &ldquo;somente&rdquo; não significam automaticamente erro; o julgamento depende estritamente do conteúdo ensinado na sessão.
          </p>
          <p className="leading-relaxed">
            • <strong>Feedback Imediato & DNA da Armadilha:</strong> Após sua resposta, o gabarito será revelado com o comentário didático e a indicação do bloco e página para revisão.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onBackToReview}
            className="w-full sm:w-auto rounded-md border border-slate-200 bg-white px-5 py-3 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            Voltar para a Revisão Rápida
          </button>

          <button
            onClick={onStartQuiz}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
          >
            <span>COMEÇAR QUESTÕES</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
