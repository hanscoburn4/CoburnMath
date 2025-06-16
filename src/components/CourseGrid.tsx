import React from 'react';
import { Course } from '../types';
import { CourseCard } from './CourseCard';

interface CourseGridProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

export const CourseGrid: React.FC<CourseGridProps> = ({ courses, onSelectCourse }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Choose Your Math Course
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Select a course to begin exploring structured lessons with thinking tasks, 
          guided examples, and practice problems designed to deepen your mathematical understanding.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => onSelectCourse(course)}
          />
        ))}
      </div>
    </div>
  );
};