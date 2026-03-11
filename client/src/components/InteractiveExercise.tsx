import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, CheckCircle, AlertCircle } from 'lucide-react';
import PythonCodeEditor from './PythonCodeEditor';

interface Exercise {
  id: string;
  title: string;
  description: string;
  hint: string;
  expectedOutput?: string;
  starterCode: string;
}

interface InteractiveExerciseProps {
  exercises: Exercise[];
  lessonTitle: string;
}

export default function InteractiveExercise({
  exercises,
  lessonTitle,
}: InteractiveExerciseProps) {
  const [expandedExercise, setExpandedExercise] = useState<string | null>(
    exercises[0]?.id || null
  );
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(
    new Set()
  );

  const toggleExercise = (id: string) => {
    setExpandedExercise(expandedExercise === id ? null : id);
  };

  const markComplete = (id: string) => {
    const newCompleted = new Set(completedExercises);
    newCompleted.add(id);
    setCompletedExercises(newCompleted);
  };

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4">
        <h2 className="text-xl font-bold text-amber-900 mb-2">
          🎯 แบบฝึกหัด: {lessonTitle}
        </h2>
        <p className="text-sm text-amber-800">
          ลองเขียนโค้ด Python ได้ทันที! คลิกที่แบบฝึกหัดเพื่อเริ่มต้น
        </p>
      </div>

      <div className="space-y-3">
        {exercises.map((exercise) => {
          const isExpanded = expandedExercise === exercise.id;
          const isCompleted = completedExercises.has(exercise.id);

          return (
            <Card
              key={exercise.id}
              className="overflow-hidden border-slate-200 hover:border-teal-300 transition-colors"
            >
              {/* Header */}
              <button
                onClick={() => toggleExercise(exercise.id)}
                className="w-full px-4 py-3 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center gap-3 text-left">
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {exercise.id}. {exercise.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-0.5">
                      {exercise.description}
                    </p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>

              {/* Content */}
              {isExpanded && (
                <div className="px-4 py-4 bg-white border-t border-slate-100 space-y-4">
                  {/* Hint */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-900">
                      <strong>💡 คำใบ้:</strong> {exercise.hint}
                    </p>
                  </div>

                  {/* Code Editor */}
                  <PythonCodeEditor
                    initialCode={exercise.starterCode}
                    title={`แบบฝึกหัด ${exercise.id}`}
                    hint={exercise.hint}
                  />

                  {/* Expected Output */}
                  {exercise.expectedOutput && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                      <p className="text-sm font-semibold text-emerald-900 mb-1">
                        ✅ ผลลัพธ์ที่คาดหวัง:
                      </p>
                      <pre className="text-xs text-emerald-800 font-mono whitespace-pre-wrap break-words">
                        {exercise.expectedOutput}
                      </pre>
                    </div>
                  )}

                  {/* Mark Complete Button */}
                  <Button
                    onClick={() => markComplete(exercise.id)}
                    className={`w-full ${
                      isCompleted
                        ? 'bg-emerald-600 hover:bg-emerald-700'
                        : 'bg-teal-600 hover:bg-teal-700'
                    } text-white`}
                  >
                    {isCompleted ? '✅ เสร็จสิ้น' : '✓ ทำเสร็จแล้ว'}
                  </Button>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {/* Progress */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-slate-700">
            ความก้าวหน้า
          </span>
          <span className="text-sm font-bold text-teal-600">
            {completedExercises.size} / {exercises.length}
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-teal-500 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${(completedExercises.size / exercises.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
