'use client';

import React from 'react';
import {
  ArrowRight,
  BookCheck,
  CheckCircle,
  Clock,
  Compass,
  FileQuestion,
  GraduationCap,
  Layers,
  ShieldCheck,
  Target
} from 'lucide-react';
import { StudySessionData } from '@/types/study';

interface StudyIntroProps {
  session: StudySessionData;
  onStartSession: () => void;
  onGoToQuickReview: () => void;
  onGoToQuiz: () => void;
}

export function StudyIntro({
  session,
  onStartSession,
  onGoToQuickReview,
  onGoToQuiz
}: StudyIntroProps) {
  return (
    <div className="mx-auto max-w-4xl py-6 sm:py-10">
      {/* Session Header Card */}
      <section className="border-b border-slate-200 pb-8 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-2">
          <span>{session.targetExam}</span>
          <span aria-hidden="true">·</span>
          <span>{session.courseTitle}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          {session.title}
        </h1>

        <p className="mt-2 text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          {session.subtitle}
        </p>

        {/* Quiet Meta Info (No Pill Capsules, compliant with Anti-Slop) */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            <span>Tempo Estimado: ~{session.estimatedTotalMinutes} minutos</span>
          </div>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-slate-400" />
            <span>{session.blocks.length} Blocos Pedagógicos</span>
          </div>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <FileQuestion className="h-3.5 w-3.5 text-slate-400" />
            <span>{session.questions.length} Questões Inéditas C/E</span>
          </div>
          <span aria-hidden="true">·</span>
          <span>Fonte: {session.author}</span>
        </div>
      </section>

      {/* Visão Geral */}
      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Compass className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          Visão Geral da Sessão
        </h2>
        <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-5 text-sm sm:text-base leading-relaxed text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
          {session.overview}
        </div>
      </section>

      {/* Objetivos de Aprendizagem */}
      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          Objetivos de Aprendizagem
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
          Ao concluir esta sessão de estudos guiada, você deverá ser capaz de:
        </p>

        <div className="space-y-2.5">
          {session.learningObjectives.map((obj, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-md border border-slate-200/80 bg-white p-3.5 shadow-2xs dark:border-slate-800 dark:bg-slate-900/80"
            >
              <CheckCircle className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {obj}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Metodologia Pedagógica: Estrutura da Sessão */}
      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
          <Layers className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          Estrutura do Percurso de Estudos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Etapa 1: Aprender
            </span>
            <span className="mt-1 block font-serif text-lg font-bold text-slate-900 dark:text-white">
              8 Blocos Temáticos
            </span>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Conteúdo detalhado, callouts &ldquo;Olhar CEBRASPE&rdquo;, quadros comparativos e resumos ao fim de cada bloco.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Etapa 2: Consolidar
            </span>
            <span className="mt-1 block font-serif text-lg font-bold text-slate-900 dark:text-white">
              Revisão Rápida
            </span>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Síntese objetiva de memorização com tópicos de alto índice de cobrança e alertas de pegadinhas.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Etapa 3: Praticar & Diagnosticar
            </span>
            <span className="mt-1 block font-serif text-lg font-bold text-slate-900 dark:text-white">
              20 Questões C/E
            </span>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Simulador padrão CEBRASPE com feedback imediato, DNA da armadilha e Caderno de Erros.
            </p>
          </div>
        </div>
      </section>

      {/* Regra de Ouro Metodológica */}
      <section className="mt-8 rounded-lg border border-slate-200 bg-slate-100/70 p-4.5 text-xs sm:text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-300">
        <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white mb-1.5">
          <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <span>Fidelidade Absoluta às Fontes e Metodologia CEBRASPE</span>
        </div>
        <p className="leading-relaxed">
          Nenhuma informação externa foi inventada. O conteúdo factual deriva com rigor da <strong>Aula 04 (Prof. Sergio Henrique)</strong>, enquanto a arquitetura das assertivas reproduz as diretrizes e mecanismos técnicos do <strong>Manual de Elaboração da Banca CEBRASPE/CESPE</strong> (troca entre conceitos próximos, generalizações indevidas, inversão de causa e efeito e literalidade qualificada).
        </p>
      </section>

      {/* Main Action CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={onStartSession}
          className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
        >
          <span>INICIAR SESSÃO DE ESTUDOS</span>
          <ArrowRight className="h-4 w-4" />
        </button>

        <button
          onClick={onGoToQuickReview}
          className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <BookCheck className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <span>Acessar Revisão Rápida</span>
        </button>

        <button
          onClick={onGoToQuiz}
          className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <FileQuestion className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          <span>Ir Direto para as Questões</span>
        </button>
      </div>
    </div>
  );
}
