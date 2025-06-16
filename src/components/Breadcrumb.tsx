import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Course, Chapter, Lesson } from '../types';

interface BreadcrumbProps {
  course?: Course;
  chapter?: Chapter;
  lesson?: Lesson;
  onNavigate: (level: 'home' | 'course' | 'chapter') => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  course,
  chapter,
  lesson,
  onNavigate
}) => {
  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center space-x-2 text-sm">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Home className="h-4 w-4 mr-1" />
            Courses
          </button>
          
          {course && (
            <>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <button
                onClick={() => onNavigate('course')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {course.title}
              </button>
            </>
          )}
          
          {chapter && (
            <>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <button
                onClick={() => onNavigate('chapter')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {chapter.title}
              </button>
            </>
          )}
          
          {lesson && (
            <>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-800 font-medium">{lesson.title}</span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};