export interface CodeExample {
  title: string;
  code: string;
  explanation: string;
  output?: string;
}

export interface Exercise {
  id: number;
  question: string;
  hint?: string;
  sampleCode?: string;
}

export interface Lesson {
  id: number;
  day: number;
  period: "เช้า" | "บ่าย";
  title: string;
  titleEn: string;
  icon: string;
  objectives: string[];
  theory: string[];
  codeExamples: CodeExample[];
  exercises: Exercise[];
  keyPoints: string[];
  nextPreview: string;
}

export const lessons: Lesson[] = [
  {
    id: 1,
    day: 1,
    period: "เช้า",
    title: "แนะนำการเขียนโปรแกรมคอมพิวเตอร์",
    titleEn: "Introduction to Computer Programming",
    icon: "🖥️",
    objectives: [
      "อธิบายความหมายและความสำคัญของการเขียนโปรแกรมได้",
      "บอกประเภทของภาษาโปรแกรมได้",
      "อธิบายขั้นตอนการพัฒนาโปรแกรมได้"
    ],
    theory: [
      "โปรแกรมคอมพิวเตอร์ คือ ชุดคำสั่งที่เขียนขึ้นเพื่อสั่งให้คอมพิวเตอร์ทำงานตามที่เราต้องการ เปรียบเสมือน 'สูตรอาหาร' ที่บอกขั้นตอนการทำอาหารทีละขั้น",
      "ภาษาโปรแกรมแบ่งเป็น 3 ระดับ: ภาษาเครื่อง (Machine Language) เป็นเลข 0 กับ 1, ภาษาแอสเซมบลี (Assembly) ใช้รหัสช่วยจำ, และภาษาระดับสูง (High-Level) เช่น Python, Java, C++ ที่คล้ายภาษาอังกฤษ",
      "ขั้นตอนการพัฒนาโปรแกรม (SDLC): 1) วิเคราะห์ปัญหา 2) ออกแบบ 3) เขียนโปรแกรม 4) ทดสอบ 5) บำรุงรักษา",
      "Python เป็นภาษาที่เหมาะสำหรับผู้เริ่มต้น เพราะไวยากรณ์ง่าย อ่านเข้าใจง่าย และใช้งานได้หลากหลาย ทั้งเว็บ, AI, วิทยาศาสตร์ข้อมูล"
    ],
    codeExamples: [
      {
        title: "โปรแกรมแรกของเรา: Hello World",
        code: 'print("Hello, World!")\nprint("สวัสดีชาว Python!")',
        explanation: "คำสั่ง print() ใช้แสดงข้อความออกทางหน้าจอ ข้อความที่ต้องการแสดงต้องอยู่ในเครื่องหมายคำพูด",
        output: 'Hello, World!\nสวัสดีชาว Python!'
      },
      {
        title: "การคำนวณอย่างง่าย",
        code: 'print(10 + 5)\nprint(20 - 8)\nprint(3 * 7)\nprint(15 / 4)',
        explanation: "Python สามารถคำนวณเลขได้ทันที เหมือนเครื่องคิดเลข โดยใช้เครื่องหมาย + - * /",
        output: '15\n12\n21\n3.75'
      }
    ],
    exercises: [
      { id: 1, question: "เขียนโปรแกรมแสดงชื่อ-นามสกุลของตัวเอง", hint: "ใช้คำสั่ง print()" },
      { id: 2, question: "เขียนโปรแกรมคำนวณ 25 + 37 แล้วแสดงผลลัพธ์", hint: "ใช้ print(25 + 37)" },
      { id: 3, question: "เขียนโปรแกรมแสดงข้อความ 3 บรรทัด: ชื่อ, อายุ, สิ่งที่ชอบ", hint: "ใช้ print() 3 ครั้ง" }
    ],
    keyPoints: [
      "โปรแกรม = ชุดคำสั่งที่สั่งให้คอมพิวเตอร์ทำงาน",
      "Python เป็นภาษาระดับสูงที่เหมาะสำหรับผู้เริ่มต้น",
      "print() คือคำสั่งแรกที่ต้องรู้จัก"
    ],
    nextPreview: "คาบหน้าเราจะเรียนรู้วิธีคิดแก้ปัญหาอย่างเป็นระบบ"
  },
  {
    id: 2,
    day: 1,
    period: "บ่าย",
    title: "หลักการแก้ปัญหาและการคิดเชิงตรรกะ",
    titleEn: "Problem Solving & Logical Thinking",
    icon: "🧠",
    objectives: [
      "อธิบายขั้นตอนการแก้ปัญหาอย่างเป็นระบบได้",
      "วิเคราะห์ปัญหาและกำหนดขั้นตอนการแก้ปัญหาได้",
      "เข้าใจแนวคิด Input → Process → Output"
    ],
    theory: [
      "การแก้ปัญหาอย่างเป็นระบบ มี 4 ขั้นตอน: 1) เข้าใจปัญหา (What?) 2) วางแผน (How?) 3) ลงมือทำ (Do!) 4) ตรวจสอบ (Check!)",
      "แนวคิด IPO: ทุกโปรแกรมมี 3 ส่วน คือ Input (ข้อมูลเข้า) → Process (ประมวลผล) → Output (ผลลัพธ์)",
      "ตัวอย่าง: โปรแกรมคำนวณพื้นที่สี่เหลี่ยม → Input: กว้าง, ยาว → Process: กว้าง × ยาว → Output: พื้นที่",
      "การคิดเชิงตรรกะ (Logical Thinking) คือ การคิดอย่างมีเหตุผล เป็นลำดับขั้นตอน ไม่ข้ามขั้น"
    ],
    codeExamples: [
      {
        title: "โปรแกรม IPO: คำนวณพื้นที่สี่เหลี่ยม",
        code: '# Input: รับข้อมูล\nwidth = 5\nheight = 3\n\n# Process: ประมวลผล\narea = width * height\n\n# Output: แสดงผล\nprint("พื้นที่ =", area)',
        explanation: "โปรแกรมนี้แสดงแนวคิด IPO อย่างชัดเจน: กำหนดค่า (Input) → คำนวณ (Process) → แสดงผล (Output)",
        output: "พื้นที่ = 15"
      },
      {
        title: "โปรแกรม IPO: คำนวณค่าเฉลี่ย",
        code: '# Input\nscore1 = 80\nscore2 = 75\nscore3 = 90\n\n# Process\ntotal = score1 + score2 + score3\naverage = total / 3\n\n# Output\nprint("คะแนนรวม =", total)\nprint("ค่าเฉลี่ย =", average)',
        explanation: "โปรแกรมคำนวณค่าเฉลี่ยคะแนน 3 วิชา แสดงให้เห็นการแบ่งส่วนอย่างชัดเจน",
        output: "คะแนนรวม = 245\nค่าเฉลี่ย = 81.66666666666667"
      }
    ],
    exercises: [
      { id: 1, question: "วิเคราะห์ IPO ของโปรแกรมคำนวณราคาสินค้าหลังลดราคา 20%", hint: "Input: ราคาเดิม, Process: ราคาเดิม × 0.8, Output: ราคาหลังลด" },
      { id: 2, question: "เขียนโปรแกรมคำนวณเงินเดือนรายวัน (เงินเดือน ÷ 30)", sampleCode: "salary = 15000\ndaily = salary / 30\nprint(daily)" },
      { id: 3, question: "วิเคราะห์ IPO ของโปรแกรมแปลงอุณหภูมิจากเซลเซียสเป็นฟาเรนไฮต์", hint: "สูตร: F = (C × 9/5) + 32" }
    ],
    keyPoints: [
      "ทุกปัญหาแก้ได้ด้วย 4 ขั้นตอน: เข้าใจ → วางแผน → ลงมือทำ → ตรวจสอบ",
      "ทุกโปรแกรมมีโครงสร้าง Input → Process → Output",
      "การคิดเชิงตรรกะ = คิดเป็นลำดับขั้นตอน"
    ],
    nextPreview: "คาบหน้าเราจะเรียนรู้เรื่อง Algorithm ซึ่งเป็นการเขียนขั้นตอนการแก้ปัญหาอย่างละเอียด"
  },
  {
    id: 3,
    day: 2,
    period: "เช้า",
    title: "Algorithm: แนวคิดและขั้นตอนการทำงาน",
    titleEn: "Algorithm: Concepts & Steps",
    icon: "📋",
    objectives: [
      "อธิบายความหมายของ Algorithm ได้",
      "เขียน Algorithm อย่างง่ายได้",
      "วิเคราะห์ขั้นตอนการทำงานจากโจทย์ปัญหาได้"
    ],
    theory: [
      "Algorithm คือ ลำดับขั้นตอนที่ชัดเจนในการแก้ปัญหา เปรียบเสมือน 'สูตรอาหาร' ที่บอกทีละขั้นว่าต้องทำอะไร",
      "คุณสมบัติของ Algorithm ที่ดี: 1) มีจุดเริ่มต้นและสิ้นสุด 2) แต่ละขั้นตอนชัดเจน 3) ให้ผลลัพธ์ที่ถูกต้อง 4) ทำงานได้จริง",
      "ตัวอย่าง Algorithm ในชีวิตจริง: การต้มมาม่า → 1) ต้มน้ำ 2) ใส่มาม่า 3) รอ 3 นาที 4) ใส่เครื่องปรุง 5) เสิร์ฟ",
      "การเขียน Algorithm มี 3 รูปแบบ: 1) ข้อความ (Narrative) 2) ผังงาน (Flowchart) 3) รหัสเทียม (Pseudocode)"
    ],
    codeExamples: [
      {
        title: "Algorithm: หาค่ามากที่สุดจาก 2 จำนวน",
        code: '# Algorithm:\n# 1. รับค่า a และ b\n# 2. ถ้า a > b แสดง a\n# 3. ถ้า b > a แสดง b\n# 4. ถ้าเท่ากัน แสดง "เท่ากัน"\n\na = 15\nb = 20\n\nif a > b:\n    print(a, "มากกว่า")\nelif b > a:\n    print(b, "มากกว่า")\nelse:\n    print("เท่ากัน")',
        explanation: "แปลง Algorithm จากข้อความเป็นโค้ด Python แต่ละขั้นตอนตรงกัน 1:1",
        output: "20 มากกว่า"
      }
    ],
    exercises: [
      { id: 1, question: "เขียน Algorithm (เป็นข้อความ) สำหรับการชงกาแฟ", hint: "เริ่มจากต้มน้ำ..." },
      { id: 2, question: "เขียน Algorithm สำหรับการคำนวณเกรดจากคะแนน (80+ = A, 70+ = B, 60+ = C, ต่ำกว่า 60 = F)", hint: "ใช้การเปรียบเทียบเป็นขั้นตอน" },
      { id: 3, question: "เขียน Algorithm สำหรับการหาผลรวมของเลข 1 ถึง 10", hint: "ใช้การบวกทีละตัว" }
    ],
    keyPoints: [
      "Algorithm = ลำดับขั้นตอนที่ชัดเจนในการแก้ปัญหา",
      "Algorithm ที่ดีต้องมีจุดเริ่มต้น สิ้นสุด และขั้นตอนชัดเจน",
      "สามารถเขียนได้ 3 รูปแบบ: ข้อความ, ผังงาน, รหัสเทียม"
    ],
    nextPreview: "คาบหน้าจะเรียนรู้การเขียนผังงาน (Flowchart) ซึ่งเป็นการแสดง Algorithm ด้วยรูปภาพ"
  },
  {
    id: 4,
    day: 2,
    period: "บ่าย",
    title: "Flowchart: สัญลักษณ์และการเขียนผังงาน",
    titleEn: "Flowchart: Symbols & Diagrams",
    icon: "📊",
    objectives: [
      "อธิบายสัญลักษณ์มาตรฐานของ Flowchart ได้",
      "เขียน Flowchart จาก Algorithm ได้",
      "อ่านและวิเคราะห์ Flowchart ได้"
    ],
    theory: [
      "Flowchart คือ แผนภาพที่แสดงลำดับขั้นตอนการทำงานด้วยสัญลักษณ์มาตรฐาน ช่วยให้เห็นภาพรวมของโปรแกรมได้ง่าย",
      "สัญลักษณ์หลัก: วงรี (เริ่มต้น/สิ้นสุด), สี่เหลี่ยมผืนผ้า (ประมวลผล), สี่เหลี่ยมด้านขนาน (รับ/แสดงข้อมูล), สี่เหลี่ยมขนมเปียกปูน (ตัดสินใจ), ลูกศร (ทิศทาง)",
      "หลักการเขียน Flowchart: เริ่มจากบนลงล่าง, ใช้สัญลักษณ์ถูกต้อง, ลูกศรชี้ทิศทางชัดเจน, มีจุดเริ่มต้นและสิ้นสุดเสมอ",
      "Flowchart 3 รูปแบบ: Sequential (ลำดับ), Selection (เลือกทำ), Iteration (ทำซ้ำ)"
    ],
    codeExamples: [
      {
        title: "จาก Flowchart สู่โค้ด: ตรวจสอบเลขคู่-คี่",
        code: '# Flowchart: เริ่ม → รับค่า num → num%2==0? → ถ้าใช่: "เลขคู่" → ถ้าไม่: "เลขคี่" → จบ\n\nnum = 7\n\nif num % 2 == 0:\n    print(num, "เป็นเลขคู่")\nelse:\n    print(num, "เป็นเลขคี่")',
        explanation: "แปลง Flowchart เป็นโค้ด: สี่เหลี่ยมขนมเปียกปูน (if) → สี่เหลี่ยมผืนผ้า (print)",
        output: "7 เป็นเลขคี่"
      }
    ],
    exercises: [
      { id: 1, question: "วาด Flowchart สำหรับโปรแกรมคำนวณพื้นที่วงกลม (รับรัศมี → คำนวณ πr² → แสดงผล)", hint: "ใช้สัญลักษณ์: วงรี → สี่เหลี่ยมด้านขนาน → สี่เหลี่ยมผืนผ้า → สี่เหลี่ยมด้านขนาน → วงรี" },
      { id: 2, question: "วาด Flowchart สำหรับโปรแกรมตรวจสอบว่าสอบผ่านหรือไม่ (คะแนน >= 50 ผ่าน)", hint: "ใช้สี่เหลี่ยมขนมเปียกปูนสำหรับการตัดสินใจ" },
      { id: 3, question: "อ่าน Flowchart ที่กำหนดให้ แล้วเขียนอธิบายการทำงานเป็นข้อความ", hint: "อ่านตามลูกศรทีละขั้น" }
    ],
    keyPoints: [
      "Flowchart ใช้สัญลักษณ์มาตรฐานแสดงขั้นตอนการทำงาน",
      "สัญลักษณ์หลัก: วงรี, สี่เหลี่ยมผืนผ้า, สี่เหลี่ยมด้านขนาน, สี่เหลี่ยมขนมเปียกปูน",
      "Flowchart ช่วยให้เห็นภาพรวมก่อนเขียนโค้ด"
    ],
    nextPreview: "คาบหน้าจะเรียนรู้ Pseudocode ซึ่งเป็นอีกวิธีหนึ่งในการออกแบบโปรแกรม"
  },
  {
    id: 5,
    day: 3,
    period: "เช้า",
    title: "Pseudocode: หลักการและตัวอย่าง",
    titleEn: "Pseudocode: Principles & Examples",
    icon: "📝",
    objectives: [
      "อธิบายความหมายและประโยชน์ของ Pseudocode ได้",
      "เขียน Pseudocode จากโจทย์ปัญหาได้",
      "แปลง Pseudocode เป็นโค้ด Python ได้"
    ],
    theory: [
      "Pseudocode (รหัสเทียม) คือ การเขียนขั้นตอนการทำงานด้วยภาษาที่คล้ายภาษาโปรแกรม แต่ไม่ต้องถูกต้องตามไวยากรณ์ เน้นให้คนอ่านเข้าใจ",
      "ข้อดีของ Pseudocode: เขียนง่ายกว่า Flowchart, แปลงเป็นโค้ดได้ง่าย, ไม่ผูกกับภาษาใดภาษาหนึ่ง",
      "คำสำคัญที่ใช้บ่อย: BEGIN/END, READ/INPUT, PRINT/DISPLAY, IF/THEN/ELSE, WHILE/FOR, SET/COMPUTE",
      "หลักการเขียน: เยื้องบรรทัด (Indent) เพื่อแสดงโครงสร้าง, ใช้คำกริยาเริ่มต้นแต่ละขั้นตอน, เขียนให้กระชับและชัดเจน"
    ],
    codeExamples: [
      {
        title: "Pseudocode → Python: คำนวณส่วนลด",
        code: '# Pseudocode:\n# BEGIN\n#   READ price\n#   IF price >= 1000 THEN\n#     SET discount = price * 0.10\n#   ELSE\n#     SET discount = 0\n#   COMPUTE final_price = price - discount\n#   DISPLAY final_price\n# END\n\n# Python Code:\nprice = 1500\n\nif price >= 1000:\n    discount = price * 0.10\nelse:\n    discount = 0\n\nfinal_price = price - discount\nprint("ราคาสุทธิ:", final_price)',
        explanation: "เปรียบเทียบ Pseudocode กับ Python: READ → กำหนดค่า, IF/THEN → if:, SET → =, DISPLAY → print()",
        output: "ราคาสุทธิ: 1350.0"
      }
    ],
    exercises: [
      { id: 1, question: "เขียน Pseudocode สำหรับโปรแกรมแปลงอุณหภูมิ °C เป็น °F", hint: "BEGIN → READ celsius → COMPUTE fahrenheit = (celsius * 9/5) + 32 → DISPLAY → END" },
      { id: 2, question: "เขียน Pseudocode สำหรับโปรแกรมคำนวณ BMI (น้ำหนัก/ส่วนสูง²)", hint: "รับน้ำหนัก(kg) และส่วนสูง(m)" },
      { id: 3, question: "แปลง Pseudocode ที่เขียนในข้อ 1 หรือ 2 เป็นโค้ด Python", hint: "แปลงทีละบรรทัด" }
    ],
    keyPoints: [
      "Pseudocode = เขียนขั้นตอนด้วยภาษาคล้ายโค้ด แต่ไม่ต้องถูกไวยากรณ์",
      "ช่วยวางแผนก่อนเขียนโค้ดจริง",
      "แปลงเป็นโค้ด Python ได้ง่ายเพราะโครงสร้างคล้ายกัน"
    ],
    nextPreview: "คาบหน้าจะเริ่มเขียน Python จริงจัง! เรียนรู้เรื่องตัวแปร ชนิดข้อมูล และตัวดำเนินการ"
  },
  {
    id: 6,
    day: 3,
    period: "บ่าย",
    title: "ภาษา Python: ตัวแปร ชนิดข้อมูล ตัวดำเนินการ",
    titleEn: "Python: Variables, Data Types & Operators",
    icon: "🐍",
    objectives: [
      "สร้างและใช้งานตัวแปรใน Python ได้",
      "อธิบายชนิดข้อมูลพื้นฐานได้",
      "ใช้ตัวดำเนินการต่างๆ ในการคำนวณได้",
      "ใช้คำสั่ง input() รับข้อมูลจากผู้ใช้ได้"
    ],
    theory: [
      "ตัวแปร (Variable) คือ 'กล่องเก็บของ' ในหน่วยความจำ ใช้เก็บข้อมูลไว้ใช้งานภายหลัง เช่น name = 'สมชาย' หมายถึง เก็บคำว่า 'สมชาย' ไว้ในกล่องชื่อ name",
      "ชนิดข้อมูลพื้นฐาน: int (จำนวนเต็ม เช่น 10, -5), float (ทศนิยม เช่น 3.14), str (ข้อความ เช่น 'Hello'), bool (จริง/เท็จ เช่น True, False)",
      "ตัวดำเนินการทางคณิตศาสตร์: + (บวก), - (ลบ), * (คูณ), / (หาร), // (หารเอาจำนวนเต็ม), % (หารเอาเศษ), ** (ยกกำลัง)",
      "คำสั่ง input() ใช้รับข้อมูลจากผู้ใช้ ค่าที่ได้จะเป็น str เสมอ ต้องแปลงด้วย int() หรือ float() ถ้าต้องการตัวเลข"
    ],
    codeExamples: [
      {
        title: "ตัวแปรและชนิดข้อมูล",
        code: '# ตัวแปรชนิดต่างๆ\nname = "สมหญิง"        # str (ข้อความ)\nage = 18               # int (จำนวนเต็ม)\nheight = 165.5         # float (ทศนิยม)\nis_student = True      # bool (จริง/เท็จ)\n\nprint("ชื่อ:", name)\nprint("อายุ:", age)\nprint("ส่วนสูง:", height)\nprint("เป็นนักศึกษา:", is_student)\nprint("ชนิดของ age:", type(age))',
        explanation: "Python จะกำหนดชนิดข้อมูลให้อัตโนมัติตามค่าที่เราใส่ ไม่ต้องประกาศชนิดล่วงหน้า",
        output: 'ชื่อ: สมหญิง\nอายุ: 18\nส่วนสูง: 165.5\nเป็นนักศึกษา: True\nชนิดของ age: <class \'int\'>'
      },
      {
        title: "การรับข้อมูลจากผู้ใช้",
        code: '# รับข้อมูลจากผู้ใช้\nname = input("ชื่อของคุณ: ")\nage = int(input("อายุ: "))\n\nprint("สวัสดี", name)\nprint("ปีหน้าคุณจะอายุ", age + 1, "ปี")',
        explanation: "input() จะหยุดรอให้ผู้ใช้พิมพ์ข้อมูล ค่าที่ได้เป็น str เสมอ จึงต้องใช้ int() แปลงเป็นตัวเลข",
        output: 'ชื่อของคุณ: สมชาย\nสวัสดี สมชาย\nปีหน้าคุณจะอายุ 19 ปี'
      }
    ],
    exercises: [
      { id: 1, question: "สร้างตัวแปรเก็บข้อมูลส่วนตัว (ชื่อ, อายุ, เกรดเฉลี่ย) แล้วแสดงผล", sampleCode: "name = 'ชื่อคุณ'\nage = 18\ngpa = 3.50\nprint('ชื่อ:', name)\nprint('อายุ:', age)\nprint('GPA:', gpa)" },
      { id: 2, question: "เขียนโปรแกรมรับค่ารัศมีวงกลม แล้วคำนวณพื้นที่ (πr²)", hint: "ใช้ pi = 3.14159 และ r**2" },
      { id: 3, question: "เขียนโปรแกรมรับราคาสินค้า แล้วคำนวณราคารวม VAT 7%", hint: "total = price * 1.07" }
    ],
    keyPoints: [
      "ตัวแปร = กล่องเก็บข้อมูล, ตั้งชื่อให้สื่อความหมาย",
      "ชนิดข้อมูลหลัก: int, float, str, bool",
      "input() รับข้อมูลเป็น str เสมอ ต้องแปลงชนิดเมื่อต้องการตัวเลข"
    ],
    nextPreview: "คาบหน้าจะเรียนรู้คำสั่งเลือกทำ (if-else) เพื่อให้โปรแกรมตัดสินใจได้"
  },
  {
    id: 7,
    day: 4,
    period: "เช้า",
    title: "โครงสร้างควบคุม: คำสั่งเลือกทำ",
    titleEn: "Control Structures: Conditional Statements",
    icon: "🔀",
    objectives: [
      "ใช้คำสั่ง if, if-else, if-elif-else ได้",
      "เขียนเงื่อนไขด้วยตัวดำเนินการเปรียบเทียบและตรรกะได้",
      "ออกแบบโปรแกรมที่มีการตัดสินใจได้"
    ],
    theory: [
      "คำสั่งเลือกทำ ทำให้โปรแกรมตัดสินใจได้ เหมือนทางแยก: ถ้าเงื่อนไขเป็นจริง ไปทางนี้ ถ้าเท็จ ไปทางนั้น",
      "if: ทำเมื่อเงื่อนไขเป็นจริง | if-else: เลือกทำอย่างใดอย่างหนึ่ง | if-elif-else: เลือกจากหลายเงื่อนไข",
      "ตัวดำเนินการเปรียบเทียบ: == (เท่ากับ), != (ไม่เท่ากับ), > (มากกว่า), < (น้อยกว่า), >= (มากกว่าหรือเท่ากับ), <= (น้อยกว่าหรือเท่ากับ)",
      "ตัวดำเนินการตรรกะ: and (และ), or (หรือ), not (ไม่ใช่) ใช้รวมหลายเงื่อนไข"
    ],
    codeExamples: [
      {
        title: "ตรวจสอบเกรดจากคะแนน",
        code: 'score = 75\n\nif score >= 80:\n    grade = "A"\nelif score >= 70:\n    grade = "B"\nelif score >= 60:\n    grade = "C"\nelif score >= 50:\n    grade = "D"\nelse:\n    grade = "F"\n\nprint(f"คะแนน {score} ได้เกรด {grade}")',
        explanation: "if-elif-else ตรวจสอบเงื่อนไขทีละข้อจากบนลงล่าง เจอข้อที่จริงก็หยุด",
        output: "คะแนน 75 ได้เกรด B"
      },
      {
        title: "ตรวจสอบหลายเงื่อนไขด้วย and/or",
        code: 'age = 18\nhas_id = True\n\nif age >= 18 and has_id:\n    print("สามารถเข้าได้")\nelse:\n    print("ไม่สามารถเข้าได้")\n\n# ตัวอย่าง or\nday = "เสาร์"\nif day == "เสาร์" or day == "อาทิตย์":\n    print("วันหยุด!")\nelse:\n    print("วันทำงาน")',
        explanation: "and = ต้องจริงทั้งสองเงื่อนไข, or = จริงอย่างน้อยหนึ่งเงื่อนไข",
        output: "สามารถเข้าได้\nวันหยุด!"
      }
    ],
    exercises: [
      { id: 1, question: "เขียนโปรแกรมตรวจสอบว่าตัวเลขเป็นบวก ลบ หรือศูนย์", hint: "ใช้ if-elif-else" },
      { id: 2, question: "เขียนโปรแกรมคำนวณค่าไฟฟ้า: 0-150 หน่วย = 3.50 บาท/หน่วย, 151+ หน่วย = 4.20 บาท/หน่วย", hint: "ใช้ if-else แยกอัตรา" },
      { id: 3, question: "เขียนโปรแกรมตรวจสอบว่าปีที่กำหนดเป็นปีอธิกสุรทินหรือไม่", hint: "หาร 4 ลงตัว แต่ไม่หาร 100 ลงตัว หรือหาร 400 ลงตัว" }
    ],
    keyPoints: [
      "if ทำให้โปรแกรมตัดสินใจได้",
      "if-elif-else ใช้เมื่อมีหลายทางเลือก",
      "and, or, not ใช้รวมหลายเงื่อนไข"
    ],
    nextPreview: "คาบหน้าจะเรียนรู้คำสั่งทำซ้ำ (Loop) เพื่อให้โปรแกรมทำงานซ้ำๆ ได้"
  },
  {
    id: 8,
    day: 4,
    period: "บ่าย",
    title: "โครงสร้างควบคุม: คำสั่งทำซ้ำ",
    titleEn: "Control Structures: Looping Statements",
    icon: "🔄",
    objectives: [
      "ใช้คำสั่ง for loop และ while loop ได้",
      "เลือกใช้ loop ที่เหมาะสมกับสถานการณ์ได้",
      "ใช้ break และ continue ควบคุม loop ได้"
    ],
    theory: [
      "Loop (การทำซ้ำ) ทำให้โปรแกรมทำงานเดิมซ้ำหลายรอบ แทนที่จะเขียนโค้ดซ้ำๆ",
      "for loop: ใช้เมื่อรู้จำนวนรอบที่แน่นอน เช่น ทำ 10 รอบ, วนลูปตาม list",
      "while loop: ใช้เมื่อไม่รู้จำนวนรอบ แต่รู้เงื่อนไขหยุด เช่น ทำจนกว่าจะถูก",
      "break: หยุด loop ทันที | continue: ข้ามรอบปัจจุบัน ไปรอบถัดไป"
    ],
    codeExamples: [
      {
        title: "for loop: นับเลขและคำนวณผลรวม",
        code: '# นับเลข 1-5\nfor i in range(1, 6):\n    print("รอบที่", i)\n\n# คำนวณผลรวม 1-100\ntotal = 0\nfor num in range(1, 101):\n    total += num\nprint("ผลรวม 1-100 =", total)',
        explanation: "range(1, 6) สร้างตัวเลข 1, 2, 3, 4, 5 (ไม่รวม 6) แล้ว for วนทำทีละตัว",
        output: "รอบที่ 1\nรอบที่ 2\nรอบที่ 3\nรอบที่ 4\nรอบที่ 5\nผลรวม 1-100 = 5050"
      },
      {
        title: "while loop: เกมทายตัวเลข",
        code: 'secret = 7\nguess = 0\nattempts = 0\n\nwhile guess != secret:\n    guess = int(input("ทายตัวเลข (1-10): "))\n    attempts += 1\n    if guess < secret:\n        print("น้อยไป!")\n    elif guess > secret:\n        print("มากไป!")\n\nprint(f"ถูกต้อง! ใช้ {attempts} ครั้ง")',
        explanation: "while วนทำซ้ำจนกว่า guess จะเท่ากับ secret ไม่รู้ว่าจะกี่รอบ",
        output: "ทายตัวเลข (1-10): 5\nน้อยไป!\nทายตัวเลข (1-10): 8\nมากไป!\nทายตัวเลข (1-10): 7\nถูกต้อง! ใช้ 3 ครั้ง"
      }
    ],
    exercises: [
      { id: 1, question: "เขียนโปรแกรมแสดงสูตรคูณแม่ 5", hint: "ใช้ for i in range(1, 13)" },
      { id: 2, question: "เขียนโปรแกรมหาผลรวมของเลขคู่ตั้งแต่ 2 ถึง 50", hint: "ใช้ range(2, 51, 2)" },
      { id: 3, question: "เขียนโปรแกรมรับคะแนนจากผู้ใช้ไปเรื่อยๆ จนกว่าจะพิมพ์ -1 แล้วแสดงค่าเฉลี่ย", hint: "ใช้ while loop กับ break" }
    ],
    keyPoints: [
      "for loop = รู้จำนวนรอบ, while loop = รู้เงื่อนไขหยุด",
      "range(start, stop, step) สร้างลำดับตัวเลข",
      "break หยุด loop, continue ข้ามรอบ"
    ],
    nextPreview: "คาบหน้าจะเรียนรู้ฟังก์ชัน (Functions) เพื่อจัดกลุ่มโค้ดให้เป็นระเบียบ"
  },
  {
    id: 9,
    day: 5,
    period: "เช้า",
    title: "ฟังก์ชัน: การสร้างและการเรียกใช้",
    titleEn: "Functions: Creating & Calling",
    icon: "⚙️",
    objectives: [
      "สร้างฟังก์ชันด้วย def ได้",
      "ส่งพารามิเตอร์และรับค่าคืน (return) ได้",
      "เข้าใจประโยชน์ของการใช้ฟังก์ชัน"
    ],
    theory: [
      "ฟังก์ชัน คือ กลุ่มคำสั่งที่ทำงานเฉพาะอย่าง ตั้งชื่อไว้ แล้วเรียกใช้ได้หลายครั้ง เปรียบเสมือน 'เครื่องจักร' ที่รับวัตถุดิบ แปรรูป แล้วส่งผลิตภัณฑ์ออกมา",
      "ประโยชน์: 1) ลดการเขียนโค้ดซ้ำ 2) โค้ดอ่านง่ายขึ้น 3) แก้ไขง่าย แก้ที่เดียวมีผลทุกที่ 4) ทำงานเป็นทีมง่ายขึ้น",
      "โครงสร้าง: def ชื่อฟังก์ชัน(พารามิเตอร์): → คำสั่ง → return ค่าคืน",
      "พารามิเตอร์ = ข้อมูลที่ส่งเข้าฟังก์ชัน | return = ค่าที่ฟังก์ชันส่งกลับ"
    ],
    codeExamples: [
      {
        title: "สร้างและเรียกใช้ฟังก์ชัน",
        code: '# ฟังก์ชันทักทาย\ndef greet(name):\n    print(f"สวัสดีครับ คุณ{name}!")\n\n# ฟังก์ชันคำนวณพื้นที่\ndef calculate_area(width, height):\n    area = width * height\n    return area\n\n# เรียกใช้\ngreet("สมชาย")\ngreet("สมหญิง")\n\nresult = calculate_area(5, 3)\nprint("พื้นที่ =", result)',
        explanation: "greet() ไม่มี return (แค่ print), calculate_area() มี return ส่งค่ากลับมาเก็บในตัวแปร result",
        output: "สวัสดีครับ คุณสมชาย!\nสวัสดีครับ คุณสมหญิง!\nพื้นที่ = 15"
      },
      {
        title: "ฟังก์ชันคำนวณเกรด",
        code: 'def get_grade(score):\n    if score >= 80:\n        return "A"\n    elif score >= 70:\n        return "B"\n    elif score >= 60:\n        return "C"\n    elif score >= 50:\n        return "D"\n    else:\n        return "F"\n\n# ใช้งานกับหลายคะแนน\nscores = [85, 72, 55, 90, 45]\nfor s in scores:\n    print(f"คะแนน {s} = เกรด {get_grade(s)}")',
        explanation: "ฟังก์ชัน get_grade() รับคะแนน แล้ว return เกรด สามารถเรียกใช้ซ้ำได้กับทุกคะแนน",
        output: "คะแนน 85 = เกรด A\nคะแนน 72 = เกรด B\nคะแนน 55 = เกรด D\nคะแนน 90 = เกรด A\nคะแนน 45 = เกรด F"
      }
    ],
    exercises: [
      { id: 1, question: "สร้างฟังก์ชัน calculate_bmi(weight, height) คำนวณ BMI", hint: "BMI = weight / (height ** 2)" },
      { id: 2, question: "สร้างฟังก์ชัน is_even(num) ที่ return True ถ้าเป็นเลขคู่", hint: "ใช้ num % 2 == 0" },
      { id: 3, question: "สร้างฟังก์ชัน calculate_discount(price, percent) คำนวณราคาหลังลด", hint: "return price - (price * percent / 100)" }
    ],
    keyPoints: [
      "ฟังก์ชัน = กลุ่มคำสั่งที่ตั้งชื่อไว้ เรียกใช้ซ้ำได้",
      "def สร้างฟังก์ชัน, return ส่งค่ากลับ",
      "ช่วยลดโค้ดซ้ำและทำให้โปรแกรมเป็นระเบียบ"
    ],
    nextPreview: "คาบหน้าจะเรียนรู้ List และ Tuple สำหรับเก็บข้อมูลหลายค่า"
  },
  {
    id: 10,
    day: 5,
    period: "บ่าย",
    title: "ลิสต์ (Lists) และทูเพิล (Tuples)",
    titleEn: "Lists & Tuples",
    icon: "📦",
    objectives: [
      "สร้างและจัดการ List ได้",
      "เข้าใจความแตกต่างระหว่าง List กับ Tuple",
      "ใช้ List ร่วมกับ Loop ได้"
    ],
    theory: [
      "List คือ โครงสร้างข้อมูลที่เก็บหลายค่าไว้ในตัวแปรเดียว เหมือน 'กล่องลิ้นชัก' ที่มีหลายช่อง แต่ละช่องเก็บของได้ 1 ชิ้น",
      "สร้าง List ด้วย [ ]: fruits = ['แอปเปิ้ล', 'กล้วย', 'ส้ม'] | เข้าถึงด้วย index: fruits[0] = 'แอปเปิ้ล'",
      "List เปลี่ยนแปลงได้ (Mutable): เพิ่ม (append), ลบ (remove), แก้ไข (fruits[0] = 'มะม่วง')",
      "Tuple คล้าย List แต่เปลี่ยนแปลงไม่ได้ (Immutable) สร้างด้วย ( ): colors = ('แดง', 'เขียว', 'น้ำเงิน')"
    ],
    codeExamples: [
      {
        title: "การใช้งาน List",
        code: '# สร้าง List\nstudents = ["สมชาย", "สมหญิง", "สมศรี"]\nscores = [85, 72, 90]\n\n# เข้าถึงข้อมูล\nprint("คนแรก:", students[0])\nprint("คนสุดท้าย:", students[-1])\n\n# เพิ่ม/ลบข้อมูล\nstudents.append("สมศักดิ์")\nprint("หลังเพิ่ม:", students)\n\nstudents.remove("สมหญิง")\nprint("หลังลบ:", students)\n\n# วน Loop\nfor i, name in enumerate(students):\n    print(f"{i+1}. {name}")',
        explanation: "List ใช้ [ ] สร้าง, index เริ่มจาก 0, ใช้ append() เพิ่ม, remove() ลบ, วน for ได้",
        output: 'คนแรก: สมชาย\nคนสุดท้าย: สมศรี\nหลังเพิ่ม: ["สมชาย", "สมหญิง", "สมศรี", "สมศักดิ์"]\nหลังลบ: ["สมชาย", "สมศรี", "สมศักดิ์"]\n1. สมชาย\n2. สมศรี\n3. สมศักดิ์'
      }
    ],
    exercises: [
      { id: 1, question: "สร้าง List เก็บชื่อวิชา 5 วิชา แล้วแสดงผลทีละวิชาด้วย for loop", hint: "subjects = ['คณิต', 'วิทย์', ...]" },
      { id: 2, question: "เขียนโปรแกรมรับคะแนน 5 คน เก็บใน List แล้วหาค่าเฉลี่ย", hint: "ใช้ sum(scores) / len(scores)" },
      { id: 3, question: "เขียนโปรแกรมหาค่ามากสุดและน้อยสุดจาก List ตัวเลข", hint: "ใช้ max() และ min()" }
    ],
    keyPoints: [
      "List = เก็บหลายค่าใน [ ], เปลี่ยนแปลงได้",
      "Tuple = เก็บหลายค่าใน ( ), เปลี่ยนแปลงไม่ได้",
      "index เริ่มจาก 0, ใช้ -1 เข้าถึงตัวสุดท้าย"
    ],
    nextPreview: "คาบหน้าจะเรียนรู้ String และ Dictionary สำหรับจัดการข้อความและข้อมูลแบบ key-value"
  },
  {
    id: 11,
    day: 6,
    period: "เช้า",
    title: "สตริง (Strings) และดิกชันนารี (Dictionaries)",
    titleEn: "Strings & Dictionaries",
    icon: "📖",
    objectives: [
      "จัดการข้อความด้วยเมธอดของ String ได้",
      "สร้างและใช้งาน Dictionary ได้",
      "เข้าใจการเก็บข้อมูลแบบ key-value"
    ],
    theory: [
      "String (สตริง) คือ ข้อมูลประเภทข้อความ มีเมธอดมากมาย: upper(), lower(), strip(), split(), replace(), find()",
      "f-string ใช้จัดรูปแบบข้อความ: f'ชื่อ {name} อายุ {age} ปี' จะแทนค่าตัวแปรลงในข้อความ",
      "Dictionary คือ โครงสร้างข้อมูลแบบ key-value เหมือน 'สมุดโทรศัพท์' ที่ค้นหาเบอร์จากชื่อ สร้างด้วย { }",
      "Dictionary เข้าถึงข้อมูลด้วย key: student['name'] ไม่ใช้ index เหมือน List"
    ],
    codeExamples: [
      {
        title: "การจัดการ String",
        code: 'text = "  Hello, Python World!  "\n\nprint(text.strip())      # ตัดช่องว่างหัวท้าย\nprint(text.upper())      # ตัวพิมพ์ใหญ่\nprint(text.lower())      # ตัวพิมพ์เล็ก\nprint(text.replace("Python", "Beautiful"))\n\n# f-string\nname = "สมชาย"\nage = 18\nprint(f"สวัสดี {name} อายุ {age} ปี")',
        explanation: "String มีเมธอดในตัวมากมาย ช่วยจัดการข้อความได้สะดวก",
        output: 'Hello, Python World!\n  HELLO, PYTHON WORLD!  \n  hello, python world!  \n  Hello, Beautiful World!  \nสวัสดี สมชาย อายุ 18 ปี'
      },
      {
        title: "การใช้งาน Dictionary",
        code: '# สร้าง Dictionary\nstudent = {\n    "name": "สมหญิง",\n    "age": 18,\n    "major": "คอมพิวเตอร์ธุรกิจ",\n    "gpa": 3.25\n}\n\n# เข้าถึงข้อมูล\nprint("ชื่อ:", student["name"])\nprint("สาขา:", student["major"])\n\n# เพิ่ม/แก้ไข\nstudent["email"] = "somying@email.com"\nstudent["gpa"] = 3.50\n\n# วน Loop\nfor key, value in student.items():\n    print(f"{key}: {value}")',
        explanation: "Dictionary เก็บข้อมูลเป็นคู่ key:value เหมาะสำหรับข้อมูลที่มีชื่อกำกับ",
        output: 'ชื่อ: สมหญิง\nสาขา: คอมพิวเตอร์ธุรกิจ\nname: สมหญิง\nage: 18\nmajor: คอมพิวเตอร์ธุรกิจ\ngpa: 3.5\nemail: somying@email.com'
      }
    ],
    exercises: [
      { id: 1, question: "เขียนโปรแกรมนับจำนวนตัวอักษรในข้อความที่ผู้ใช้ป้อน", hint: "ใช้ len()" },
      { id: 2, question: "สร้าง Dictionary เก็บข้อมูลสินค้า 3 รายการ (ชื่อ, ราคา, จำนวน) แล้วแสดงผล", hint: "products = {'name': ..., 'price': ..., 'qty': ...}" },
      { id: 3, question: "เขียนโปรแกรมนับจำนวนคำในประโยค", hint: "ใช้ split() แล้ว len()" }
    ],
    keyPoints: [
      "String มีเมธอดในตัวมากมาย: upper(), lower(), strip(), split()",
      "f-string ช่วยจัดรูปแบบข้อความได้สะดวก",
      "Dictionary เก็บข้อมูลแบบ key:value เข้าถึงด้วย key"
    ],
    nextPreview: "คาบหน้าจะเรียนรู้การอ่านและเขียนไฟล์ เพื่อเก็บข้อมูลถาวร"
  },
  {
    id: 12,
    day: 6,
    period: "บ่าย",
    title: "การจัดการไฟล์ (File I/O)",
    titleEn: "File Input/Output",
    icon: "📁",
    objectives: [
      "เปิด อ่าน และเขียนไฟล์ข้อความได้",
      "ใช้ with statement จัดการไฟล์ได้",
      "ประยุกต์ใช้ File I/O ในงานจริงได้"
    ],
    theory: [
      "File I/O ทำให้โปรแกรมเก็บข้อมูลถาวร ไม่หายเมื่อปิดโปรแกรม เหมือนการเขียนสมุดบันทึก",
      "โหมดการเปิดไฟล์: 'r' (อ่าน), 'w' (เขียนทับ), 'a' (เขียนต่อท้าย), 'r+' (อ่าน+เขียน)",
      "ใช้ with open() as f: เพื่อเปิดไฟล์อย่างปลอดภัย จะปิดไฟล์อัตโนมัติเมื่อจบ block",
      "เมธอดอ่าน: read() อ่านทั้งหมด, readline() อ่านทีละบรรทัด, readlines() อ่านทั้งหมดเป็น List"
    ],
    codeExamples: [
      {
        title: "เขียนและอ่านไฟล์",
        code: '# เขียนไฟล์\nwith open("students.txt", "w", encoding="utf-8") as f:\n    f.write("สมชาย 85\\n")\n    f.write("สมหญิง 92\\n")\n    f.write("สมศรี 78\\n")\n\nprint("เขียนไฟล์เรียบร้อย!")\n\n# อ่านไฟล์\nwith open("students.txt", "r", encoding="utf-8") as f:\n    for line in f:\n        data = line.strip().split()\n        name = data[0]\n        score = int(data[1])\n        print(f"{name} ได้คะแนน {score}")',
        explanation: "เขียนด้วย 'w' mode → อ่านด้วย 'r' mode → split() แยกข้อมูลแต่ละบรรทัด",
        output: "เขียนไฟล์เรียบร้อย!\nสมชาย ได้คะแนน 85\nสมหญิง ได้คะแนน 92\nสมศรี ได้คะแนน 78"
      }
    ],
    exercises: [
      { id: 1, question: "เขียนโปรแกรมบันทึกรายชื่อเพื่อน 5 คนลงไฟล์ แล้วอ่านกลับมาแสดง", hint: "ใช้ 'w' เขียน แล้ว 'r' อ่าน" },
      { id: 2, question: "เขียนโปรแกรมอ่านไฟล์คะแนนสอบ แล้วคำนวณค่าเฉลี่ย", hint: "อ่านทีละบรรทัด แปลงเป็นตัวเลข" },
      { id: 3, question: "เขียนโปรแกรม 'สมุดบันทึก' ที่เพิ่มข้อความต่อท้ายไฟล์ได้", hint: "ใช้ 'a' mode" }
    ],
    keyPoints: [
      "File I/O ช่วยเก็บข้อมูลถาวร",
      "ใช้ with open() จัดการไฟล์อย่างปลอดภัย",
      "โหมด: 'r' อ่าน, 'w' เขียนทับ, 'a' เขียนต่อท้าย"
    ],
    nextPreview: "คาบหน้าจะเรียนรู้การจัดการข้อผิดพลาด เพื่อให้โปรแกรมไม่ crash"
  },
  {
    id: 13,
    day: 7,
    period: "เช้า",
    title: "การจัดการข้อผิดพลาด (Error Handling)",
    titleEn: "Error Handling",
    icon: "🛡️",
    objectives: [
      "อธิบายประเภทของ Error ใน Python ได้",
      "ใช้ try-except จัดการข้อผิดพลาดได้",
      "เขียนโปรแกรมที่ทนทานต่อข้อผิดพลาดได้"
    ],
    theory: [
      "Error มี 2 ประเภทหลัก: Syntax Error (เขียนผิดไวยากรณ์ เช่น ลืมเครื่องหมาย :) และ Runtime Error (เกิดขณะรัน เช่น หาร 0)",
      "Runtime Error ที่พบบ่อย: ValueError (แปลงค่าไม่ได้), TypeError (ใช้ชนิดข้อมูลผิด), ZeroDivisionError (หาร 0), FileNotFoundError (ไม่พบไฟล์)",
      "try-except ใช้ 'ดักจับ' Error: try ลองทำ → ถ้าเกิด Error จะไปทำ except แทนที่จะ crash",
      "finally: ทำเสมอไม่ว่าจะเกิด Error หรือไม่ | else: ทำเมื่อไม่เกิด Error"
    ],
    codeExamples: [
      {
        title: "try-except: ป้องกันโปรแกรม crash",
        code: '# ไม่มี try-except → crash!\n# num = int(input("ใส่ตัวเลข: "))  # ถ้าพิมพ์ "abc" จะ crash\n\n# มี try-except → ปลอดภัย!\ntry:\n    num = int(input("ใส่ตัวเลข: "))\n    result = 100 / num\n    print(f"100 / {num} = {result}")\nexcept ValueError:\n    print("กรุณาใส่ตัวเลขเท่านั้น!")\nexcept ZeroDivisionError:\n    print("ไม่สามารถหารด้วย 0 ได้!")\nfinally:\n    print("จบการทำงาน")',
        explanation: "try ลองทำ → ถ้า ValueError (ไม่ใช่ตัวเลข) จะแสดงข้อความแจ้ง → ถ้า ZeroDivisionError (หาร 0) จะแจ้งอีกแบบ → finally ทำเสมอ",
        output: "ใส่ตัวเลข: abc\nกรุณาใส่ตัวเลขเท่านั้น!\nจบการทำงาน"
      }
    ],
    exercises: [
      { id: 1, question: "เขียนโปรแกรมเครื่องคิดเลขอย่างง่ายที่มี Error Handling", hint: "ดัก ValueError และ ZeroDivisionError" },
      { id: 2, question: "เขียนโปรแกรมอ่านไฟล์ที่มี Error Handling กรณีไม่พบไฟล์", hint: "ดัก FileNotFoundError" },
      { id: 3, question: "ปรับปรุงโปรแกรมรับคะแนนให้มี Error Handling ครบถ้วน", hint: "ดักทั้ง ValueError และตรวจช่วงคะแนน 0-100" }
    ],
    keyPoints: [
      "try-except ป้องกันโปรแกรม crash",
      "ดักจับ Error เฉพาะประเภท เช่น ValueError, ZeroDivisionError",
      "finally ทำเสมอ, else ทำเมื่อไม่มี Error"
    ],
    nextPreview: "คาบหน้าจะนำทุกอย่างมารวมกัน สร้างโปรแกรมจัดการร้านค้าจริง!"
  },
  {
    id: 14,
    day: 7,
    period: "บ่าย",
    title: "ประยุกต์ใช้โปรแกรมในงานธุรกิจ (Case Study)",
    titleEn: "Business Application Case Study",
    icon: "🏪",
    objectives: [
      "ประยุกต์ใช้ความรู้ทั้งหมดสร้างโปรแกรมจริงได้",
      "ออกแบบและพัฒนาโปรแกรมจัดการร้านค้าอย่างง่ายได้",
      "ทำงานเป็นทีมในการพัฒนาโปรแกรมได้"
    ],
    theory: [
      "Case Study: ระบบจัดการร้านค้าอย่างง่าย ประกอบด้วย: 1) เพิ่มสินค้า 2) แสดงรายการสินค้า 3) ค้นหาสินค้า 4) คำนวณยอดขาย 5) บันทึก/โหลดข้อมูลจากไฟล์",
      "การออกแบบโปรแกรม: แบ่งเป็นฟังก์ชันย่อยตามความสามารถ ใช้ List/Dictionary เก็บข้อมูล ใช้ Loop สร้างเมนู ใช้ File I/O บันทึกข้อมูล",
      "หลักการ: วิเคราะห์ → ออกแบบ (Flowchart/Pseudocode) → เขียนโค้ด → ทดสอบ → ปรับปรุง",
      "ทำงานเป็นทีม: แบ่งงานตามฟังก์ชัน แต่ละคนรับผิดชอบส่วนของตัวเอง แล้วนำมารวมกัน"
    ],
    codeExamples: [
      {
        title: "ระบบจัดการร้านค้าอย่างง่าย",
        code: 'products = []\n\ndef add_product():\n    name = input("ชื่อสินค้า: ")\n    price = float(input("ราคา: "))\n    qty = int(input("จำนวน: "))\n    products.append({"name": name, "price": price, "qty": qty})\n    print(f"เพิ่ม {name} เรียบร้อย!")\n\ndef show_products():\n    if not products:\n        print("ไม่มีสินค้า")\n        return\n    print("\\n=== รายการสินค้า ===")\n    for i, p in enumerate(products, 1):\n        print(f"{i}. {p[\\"name\\"]} - ราคา {p[\\"price\\"]} บาท (คงเหลือ {p[\\"qty\\"]} ชิ้น)")\n\ndef calculate_total():\n    total = sum(p["price"] * p["qty"] for p in products)\n    print(f"\\nมูลค่าสินค้าทั้งหมด: {total:,.2f} บาท")\n\n# เมนูหลัก\nwhile True:\n    print("\\n=== ร้านค้าของฉัน ===")\n    print("1. เพิ่มสินค้า")\n    print("2. แสดงรายการ")\n    print("3. คำนวณมูลค่ารวม")\n    print("4. ออกจากโปรแกรม")\n    choice = input("เลือก: ")\n    if choice == "1": add_product()\n    elif choice == "2": show_products()\n    elif choice == "3": calculate_total()\n    elif choice == "4": break\n    else: print("กรุณาเลือก 1-4")',
        explanation: "โปรแกรมนี้รวมทุกสิ่งที่เรียนมา: ตัวแปร, if-else, loop, ฟังก์ชัน, List, Dictionary",
        output: "=== ร้านค้าของฉัน ===\n1. เพิ่มสินค้า\n2. แสดงรายการ\n3. คำนวณมูลค่ารวม\n4. ออกจากโปรแกรม"
      }
    ],
    exercises: [
      { id: 1, question: "เพิ่มฟังก์ชันค้นหาสินค้าตามชื่อ", hint: "วน loop ใน products แล้วเทียบ name" },
      { id: 2, question: "เพิ่มฟังก์ชันบันทึกข้อมูลลงไฟล์ CSV", hint: "ใช้ with open('products.csv', 'w')" },
      { id: 3, question: "เพิ่ม Error Handling ให้โปรแกรมทั้งหมด", hint: "ดัก ValueError ตอนรับราคาและจำนวน" }
    ],
    keyPoints: [
      "โปรแกรมจริงรวมทุกความรู้: ตัวแปร, เงื่อนไข, loop, ฟังก์ชัน, โครงสร้างข้อมูล, ไฟล์",
      "ออกแบบก่อนเขียน: วิเคราะห์ → ออกแบบ → เขียน → ทดสอบ",
      "แบ่งโปรแกรมเป็นฟังก์ชันย่อยๆ ทำให้จัดการง่าย"
    ],
    nextPreview: "คาบสุดท้าย! สรุปทบทวนทุกอย่างและแนะนำแนวทางเรียนรู้ต่อ"
  },
  {
    id: 15,
    day: 7,
    period: "บ่าย",
    title: "สรุปและทบทวน",
    titleEn: "Summary & Review",
    icon: "🎓",
    objectives: [
      "สรุปเนื้อหาที่เรียนมาทั้งหมดได้",
      "เชื่อมโยงความรู้แต่ละส่วนเข้าด้วยกันได้",
      "ระบุแนวทางการเรียนรู้เพิ่มเติมได้"
    ],
    theory: [
      "สรุปเส้นทางการเรียนรู้: วันที่ 1 (แนวคิดพื้นฐาน) → วันที่ 2 (Algorithm, Flowchart, Pseudocode) → วันที่ 3 (Python เบื้องต้น) → วันที่ 4 (โครงสร้างควบคุม) → วันที่ 5 (ฟังก์ชัน, List) → วันที่ 6 (String, Dict, File) → วันที่ 7 (Error Handling, Case Study)",
      "ทักษะสำคัญที่ได้: การคิดเชิงตรรกะ, การออกแบบ Algorithm, การเขียนโค้ด Python, การแก้ปัญหาอย่างเป็นระบบ",
      "แนวทางเรียนรู้ต่อ: ฝึกทำโปรเจกต์ส่วนตัว, เรียนรู้ Library เพิ่มเติม (pandas, tkinter), เข้าร่วมชุมชนนักพัฒนา",
      "แหล่งเรียนรู้แนะนำ: Codecademy, freeCodeCamp, YouTube (สอน Python ภาษาไทย), Stack Overflow"
    ],
    codeExamples: [
      {
        title: "ทบทวน: โปรแกรมที่รวมทุกความรู้",
        code: 'def calculate_grade(score):\n    """ฟังก์ชันคำนวณเกรด"""\n    if score >= 80: return "A"\n    elif score >= 70: return "B"\n    elif score >= 60: return "C"\n    elif score >= 50: return "D"\n    else: return "F"\n\ndef main():\n    students = {}\n    \n    while True:\n        name = input("ชื่อนักศึกษา (พิมพ์ \'q\' เพื่อจบ): ")\n        if name == "q":\n            break\n        try:\n            score = float(input("คะแนน: "))\n            students[name] = {"score": score, "grade": calculate_grade(score)}\n        except ValueError:\n            print("กรุณาใส่ตัวเลข!")\n    \n    # แสดงผลลัพธ์\n    print("\\n=== ผลการเรียน ===")\n    for name, data in students.items():\n        print(f"{name}: {data[\\"score\\"]} คะแนน = เกรด {data[\\"grade\\"]}")\n\nmain()',
        explanation: "โปรแกรมนี้ใช้ทุกความรู้: ฟังก์ชัน, Dictionary, Loop, if-else, try-except, f-string",
        output: "=== ผลการเรียน ===\nสมชาย: 85.0 คะแนน = เกรด A\nสมหญิง: 72.0 คะแนน = เกรด B"
      }
    ],
    exercises: [
      { id: 1, question: "ทบทวน: อธิบายความสัมพันธ์ระหว่าง Algorithm, Flowchart, Pseudocode และ Python Code" },
      { id: 2, question: "ทบทวน: เขียนโปรแกรมที่ใช้ทุกความรู้ที่เรียนมา (อิสระ)" },
      { id: 3, question: "วางแผน: เขียนแผนการเรียนรู้ Python ต่อเนื่องของตัวเอง" }
    ],
    keyPoints: [
      "การเขียนโปรแกรม = การคิดแก้ปัญหาอย่างเป็นระบบ",
      "ฝึกฝนสม่ำเสมอ = พัฒนาทักษะได้",
      "เรียนรู้ไม่มีวันจบ ทุกโปรเจกต์คือบทเรียนใหม่"
    ],
    nextPreview: "ยินดีด้วย! คุณจบหลักสูตรพื้นฐานแล้ว ขอให้สนุกกับการเขียนโปรแกรมต่อไป!"
  }
];

export const daySchedule = [
  { day: 1, title: "พื้นฐานการเขียนโปรแกรม", lessons: [1, 2] },
  { day: 2, title: "Algorithm & Flowchart", lessons: [3, 4] },
  { day: 3, title: "Pseudocode & Python เบื้องต้น", lessons: [5, 6] },
  { day: 4, title: "โครงสร้างควบคุม", lessons: [7, 8] },
  { day: 5, title: "ฟังก์ชัน & โครงสร้างข้อมูล", lessons: [9, 10] },
  { day: 6, title: "String, Dictionary & File I/O", lessons: [11, 12] },
  { day: 7, title: "Error Handling & Case Study", lessons: [13, 14, 15] },
];
