'use client';

import React from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BookCheck,
  CheckCircle2,
  Clock,
  Compass,
  FileQuestion,
  Layers,
  Scale,
  Sparkles
} from 'lucide-react';
import { QuickReviewTopic } from '@/types/study';

interface QuickReviewViewProps {
  topics: QuickReviewTopic[];
  totalQuestions: number;
  onGoToQuestions: () => void;
  onGoToBlock: (blockId: number) => void;
}

export function QuickReviewView({
  topics,
  totalQuestions,
  onGoToQuestions,
  onGoToBlock
}: QuickReviewViewProps) {
  return (
    <div className="mx-auto max-w-4xl py-6 sm:py-8">
      {/* Header */}
      <header className="border-b border-slate-200 pb-6 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
          <BookCheck className="h-4 w-4" />
          <span>Etapa 2 · Consolidação Teórica</span>
        </div>

        <h1 className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Revisão Rápida dos Pontos Decisivos
        </h1>

        <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
          Uma síntese de alta densidade conceitual, condensando os dados factuais, distinções finas e cronologias mais cobradas pelas bancas examinadoras antes do simulado de questões.
        </p>
      </header>

      {/* Synthesis Cards */}
      <div className="mt-8 space-y-6">
        {topics.map((t, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-2xs transition-colors dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3 dark:border-slate-800">
              <h2 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {t.title}
              </h2>
              <button
                onClick={() => onGoToBlock(idx + 1)}
                className="text-xs font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Revisar Bloco {String(idx + 1).padStart(2, '0')} →
              </button>
            </div>

            {/* Core facts bullet list */}
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-4">
              {t.keyPoints.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            {/* CEBRASPE Alert */}
            <div className="rounded-md border-l-3 border-amber-600 bg-amber-50/70 p-3 text-xs text-amber-950 dark:border-amber-500 dark:bg-amber-950/30 dark:text-amber-200">
              <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wider mb-1 text-[11px] text-amber-900 dark:text-amber-300">
                <Compass className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                <span>Radar CEBRASPE: Como Costuma Cair</span>
              </div>
              <p className="leading-relaxed">{t.cebraspeAlert}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Synthesis Quick Comparison Table */}
      <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/60">
        <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <Scale className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          Quadro Comparativo: As Duas Companhias de Comércio do Maranhão
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          A distinção entre as companhias é uma das armadilhas preferidas de elaboradores da banca CEBRASPE.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-300 bg-slate-200/50 dark:border-slate-700 dark:bg-slate-800">
                <th className="py-2 px-3 font-semibold text-slate-900 dark:text-white">Critério</th>
                <th className="py-2 px-3 font-semibold text-slate-900 dark:text-white">Companhia de Comércio de 1682</th>
                <th className="py-2 px-3 font-semibold text-slate-900 dark:text-white">Cia. do Grão-Pará e Maranhão (1755)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr>
                <td className="py-2 px-3 font-medium text-slate-900 dark:text-white">Período Histórico</td>
                <td className="py-2 px-3">Século XVII (1682)</td>
                <td className="py-2 px-3">Século XVIII (1755, Era Pombalina)</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium text-slate-900 dark:text-white">Objetivo Principal</td>
                <td className="py-2 px-3">Fornecer 500 escravos/ano e escoar produção; diminuir atrito colonos x jesuítas</td>
                <td className="py-2 px-3">Incentivar migração, introduzir cultivo intensivo de algodão e arroz</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium text-slate-900 dark:text-white">Resultado Factual</td>
                <td className="py-2 px-3">Descumpriu prazos e cotas, vendeu produtos ruins e caros; deflagrou a <strong>Revolta de Beckman (1684)</strong></td>
                <td className="py-2 px-3">Transformou o algodão no ápice de exportação do Império; financiou os casarões coloniais de São Luís</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA: Ir para as Questões */}
      <div className="mt-10 rounded-lg border border-indigo-200 bg-indigo-50/70 p-6 text-center dark:border-indigo-900/60 dark:bg-indigo-950/30">
        <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
          Teoria Consolidada! Pronto para o Julgamento dos Itens?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-5">
          Você responderá a {totalQuestions} questões inéditas no formato estrito de Certo ou Errado, construídas rigorosamente nos moldes da banca CEBRASPE/CESPE.
        </p>

        <button
          onClick={onGoToQuestions}
          className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
        >
          <span>IR PARA AS QUESTÕES</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
