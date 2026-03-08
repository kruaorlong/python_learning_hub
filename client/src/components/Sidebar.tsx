import { lessons, daySchedule } from "@/data/lessons";
import { Link, useLocation } from "wouter";
import { BookOpen, ChevronRight, Home, X, Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLessonId = location.startsWith("/lesson/")
    ? parseInt(location.split("/")[2])
    : null;

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white shadow-lg rounded-xl p-2.5 border border-teal-100 hover:bg-teal-50 transition-colors"
        aria-label="เปิดเมนู"
      >
        <Menu className="w-5 h-5 text-teal-700" />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/30 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 lg:z-auto h-screen w-72 bg-gradient-to-b from-teal-50/80 to-white border-r border-teal-100 overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setIsOpen(false)}>
              <div className="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-teal-800 leading-tight">Python</h1>
                <p className="text-[10px] text-teal-600 font-medium">Learning Hub</p>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-1.5 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <X className="w-4 h-4 text-teal-600" />
            </button>
          </div>

          {/* Home link */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl mb-4 text-sm font-medium transition-all ${
              location === "/"
                ? "bg-teal-600 text-white shadow-md"
                : "text-teal-700 hover:bg-teal-100"
            }`}
          >
            <Home className="w-4 h-4" />
            หน้าหลัก
          </Link>

          {/* Day sections */}
          <div className="space-y-4">
            {daySchedule.map((day) => (
              <div key={day.day}>
                <div className="flex items-center gap-2 px-3 mb-1.5">
                  <span className="text-[11px] font-bold text-teal-500 uppercase tracking-wider">
                    วันที่ {day.day}
                  </span>
                  <span className="text-[10px] text-teal-400 font-medium">
                    {day.title}
                  </span>
                </div>
                <div className="space-y-0.5">
                  {day.lessons.map((lessonId) => {
                    const lesson = lessons.find((l) => l.id === lessonId);
                    if (!lesson) return null;
                    const isActive = currentLessonId === lesson.id;
                    return (
                      <Link
                        key={lesson.id}
                        href={`/lesson/${lesson.id}`}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all group ${
                          isActive
                            ? "bg-teal-600 text-white shadow-md"
                            : "text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                        }`}
                      >
                        <span className="text-base flex-shrink-0">{lesson.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold truncate">
                            คาบ {lesson.id}: {lesson.title}
                          </div>
                          <div className={`text-[10px] ${isActive ? "text-teal-100" : "text-slate-400"}`}>
                            {lesson.period === "เช้า" ? "🌅 เช้า" : "🌇 บ่าย"}
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                            isActive ? "text-white" : "text-slate-300 group-hover:text-teal-400 group-hover:translate-x-0.5"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
