import React, { useState } from 'react';
import { Lesson } from '../types';
import { Lightbulb, PenTool, Eye, EyeOff, RefreshCw } from 'lucide-react';
import { MathRenderer } from './MathRenderer';

// Import problem generators from curriculum modules
import { generateFunctionProblems } from '../curriculum/precalculus/chapter-01/lesson-01-functions-notation';
import { generateExponentialProblems } from '../curriculum/precalculus/chapter-02/lesson-01-exponential-functions';
import { generateVariableProblems } from '../curriculum/algebra1/chapter-01/lesson-01-variables-expressions';

interface LessonDetailProps {
  lesson: Lesson;
}

export const LessonDetail: React.FC<LessonDetailProps> = ({ lesson }) => {
  const [visibleAnswers, setVisibleAnswers] = useState<Set<string>>(new Set());
  const [problemSets, setProblemSets] = useState<{[key: string]: any[]}>({});

  const toggleAnswer = (problemId: string) => {
    const newVisible = new Set(visibleAnswers);
    if (newVisible.has(problemId)) {
      newVisible.delete(problemId);
    } else {
      newVisible.add(problemId);
    }
    setVisibleAnswers(newVisible);
  };

  const generateNewProblems = (level: 'beginner' | 'intermediate' | 'advanced') => {
    let newProblems = [];
    
    // Determine which type of problems to generate based on lesson content
    if (lesson.id === '1.1' && lesson.title.includes('Functions')) {
      newProblems = generateFunctionProblems(level);
    } else if (lesson.id === '2.1' && lesson.title.includes('Exponential')) {
      newProblems = generateExponentialProblems(level);
    } else if (lesson.id === '1.1' && lesson.title.includes('Variables')) {
      newProblems = generateVariableProblems(level);
    } else {
      // Default fallback - try function problems first, then variable problems
      try {
        newProblems = generateFunctionProblems(level);
      } catch {
        newProblems = generateVariableProblems(level);
      }
    }
    
    setProblemSets(prev => ({
      ...prev,
      [level]: newProblems
    }));
    
    // Hide all answers when generating new problems
    setVisibleAnswers(new Set());
  };

  const getProblemsByLevel = (level: 'beginner' | 'intermediate' | 'advanced') => {
    // Return generated problems if they exist, otherwise return original problems
    if (problemSets[level] && problemSets[level].length > 0) {
      return problemSets[level];
    }
    return lesson.practice.problems.filter(p => p.level === level);
  };

  const renderPracticeSection = (level: 'beginner' | 'intermediate' | 'advanced', title: string, bgColor: string, borderColor: string, buttonColor: string) => {
    const problems = getProblemsByLevel(level);
    if (problems.length === 0) return null;

    return (
      <div className={`${bgColor} border ${borderColor} rounded-xl p-6 mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
          <button
            onClick={() => generateNewProblems(level)}
            className={`flex items-center space-x-2 px-4 py-2 ${buttonColor} text-white rounded-lg hover:opacity-90 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105`}
          >
            <RefreshCw className="h-4 w-4" />
            <span>Try Another Set</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {problems.map((problem, index) => (
            <div key={problem.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-2 py-1 rounded mb-2">
                    Problem {index + 1}
                  </span>
                  <div className="text-gray-900">
                    <MathRenderer content={problem.problem} />
                  </div>
                </div>
              </div>
              
              {problem.answer && (
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggleAnswer(problem.id)}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                    >
                      {visibleAnswers.has(problem.id) ? (
                        <>
                          <EyeOff className="h-4 w-4" />
                          <span>Hide Answer</span>
                        </>
                      ) : (
                        <>
                          <Eye className="h-4 w-4" />
                          <span>View Answer</span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  {visibleAnswers.has(problem.id) && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-sm font-medium text-blue-800 mb-1">Solution:</div>
                      <div className="text-blue-900">
                        <MathRenderer content={problem.answer} />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Lesson Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {lesson.title}
        </h1>
        <MathRenderer 
          content={lesson.description}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        />
      </div>

      {/* Lesson Content */}
      <div className="space-y-12">
        {/* Thinking Task Section */}
        <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {lesson.thinkingTask.title}
            </h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              <MathRenderer content={lesson.thinkingTask.content} />
            </div>
          </div>
          <div className="mt-6 p-4 bg-white rounded-lg border border-yellow-200">
            <p className="text-sm text-gray-600 italic">
              💡 <strong>Building Thinking Classrooms Approach:</strong> Work in groups of 2-3 on vertical non-permanent surfaces (whiteboards). Focus on reasoning and discussion rather than getting the "right" answer quickly. Be prepared to share your thinking process with the class.
            </p>
          </div>
        </section>

        {/* Practice Section */}
        <section className="bg-green-50 border border-green-200 rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <PenTool className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {lesson.practice.title}
            </h2>
          </div>
          
          <div className="mb-6 p-4 bg-white rounded-lg border border-green-200">
            <p className="text-sm text-gray-600 italic">
              📚 <strong>Practice Strategy:</strong> Start with beginner problems to build confidence, then progress to intermediate and advanced levels. Show your work and check your reasoning. Use the "Try Another Set" button to generate new problems for additional practice.
            </p>
          </div>

          {/* Beginner Problems */}
          {renderPracticeSection('beginner', '🟢 Beginner Level', 'bg-green-50', 'border-green-200', 'bg-green-600')}
          
          {/* Intermediate Problems */}
          {renderPracticeSection('intermediate', '🟡 Intermediate Level', 'bg-yellow-50', 'border-yellow-200', 'bg-yellow-600')}
          
          {/* Advanced Problems */}
          {renderPracticeSection('advanced', '🔴 Advanced Level', 'bg-red-50', 'border-red-200', 'bg-red-600')}
        </section>
      </div>
    </div>
  );
};