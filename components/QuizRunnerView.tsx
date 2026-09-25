'use client';

import React, { useEffect } from 'react';
import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  FileCheck2,
  FileText,
  HelpCircle,
  RotateCcw,
  Sparkles,
  XCircle
} from 'lucide-react';
import { AnswerType, CebraspeQuestion } from '@/types/study';

interface QuizRunnerViewProps {
  questions: CebraspeQuestion[];
  currentIndex: number;
  userAnswers: Record<number, AnswerType>;
  fontSize: 'normal' | 'large' | 'extra';
  onAnswerQuestion: (questionId: number, answer: AnswerType) => void;
  onNextQuestion: () => void;
  onPreviousQuestion: () => void;
  onFinishQuiz: () => void;
  onGoToBlockReview: (blockId: number) => void;
}

export function QuizRunnerView({
  questions,
  currentIndex,
  userAnswers,
  fontSize,
  onAnswerQuestion,
  onNextQuestion,
  onPreviousQuestion,
  onFinishQuiz,
  onGoToBlockReview
}: QuizRunnerViewProps) {
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const currentAnswer = userAnswers[currentQuestion.id];
  const hasAnswered = currentAnswer !== undefined;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  const isCorrect = hasAnswered && currentAnswer === currentQuestion.correctAnswer;

  // Text scaling classes
  const getStatementTextClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg sm:text-xl leading-relaxed';
      case 'extra':
        return 'text-xl sm:text-2xl leading-loose';
      default:
        return 'text-base sm:text-lg leading-relaxed';
    }
  };

  // Keyboard shortcut listener for active study session
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input field
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (!hasAnswered) {
        if (e.key === 'c' || e.key === 'C') {
          e.preventDefault();
          onAnswerQuestion(currentQuestion.id, 'CERTO');
        } else if (e.key === 'e' || e.key === 'E') {
          e.preventDefault();
          onAnswerQuestion(currentQuestion.id, 'ERRADO');
        }
      } else {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
          e.preventDefault();
          if (isLastQuestion) {
            onFinishQuiz();
          } else {
            onNextQuestion();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    hasAnswered,
    currentQuestion.id,
    isLastQuestion,
    onAnswerQuestion,
    onFinishQuiz,
    onNextQuestion
  ]);

  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="mx-auto max-w-3xl py-6 sm:py-8">
      {/* Quiz Progress Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          <span>
            QUESTÃO {String(currentIndex + 1).padStart(2, '0')} DE {String(totalQuestions).padStart(2, '0')}
          </span>
          <span className="font-mono">{progressPercent}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-full bg-indigo-600 transition-all duration-300 dark:bg-indigo-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <article className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        {/* Command Header (Padrão CEBRASPE) */}
        <div className="border-b border-slate-100 pb-3 mb-4 dark:border-slate-800">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
            {currentQuestion.topic} · {currentQuestion.subtopic}
          </span>
          <p className="font-serif italic text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {currentQuestion.command}
          </p>
        </div>

        {/* Assertive Statement */}
        <div className="py-2">
          <p className={`font-serif font-medium text-slate-900 dark:text-white ${getStatementTextClass()}`}>
            &ldquo;{currentQuestion.statement}&rdquo;
          </p>
        </div>

        {/* Answer Decision Buttons */}
        <div className="mt-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 text-center sm:text-left">
            {!hasAnswered ? 'Selecione seu julgamento (ou tecle C / E):' : 'Seu julgamento registrado:'}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* CERTO Button */}
            <button
              onClick={() => !hasAnswered && onAnswerQuestion(currentQuestion.id, 'CERTO')}
              disabled={hasAnswered}
              aria-label="Julgar como CERTO"
              className={`group flex flex-col items-center justify-center rounded-lg border-2 py-4 px-3 sm:py-5 transition-all text-center focus-visible:outline-2 focus-visible:outline-emerald-600 ${
                !hasAnswered
                  ? 'border-slate-200 bg-slate-50 hover:border-emerald-500 hover:bg-emerald-50/50 hover:text-emerald-900 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-emerald-500 dark:hover:bg-emerald-950/30'
                  : currentAnswer === 'CERTO'
                  ? isCorrect
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold dark:border-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-200'
                    : 'border-rose-600 bg-rose-50 text-rose-900 font-bold dark:border-rose-500 dark:bg-rose-950/40 dark:text-rose-200'
                  : currentQuestion.correctAnswer === 'CERTO'
                  ? 'border-emerald-500/60 bg-emerald-50/30 text-emerald-800 opacity-90 dark:border-emerald-500/60 dark:bg-emerald-950/20 dark:text-emerald-300'
                  : 'border-slate-200 bg-slate-100/50 text-slate-400 opacity-40 dark:border-slate-800 dark:bg-slate-800/30'
              }`}
            >
              <span className="font-mono text-xs font-semibold opacity-70 group-hover:opacity-100">
                [ C ]
              </span>
              <span className="mt-1 text-base sm:text-lg font-bold tracking-wider">
                CERTO
              </span>
            </button>

            {/* ERRADO Button */}
            <button
              onClick={() => !hasAnswered && onAnswerQuestion(currentQuestion.id, 'ERRADO')}
              disabled={hasAnswered}
              aria-label="Julgar como ERRADO"
              className={`group flex flex-col items-center justify-center rounded-lg border-2 py-4 px-3 sm:py-5 transition-all text-center focus-visible:outline-2 focus-visible:outline-rose-600 ${
                !hasAnswered
                  ? 'border-slate-200 bg-slate-50 hover:border-rose-500 hover:bg-rose-50/50 hover:text-rose-900 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-rose-500 dark:hover:bg-rose-950/30'
                  : currentAnswer === 'ERRADO'
                  ? isCorrect
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold dark:border-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-200'
                    : 'border-rose-600 bg-rose-50 text-rose-900 font-bold dark:border-rose-500 dark:bg-rose-950/40 dark:text-rose-200'
                  : currentQuestion.correctAnswer === 'ERRADO'
                  ? 'border-emerald-500/60 bg-emerald-50/30 text-emerald-800 opacity-90 dark:border-emerald-500/60 dark:bg-emerald-950/20 dark:text-emerald-300'
                  : 'border-slate-200 bg-slate-100/50 text-slate-400 opacity-40 dark:border-slate-800 dark:bg-slate-800/30'
              }`}
            >
              <span className="font-mono text-xs font-semibold opacity-70 group-hover:opacity-100">
                [ E ]
              </span>
              <span className="mt-1 text-base sm:text-lg font-bold tracking-wider">
                ERRADO
              </span>
            </button>
          </div>
        </div>

        {/* Immediate Feedback Section (Revealed only after answering) */}
        {hasAnswered && (
          <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800 animate-in fade-in duration-300">
            {/* Feedback Banner */}
            <div
              className={`flex items-center gap-3 rounded-lg p-4 font-semibold text-sm sm:text-base ${
                isCorrect
                  ? 'border border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200'
                  : 'border border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-800 dark:bg-rose-950/50 dark:text-rose-200'
              }`}
            >
              {isCorrect ? (
                <>
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <span className="block font-bold">VOCÊ ACERTOU!</span>
                    <span className="text-xs font-normal opacity-90">
                      Gabarito Oficial: <strong>{currentQuestion.correctAnswer}</strong>
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5 shrink-0 text-rose-600 dark:text-rose-400" />
                  <div>
                    <span className="block font-bold">VOCÊ ERROU!</span>
                    <span className="text-xs font-normal opacity-90">
                      Sua resposta: <strong>{currentAnswer}</strong> · Gabarito Oficial: <strong>{currentQuestion.correctAnswer}</strong>
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Comentário Didático Completo */}
            <div className="mt-5 space-y-3 rounded-lg border border-slate-200 bg-slate-50/70 p-5 text-slate-800 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200/80 pb-2 dark:border-slate-800">
                <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <Compass className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  Comentário e Fundamentação
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {currentQuestion.cognitiveLevel}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {currentQuestion.explanation}
              </p>

              {/* Se o item for ERRADO: Ponto Exato do Erro + Forma Correta + DNA da Armadilha */}
              {currentQuestion.correctAnswer === 'ERRADO' && (
                <div className="mt-4 space-y-2.5 rounded-md border border-rose-200 bg-rose-50/60 p-4 text-xs sm:text-sm dark:border-rose-900/50 dark:bg-rose-950/30">
                  {currentQuestion.wrongPoint && (
                    <div>
                      <span className="font-semibold text-rose-900 dark:text-rose-300 block mb-0.5">
                        Ponto Exato que Torna o Item Errado:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {currentQuestion.wrongPoint}
                      </p>
                    </div>
                  )}

                  {currentQuestion.correctedStatement && (
                    <div className="border-t border-rose-200/80 pt-2 dark:border-rose-900/50">
                      <span className="font-semibold text-emerald-900 dark:text-emerald-300 block mb-0.5">
                        Forma Correta da Proposição:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                        &ldquo;{currentQuestion.correctedStatement}&rdquo;
                      </p>
                    </div>
                  )}

                  {currentQuestion.trapDna && (
                    <div className="border-t border-rose-200/80 pt-2 text-[11px] text-slate-600 dark:border-rose-900/50 dark:text-slate-400">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        DNA da Armadilha CEBRASPE:
                      </span>{' '}
                      {currentQuestion.trapDna}
                    </div>
                  )}
                </div>
              )}

              {/* Revise no Material */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-200/80 pt-3 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>
                    Revise no Material: <strong>Bloco {currentQuestion.sourceReference.blockNumber} — {currentQuestion.sourceReference.blockTitle}</strong> ({currentQuestion.sourceReference.lessonPage})
                  </span>
                </div>
                <button
                  onClick={() => onGoToBlockReview(currentQuestion.blockId)}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 underline underline-offset-2 text-left"
                >
                  Abrir este Bloco →
                </button>
              </div>
            </div>

            {/* Bottom Next Question CTA */}
            <div className="mt-6 flex items-center justify-end">
              <button
                onClick={isLastQuestion ? onFinishQuiz : onNextQuestion}
                className="flex items-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
              >
                <span>{isLastQuestion ? 'Ver Desempenho Final' : 'Próxima Questão'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </article>

      {/* Navigation Shortcuts below card */}
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <button
          onClick={onPreviousQuestion}
          disabled={currentIndex === 0}
          className="disabled:opacity-30 hover:text-slate-800 dark:hover:text-slate-200 font-medium"
        >
          ← Questão Anterior
        </button>
        <span className="font-mono">
          {Object.keys(userAnswers).length} de {totalQuestions} respondidas
        </span>
      </div>
    </div>
  );
}
