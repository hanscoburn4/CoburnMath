import React from 'react';
import { Chapter, Lesson } from '../types';
import { FileText, ArrowRight } from 'lucide-react';

interface LessonListProps {
  chapter: Chapter;
  onSelectLesson: (lesson: Lesson) => void;
}

export const LessonList: React.FC<LessonListProps> = ({ chapter, onSelectLesson }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {chapter.title}
        </h2>
        <p className="text-lg text-gray-600">
          {chapter.description}
        </p>
      </div>
      
      <div className="space-y-4">
        {chapter.lessons.map((lesson, index) => (
          <div
            key={lesson.id}
            onClick={() => onSelectLesson(lesson)}
            className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden border border-gray-200 hover:border-green-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        Lesson {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                      {lesson.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {lesson.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>• Thinking Task</span>
                      <span>• Guided Examples</span>
                      <span>• Practice Problems</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0 ml-4">
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};