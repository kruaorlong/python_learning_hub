import { useState } from "react";
import { Check, Copy, Play } from "lucide-react";
import { motion } from "framer-motion";

interface CodeBlockProps {
  code: string;
  title?: string;
  explanation?: string;
  output?: string;
  showLineNumbers?: boolean;
}

function highlightPython(code: string): string {
  const keywords = ['def', 'return', 'if', 'elif', 'else', 'for', 'while', 'in', 'import', 'from', 'as', 'class', 'try', 'except', 'finally', 'with', 'break', 'continue', 'pass', 'and', 'or', 'not', 'True', 'False', 'None', 'is', 'lambda', 'yield', 'global', 'nonlocal', 'assert', 'del', 'raise'];
  const builtins = ['print', 'input', 'int', 'float', 'str', 'bool', 'list', 'dict', 'tuple', 'set', 'len', 'range', 'enumerate', 'type', 'sum', 'max', 'min', 'abs', 'round', 'sorted', 'open', 'format', 'map', 'filter', 'zip'];

  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Comments
    .replace(/(#.*$)/gm, '<span class="comment">$1</span>')
    // Strings (triple quotes)
    .replace(/("""[\s\S]*?"""|'''[\s\S]*?''')/g, '<span class="string">$1</span>')
    // Strings (single/double)
    .replace(/((?<!\\)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'))/g, '<span class="string">$1</span>')
    // f-strings
    .replace(/(f(?:"[^"]*"|'[^']*'))/g, '<span class="string">$1</span>')
    // Numbers
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>')
    // Keywords
    .replace(new RegExp(`\\b(${keywords.join('|')})\\b`, 'g'), '<span class="keyword">$1</span>')
    // Builtins
    .replace(new RegExp(`\\b(${builtins.join('|')})(?=\\()`, 'g'), '<span class="builtin">$1</span>');
}

export default function CodeBlock({ code, title, explanation, output, showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm my-4">
      {/* Header */}
      {title && (
        <div className="bg-slate-800 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-slate-300 font-medium ml-2">{title}</span>
          </div>
          <div className="flex items-center gap-1.5">
            {output && (
              <button
                onClick={() => setShowOutput(!showOutput)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors"
              >
                <Play className="w-3 h-3" />
                {showOutput ? "ซ่อนผลลัพธ์" : "ดูผลลัพธ์"}
              </button>
            )}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-slate-700 text-slate-400 text-xs transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "คัดลอกแล้ว" : "คัดลอก"}
            </button>
          </div>
        </div>
      )}

      {/* Code */}
      <div className="code-block !rounded-none !my-0 overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, i) => (
              <tr key={i} className="hover:bg-white/5">
                {showLineNumbers && (
                  <td className="text-right pr-4 select-none text-slate-500 text-xs w-8 align-top">
                    {i + 1}
                  </td>
                )}
                <td>
                  <pre className="whitespace-pre-wrap">
                    <code dangerouslySetInnerHTML={{ __html: highlightPython(line) || '&nbsp;' }} />
                  </pre>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Output */}
      {output && showOutput && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-slate-700"
        >
          <div className="bg-slate-900 px-4 py-1.5">
            <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Output</span>
          </div>
          <div className="bg-slate-950 px-4 py-3 font-mono text-sm text-emerald-300 whitespace-pre-wrap">
            {output}
          </div>
        </motion.div>
      )}

      {/* Explanation */}
      {explanation && (
        <div className="bg-amber-50 border-t border-amber-200 px-4 py-3">
          <p className="text-xs text-amber-800 leading-relaxed">
            <span className="font-bold">💡 อธิบาย:</span> {explanation}
          </p>
        </div>
      )}
    </div>
  );
}
