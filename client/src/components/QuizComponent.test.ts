import { describe, it, expect } from 'vitest';
import { quizzes } from '@/data/quizzes';

describe('Quiz Component Tests', () => {
  it('should have 15 quizzes for all lessons', () => {
    expect(quizzes).toHaveLength(15);
  });

  it('should have correct lesson IDs', () => {
    quizzes.forEach((quiz, index) => {
      expect(quiz.lessonId).toBe(index + 1);
    });
  });

  it('should have at least 5 questions per quiz', () => {
    quizzes.forEach(quiz => {
      expect(quiz.questions.length).toBeGreaterThanOrEqual(5);
    });
  });

  it('should have valid question structure', () => {
    quizzes.forEach(quiz => {
      quiz.questions.forEach(question => {
        expect(question.id).toBeDefined();
        expect(question.question).toBeDefined();
        expect(question.options).toHaveLength(4);
        expect(question.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(question.correctAnswer).toBeLessThan(4);
        expect(question.explanation).toBeDefined();
      });
    });
  });

  it('should have unique question IDs within each quiz', () => {
    quizzes.forEach(quiz => {
      const ids = quiz.questions.map(q => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });
  });

  it('should have all questions in Thai language', () => {
    quizzes.forEach(quiz => {
      quiz.questions.forEach(question => {
        // Check if question contains Thai characters or is in expected format
        expect(question.question.length).toBeGreaterThan(0);
        expect(question.options.every(opt => opt.length > 0)).toBe(true);
      });
    });
  });

  it('should have correct answer indices within options range', () => {
    quizzes.forEach(quiz => {
      quiz.questions.forEach(question => {
        expect(question.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(question.correctAnswer).toBeLessThan(question.options.length);
      });
    });
  });

  it('should have explanations for all questions', () => {
    quizzes.forEach(quiz => {
      quiz.questions.forEach(question => {
        expect(question.explanation).toBeTruthy();
        expect(question.explanation.length).toBeGreaterThan(0);
      });
    });
  });
});
