export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  thinkingTask: {
    title: string;
    content: string;
  };
  examples: {
    title: string;
    problems: ExampleProblem[];
  };
  practice: {
    title: string;
    problems: PracticeProblem[];
  };
}

export interface ExampleProblem {
  id: string;
  problem: string;
  solution: string;
}

export interface PracticeProblem {
  id: string;
  problem: string;
  answer?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

export type ViewType = 'courses' | 'chapters' | 'lessons' | 'lesson-detail';

export interface AppState {
  currentView: ViewType;
  selectedCourse?: Course;
  selectedChapter?: Chapter;
  selectedLesson?: Lesson;
}