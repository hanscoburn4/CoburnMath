import React from 'react';
import { Course } from '../types';
import { getIconComponent } from '../utils/iconUtils';
import { ChevronRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  const IconComponent = getIconComponent(course.icon);
  
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1"
    >
      <div className={`h-32 bg-gradient-to-br ${course.color} relative`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
        <div className="absolute bottom-4 left-4">
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
            <IconComponent className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>
          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          {course.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500">
          <span>{course.chapters.length} chapters available</span>
        </div>
      </div>
    </div>
  );
};