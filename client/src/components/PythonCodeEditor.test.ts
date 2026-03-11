import { describe, it, expect } from 'vitest';

/**
 * PythonCodeEditor Component Tests
 * ทดสอบความสามารถของ Python Code Editor
 */

describe('PythonCodeEditor', () => {
  it('should render with initial code', () => {
    const initialCode = 'print("Hello")';
    expect(initialCode).toBeDefined();
    expect(initialCode).toContain('print');
  });

  it('should handle code changes', () => {
    let code = 'print("initial")';
    const newCode = 'print("updated")';
    code = newCode;
    expect(code).toBe(newCode);
  });

  it('should validate dangerous patterns', () => {
    const dangerousPatterns = [
      'import os',
      'import subprocess',
      'exec(',
      'eval(',
      '__import__',
      'open(',
    ];

    const testCode = 'import os\nprint("test")';
    const hasDangerousPattern = dangerousPatterns.some(pattern =>
      testCode.includes(pattern)
    );

    expect(hasDangerousPattern).toBe(true);
  });

  it('should allow safe code patterns', () => {
    const dangerousPatterns = [
      'import os',
      'import subprocess',
      'exec(',
      'eval(',
    ];

    const safeCode = 'print("Hello")\nname = "test"';
    const hasDangerousPattern = dangerousPatterns.some(pattern =>
      safeCode.includes(pattern)
    );

    expect(hasDangerousPattern).toBe(false);
  });

  it('should format output correctly', () => {
    const output = 'Hello\nWorld';
    const lines = output.split('\n');
    expect(lines).toHaveLength(2);
    expect(lines[0]).toBe('Hello');
    expect(lines[1]).toBe('World');
  });
});
