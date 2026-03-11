/**
 * Home Page - Python Learning Hub
 * Design: Friendly Classroom - Teal + Amber warm palette
 * Typography: Noto Sans Thai + Space Grotesk + JetBrains Mono
 */
import { Link } from "wouter";
import { lessons, daySchedule } from "@/data/lessons";
import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";
import { BookOpen, Code, Target, Clock, ChevronRight, Lightbulb, GraduationCap, Rocket } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090084433/DwmSBQhGF9QneEQAyktCzx/hero-banner-NPkNHfhHxf4Faj4ZLKSfYh.webp";
const CODING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090084433/DwmSBQhGF9QneEQAyktCzx/coding-illustration-RZtyNKRGfyxJ7TmuNKwXQb.webp";
const FLOWCHART_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090084433/DwmSBQhGF9QneEQAyktCzx/flowchart-illustration-CGCTEZYzqh2n4AWBEwc6Fi.webp";
const BUSINESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090084433/DwmSBQhGF9QneEQAyktCzx/business-simulator-KfgznHNVwjLfToibuWNvYz.webp";
const MASCOT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090084433/DwmSBQhGF9QneEQAyktCzx/python-mascot-CgFnEsaAn3qFuwqdNhFq8w.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/85 via-teal-800/75 to-teal-700/60" />
          </div>
          <div className="relative max-w-5xl mx-auto px-6 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-amber-400/20 border border-amber-400/40 rounded-full text-amber-200 text-xs font-semibold tracking-wide">
                  รหัสวิชา 31910-0004
                </span>
                <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-medium">
                  ทฤษฎี 2 ปฏิบัติ 2 หน่วยกิต 3
                </span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: "'Space Grotesk', 'Noto Sans Thai', sans-serif" }}>
                การเขียนโปรแกรม
                <br />
                <span className="text-amber-300">คอมพิวเตอร์</span>
              </h1>
              <p className="text-base lg:text-lg text-teal-100 max-w-xl leading-relaxed mb-6">
                สื่อการสอนสำหรับปรับพื้นฐานนักศึกษา ปวส. 1 ที่จบ ม.6
                เรียนรู้ตั้งแต่แนวคิดพื้นฐานจนถึงการเขียนโปรแกรม Python
                ภายใน 7 วัน 15 คาบเรียน
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/lesson/1"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm"
                >
                  <Rocket className="w-4 h-4" />
                  เริ่มเรียนคาบที่ 1
                </Link>
                <a
                  href="#schedule"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all text-sm"
                >
                  <Clock className="w-4 h-4" />
                  ดูตารางเรียน
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-5xl mx-auto px-6 -mt-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: Clock, label: "ระยะเวลา", value: "7 วัน", color: "bg-teal-50 text-teal-700 border-teal-200" },
              { icon: BookOpen, label: "จำนวนคาบ", value: "15 คาบ", color: "bg-amber-50 text-amber-700 border-amber-200" },
              { icon: Code, label: "ภาษา", value: "Python", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
              { icon: Target, label: "ระดับ", value: "เริ่มต้น", color: "bg-blue-50 text-blue-700 border-blue-200" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${stat.color} border rounded-xl p-4 shadow-sm`}
              >
                <stat.icon className="w-5 h-5 mb-1.5" />
                <div className="text-lg font-bold">{stat.value}</div>
                <div className="text-xs opacity-70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-slate-800 mb-8 text-center"
          >
            เรียนรู้อย่างเป็นระบบ <span className="text-teal-600">ใน 3 ขั้นตอน</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: FLOWCHART_IMG,
                icon: Lightbulb,
                title: "เข้าใจแนวคิด",
                desc: "เริ่มจากการคิดเชิงตรรกะ Algorithm Flowchart และ Pseudocode ก่อนเขียนโค้ด",
                days: "วันที่ 1-2",
              },
              {
                img: CODING_IMG,
                icon: Code,
                title: "ฝึกเขียนโค้ด",
                desc: "เรียนรู้ Python ตั้งแต่ตัวแปร เงื่อนไข ลูป ฟังก์ชัน จนถึงโครงสร้างข้อมูล",
                days: "วันที่ 3-6",
              },
              {
                img: BUSINESS_IMG,
                icon: GraduationCap,
                title: "ประยุกต์ใช้งาน",
                desc: "นำความรู้ทั้งหมดมาสร้างโปรแกรมจัดการร้านค้าจริง พร้อม Error Handling",
                days: "วันที่ 7",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-[10px] font-bold text-teal-500 uppercase tracking-wider">{feature.days}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" className="max-w-5xl mx-auto px-6 pb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-slate-800 mb-8 text-center"
          >
            ตารางเรียน <span className="text-teal-600">7 วัน 15 คาบ</span>
          </motion.h2>
          <div className="space-y-4">
            {daySchedule.map((day, di) => (
              <motion.div
                key={day.day}
                custom={di}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <div className="bg-gradient-to-r from-teal-600 to-teal-500 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {day.day}
                    </span>
                    <div>
                      <h3 className="text-white font-bold text-sm">วันที่ {day.day}</h3>
                      <p className="text-teal-100 text-xs">{day.title}</p>
                    </div>
                  </div>
                  <span className="text-teal-100 text-xs font-medium">
                    {day.lessons.length} คาบ
                  </span>
                </div>
                <div className="divide-y divide-slate-50">
                  {day.lessons.map((lessonId) => {
                    const lesson = lessons.find((l) => l.id === lessonId);
                    if (!lesson) return null;
                    return (
                      <Link
                        key={lesson.id}
                        href={`/lesson/${lesson.id}`}
                        className="flex items-center gap-4 px-5 py-3.5 hover:bg-teal-50/50 transition-colors group"
                      >
                        <span className="text-2xl">{lesson.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-slate-700 group-hover:text-teal-700 transition-colors">
                            คาบ {lesson.id}: {lesson.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {lesson.period === "เช้า" ? "🌅 ช่วงเช้า" : "🌇 ช่วงบ่าย"} · {lesson.titleEn}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mascot CTA */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg">
            <img src={MASCOT_IMG} alt="Python Mascot" className="w-32 h-32 rounded-2xl shadow-md object-cover" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">พร้อมเริ่มต้นเรียนรู้แล้วหรือยัง?</h3>
              <p className="text-teal-100 text-sm mb-4 leading-relaxed">
                ไม่ต้องกลัวว่าจะยาก เราจะพาคุณเรียนรู้ทีละขั้นตอน
                จากศูนย์จนสามารถเขียนโปรแกรมได้จริง!
              </p>
              <Link
                href="/lesson/1"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
              >
                <Rocket className="w-4 h-4" />
                เริ่มเรียนเลย!
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-100 py-6 text-center text-xs text-slate-400">
          <p>Python Learning Hub · รหัสวิชา 31910-0004 การเขียนโปรแกรมคอมพิวเตอร์</p>
          <p className="mt-1">สื่อการสอนสำหรับนักศึกษา ปวส. 1 (พื้นฐาน ม.6)</p>
        </footer>
      </main>
    </div>
  );
}
