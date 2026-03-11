import { describe, it, expect } from 'vitest';
import { getExercisesForLesson, exercisesByLesson } from './exercises';

/**
 * Exercises Data Tests
 * ทดสอบข้อมูลแบบฝึกหัด
 */

describe('Exercises Data', () => {
  it('should have exercises for lessons 6-14', () => {
    for (let lessonId = 6; lessonId <= 14; lessonId++) {
      const exercises = getExercisesForLesson(lessonId);
      expect(exercises.length).toBeGreaterThan(0);
    }
  });

  it('should return empty array for lessons without exercises', () => {
    const exercises = getExercisesForLesson(1);
    expect(exercises).toEqual([]);
  });

  it('should have required fields in each exercise', () => {
    const lesson6Exercises = getExercisesForLesson(6);
    
    lesson6Exercises.forEach(exercise => {
      expect(exercise).toHaveProperty('id');
      expect(exercise).toHaveProperty('title');
      expect(exercise).toHaveProperty('description');
      expect(exercise).toHaveProperty('hint');
      expect(exercise).toHaveProperty('starterCode');
    });
  });

  it('should have unique exercise IDs within a lesson', () => {
    const lesson6Exercises = getExercisesForLesson(6);
    const ids = lesson6Exercises.map(ex => ex.id);
    const uniqueIds = new Set(ids);
    
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have valid starter code', () => {
    const lesson6Exercises = getExercisesForLesson(6);
    
    lesson6Exercises.forEach(exercise => {
      expect(exercise.starterCode).toBeTruthy();
      expect(exercise.starterCode.length).toBeGreaterThan(0);
    });
  });

  it('should have expected output for most exercises', () => {
    const lesson6Exercises = getExercisesForLesson(6);
    
    // At least half of the exercises should have expected output
    const exercisesWithOutput = lesson6Exercises.filter(ex => ex.expectedOutput);
    expect(exercisesWithOutput.length).toBeGreaterThanOrEqual(
      Math.floor(lesson6Exercises.length / 2)
    );
  });

  it('should have lesson 14 business case exercise', () => {
    const lesson14Exercises = getExercisesForLesson(14);
    expect(lesson14Exercises.length).toBeGreaterThan(0);
    
    const businessExercise = lesson14Exercises.find(ex =>
      ex.title.toLowerCase().includes('ร้าน') ||
      ex.title.toLowerCase().includes('business')
    );
    expect(businessExercise).toBeDefined();
  });
});
