/**
 * Interactive Exercises for Python Learning Hub
 * แบบฝึกหัดสำหรับแต่ละคาบเรียน
 */

export interface Exercise {
  id: string;
  title: string;
  description: string;
  hint: string;
  starterCode: string;
  expectedOutput?: string;
}

export const exercisesByLesson: Record<number, Exercise[]> = {
  // Lesson 6: Python Basics - Variables, Data Types, Operators
  6: [
    {
      id: "1",
      title: "สร้างตัวแปรและแสดงผล",
      description: "สร้างตัวแปรชื่อ name และ age แล้วแสดงผลออกมา",
      hint: "ใช้ print() เพื่อแสดงผล ตัวแปรสามารถเก็บข้อมูลได้",
      starterCode: `# สร้างตัวแปร
name = "ชื่อของคุณ"
age = 20

# แสดงผล
print(name)
print(age)`,
      expectedOutput: `ชื่อของคุณ\n20`,
    },
    {
      id: "2",
      title: "คำนวณ BMI",
      description: "สร้างฟังก์ชัน calculate_bmi(weight, height) คำนวณ BMI",
      hint: "BMI = weight / (height ** 2)",
      starterCode: `def calculate_bmi(weight, height):
    # เขียนโค้ดของคุณที่นี่
    pass

# ทดสอบ
result = calculate_bmi(70, 1.75)
print(f"BMI: {result}")`,
      expectedOutput: `BMI: 22.857142857142858`,
    },
    {
      id: "3",
      title: "ตรวจสอบเลขคู่",
      description: "สร้างฟังก์ชัน is_even(num) ที่ return True ถ้าเป็นเลขคู่",
      hint: "ใช้ num % 2 == 0",
      starterCode: `def is_even(num):
    # เขียนโค้ดของคุณที่นี่
    pass

# ทดสอบ
print(is_even(4))   # ควรเป็น True
print(is_even(7))   # ควรเป็น False`,
      expectedOutput: `True\nFalse`,
    },
  ],

  // Lesson 7: Conditional Statements
  7: [
    {
      id: "1",
      title: "ตัดสินใจด้วย if-else",
      description: "เขียนโค้ดตรวจสอบว่าเลขที่ป้อนเป็นบวก ลบ หรือศูนย์",
      hint: "ใช้ if, elif, else",
      starterCode: `num = 10

if num > 0:
    print("เลขบวก")
elif num < 0:
    print("เลขลบ")
else:
    print("ศูนย์")`,
      expectedOutput: `เลขบวก`,
    },
    {
      id: "2",
      title: "ตรวจสอบเกรด",
      description: "สร้างฟังก์ชัน get_grade(score) ที่คืนค่าเกรดตามคะแนน",
      hint: "90-100: A, 80-89: B, 70-79: C, 60-69: D, <60: F",
      starterCode: `def get_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

print(get_grade(85))`,
      expectedOutput: `B`,
    },
  ],

  // Lesson 8: Looping Statements
  8: [
    {
      id: "1",
      title: "ลูปพิมพ์ตัวเลข",
      description: "พิมพ์ตัวเลข 1 ถึง 5 โดยใช้ for loop",
      hint: "ใช้ range(1, 6) หรือ range(5) แล้วบวก 1",
      starterCode: `# พิมพ์ตัวเลข 1 ถึง 5
for i in range(1, 6):
    print(i)`,
      expectedOutput: `1\n2\n3\n4\n5`,
    },
    {
      id: "2",
      title: "คำนวณผลรวม",
      description: "คำนวณผลรวมของตัวเลข 1 ถึง 10",
      hint: "ใช้ตัวแปร total เพื่อเก็บผลรวม",
      starterCode: `total = 0
for i in range(1, 11):
    total += i

print(f"ผลรวม: {total}")`,
      expectedOutput: `ผลรวม: 55`,
    },
  ],

  // Lesson 9: Functions
  9: [
    {
      id: "1",
      title: "สร้างฟังก์ชันง่ายๆ",
      description: "สร้างฟังก์ชัน greet(name) ที่พูดสวัสดี",
      hint: "ฟังก์ชันใช้ def ตามด้วยชื่อฟังก์ชัน",
      starterCode: `def greet(name):
    return f"สวัสดี, {name}!"

print(greet("สมชาย"))`,
      expectedOutput: `สวัสดี, สมชาย!`,
    },
    {
      id: "2",
      title: "คำนวณส่วนลด",
      description: "สร้างฟังก์ชัน calculate_discount(price, percent) คำนวณราคาหลังลด",
      hint: "return price - (price * percent / 100)",
      starterCode: `def calculate_discount(price, percent):
    # เขียนโค้ดของคุณที่นี่
    pass

result = calculate_discount(1000, 20)
print(f"ราคาหลังลด: {result}")`,
      expectedOutput: `ราคาหลังลด: 800.0`,
    },
  ],

  // Lesson 10: Lists and Tuples
  10: [
    {
      id: "1",
      title: "สร้างและแสดงรายชื่อ",
      description: "สร้างลิสต์ของชื่อและแสดงผล",
      hint: "ลิสต์ใช้ [] และแยกสมาชิกด้วย ,",
      starterCode: `names = ["สมชาย", "สมหญิง", "สมศรี"]

for name in names:
    print(name)`,
      expectedOutput: `สมชาย\nสมหญิง\nสมศรี`,
    },
    {
      id: "2",
      title: "หาค่าสูงสุด",
      description: "หาค่าสูงสุดในลิสต์ของตัวเลข",
      hint: "ใช้ max() หรือเขียนลูปเพื่อเปรียบเทียบ",
      starterCode: `numbers = [5, 2, 8, 1, 9, 3]

max_num = max(numbers)
print(f"ค่าสูงสุด: {max_num}")`,
      expectedOutput: `ค่าสูงสุด: 9`,
    },
  ],

  // Lesson 11: Strings and Dictionaries
  11: [
    {
      id: "1",
      title: "จัดการสตริง",
      description: "แปลงสตริงเป็นตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก",
      hint: "ใช้ .upper() และ .lower()",
      starterCode: `text = "Hello World"

print(text.upper())
print(text.lower())`,
      expectedOutput: `HELLO WORLD\nhello world`,
    },
    {
      id: "2",
      title: "ใช้ Dictionary",
      description: "สร้าง dictionary เก็บข้อมูลนักเรียน",
      hint: "Dictionary ใช้ {} และมี key: value",
      starterCode: `student = {
    "name": "สมชาย",
    "age": 20,
    "gpa": 3.5
}

print(student["name"])
print(student["gpa"])`,
      expectedOutput: `สมชาย\n3.5`,
    },
  ],

  // Lesson 12: File I/O
  12: [
    {
      id: "1",
      title: "เขียนข้อมูลลงไฟล์",
      description: "เขียนข้อความลงไฟล์ text.txt",
      hint: "ใช้ open() และ write()",
      starterCode: `# เขียนข้อมูลลงไฟล์
with open("test.txt", "w") as f:
    f.write("สวัสดี Python\\n")
    f.write("นี่คือไฟล์ทดสอบ")

print("เขียนไฟล์เสร็จแล้ว")`,
      expectedOutput: `เขียนไฟล์เสร็จแล้ว`,
    },
  ],

  // Lesson 13: Error Handling
  13: [
    {
      id: "1",
      title: "จัดการข้อผิดพลาด",
      description: "ใช้ try-except เพื่อจัดการข้อผิดพลาด",
      hint: "ใช้ try: เพื่อเขียนโค้ดที่อาจเกิดข้อผิดพลาด",
      starterCode: `try:
    num = int("abc")
except ValueError:
    print("ข้อผิดพลาด: ไม่สามารถแปลงเป็นตัวเลข")`,
      expectedOutput: `ข้อผิดพลาด: ไม่สามารถแปลงเป็นตัวเลข`,
    },
  ],

  // Lesson 14: Business Case Study
  14: [
    {
      id: "1",
      title: "ระบบจัดการร้านค้า",
      description: "สร้างระบบจัดการสินค้าพื้นฐาน",
      hint: "ใช้ dictionary เก็บข้อมูลสินค้า",
      starterCode: `products = {
    "apple": {"price": 50, "quantity": 10},
    "banana": {"price": 30, "quantity": 20}
}

# คำนวณมูลค่าสินค้า
total_value = 0
for product, data in products.items():
    value = data["price"] * data["quantity"]
    total_value += value
    print(f"{product}: {value} บาท")

print(f"มูลค่ารวม: {total_value} บาท")`,
      expectedOutput: `apple: 500 บาท\nbanana: 600 บาท\nมูลค่ารวม: 1100 บาท`,
    },
  ],
};

export function getExercisesForLesson(lessonId: number): Exercise[] {
  return exercisesByLesson[lessonId] || [];
}
