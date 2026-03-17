import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import type { Quiz, QuizQuestion } from '@/data/quizzes';

interface QuizComponentProps {
  quiz: Quiz;
  onComplete?: (score: number, totalQuestions: number) => void;
}

interface QuestionState {
  selectedAnswer: string | null;
  isAnswered: boolean;
}

export default function QuizComponent({ quiz, onComplete }: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [nameSubmitted, setNameSubmitted] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === quiz.questions.length;

  const calculateScore = () => {
    let correctCount = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (allAnswered) {
      const score = calculateScore();
      setShowResults(true);
      if (onComplete) {
        onComplete(score, quiz.questions.length);
      }
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setQuizStarted(false);
    setNameSubmitted(false);
    setStudentName('');
  };

  // Screen 1: Name Input Screen
  if (!quizStarted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white">
          <CardTitle className="text-2xl">{quiz.lessonTitle}</CardTitle>
          <CardDescription className="text-teal-100">แบบทดสอบหลังเรียน</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <p className="text-lg font-semibold">📋 ข้อมูลแบบทดสอบ</p>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">จำนวนคำถาม</p>
                <p className="text-2xl font-bold text-blue-600">{quiz.questions.length}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              ✅ ตอบคำถามทั้งหมดให้ครบถ้วน
              <br />
              ✅ สามารถย้อนกลับไปแก้คำตอบได้
              <br />
              ✅ จะเห็นเฉลยและคะแนนหลังส่งแบบทดสอบ
            </p>
            
            {/* Name Input Section */}
            <div className="mt-6 p-4 bg-teal-50 rounded-lg border-2 border-teal-200">
              <Label htmlFor="student-name" className="block text-sm font-semibold mb-2">
                📝 กรุณาป้อนชื่อของคุณ:
              </Label>
              <Input
                id="student-name"
                type="text"
                placeholder="เช่น สมชาย ใจดี"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full"
              />
              <p className="text-xs text-gray-600 mt-2">
                ชื่อนี้จะแสดงในผลการทดสอบของคุณ
              </p>
            </div>

            <Button 
              onClick={() => {
                if (studentName.trim()) {
                  setQuizStarted(true);
                  setNameSubmitted(true);
                } else {
                  alert('กรุณาป้อนชื่อของคุณ');
                }
              }}
              disabled={!studentName.trim()}
              className="w-full mt-6 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🚀 เริ่มแบบทดสอบ
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Screen 2: Results Screen
  if (showResults) {
    const score = calculateScore();
    const percentage = (score / quiz.questions.length) * 100;
    const isPassed = percentage >= 60;

    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className={`bg-gradient-to-r ${isPassed ? 'from-green-500 to-emerald-500' : 'from-orange-500 to-red-500'} text-white`}>
          <CardTitle className="text-2xl">📊 ผลการทดสอบ - {quiz.lessonTitle}</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Student Name and Score Summary */}
            <div className="text-center bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-lg">
              <p className="text-lg font-semibold text-gray-700 mb-2">👤 ชื่อผู้ทำแบบทดสอบ</p>
              <p className="text-3xl font-bold text-teal-600 mb-4">{studentName}</p>
              
              <div className={`text-5xl font-bold mb-2 ${isPassed ? 'text-green-600' : 'text-orange-600'}`}>
                {score}/{quiz.questions.length}
              </div>
              <div className="text-2xl font-semibold mb-2">
                {percentage.toFixed(1)}%
              </div>
              <div className={`text-lg font-semibold ${isPassed ? 'text-green-600' : 'text-orange-600'}`}>
                {isPassed ? '✅ ผ่านแบบทดสอบ' : '❌ ไม่ผ่านแบบทดสอบ'}
              </div>
            </div>

            {/* Answer Review */}
            <div className="space-y-4">
              <p className="font-semibold text-lg">📝 ตรวจสอบคำตอบ</p>
              {quiz.questions.map((question, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                return (
                  <div key={index} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-start gap-3 mb-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold">{index + 1}. {question.question}</p>
                      </div>
                    </div>
                    <div className="ml-9 space-y-2">
                      <p className="text-sm">
                        <span className="font-semibold">คำตอบของคุณ:</span> {userAnswer !== undefined ? question.options[userAnswer] : 'ไม่ได้ตอบ'}
                        {isCorrect && <span className="text-green-600 ml-2">✓</span>}
                        {!isCorrect && <span className="text-red-600 ml-2">✗</span>}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm">
                          <span className="font-semibold">คำตอบที่ถูก:</span> {question.options[question.correctAnswer]}
                        </p>
                      )}
                      {question.explanation && (
                        <p className="text-sm text-gray-700 bg-white p-2 rounded border-l-4 border-blue-500 mt-2">
                          💡 {question.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* No action buttons - quiz can only be taken once */}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Screen 3: Quiz Questions Screen
  return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">{quiz.lessonTitle}</CardTitle>
            <CardDescription className="text-teal-100">
              คำถามที่ {currentQuestionIndex + 1} จาก {quiz.questions.length}
            </CardDescription>
            <p className="text-sm mt-2">👤 {studentName}</p>
          </div>
          <div className="text-right">
            <p className="text-sm">ตอบแล้ว</p>
            <p className="text-2xl font-bold">{answeredCount}/{quiz.questions.length}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
            />
          </div>

          {/* Question */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>

            {/* Options */}
            <RadioGroup value={answers[currentQuestionIndex]?.toString() || ''} onValueChange={(value) => handleAnswerSelect(parseInt(value))}>
              <div className="space-y-3">
                {currentQuestion.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-teal-50 cursor-pointer">
                    <RadioGroupItem value={optionIndex.toString()} id={`option-${optionIndex}`} />
                    <Label htmlFor={`option-${optionIndex}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 pt-4">
            <Button 
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              variant="outline"
              className="flex-1"
            >
              ← ย้อนกลับ
            </Button>
            
            {isLastQuestion ? (
              <Button 
                onClick={handleSubmit}
                disabled={!allAnswered}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
              >
                ✓ ส่งแบบทดสอบ
              </Button>
            ) : (
              <Button 
                onClick={handleNext}
                className="flex-1 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
              >
                ถัดไป →
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
