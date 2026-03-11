# 🐍 Python Learning Hub

**Python Learning Hub** คือเว็บแอปพลิเคชันสื่อการสอนสำหรับการเขียนโปรแกรมคอมพิวเตอร์ (รหัสวิชา 31910-0004) ออกแบบมาโดยเฉพาะสำหรับนักศึกษา ปวส. 1 ที่จบ ม.6 และไม่มีพื้นฐานการเขียนโปรแกรมมาก่อน

โปรเจกต์นี้ใช้แนวคิดการออกแบบ **"Friendly Classroom"** (ห้องเรียนที่เป็นมิตร) ใช้โทนสีอบอุ่น (Teal & Amber) และ UI ที่เข้าถึงง่าย เพื่อลดความกังวลและสร้างแรงจูงใจในการเรียนรู้

## 📚 เกี่ยวกับโปรเจกต์

เนื้อหาถูกออกแบบให้เรียนรู้จบภายใน **7 วัน (15 คาบเรียน)** ครอบคลุมตั้งแต่พื้นฐานจนถึงการนำไปประยุกต์ใช้จริง:

- **Day 1:** พื้นฐานการเขียนโปรแกรม & การคิดแก้ปัญหา (Logic)
- **Day 2:** Algorithm & Flowchart
- **Day 3:** Pseudocode & Python Syntax เบื้องต้น (Variables, Operators)
- **Day 4:** โครงสร้างควบคุม (Conditionals & Loops)
- **Day 5:** ฟังก์ชัน (Functions) & โครงสร้างข้อมูล (Lists & Tuples)
- **Day 6:** การจัดการข้อความ (Strings), Dictionary & File I/O
- **Day 7:** การจัดการข้อผิดพลาด (Error Handling), Business Case Study & สรุปบทเรียน

## 🛠 Tech Stack

โปรเจกต์นี้พัฒนาด้วยเทคโนโลยี Modern Web:

- **Frontend:** React (TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** wouter
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 🚀 วิธีการติดตั้งและใช้งาน (Installation)

เนื่องจากโปรเจกต์ส่วน Client อยู่ในโฟลเดอร์ `client` ให้ทำตามขั้นตอนดังนี้:

### 1. Clone โปรเจกต์
```bash
git clone https://github.com/your-username/python_learning_hub.git
cd python_learning_hub
```

### 2. เข้าสู่โฟลเดอร์ Client และติดตั้ง Dependencies
```bash
cd client
npm install
```

### 3. รันโปรแกรม (Development Mode)
```bash
npm run dev
```
เมื่อรันสำเร็จ ให้เปิด Browser ไปที่ `http://localhost:5173` (หรือ Port ที่แสดงใน Terminal)

## 📂 โครงสร้างไฟล์สำคัญ

- `src/pages/Home.tsx`: หน้าแรก (Dashboard) แสดงภาพรวมและตารางเรียน
- `src/data/lessons.ts`: ข้อมูลบทเรียนทั้งหมด 15 คาบ (เนื้อหา, ตัวอย่างโค้ด, Objectives)
- `src/data/exercises.ts`: แบบฝึกหัด Interactive สำหรับแต่ละบทเรียน
- `src/components/`: Component ย่อยต่างๆ เช่น Sidebar, LessonCard

## ☁️ วิธีการ Deploy ไปยัง Vercel

การนำเว็บขึ้นออนไลน์ด้วย Vercel ทำได้ง่ายๆ ดังนี้:

1. **Push Code ขึ้น GitHub:** ตรวจสอบให้แน่ใจว่าโค้ดล่าสุดของคุณอยู่บน GitHub Repository แล้ว
2. **Login เข้า Vercel:** ไปที่ vercel.com แล้ว Login
3. **Import Project:** คลิกปุ่ม **"Add New..."** -> **"Project"** แล้วเลือก Repository ของ `python_learning_hub`
4. **ตั้งค่า Build (สำคัญ):**
   - **Framework Preset:** เลือก `Vite`
   - **Root Directory:** คลิก Edit แล้วเลือกโฟลเดอร์ `client` (เนื่องจาก Source code ของ React อยู่ในนี้)
   - **Build & Output Settings:** ใช้ค่า Default (`npm run build`, `dist`)
5. **Deploy:** กดปุ่ม **Deploy** และรอรับ URL เว็บไซต์

---
พัฒนาโดย: [ชื่อของคุณ] | รหัสวิชา: 31910-0004