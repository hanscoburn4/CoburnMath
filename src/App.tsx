import React, { useState } from 'react';
import { Header } from './components/Header';
import { Breadcrumb } from './components/Breadcrumb';
import { CourseGrid } from './components/CourseGrid';
import { ChapterList } from './components/ChapterList';
import { LessonList } from './components/LessonList';
import { LessonDetail } from './components/LessonDetail';
import { curriculumCourses } from './curriculum';
import { AppState, Course, Chapter, Lesson } from './types';

function App() {
  const [appState, setAppState] = useState<AppState>({
    currentView: 'courses'
  });

  const handleSelectCourse = (course: Course) => {
    setAppState({
      currentView: 'chapters',
      selectedCourse: course
    });
  };

  const handleSelectChapter = (chapter: Chapter) => {
    setAppState({
      ...appState,
      currentView: 'lessons',
      selectedChapter: chapter
    });
  };

  const handleSelectLesson = (lesson: Lesson) => {
    setAppState({
      ...appState,
      currentView: 'lesson-detail',
      selectedLesson: lesson
    });
  };

  const handleNavigate = (level: 'home' | 'course' | 'chapter') => {
    switch (level) {
      case 'home':
        setAppState({ currentView: 'courses' });
        break;
      case 'course':
        setAppState({
          currentView: 'chapters',
          selectedCourse: appState.selectedCourse
        });
        break;
      case 'chapter':
        setAppState({
          currentView: 'lessons',
          selectedCourse: appState.selectedCourse,
          selectedChapter: appState.selectedChapter
        });
        break;
    }
  };

  const getHeaderTitle = () => {
    switch (appState.currentView) {
      case 'courses':
        return 'Coburn Math';
      case 'chapters':
        return appState.selectedCourse?.title || 'Course';
      case 'lessons':
        return appState.selectedChapter?.title || 'Chapter';
      case 'lesson-detail':
        return appState.selectedLesson?.title || 'Lesson';
      default:
        return 'Coburn Math';
    }
  };

  const getHeaderSubtitle = () => {
    switch (appState.currentView) {
      case 'courses':
        return 'Structured learning with thinking tasks, guided examples, and practice problems';
      case 'chapters':
        return 'Select a chapter to begin your learning journey';
      case 'lessons':
        return 'Choose a lesson to start exploring the concepts';
      case 'lesson-detail':
        return 'Work through each section at your own pace';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title={getHeaderTitle()} 
        subtitle={getHeaderSubtitle()}
      />
      
      {(appState.currentView !== 'courses') && (
        <Breadcrumb
          course={appState.selectedCourse}
          chapter={appState.selectedChapter}
          lesson={appState.selectedLesson}
          onNavigate={handleNavigate}
        />
      )}

      <main>
        {appState.currentView === 'courses' && (
          <CourseGrid 
            courses={curriculumCourses} 
            onSelectCourse={handleSelectCourse}
          />
        )}

        {appState.currentView === 'chapters' && appState.selectedCourse && (
          <ChapterList
            course={appState.selectedCourse}
            onSelectChapter={handleSelectChapter}
          />
        )}

        {appState.currentView === 'lessons' && appState.selectedChapter && (
          <LessonList
            chapter={appState.selectedChapter}
            onSelectLesson={handleSelectLesson}
          />
        )}

        {appState.currentView === 'lesson-detail' && appState.selectedLesson && (
          <LessonDetail lesson={appState.selectedLesson} />
        )}
      </main>
    </div>
  );
}

export default App;