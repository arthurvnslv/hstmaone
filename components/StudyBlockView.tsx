'use client';

import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Clock,
  FileText,
  Layers,
  Sparkles
} from 'lucide-react';
import { StudyBlock } from '@/types/study';
import { CalloutBox } from './ui/CalloutBoxes';

interface StudyBlockViewProps {
  block: StudyBlock;
  totalBlocks: number;
  isCompleted: boolean;
  fontSize: 'normal' | 'large' | 'extra';
  onMarkCompleteAndNext: () => void;
  onPreviousBlock?: () => void;
  onGoToQuickReview: () => void;
}

export function StudyBlockView({
  block,
  totalBlocks,
  isCompleted,
  fontSize,
  onMarkCompleteAndNext,
  onPreviousBlock,
  onGoToQuickReview
}: StudyBlockViewProps) {
  // Map font scale to typography classes
  const getTextClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-base sm:text-lg leading-relaxed';
      case 'extra':
        return 'text-lg sm:text-xl leading-loose';
      default:
        return 'text-sm sm:text-base leading-relaxed';
    }
  };

  const isLastBlock = block.id === totalBlocks;

  return (
    <article className="mx-auto max-w-3xl py-6 sm:py-8">
      {/* Block Header */}
      <header className="border-b border-slate-200 pb-6 dark:border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold">
              BLOCO {block.number} DE {String(totalBlocks).padStart(2, '0')}
            </span>
            <span aria-hidden="true">·</span>
            <span>{block.topicTag}</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs">
            <Clock className="h-3.5 w-3.5" />
            <span>{block.estimatedMinutes} min de leitura</span>
          </div>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          {block.title}
        </h1>

        <p className="mt-3 text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
          {block.shortIntro}
        </p>

        {isCompleted && (
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            <span>Você já concluiu a leitura deste bloco</span>
          </div>
        )}
      </header>

      {/* Block Subtopics & Paragraphs */}
      <div className="mt-8 space-y-8">
        {block.sections.map((section, sIdx) => (
          <section key={sIdx} className="space-y-4">
            <h2 className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              {section.subheading}
            </h2>

            <div className={`space-y-4 text-slate-700 dark:text-slate-300 ${getTextClass()}`}>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* Render any callout elements configured for this section */}
            {section.callouts && section.callouts.length > 0 && (
              <div className="space-y-3 pt-2">
                {section.callouts.map((callout, cIdx) => (
                  <CalloutBox key={cIdx} callout={callout} />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Key Takeaways Card */}
      {block.keyTakeaways && block.keyTakeaways.length > 0 && (
        <section className="mt-10 rounded-lg border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            <Bookmark className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span>Pontos Cardeais para Memorização (Bloco {block.number})</span>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {block.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Source Reference Metadata */}
      <div className="mt-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/80 pt-4 dark:border-slate-800">
        <div className="flex items-center gap-1.5">
          <FileText className="h-3.5 w-3.5" />
          <span>
            Fonte do Conteúdo: {block.sourceReference.sectionName} ({block.sourceReference.pageRange})
          </span>
        </div>
        <span className="hidden sm:inline text-[11px]">Foco Pós-Edital 2026</span>
      </div>

      {/* Bottom Step Actions */}
      <footer className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 pt-6 dark:border-slate-800">
        <div>
          {onPreviousBlock ? (
            <button
              onClick={onPreviousBlock}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Bloco Anterior</span>
            </button>
          ) : (
            <div />
          )}
        </div>

        <div className="flex w-full sm:w-auto items-center gap-3">
          <button
            onClick={onGoToQuickReview}
            className="flex-1 sm:flex-initial rounded-md border border-slate-200 px-3 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            Revisão Rápida
          </button>

          <button
            onClick={onMarkCompleteAndNext}
            className="flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
          >
            <span>{isLastBlock ? 'Concluir Leitura e Ir para Revisão' : 'Marcar como Lido e Avançar'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </footer>
    </article>
  );
}
