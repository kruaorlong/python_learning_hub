/**
 * Python Code Executor
 * ใช้ Pyodide เพื่อรันโค้ด Python บนเว็บ (ไม่ต้องติดตั้ง Python)
 */

export async function executePythonCode(code: string): Promise<{
  output: string;
  error: string | null;
  success: boolean;
}> {
  try {
    // ในการใช้งานจริง จะต้องเรียก Pyodide API จากเบราว์เซอร์
    // ส่วนนี้เป็น placeholder สำหรับ server-side validation
    
    // ตรวจสอบว่าโค้ดมีคำสั่งที่อันตรายหรือไม่
    const dangerousPatterns = [
      'import os',
      'import subprocess',
      'import sys',
      'exec(',
      'eval(',
      '__import__',
      'open(',
      'file(',
    ];

    for (const pattern of dangerousPatterns) {
      if (code.includes(pattern)) {
        return {
          output: '',
          error: `⚠️ ไม่สามารถใช้ "${pattern}" ได้ เพื่อความปลอดภัย`,
          success: false,
        };
      }
    }

    return {
      output: '',
      error: null,
      success: true,
    };
  } catch (error) {
    return {
      output: '',
      error: `เกิดข้อผิดพลาด: ${error instanceof Error ? error.message : 'Unknown error'}`,
      success: false,
    };
  }
}
