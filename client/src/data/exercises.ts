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
      title: "เขียน Pseudocode และโค้ด Python สำหรับการคำนวณพื้นที่สี่เหลี่ยม",
      description: "เขียนโค้ด Python ในการคำนวณพื้นที่สี่เหลี่ยมผืนผ้า เมื่อกำหนดความกว้าง = 5 และความยาว = 10",
      hint: "ขั้นตอน: 1) กำหนดตัวแปร width = 5 และ length = 10 2) คำนวณพื้นที่ = width * length 3) แสดงผลด้วย print()",
      starterCode: "",
      expectedOutput: `50`,
    },
    {
      id: "2",
      title: "เขียนโค้ดสำหรับการบวกเลขสองตัว",
      description: "เขียนโค้ด Python ที่บวกเลขสองตัว (5 และ 3) แล้วแสดงผลลัพธ์",
      hint: "ใช้ตัวแปรเก็บค่า แล้วใช้ + เพื่อบวก และ print() เพื่อแสดงผล",
      starterCode: "",
      expectedOutput: `8`,
    },
    {
      id: "3",
      title: "เขียนโค้ดสำหรับการแสดงข้อมูลส่วนตัว",
      description: "เขียนโค้ด Python ที่แสดงชื่อ อายุ และอาชีพของคุณ",
      hint: "ใช้ตัวแปรเก็บข้อมูล แล้วใช้ print() เพื่อแสดงผล สามารถใช้ f-string ได้",
      starterCode: "",
      expectedOutput: `ชื่อ: [ชื่อของคุณ], อายุ: [อายุ], อาชีพ: [อาชีพ]`,
    },
  ],

  // Lesson 2: Problem Solving and Logic
  2: [
    {
      id: "1",
      title: "เขียนโค้ดสำหรับการคำนวณค่าเฉลี่ย",
      description: "เขียนโค้ด Python ที่คำนวณค่าเฉลี่ยของเลขสามตัว (10, 20, 30)",
      hint: "บวกเลขทั้งสามตัว แล้วหารด้วย 3",
      starterCode: "",
      expectedOutput: `20`,
    },
    {
      id: "2",
      title: "เขียนโค้ดสำหรับการแปลงอุณหภูมิ",
      description: "เขียนโค้ด Python ที่แปลงอุณหภูมิจากเซลเซียส (25°C) เป็นฟาเรนไฮต์ โดยใช้สูตร F = (C × 9/5) + 32",
      hint: "กำหนดตัวแปร C = 25 แล้วใช้สูตรในการคำนวณ",
      starterCode: "",
      expectedOutput: `77`,
    },
    {
      id: "3",
      title: "เขียนโค้ดสำหรับการคำนวณราคาหลังลด",
      description: "เขียนโค้ด Python ที่คำนวณราคาสินค้าหลังลดราคา 20% จากราคาเดิม 1000 บาท",
      hint: "ราคาลด = ราคาเดิม × 0.20, ราคาหลังลด = ราคาเดิม - ราคาลด",
      starterCode: "",
      expectedOutput: `800`,
    },
  ],

  // Lesson 3: Algorithm
  3: [
    {
      id: "1",
      title: "เขียนโค้ดสำหรับการหาค่าที่มากที่สุด",
      description: "เขียนโค้ด Python ที่หาค่าที่มากที่สุดระหว่างเลขสามตัว (15, 8, 23)",
      hint: "ใช้ if-else เพื่อเปรียบเทียบ หรือใช้ฟังก์ชัน max()",
      starterCode: "",
      expectedOutput: `23`,
    },
    {
      id: "2",
      title: "เขียนโค้ดสำหรับการตรวจสอบเลขคู่หรือเลขคี่",
      description: "เขียนโค้ด Python ที่ตรวจสอบว่าเลข 42 เป็นเลขคู่หรือเลขคี่",
      hint: "ใช้ % (modulo) เพื่อหาเศษ ถ้าเศษ = 0 แสดงว่าเป็นเลขคู่",
      starterCode: "",
      expectedOutput: `เลขคู่`,
    },
    {
      id: "3",
      title: "เขียนโค้ดสำหรับการคำนวณค่าแฟกทอเรียล",
      description: "เขียนโค้ด Python ที่คำนวณแฟกทอเรียลของ 5 (5! = 5 × 4 × 3 × 2 × 1)",
      hint: "ใช้ loop หรือ recursion เพื่อคำนวณ",
      starterCode: "",
      expectedOutput: `120`,
    },
  ],

  // Lesson 4: Flowchart
  4: [
    {
      id: "1",
      title: "เขียนโค้ดตามผังงาน: ตรวจสอบอายุ",
      description: "เขียนโค้ด Python ที่ตรวจสอบว่าอายุ 18 ปี เป็นผู้เยาว์หรือผู้ใหญ่",
      hint: "ถ้าอายุ >= 18 แสดง 'ผู้ใหญ่' มิฉะนั้นแสดง 'ผู้เยาว์'",
      starterCode: "",
      expectedOutput: `ผู้ใหญ่`,
    },
    {
      id: "2",
      title: "เขียนโค้ดตามผังงาน: ตรวจสอบเกรด",
      description: "เขียนโค้ด Python ที่ตรวจสอบเกรดตามคะแนน 85 (90-100: A, 80-89: B, 70-79: C, <70: F)",
      hint: "ใช้ if-elif-else เพื่อตรวจสอบช่วงคะแนน",
      starterCode: "",
      expectedOutput: `B`,
    },
    {
      id: "3",
      title: "เขียนโค้ดตามผังงาน: หาค่าที่มากที่สุดของสามตัวเลข",
      description: "เขียนโค้ด Python ที่หาค่าที่มากที่สุดระหว่าง 45, 67, 23",
      hint: "เปรียบเทียบตัวแรกกับตัวที่สอง แล้วเปรียบเทียบผลลัพธ์กับตัวที่สาม",
      starterCode: "",
      expectedOutput: `67`,
    },
  ],

  // Lesson 5: Pseudocode
  5: [
    {
      id: "1",
      title: "เขียนโค้ดจาก Pseudocode: คำนวณพื้นที่วงกลม",
      description: "เขียนโค้ด Python จาก Pseudocode ต่อไปนี้:\n1. รับค่ารัศมี (r = 7)\n2. คำนวณพื้นที่ = π × r²\n3. แสดงผล",
      hint: "ใช้ import math เพื่อเรียกใช้ค่า pi และใช้ ** เพื่อยกกำลัง",
      starterCode: "",
      expectedOutput: `153.94`,
    },
    {
      id: "2",
      title: "เขียนโค้ดจาก Pseudocode: ตรวจสอบจำนวนเฉพาะ",
      description: "เขียนโค้ด Python ที่ตรวจสอบว่าเลข 17 เป็นจำนวนเฉพาะหรือไม่",
      hint: "จำนวนเฉพาะคือจำนวนที่หารด้วย 1 และตัวมันเองเท่านั้น",
      starterCode: "",
      expectedOutput: `จำนวนเฉพาะ`,
    },
    {
      id: "3",
      title: "เขียนโค้ดจาก Pseudocode: คำนวณเงินเดือนสุทธิ",
      description: "เขียนโค้ด Python ที่คำนวณเงินเดือนสุทธิจากเงินเดือนรวม 50000 บาท หลังหักภาษี 10%",
      hint: "เงินเดือนสุทธิ = เงินเดือนรวม - (เงินเดือนรวม × 0.10)",
      starterCode: "",
      expectedOutput: `45000`,
    },
  ],

  // Lesson 6: Python Variables and Data Types
  6: [
    {
      id: "1",
      title: "เขียนโค้ดสำหรับการสร้างตัวแปรและแสดงชนิดข้อมูล",
      description: "เขียนโค้ด Python ที่สร้างตัวแปรต่อไปนี้ แล้วแสดงชนิดข้อมูล: name = 'สมชาย', age = 25, height = 5.9, is_student = True",
      hint: "ใช้ type() เพื่อแสดงชนิดข้อมูล",
      starterCode: "",
      expectedOutput: `<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>`,
    },
    {
      id: "2",
      title: "เขียนโค้ดสำหรับการคำนวณด้วยตัวดำเนินการ",
      description: "เขียนโค้ด Python ที่คำนวณ: 10 + 5, 10 - 5, 10 * 5, 10 / 5, 10 // 3, 10 % 3, 2 ** 3",
      hint: "ใช้ print() เพื่อแสดงผลแต่ละการคำนวณ",
      starterCode: "",
      expectedOutput: `15\n5\n50\n2.0\n3\n1\n8`,
    },
    {
      id: "3",
      title: "เขียนโค้ดสำหรับการแปลงชนิดข้อมูล",
      description: "เขียนโค้ด Python ที่แปลง '123' (string) เป็น int, 45 (int) เป็น float, 3.14 (float) เป็น int",
      hint: "ใช้ int(), float(), str() เพื่อแปลงชนิดข้อมูล",
      starterCode: "",
      expectedOutput: `123\n45.0\n3`,
    },
  ],

  // Lesson 7: Conditional Statements
  7: [
    {
      id: "1",
      title: "เขียนโค้ดสำหรับการตรวจสอบอายุ",
      description: "เขียนโค้ด Python ที่ตรวจสอบว่าอายุ 16 ปี สามารถขับรถได้หรือไม่ (ต้องอายุ >= 18)",
      hint: "ใช้ if-else เพื่อตรวจสอบ",
      starterCode: "",
      expectedOutput: `ไม่สามารถขับรถได้`,
    },
    {
      id: "2",
      title: "เขียนโค้ดสำหรับการให้เกรด",
      description: "เขียนโค้ด Python ที่ให้เกรดตามคะแนน 75 (90-100: A, 80-89: B, 70-79: C, 60-69: D, <60: F)",
      hint: "ใช้ if-elif-else",
      starterCode: "",
      expectedOutput: `C`,
    },
    {
      id: "3",
      title: "เขียนโค้ดสำหรับการตรวจสอบจำนวน",
      description: "เขียนโค้ด Python ที่ตรวจสอบว่าจำนวน -5 เป็นจำนวนบวก ลบ หรือศูนย์",
      hint: "ใช้ if-elif-else เพื่อตรวจสอบ",
      starterCode: "",
      expectedOutput: `จำนวนลบ`,
    },
  ],

  // Lesson 8: Looping Statements
  8: [
    {
      id: "1",
      title: "เขียนโค้ดสำหรับการแสดงเลข 1 ถึง 10",
      description: "เขียนโค้ด Python ที่แสดงเลข 1 ถึง 10 โดยใช้ for loop",
      hint: "ใช้ for i in range(1, 11):",
      starterCode: "",
      expectedOutput: `1\n2\n3\n4\n5\n6\n7\n8\n9\n10`,
    },
    {
      id: "2",
      title: "เขียนโค้ดสำหรับการคำนวณผลบวก",
      description: "เขียนโค้ด Python ที่คำนวณผลบวกของเลข 1 ถึง 100 โดยใช้ loop",
      hint: "ใช้ for loop และตัวแปรเพื่อเก็บผลบวก",
      starterCode: "",
      expectedOutput: `5050`,
    },
    {
      id: "3",
      title: "เขียนโค้ดสำหรับการแสดงตารางสูตรคูณ",
      description: "เขียนโค้ด Python ที่แสดงตารางสูตรคูณแม่ 5 (5×1 ถึง 5×10)",
      hint: "ใช้ for loop และ f-string เพื่อแสดงผล",
      starterCode: "",
      expectedOutput: `5 × 1 = 5\n5 × 2 = 10\n5 × 3 = 15\n5 × 4 = 20\n5 × 5 = 25\n5 × 6 = 30\n5 × 7 = 35\n5 × 8 = 40\n5 × 9 = 45\n5 × 10 = 50`,
    },
  ],

  // Lesson 9: Functions
  9: [
    {
      id: "1",
      title: "เขียนฟังก์ชันสำหรับการคำนวณ BMI",
      description: "เขียนฟังก์ชัน calculate_bmi(weight, height) ที่คำนวณ BMI = weight / (height ** 2) สำหรับ weight=70, height=1.75",
      hint: "สร้างฟังก์ชันที่รับพารามิเตอร์ 2 ตัว แล้วคำนวณและ return ผลลัพธ์",
      starterCode: "",
      expectedOutput: `22.86`,
    },
    {
      id: "2",
      title: "เขียนฟังก์ชันสำหรับการตรวจสอบเลขคู่",
      description: "เขียนฟังก์ชัน is_even(num) ที่ return True ถ้าเป็นเลขคู่ สำหรับ num=42",
      hint: "ใช้ num % 2 == 0 เพื่อตรวจสอบ",
      starterCode: "",
      expectedOutput: `True`,
    },
    {
      id: "3",
      title: "เขียนฟังก์ชันสำหรับการคำนวณราคาหลังลด",
      description: "เขียนฟังก์ชัน calculate_discount(price, percent) ที่คำนวณราคาหลังลด สำหรับ price=1000, percent=20",
      hint: "return price - (price * percent / 100)",
      starterCode: "",
      expectedOutput: `800`,
    },
  ],

  // Lesson 10: Lists and Tuples
  10: [
    {
      id: "1",
      title: "เขียนโค้ดสำหรับการสร้างและแสดงลิสต์",
      description: "เขียนโค้ด Python ที่สร้างลิสต์ของเลข [10, 20, 30, 40, 50] แล้วแสดงสมาชิกตัวที่ 1, 3, และ -1",
      hint: "ใช้ index เพื่อเข้าถึงสมาชิก",
      starterCode: "",
      expectedOutput: `10\n30\n50`,
    },
    {
      id: "2",
      title: "เขียนโค้ดสำหรับการเพิ่มและลบสมาชิกในลิสต์",
      description: "เขียนโค้ด Python ที่สร้างลิสต์ [1, 2, 3] แล้วเพิ่ม 4 และ 5 เข้าไป จากนั้นลบ 2 ออก",
      hint: "ใช้ append() เพื่อเพิ่ม และ remove() เพื่อลบ",
      starterCode: "",
      expectedOutput: `[1, 3, 4, 5]`,
    },
    {
      id: "3",
      title: "เขียนโค้ดสำหรับการคำนวณผลบวกของลิสต์",
      description: "เขียนโค้ด Python ที่คำนวณผลบวกของลิสต์ [5, 10, 15, 20, 25]",
      hint: "ใช้ sum() หรือ for loop",
      starterCode: "",
      expectedOutput: `75`,
    },
  ],

  // Lesson 11: Strings and Dictionaries
  11: [
    {
      id: "1",
      title: "เขียนโค้ดสำหรับการจัดการสตริง",
      description: "เขียนโค้ด Python ที่แสดงความยาว ตัวอักษรตัวใหญ่ ตัวอักษรตัวเล็ก และกลับลำดับของสตริง 'Python'",
      hint: "ใช้ len(), upper(), lower(), และ slicing [::-1]",
      starterCode: "",
      expectedOutput: `6\nPYTHON\npython\nnohtyP`,
    },
    {
      id: "2",
      title: "เขียนโค้ดสำหรับการสร้างและแสดงดิกชันนารี",
      description: "เขียนโค้ด Python ที่สร้างดิกชันนารี {'name': 'สมชาย', 'age': 25, 'city': 'กรุงเทพ'} แล้วแสดงค่าของ 'name' และ 'age'",
      hint: "ใช้ dictionary[key] เพื่อเข้าถึงค่า",
      starterCode: "",
      expectedOutput: `สมชาย\n25`,
    },
    {
      id: "3",
      title: "เขียนโค้ดสำหรับการเพิ่มและลบสมาชิกในดิกชันนารี",
      description: "เขียนโค้ด Python ที่สร้างดิกชันนารี {'product': 'Apple', 'price': 50} แล้วเพิ่ม 'quantity': 10 และลบ 'price'",
      hint: "ใช้ dict[key] = value เพื่อเพิ่ม และ del dict[key] เพื่อลบ",
      starterCode: "",
      expectedOutput: `{'product': 'Apple', 'quantity': 10}`,
    },
  ],

  // Lesson 12: File I/O
  12: [
    {
      id: "1",
      title: "เขียนโค้ดสำหรับการเขียนข้อมูลลงไฟล์",
      description: "เขียนโค้ด Python ที่เขียนข้อความ 'Hello, World!' ลงไฟล์ชื่อ 'output.txt'",
      hint: "ใช้ open() และ write()",
      starterCode: "",
      expectedOutput: `ไฟล์สร้างเรียบร้อย`,
    },
    {
      id: "2",
      title: "เขียนโค้ดสำหรับการอ่านข้อมูลจากไฟล์",
      description: "เขียนโค้ด Python ที่สร้างไฟล์ 'test.txt' ที่มีข้อความ 'Python Programming' แล้วอ่านและแสดงข้อมูล",
      hint: "ใช้ open() และ read()",
      starterCode: "",
      expectedOutput: `Python Programming`,
    },
    {
      id: "3",
      title: "เขียนโค้ดสำหรับการเขียนลิสต์ลงไฟล์",
      description: "เขียนโค้ด Python ที่เขียนลิสต์ [1, 2, 3, 4, 5] ลงไฟล์ 'numbers.txt' โดยแต่ละตัวเลขอยู่บรรทัดเดียว",
      hint: "ใช้ for loop และ write()",
      starterCode: "",
      expectedOutput: `ไฟล์สร้างเรียบร้อย`,
    },
  ],

  // Lesson 13: Error Handling
  13: [
    {
      id: "1",
      title: "เขียนโค้ดสำหรับการจัดการ ValueError",
      description: "เขียนโค้ด Python ที่พยายามแปลง 'abc' เป็น int และจัดการข้อผิดพลาด",
      hint: "ใช้ try-except เพื่อจัดการข้อผิดพลาด",
      starterCode: "",
      expectedOutput: `ข้อผิดพลาด: ไม่สามารถแปลงเป็นตัวเลขได้`,
    },
    {
      id: "2",
      title: "เขียนโค้ดสำหรับการจัดการ ZeroDivisionError",
      description: "เขียนโค้ด Python ที่พยายามหาร 10 ด้วย 0 และจัดการข้อผิดพลาด",
      hint: "ใช้ try-except เพื่อจัดการข้อผิดพลาด",
      starterCode: "",
      expectedOutput: `ข้อผิดพลาด: ไม่สามารถหารด้วยศูนย์ได้`,
    },
    {
      id: "3",
      title: "เขียนโค้ดสำหรับการจัดการ IndexError",
      description: "เขียนโค้ด Python ที่พยายามเข้าถึง index ที่ไม่มีในลิสต์ [1, 2, 3] และจัดการข้อผิดพลาด",
      hint: "ใช้ try-except เพื่อจัดการข้อผิดพลาด",
      starterCode: "",
      expectedOutput: `ข้อผิดพลาด: index ไม่อยู่ในลิสต์`,
    },
  ],

  // Lesson 14: Business Case Study
  14: [
    {
      id: "1",
      title: "เขียนโค้ดสำหรับการคำนวณเงินเดือนสุทธิ",
      description: "เขียนโค้ด Python ที่คำนวณเงินเดือนสุทธิจากเงินเดือนรวม 50000 บาท หลังหักภาษี 10% และประกันสังคม 5%",
      hint: "เงินเดือนสุทธิ = เงินเดือนรวม - (ภาษี + ประกันสังคม)",
      starterCode: "",
      expectedOutput: `42500`,
    },
    {
      id: "2",
      title: "เขียนโค้ดสำหรับการคำนวณราคาสินค้าหลังลดราคา",
      description: "เขียนโค้ด Python ที่คำนวณราคาสินค้าหลังลดราคา 15% จากราคาเดิม 2000 บาท และบวกภาษีมูลค่าเพิ่ม 7%",
      hint: "ราคาหลังลด = ราคาเดิม × 0.85, ราคาสุดท้าย = ราคาหลังลด × 1.07",
      starterCode: "",
      expectedOutput: `1819.5`,
    },
    {
      id: "3",
      title: "เขียนโค้ดสำหรับการจัดการข้อมูลร้านค้า",
      description: "เขียนโค้ด Python ที่จัดเก็บข้อมูลสินค้า (ชื่อ, ราคา, จำนวน) ในดิกชันนารี แล้วคำนวณมูลค่ารวม",
      hint: "มูลค่ารวม = ราคา × จำนวน",
      starterCode: "",
      expectedOutput: `15000`,
    },
  ],

  // Lesson 15: Summary and Review
  15: [
    {
      id: "1",
      title: "เขียนโค้ดสำหรับการสรุปทั้งหมด",
      description: "เขียนโค้ด Python ที่รวมความรู้ทั้งหมด: สร้างฟังก์ชัน, ใช้ loop, ใช้ conditional, และจัดการข้อผิดพลาด",
      hint: "ลองเขียนโปรแกรมที่รวมหลายเรื่องที่เรียนมา",
      starterCode: "",
      expectedOutput: `โปรแกรมทำงานได้ถูกต้อง`,
    },
    {
      id: "2",
      title: "เขียนโค้ดสำหรับการแก้ปัญหาจริง",
      description: "เขียนโค้ด Python ที่แก้ปัญหาจริง เช่น การคำนวณเงินเดือน การจัดการข้อมูล หรือการประมวลผลข้อมูล",
      hint: "ลองคิดถึงปัญหาที่พบในชีวิตจริงและแก้ด้วยโค้ด",
      starterCode: "",
      expectedOutput: `ปัญหาแก้ไขได้สำเร็จ`,
    },
    {
      id: "3",
      title: "เขียนโค้ดสำหรับการทดสอบตัวเอง",
      description: "เขียนโค้ด Python ที่ทดสอบความเข้าใจของคุณในทั้ง 15 บท",
      hint: "ลองเขียนโปรแกรมที่ใช้ความรู้ทั้งหมดที่เรียนมา",
      starterCode: "",
      expectedOutput: `ทดสอบเสร็จสิ้น`,
    },
  ],
};

// Helper function to get exercises for a specific lesson
export function getExercisesForLesson(lessonId: number): Exercise[] {
  return exercisesByLesson[lessonId] || [];
}
