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
  // Lesson 1: Introduction to Programming
  1: [
    {
      id: "1",
      title: "เขียน Pseudocode สำหรับการคำนวณพื้นที่สี่เหลี่ยม",
      description: "เขียน Pseudocode ในการคำนวณพื้นที่สี่เหลี่ยมผืนผ้า แล้วแปลงเป็นโค้ด Python",
      hint: "Pseudocode ควรมีขั้นตอน: 1) รับความกว้าง 2) รับความยาว 3) คำนวณพื้นที่ 4) แสดงผล",
      starterCode: `# Pseudocode
# 1. รับค่าความกว้าง (width)
# 2. รับค่าความยาว (length)
# 3. คำนวณพื้นที่ = width * length
# 4. แสดงผลพื้นที่

# โค้ด Python
width = 5
length = 10
area = width * length
print(f"พื้นที่ = {area}")`,
      expectedOutput: `พื้นที่ = 50`,
    },
    {
      id: "2",
      title: "ระบุขั้นตอนการแก้ปัญหา",
      description: "เขียนโค้ด Python ตามขั้นตอนการแก้ปัญหา: 1) รับข้อมูล 2) ประมวลผล 3) แสดงผล",
      hint: "ใช้ input() เพื่อรับข้อมูล แล้วแปลงเป็นตัวเลขด้วย int()",
      starterCode: `# ขั้นตอนที่ 1: รับข้อมูล
num1 = 5
num2 = 3

# ขั้นตอนที่ 2: ประมวลผล
sum_result = num1 + num2

# ขั้นตอนที่ 3: แสดงผล
print(f"ผลบวก = {sum_result}")`,
      expectedOutput: `ผลบวก = 8`,
    },
  ],

  // Lesson 2: Problem Solving and Logic
  2: [
    {
      id: "1",
      title: "วิเคราะห์ปัญหาและเขียน Pseudocode",
      description: "วิเคราะห์ปัญหา: หาค่าเฉลี่ยของตัวเลข 3 ตัว แล้วเขียน Pseudocode และโค้ด Python",
      hint: "ค่าเฉลี่ย = (ตัวเลข1 + ตัวเลข2 + ตัวเลข3) / 3",
      starterCode: `# Pseudocode
# 1. รับตัวเลข 3 ตัว
# 2. คำนวณผลบวก
# 3. หารด้วย 3
# 4. แสดงค่าเฉลี่ย

# โค้ด Python
num1 = 10
num2 = 20
num3 = 30
average = (num1 + num2 + num3) / 3
print(f"ค่าเฉลี่ย = {average}")`,
      expectedOutput: `ค่าเฉลี่ย = 20.0`,
    },
    {
      id: "2",
      title: "แปลง Pseudocode เป็นโค้ด Python",
      description: "แปลง Pseudocode ต่อไปนี้เป็นโค้ด Python: หากอายุ >= 18 ให้พิมพ์ 'ผู้ใหญ่' ไม่เช่นนั้นพิมพ์ 'เด็ก'",
      hint: "ใช้ if-else statement",
      starterCode: `# Pseudocode
# IF age >= 18 THEN
#   PRINT "ผู้ใหญ่"
# ELSE
#   PRINT "เด็ก"
# END IF

# โค้ด Python
age = 20
if age >= 18:
    print("ผู้ใหญ่")
else:
    print("เด็ก")`,
      expectedOutput: `ผู้ใหญ่`,
    },
  ],

  // Lesson 3: Algorithm
  3: [
    {
      id: "1",
      title: "เขียน Algorithm สำหรับหาค่ามากที่สุด",
      description: "เขียน Algorithm ในการหาค่ามากที่สุดจากตัวเลข 3 ตัว แล้วแปลงเป็นโค้ด Python",
      hint: "Algorithm: 1) เปรียบเทียบตัวเลขที่ 1 กับ 2 2) เปรียบเทียบผลลัพธ์กับตัวเลขที่ 3",
      starterCode: `# Algorithm
# 1. รับตัวเลข 3 ตัว: a, b, c
# 2. ถ้า a > b แล้ว max = a ไม่เช่นนั้น max = b
# 3. ถ้า max > c แล้ว max = max ไม่เช่นนั้น max = c
# 4. แสดงค่า max

# โค้ด Python
a = 15
b = 25
c = 20

max_val = a
if b > max_val:
    max_val = b
if c > max_val:
    max_val = c

print(f"ค่ามากที่สุด = {max_val}")`,
      expectedOutput: `ค่ามากที่สุด = 25`,
    },
    {
      id: "2",
      title: "เขียน Algorithm สำหรับการนับจำนวน",
      description: "เขียน Algorithm ในการนับจำนวนตัวเลขคู่จากรายการ แล้วแปลงเป็นโค้ด Python",
      hint: "ใช้ loop เพื่อตรวจสอบแต่ละตัวเลข และใช้ modulo (%) เพื่อตรวจสอบว่าเป็นเลขคู่",
      starterCode: `# Algorithm
# 1. กำหนด count = 0
# 2. FOR แต่ละตัวเลขในรายการ
#    IF ตัวเลข % 2 == 0 THEN
#      count = count + 1
#    END IF
# 3. แสดง count

# โค้ด Python
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
count = 0
for num in numbers:
    if num % 2 == 0:
        count += 1
print(f"จำนวนเลขคู่ = {count}")`,
      expectedOutput: `จำนวนเลขคู่ = 4`,
    },
  ],

  // Lesson 4: Flowchart
  4: [
    {
      id: "1",
      title: "แปลง Flowchart เป็นโค้ด Python",
      description: "แปลง Flowchart ต่อไปนี้เป็นโค้ด Python: ตรวจสอบว่าตัวเลขเป็นบวก ลบ หรือศูนย์",
      hint: "Flowchart: START → รับ num → ถ้า num > 0? → YES: พิมพ์ 'บวก' → NO: ถ้า num < 0? → YES: พิมพ์ 'ลบ' → NO: พิมพ์ 'ศูนย์' → END",
      starterCode: `# Flowchart Description
# START
# INPUT num
# IF num > 0 THEN
#   OUTPUT "บวก"
# ELSE IF num < 0 THEN
#   OUTPUT "ลบ"
# ELSE
#   OUTPUT "ศูนย์"
# END IF
# END

# โค้ด Python
num = 5
if num > 0:
    print("บวก")
elif num < 0:
    print("ลบ")
else:
    print("ศูนย์")`,
      expectedOutput: `บวก`,
    },
    {
      id: "2",
      title: "ออกแบบ Flowchart และเขียนโค้ด",
      description: "ออกแบบ Flowchart สำหรับการตรวจสอบว่าตัวเลขเป็นเลขคู่หรือเลขคี่ แล้วเขียนโค้ด Python",
      hint: "ใช้ modulo (%) เพื่อตรวจสอบ: ถ้า num % 2 == 0 เป็นเลขคู่",
      starterCode: `# Flowchart
# START
# INPUT num
# IF num % 2 == 0 THEN
#   OUTPUT "เลขคู่"
# ELSE
#   OUTPUT "เลขคี่"
# END IF
# END

# โค้ด Python
num = 7
if num % 2 == 0:
    print("เลขคู่")
else:
    print("เลขคี่")`,
      expectedOutput: `เลขคี่`,
    },
  ],

  // Lesson 5: Pseudocode and Python Introduction
  5: [
    {
      id: "1",
      title: "แปลง Pseudocode เป็นโค้ด Python",
      description: "แปลง Pseudocode ต่อไปนี้เป็นโค้ด Python: คำนวณอายุจากปีเกิด",
      hint: "ปีปัจจุบัน = 2567, อายุ = ปีปัจจุบัน - ปีเกิด",
      starterCode: `# Pseudocode
# DECLARE birth_year = 2545
# DECLARE current_year = 2567
# CALCULATE age = current_year - birth_year
# PRINT age

# โค้ด Python
birth_year = 2545
current_year = 2567
age = current_year - birth_year
print(f"อายุ = {age} ปี")`,
      expectedOutput: `อายุ = 22 ปี`,
    },
    {
      id: "2",
      title: "เขียน Pseudocode และโค้ด Python",
      description: "เขียน Pseudocode สำหรับการคำนวณค่าสินค้าหลังลด (ราคา - ส่วนลด) แล้วแปลงเป็นโค้ด Python",
      hint: "ส่วนลด = ราคา * เปอร์เซ็นต์ส่วนลด / 100, ราคาสุดท้าย = ราคา - ส่วนลด",
      starterCode: `# Pseudocode
# DECLARE price = 1000
# DECLARE discount_percent = 20
# CALCULATE discount = price * discount_percent / 100
# CALCULATE final_price = price - discount
# PRINT final_price

# โค้ด Python
price = 1000
discount_percent = 20
discount = price * discount_percent / 100
final_price = price - discount
print(f"ราคาสุดท้าย = {final_price} บาท")`,
      expectedOutput: `ราคาสุดท้าย = 800.0 บาท`,
    },
  ],

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
    {
      id: "3",
      title: "ตรวจสอบอายุ",
      description: "เขียนโค้ดตรวจสอบว่าบุคคลสามารถขับรถได้หรือไม่ (อายุ >= 18)",
      hint: "ใช้ if-else",
      starterCode: `age = 20

if age >= 18:
    print("สามารถขับรถได้")
else:
    print("ยังไม่สามารถขับรถได้")`,
      expectedOutput: `สามารถขับรถได้`,
    },
  ],

  // Lesson 8: Looping Statements
  8: [
    {
      id: "1",
      title: "ใช้ for loop พิมพ์ตัวเลข",
      description: "เขียนโค้ด for loop เพื่อพิมพ์ตัวเลขจาก 1 ถึง 5",
      hint: "ใช้ range(1, 6)",
      starterCode: `for i in range(1, 6):
    print(i)`,
      expectedOutput: `1\n2\n3\n4\n5`,
    },
    {
      id: "2",
      title: "คำนวณผลบวกด้วย while loop",
      description: "เขียนโค้ด while loop เพื่อคำนวณผลบวกของตัวเลขจาก 1 ถึง 10",
      hint: "ใช้ตัวแปร sum และ i",
      starterCode: `sum_result = 0
i = 1

while i <= 10:
    sum_result += i
    i += 1

print(f"ผลบวก = {sum_result}")`,
      expectedOutput: `ผลบวก = 55`,
    },
    {
      id: "3",
      title: "นับจำนวนเลขคู่",
      description: "เขียนโค้ด for loop เพื่อนับจำนวนเลขคู่จาก 1 ถึง 20",
      hint: "ใช้ if num % 2 == 0",
      starterCode: `count = 0

for num in range(1, 21):
    if num % 2 == 0:
        count += 1

print(f"จำนวนเลขคู่ = {count}")`,
      expectedOutput: `จำนวนเลขคู่ = 10`,
    },
  ],

  // Lesson 9: Functions
  9: [
    {
      id: "1",
      title: "สร้างฟังก์ชันง่ายๆ",
      description: "สร้างฟังก์ชัน greet(name) ที่รับชื่อและพิมพ์ทักทาย",
      hint: "ใช้ def เพื่อสร้างฟังก์ชัน",
      starterCode: `def greet(name):
    print(f"สวัสดี {name}")

greet("สมชาย")`,
      expectedOutput: `สวัสดี สมชาย`,
    },
    {
      id: "2",
      title: "ฟังก์ชันที่มีค่าส่งกลับ",
      description: "สร้างฟังก์ชัน add(a, b) ที่คืนค่าผลบวก",
      hint: "ใช้ return เพื่อส่งค่ากลับ",
      starterCode: `def add(a, b):
    return a + b

result = add(5, 3)
print(f"ผลบวก = {result}")`,
      expectedOutput: `ผลบวก = 8`,
    },
    {
      id: "3",
      title: "ฟังก์ชันคำนวณแฟกทอเรียล",
      description: "สร้างฟังก์ชัน factorial(n) ที่คำนวณแฟกทอเรียล",
      hint: "แฟกทอเรียล 5 = 5 * 4 * 3 * 2 * 1 = 120",
      starterCode: `def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        result = 1
        for i in range(2, n + 1):
            result *= i
        return result

print(f"5! = {factorial(5)}")`,
      expectedOutput: `5! = 120`,
    },
  ],

  // Lesson 10: Lists and Tuples
  10: [
    {
      id: "1",
      title: "สร้างและแสดงลิสต์",
      description: "สร้างลิสต์ของตัวเลข แล้วแสดงผลแต่ละตัว",
      hint: "ใช้ for loop เพื่อวนลูปผ่านลิสต์",
      starterCode: `numbers = [10, 20, 30, 40, 50]

for num in numbers:
    print(num)`,
      expectedOutput: `10\n20\n30\n40\n50`,
    },
    {
      id: "2",
      title: "หาค่าเฉลี่ยของลิสต์",
      description: "เขียนโค้ดหาค่าเฉลี่ยของตัวเลขในลิสต์",
      hint: "ใช้ sum() และ len()",
      starterCode: `numbers = [10, 20, 30, 40, 50]

average = sum(numbers) / len(numbers)
print(f"ค่าเฉลี่ย = {average}")`,
      expectedOutput: `ค่าเฉลี่ย = 30.0`,
    },
    {
      id: "3",
      title: "ใช้ Tuple",
      description: "สร้าง Tuple ของข้อมูลส่วนตัว แล้วแสดงผล",
      hint: "Tuple ใช้ () แทน []",
      starterCode: `person = ("สมชาย", 25, "วิศวกร")

print(f"ชื่อ: {person[0]}")
print(f"อายุ: {person[1]}")
print(f"อาชีพ: {person[2]}")`,
      expectedOutput: `ชื่อ: สมชาย\nอายุ: 25\nอาชีพ: วิศวกร`,
    },
  ],

  // Lesson 11: Strings and Dictionaries
  11: [
    {
      id: "1",
      title: "ทำงานกับสตริง",
      description: "เขียนโค้ดเพื่อแสดงความยาวของสตริง และแปลงเป็นตัวพิมพ์ใหญ่",
      hint: "ใช้ len() และ upper()",
      starterCode: `text = "python programming"

print(f"ความยาว: {len(text)}")
print(f"ตัวพิมพ์ใหญ่: {text.upper()}")`,
      expectedOutput: `ความยาว: 19\nตัวพิมพ์ใหญ่: PYTHON PROGRAMMING`,
    },
    {
      id: "2",
      title: "สร้างและใช้ Dictionary",
      description: "สร้าง Dictionary เก็บข้อมูลนักเรียน แล้วแสดงผล",
      hint: "ใช้ {} และ key: value",
      starterCode: `student = {
    "name": "สมชาย",
    "age": 20,
    "gpa": 3.5
}

print(f"ชื่อ: {student['name']}")
print(f"อายุ: {student['age']}")
print(f"GPA: {student['gpa']}")`,
      expectedOutput: `ชื่อ: สมชาย\nอายุ: 20\nGPA: 3.5`,
    },
    {
      id: "3",
      title: "วนลูปผ่าน Dictionary",
      description: "เขียนโค้ดวนลูปผ่าน Dictionary แสดงราคาสินค้า",
      hint: "ใช้ for key, value in dict.items()",
      starterCode: `products = {
    "apple": 50,
    "banana": 30,
    "orange": 40
}

for product, price in products.items():
    print(f"{product}: {price} บาท")`,
      expectedOutput: `apple: 50 บาท\nbanana: 30 บาท\norange: 40 บาท`,
    },
  ],

  // Lesson 12: File I/O
  12: [
    {
      id: "1",
      title: "อ่านและเขียนไฟล์",
      description: "เขียนโค้ดเพื่อเขียนข้อมูลลงไฟล์ แล้วอ่านกลับมา",
      hint: "ใช้ open() กับ mode 'w' สำหรับเขียน และ 'r' สำหรับอ่าน",
      starterCode: `# เขียนลงไฟล์
with open("data.txt", "w") as file:
    file.write("สวัสดี Python\\n")
    file.write("นี่คือไฟล์ข้อมูล")

# อ่านจากไฟล์
with open("data.txt", "r") as file:
    content = file.read()
    print(content)`,
      expectedOutput: `สวัสดี Python\nนี่คือไฟล์ข้อมูล`,
    },
    {
      id: "2",
      title: "อ่านไฟล์บรรทัดต่อบรรทัด",
      description: "เขียนโค้ดเพื่ออ่านไฟล์บรรทัดต่อบรรทัด",
      hint: "ใช้ for line in file หรือ readlines()",
      starterCode: `# เขียนลงไฟล์
with open("lines.txt", "w") as file:
    file.write("บรรทัดที่ 1\\n")
    file.write("บรรทัดที่ 2\\n")
    file.write("บรรทัดที่ 3")

# อ่านบรรทัดต่อบรรทัด
with open("lines.txt", "r") as file:
    for line in file:
        print(line.strip())`,
      expectedOutput: `บรรทัดที่ 1\nบรรทัดที่ 2\nบรรทัดที่ 3`,
    },
  ],

  // Lesson 13: Error Handling
  13: [
    {
      id: "1",
      title: "จัดการข้อผิดพลาด ZeroDivisionError",
      description: "เขียนโค้ด try-except เพื่อจัดการข้อผิดพลาดการหารด้วยศูนย์",
      hint: "ใช้ try-except",
      starterCode: `try:
    result = 10 / 0
except ZeroDivisionError:
    print("ไม่สามารถหารด้วยศูนย์ได้")
else:
    print(f"ผลลัพธ์ = {result}")`,
      expectedOutput: `ไม่สามารถหารด้วยศูนย์ได้`,
    },
    {
      id: "2",
      title: "จัดการข้อผิดพลาด ValueError",
      description: "เขียนโค้ด try-except เพื่อจัดการข้อผิดพลาดการแปลงชนิดข้อมูล",
      hint: "ใช้ try-except เมื่อแปลงสตริงเป็นตัวเลข",
      starterCode: `try:
    num = int("abc")
    print(f"ตัวเลข = {num}")
except ValueError:
    print("ข้อมูลที่ป้อนไม่ใช่ตัวเลข")`,
      expectedOutput: `ข้อมูลที่ป้อนไม่ใช่ตัวเลข`,
    },
  ],

  // Lesson 14: Business Case Study
  14: [
    {
      id: "1",
      title: "ระบบจัดการร้านค้า - คำนวณยอดขาย",
      description: "เขียนโค้ดคำนวณยอดขายรวมจากรายการสินค้า",
      hint: "ใช้ for loop และ Dictionary",
      starterCode: `products = {
    "apple": {"price": 50, "quantity": 10},
    "banana": {"price": 30, "quantity": 20}
}

total_sales = 0
for product, data in products.items():
    sales = data["price"] * data["quantity"]
    total_sales += sales
    print(f"{product}: {sales} บาท")

print(f"ยอดขายรวม: {total_sales} บาท")`,
      expectedOutput: `apple: 500 บาท\nbanana: 600 บาท\nยอดขายรวม: 1100 บาท`,
    },
    {
      id: "2",
      title: "ระบบจัดการร้านค้า - คำนวณมูลค่าสินค้า",
      description: "เขียนโค้ดคำนวณมูลค่ารวมของสินค้าคงคลัง",
      hint: "ใช้ for loop และ Dictionary",
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
