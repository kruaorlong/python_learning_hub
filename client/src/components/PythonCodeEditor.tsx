import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Copy, RotateCcw, Loader2 } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

interface PythonCodeEditorProps {
  initialCode?: string;
  onCodeChange?: (code: string) => void;
  title?: string;
  hint?: string;
}

export default function PythonCodeEditor({
  initialCode = '# เขียนโค้ด Python ของคุณที่นี่\nprint("Hello, World!")',
  onCodeChange,
  title = 'Python Code Editor',
  hint,
}: PythonCodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Initialize Pyodide
  const [pyodide, setPyodide] = useState<any>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const initPyodide = async () => {
      try {
        // Load Pyodide from CDN
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js';
        script.onload = async () => {
          const pyodideModule = (window as any).loadPyodide;
          if (pyodideModule) {
            const py = await pyodideModule();
            setPyodide(py);
            setIsInitializing(false);
          }
        };
        document.head.appendChild(script);
      } catch (err) {
        console.error('Failed to initialize Pyodide:', err);
        setIsInitializing(false);
      }
    };

    initPyodide();
  }, []);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  const runCode = async () => {
    if (!pyodide) {
      toast.error('Python engine is not ready. Please wait...');
      return;
    }

    setIsRunning(true);
    setOutput('');
    setError('');

    try {
      // Capture stdout
      const stdout: string[] = [];
      const stderr: string[] = [];

      // Redirect print to capture output
      const originalPrint = pyodide.globals.get('print');
      pyodide.globals.set('print', (...args: any[]) => {
        stdout.push(args.map((arg: any) => String(arg)).join(' '));
      });

      // Run the code
      try {
        await pyodide.runPythonAsync(code);
        setOutput(stdout.join('\n') || '✅ โค้ดรันสำเร็จ (ไม่มีผลลัพธ์)');
      } catch (err: any) {
        setError(`❌ Error: ${err.message}`);
      }

      // Restore original print
      pyodide.globals.set('print', originalPrint);
    } catch (err: any) {
      setError(`❌ เกิดข้อผิดพลาด: ${err.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    toast.success('คัดลอกโค้ดแล้ว');
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
    setError('');
  };

  return (
    <div className="space-y-4">
      <Card className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          {hint && <span className="text-xs text-slate-500 italic">💡 {hint}</span>}
        </div>

        {/* Code Editor */}
        <div className="mb-3">
          <textarea
            ref={textareaRef}
            value={code}
            onChange={handleCodeChange}
            className="w-full h-48 p-3 font-mono text-sm bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
            placeholder="เขียนโค้ด Python ของคุณที่นี่..."
            disabled={isInitializing || isRunning}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mb-3">
          <Button
            onClick={runCode}
            disabled={isInitializing || isRunning}
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white"
          >
            {isRunning ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                กำลังรัน...
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                รันโค้ด (Run)
              </>
            )}
          </Button>
          <Button
            onClick={copyCode}
            variant="outline"
            className="flex items-center gap-2"
            disabled={isInitializing}
          >
            <Copy className="w-4 h-4" />
            คัดลอก
          </Button>
          <Button
            onClick={resetCode}
            variant="outline"
            className="flex items-center gap-2"
            disabled={isInitializing}
          >
            <RotateCcw className="w-4 h-4" />
            รีเซ็ต
          </Button>
        </div>

        {/* Status */}
        {isInitializing && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
            ⏳ กำลังเตรียม Python engine... (ครั้งแรกอาจใช้เวลาสักครู่)
          </div>
        )}

        {/* Output */}
        {output && (
          <div
            ref={outputRef}
            className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-emerald-800 font-mono whitespace-pre-wrap break-words max-h-40 overflow-y-auto"
          >
            {output}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800 font-mono whitespace-pre-wrap break-words max-h-40 overflow-y-auto">
            {error}
          </div>
        )}
      </Card>
    </div>
  );
}
