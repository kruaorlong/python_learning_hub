/**
 * Lesson Page - แสดงเนื้อหาบทเรียนแต่ละคาบ
 * Design: Friendly Classroom - Teal + Amber
 */
import { useParams, Link } from "wouter";
import { lessons } from "@/data/lessons";
import Sidebar from "@/components/Sidebar";
import CodeBlock from "@/components/CodeBlock";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Target,
  BookOpen,
  Code,
  PenTool,
  Star,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

export default function LessonPage() {
  const params = useParams<{ id: string }>();
  const lessonId = parseInt(params.id || "1");
  const lesson = lessons.find((l) => l.id === lessonId);
  const prevLesson = lessons.find((l) => l.id === lessonId - 1);
  const nextLesson = lessons.find((l) => l.id === lessonId + 1);

  if (!lesson) {
    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-700 mb-2">ไม่พบบทเรียน</h2>
            <Link href="/" className="text-teal-600 hover:underline text-sm">
              กลับหน้าหลัก
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 py-10 lg:py-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 bg-white/15 rounded-full text-white/80 text-xs font-medium">
                  วันที่ {lesson.day}
                </span>
                <span className="px-2.5 py-1 bg-amber-400/20 border border-amber-400/30 rounded-full text-amber-200 text-xs font-medium">
                  {lesson.period === "เช้า" ? "🌅 ช่วงเช้า" : "🌇 ช่วงบ่าย"}
                </span>
                <span className="px-2.5 py-1 bg-white/10 rounded-full text-white/70 text-xs font-medium">
                  คาบที่ {lesson.id}/15
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl lg:text-5xl">{lesson.icon}</span>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-1" style={{ fontFamily: "'Space Grotesk', 'Noto Sans Thai', sans-serif" }}>
                    {lesson.title}
                  </h1>
                  <p className="text-teal-200 text-sm">{lesson.titleEn}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Objectives */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-amber-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-800">จุดประสงค์การเรียนรู้</h2>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <ul className="space-y-2.5">
                {lesson.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-amber-900">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Theory */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-teal-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-800">เนื้อหาทฤษฎี</h2>
            </div>
            <div className="space-y-4">
              {lesson.theory.map((text, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-xs font-bold text-teal-700 flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Code Examples */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-emerald-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-800">ตัวอย่างโค้ด</h2>
            </div>
            {lesson.codeExamples.map((example, i) => (
              <CodeBlock
                key={i}
                code={example.code}
                title={example.title}
                explanation={example.explanation}
                output={example.output}
              />
            ))}
          </motion.section>

          {/* Exercises */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <PenTool className="w-4 h-4 text-blue-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-800">แบบฝึกหัด</h2>
            </div>
            <div className="space-y-3">
              {lesson.exercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center text-xs font-bold text-blue-700 flex-shrink-0">
                      {exercise.id}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-700 mb-2">{exercise.question}</p>
                      {exercise.hint && (
                        <div className="flex items-start gap-1.5 bg-blue-50 rounded-lg p-3">
                          <Lightbulb className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-blue-700">
                            <span className="font-semibold">คำใบ้:</span> {exercise.hint}
                          </p>
                        </div>
                      )}
                      {exercise.sampleCode && (
                        <CodeBlock code={exercise.sampleCode} showLineNumbers={false} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Key Points */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                <Star className="w-4 h-4 text-amber-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-800">สรุปประเด็นสำคัญ</h2>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-xl p-5">
              <ul className="space-y-2.5">
                {lesson.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-amber-900">
                    <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Next Preview */}
          {lesson.nextPreview && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-10"
            >
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-teal-800 mb-1">คาบถัดไป</p>
                  <p className="text-sm text-teal-700">{lesson.nextPreview}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-4 pb-12 border-t border-slate-100">
            {prevLesson ? (
              <Link
                href={`/lesson/${prevLesson.id}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-teal-50 hover:border-teal-200 transition-all text-sm group"
              >
                <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-teal-600" />
                <div className="text-right">
                  <div className="text-[10px] text-slate-400 font-medium">คาบก่อนหน้า</div>
                  <div className="text-xs font-semibold text-slate-600 group-hover:text-teal-700">
                    {prevLesson.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextLesson ? (
              <Link
                href={`/lesson/${nextLesson.id}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-teal-600 text-white rounded-xl hover:bg-teal-500 transition-all text-sm group shadow-md"
              >
                <div>
                  <div className="text-[10px] text-teal-200 font-medium">คาบถัดไป</div>
                  <div className="text-xs font-semibold">
                    {nextLesson.title}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-teal-200 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2.5 bg-amber-400 text-slate-900 rounded-xl hover:bg-amber-300 transition-all text-sm font-bold shadow-md"
              >
                กลับหน้าหลัก
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
