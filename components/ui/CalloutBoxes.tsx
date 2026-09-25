'use client';

import React from 'react';
import {
  AlertTriangle,
  Bookmark,
  CheckCircle2,
  Compass,
  FileCheck2,
  HelpCircle,
  Info,
  Layers,
  Scale,
  Sparkles
} from 'lucide-react';
import { CalloutItem } from '@/types/study';

interface CalloutProps {
  callout: CalloutItem;
}

export function CalloutBox({ callout }: CalloutProps) {
  const { type, title, content, comparisonItems } = callout;

  switch (type) {
    case 'importante':
      return (
        <aside className="my-6 rounded-lg border-l-4 border-sky-600 bg-sky-50/70 p-4.5 text-slate-800 transition-colors dark:border-sky-400 dark:bg-sky-950/30 dark:text-sky-100">
          <div className="flex items-center gap-2 mb-2 font-semibold text-sm uppercase tracking-wider text-sky-800 dark:text-sky-300">
            <Info className="h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400" />
            <span>{title || 'Importante'}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {content}
          </p>
        </aside>
      );

    case 'atencao':
      return (
        <aside className="my-6 rounded-lg border-l-4 border-amber-600 bg-amber-50/80 p-4.5 text-slate-800 transition-colors dark:border-amber-500 dark:bg-amber-950/30 dark:text-amber-100">
          <div className="flex items-center gap-2 mb-2 font-semibold text-sm uppercase tracking-wider text-amber-900 dark:text-amber-300">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
            <span>{title || 'Atenção'}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {content}
          </p>
        </aside>
      );

    case 'guarde_isso':
      return (
        <aside className="my-6 rounded-lg border-l-4 border-emerald-600 bg-emerald-50/70 p-4.5 text-slate-800 transition-colors dark:border-emerald-500 dark:bg-emerald-950/30 dark:text-emerald-100">
          <div className="flex items-center gap-2 mb-2 font-semibold text-sm uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
            <Bookmark className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>{title || 'Guarde Isso para Fixação'}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {content}
          </p>
        </aside>
      );

    case 'na_prova':
      return (
        <aside className="my-6 rounded-lg border border-indigo-200 bg-indigo-50/60 p-4.5 text-slate-800 shadow-xs transition-colors dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-100">
          <div className="flex items-center gap-2 mb-2 font-semibold text-sm uppercase tracking-wider text-indigo-900 dark:text-indigo-300">
            <FileCheck2 className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
            <span>{title || 'Na Prova'}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {content}
          </p>
        </aside>
      );

    case 'cuidado_com_a_pegadinha':
      return (
        <aside className="my-6 rounded-lg border-l-4 border-rose-600 bg-rose-50/70 p-4.5 text-slate-800 transition-colors dark:border-rose-500 dark:bg-rose-950/30 dark:text-rose-100">
          <div className="flex items-center gap-2 mb-2 font-semibold text-sm uppercase tracking-wider text-rose-900 dark:text-rose-300">
            <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" />
            <span>{title || 'Cuidado com a Pegadinha'}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {content}
          </p>
        </aside>
      );

    case 'olhar_cebraspe':
      return (
        <aside className="my-6 rounded-lg border border-slate-300 bg-slate-100/90 p-5 text-slate-900 shadow-xs transition-colors dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-3 dark:border-slate-700">
            <div className="flex items-center gap-2 font-semibold text-sm uppercase tracking-wide text-slate-900 dark:text-slate-100">
              <Compass className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
              <span>{title || 'Olhar CEBRASPE'}</span>
            </div>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Padrão de Julgamento
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {content}
          </p>
        </aside>
      );

    case 'compare':
      return (
        <div className="my-6 rounded-lg border border-slate-200 bg-white p-5 shadow-xs transition-colors dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2 mb-3 font-semibold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200">
            <Scale className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
            <span>{title || 'Compare os Conceitos'}</span>
          </div>
          {content && (
            <p className="text-sm text-slate-600 mb-4 dark:text-slate-400 leading-relaxed">
              {content}
            </p>
          )}
          {comparisonItems && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="rounded-md border border-slate-200 bg-slate-50/70 p-3.5 dark:border-slate-800 dark:bg-slate-800/40">
                <span className="block font-semibold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {comparisonItems.conceptA.label}
                </span>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {comparisonItems.conceptA.details}
                </p>
              </div>
              <div className="rounded-md border border-slate-200 bg-slate-50/70 p-3.5 dark:border-slate-800 dark:bg-slate-800/40">
                <span className="block font-semibold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {comparisonItems.conceptB.label}
                </span>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {comparisonItems.conceptB.details}
                </p>
              </div>
            </div>
          )}
        </div>
      );

    case 'em_outras_palavras':
      return (
        <aside className="my-6 rounded-lg border-l-4 border-teal-600 bg-teal-50/60 p-4.5 text-slate-800 transition-colors dark:border-teal-400 dark:bg-teal-950/30 dark:text-teal-100">
          <div className="flex items-center gap-2 mb-2 font-semibold text-sm uppercase tracking-wider text-teal-900 dark:text-teal-300">
            <Sparkles className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
            <span>{title || 'Em Outras Palavras'}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {content}
          </p>
        </aside>
      );

    case 'resumindo':
      return (
        <div className="my-6 rounded-lg border border-emerald-200 bg-emerald-50/50 p-5 text-slate-800 transition-colors dark:border-emerald-900/60 dark:bg-emerald-950/20 dark:text-emerald-100">
          <div className="flex items-center gap-2 mb-2 font-semibold text-sm uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>{title || 'Resumindo'}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {content}
          </p>
        </div>
      );

    default:
      return (
        <aside className="my-6 rounded-lg border-l-4 border-slate-400 bg-slate-50 p-4 text-slate-800 dark:border-slate-600 dark:bg-slate-800/40 dark:text-slate-200">
          <p className="text-sm leading-relaxed">{content}</p>
        </aside>
      );
  }
}
