// Legacy course data - now replaced by modular curriculum system
// This file maintains backward compatibility while transitioning to the new structure

import { Course } from './types';
import { curriculumCourses } from './curriculum';

// Convert curriculum format to legacy course format for backward compatibility
function convertCurriculumToCourse(curriculumCourse: any): Course {
  return {
    id: curriculumCourse.id,
    title: curriculumCourse.title,
    description: curriculumCourse.description,
    icon: curriculumCourse.icon,
    color: curriculumCourse.color,
    chapters: curriculumCourse.chapters.map((chapter: any) => ({
      id: chapter.id,
      title: chapter.title,
      description: chapter.description,
      lessons: chapter.lessons.map((lesson: any) => ({
        id: lesson.id,
        title: lesson.title,
        description: lesson.description,
        thinkingTask: lesson.thinkingTask,
        examples: {
          title: 'Guided Examples',
          problems: [] // Examples removed as requested
        },
        practice: lesson.practice
      }))
    }))
  };
}

// Create mock courses array with only PreCalculus from the new curriculum system
export const mockCourses: Course[] = [
  // Convert the new curriculum structure to legacy format
  ...curriculumCourses.map(convertCurriculumToCourse),
  
  // Placeholder courses (keeping original structure for now)
  {
    id: 'algebra1',
    title: 'Algebra 1',
    description: 'Foundation of algebraic thinking with linear equations, inequalities, and basic functions.',
    icon: 'Calculator',
    color: 'from-blue-500 to-blue-600',
    chapters: [
      {
        id: 'placeholder',
        title: 'Coming Soon',
        description: 'Content will be migrated to the new modular system.',
        lessons: []
      }
    ]
  },
  {
    id: 'geometry',
    title: 'Geometry',
    description: 'Explore shapes, proofs, and spatial reasoning through hands-on investigations.',
    icon: 'Triangle',
    color: 'from-green-500 to-green-600',
    chapters: [
      {
        id: 'placeholder',
        title: 'Coming Soon',
        description: 'Content will be migrated to the new modular system.',
        lessons: []
      }
    ]
  },
  {
    id: 'algebra2',
    title: 'Algebra 2',
    description: 'Advanced algebraic concepts including polynomials, rational functions, exponentials, and logarithms.',
    icon: 'Function',
    color: 'from-purple-500 to-purple-600',
    chapters: [
      {
        id: 'placeholder',
        title: 'Coming Soon',
        description: 'Content will be migrated to the new modular system.',
        lessons: []
      }
    ]
  },
  {
    id: 'statistics',
    title: 'Statistics',
    description: 'Analyze data, understand probability, and make statistical inferences.',
    icon: 'BarChart3',
    color: 'from-orange-500 to-orange-600',
    chapters: [
      {
        id: 'placeholder',
        title: 'Coming Soon',
        description: 'Content will be migrated to the new modular system.',
        lessons: []
      }
    ]
  }
];