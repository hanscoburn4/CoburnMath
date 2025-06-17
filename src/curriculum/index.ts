export interface CurriculumLesson {
  id: string;
  title: string;
  description: string;
  learningObjectives: string[];
  keyConceptsFile: string;
  thinkingTask: {
    title: string;
    content: string;
  };
  practice: {
    title: string;
    problems: PracticeProblem[];
  };
}

export interface PracticeProblem {
  id: string;
  problem: string;
  answer?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

export interface CurriculumChapter {
  id: string;
  title: string;
  description: string;
  lessons: CurriculumLesson[];
}

export interface CurriculumCourse {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  chapters: CurriculumChapter[];
}

// Import all lesson files
import * as precalc_ch1_lesson1 from './precalculus/chapter-01/lesson-01-functions-notation';
import * as precalc_ch1_lesson2 from './precalculus/chapter-01/lesson-02-function-transformations';
import * as precalc_ch2_lesson1 from './precalculus/chapter-02/lesson-01-exponential-functions';
import * as precalc_ch2_lesson2 from './precalculus/chapter-02/lesson-02-logarithmic-functions';

// Import Algebra 1 lesson files
import * as algebra1_ch1_lesson1 from './algebra1/chapter-01/lesson-01-numerical-expressions';
import * as algebra1_ch1_lesson2 from './algebra1/chapter-01/lesson-02-algebraic-expressions';
import * as algebra1_ch1_lesson3 from './algebra1/chapter-01/lesson-03-properties-real-numbers';
import * as algebra1_ch1_lesson4 from './algebra1/chapter-01/lesson-04-operations-rational-numbers';
import * as algebra1_ch1_lesson5 from './algebra1/chapter-01/lesson-05-distributive-property';
import * as algebra1_ch1_lesson6 from './algebra1/chapter-01/lesson-06-descriptive-modeling';

import * as algebra1_ch2_lesson1 from './algebra1/chapter-02/lesson-01-writing-interpreting-equations';
import * as algebra1_ch2_lesson2 from './algebra1/chapter-02/lesson-02-solving-one-step-equations';
import * as algebra1_ch2_lesson3 from './algebra1/chapter-02/lesson-03-solving-multi-step-equations';
import * as algebra1_ch2_lesson4 from './algebra1/chapter-02/lesson-04-equations-variable-each-side';
import * as algebra1_ch2_lesson5 from './algebra1/chapter-02/lesson-05-absolute-value-equations';
import * as algebra1_ch2_lesson6 from './algebra1/chapter-02/lesson-06-solving-proportions';
import * as algebra1_ch2_lesson7 from './algebra1/chapter-02/lesson-07-using-formulas';

import * as algebra1_ch3_lesson1 from './algebra1/chapter-03/lesson-01-representing-relations';
import * as algebra1_ch3_lesson2 from './algebra1/chapter-03/lesson-02-functions';
import * as algebra1_ch3_lesson3 from './algebra1/chapter-03/lesson-03-linearity-continuity';
import * as algebra1_ch3_lesson4 from './algebra1/chapter-03/lesson-04-intercepts-graphs';
import * as algebra1_ch3_lesson5 from './algebra1/chapter-03/lesson-05-shapes-graphs';
import * as algebra1_ch3_lesson6 from './algebra1/chapter-03/lesson-06-sketching-comparing-functions';

import * as algebra1_ch4_lesson1 from './algebra1/chapter-04/lesson-01-graphing-linear-functions';
import * as algebra1_ch4_lesson2 from './algebra1/chapter-04/lesson-02-rate-change-slope';
import * as algebra1_ch4_lesson3 from './algebra1/chapter-04/lesson-03-slope-intercept-form';

import * as algebra1_ch5_lesson1 from './algebra1/chapter-05/lesson-01-writing-slope-intercept';
import * as algebra1_ch5_lesson2 from './algebra1/chapter-05/lesson-02-standard-point-slope-forms';

import * as algebra1_ch6_lesson1 from './algebra1/chapter-06/lesson-01-one-step-inequalities';
import * as algebra1_ch6_lesson2 from './algebra1/chapter-06/lesson-02-multi-step-inequalities';
import * as algebra1_ch6_lesson3 from './algebra1/chapter-06/lesson-03-compound-inequalities';
import * as algebra1_ch6_lesson4 from './algebra1/chapter-06/lesson-04-absolute-value-inequalities';
import * as algebra1_ch6_lesson5 from './algebra1/chapter-06/lesson-05-graphing-inequalities-two-variables';

import * as algebra1_ch7_lesson1 from './algebra1/chapter-07/lesson-01-graphing-systems';
import * as algebra1_ch7_lesson2 from './algebra1/chapter-07/lesson-02-substitution';
import * as algebra1_ch7_lesson3 from './algebra1/chapter-07/lesson-03-elimination-addition-subtraction';
import * as algebra1_ch7_lesson4 from './algebra1/chapter-07/lesson-04-elimination-multiplication';
import * as algebra1_ch7_lesson5 from './algebra1/chapter-07/lesson-05-systems-inequalities';

import * as algebra1_ch8_lesson1 from './algebra1/chapter-08/lesson-01-multiplication-properties-exponents';
import * as algebra1_ch8_lesson2 from './algebra1/chapter-08/lesson-02-division-properties-exponents';
import * as algebra1_ch8_lesson3 from './algebra1/chapter-08/lesson-03-negative-exponents';
import * as algebra1_ch8_lesson4 from './algebra1/chapter-08/lesson-04-rational-exponents';
import * as algebra1_ch8_lesson5 from './algebra1/chapter-08/lesson-05-simplifying-radical-expressions';
import * as algebra1_ch8_lesson6 from './algebra1/chapter-08/lesson-06-operations-radical-expressions';

import * as algebra1_ch9_lesson1 from './algebra1/chapter-09/lesson-01-exponential-functions';
import * as algebra1_ch9_lesson2 from './algebra1/chapter-09/lesson-02-transformations-exponential';
import * as algebra1_ch9_lesson3 from './algebra1/chapter-09/lesson-03-writing-exponential-functions';
import * as algebra1_ch9_lesson5 from './algebra1/chapter-09/lesson-05-geometric-sequences';
import * as algebra1_ch9_lesson6 from './algebra1/chapter-09/lesson-06-recursive-formulas';

import * as algebra1_ch11_lesson1 from './algebra1/chapter-11/lesson-01-graphing-quadratic-functions';
import * as algebra1_ch11_lesson2 from './algebra1/chapter-11/lesson-02-transformations-quadratic';
import * as algebra1_ch11_lesson3 from './algebra1/chapter-11/lesson-03-solving-quadratic-graphing';
import * as algebra1_ch11_lesson4 from './algebra1/chapter-11/lesson-04-solving-quadratic-factoring';
import * as algebra1_ch11_lesson6 from './algebra1/chapter-11/lesson-06-quadratic-formula';

import * as algebra1_ch12_lesson1 from './algebra1/chapter-12/lesson-01-measures-center';
import * as algebra1_ch12_lesson2 from './algebra1/chapter-12/lesson-02-representing-data';
import * as algebra1_ch12_lesson3 from './algebra1/chapter-12/lesson-03-using-data';
import * as algebra1_ch12_lesson4 from './algebra1/chapter-12/lesson-04-measures-spread';
import * as algebra1_ch12_lesson5 from './algebra1/chapter-12/lesson-05-distributions-data';
import * as algebra1_ch12_lesson6 from './algebra1/chapter-12/lesson-06-comparing-sets-data';
import * as algebra1_ch12_lesson7 from './algebra1/chapter-12/lesson-07-summarizing-categorical-data';

// Import Algebra 2 lesson files
import * as algebra2_ch1_lesson1 from './algebra2/chapter-01/lesson-01-functions-continuity';
import * as algebra2_ch1_lesson2 from './algebra2/chapter-01/lesson-02-linearity-intercepts-symmetry';
import * as algebra2_ch1_lesson3 from './algebra2/chapter-01/lesson-03-extrema-end-behavior';
import * as algebra2_ch1_lesson4 from './algebra2/chapter-01/lesson-04-sketching-comparing-functions';
import * as algebra2_ch1_lesson5 from './algebra2/chapter-01/lesson-05-graphing-linear-functions-inequalities';
import * as algebra2_ch1_lesson6 from './algebra2/chapter-01/lesson-06-special-functions';
import * as algebra2_ch1_lesson7 from './algebra2/chapter-01/lesson-07-transformations-functions';

import * as algebra2_ch2_lesson1 from './algebra2/chapter-02/lesson-01-solving-linear-equations-inequalities';

// Import Geometry lesson files
import * as geometry_ch1_lesson1 from './geometry/chapter-01/lesson-01-geometric-system';
import * as geometry_ch1_lesson2 from './geometry/chapter-01/lesson-02-points-lines-planes';
import * as geometry_ch1_lesson3 from './geometry/chapter-01/lesson-03-line-segments';
import * as geometry_ch1_lesson4 from './geometry/chapter-01/lesson-04-distance';
import * as geometry_ch1_lesson5 from './geometry/chapter-01/lesson-05-locating-points-number-line';
import * as geometry_ch1_lesson6 from './geometry/chapter-01/lesson-06-locating-points-coordinate-plane';
import * as geometry_ch1_lesson7 from './geometry/chapter-01/lesson-07-midpoints-bisectors';

import * as geometry_ch2_lesson1 from './geometry/chapter-02/lesson-01-angles-congruence';
import * as geometry_ch2_lesson2 from './geometry/chapter-02/lesson-02-angle-relationships';
import * as geometry_ch2_lesson3 from './geometry/chapter-02/lesson-03-two-dimensional-figures';
import * as geometry_ch2_lesson4 from './geometry/chapter-02/lesson-04-transformations-plane';
import * as geometry_ch2_lesson5 from './geometry/chapter-02/lesson-05-three-dimensional-figures';

import * as geometry_ch3_lesson1 from './geometry/chapter-03/lesson-01-conjectures-counterexamples';
import * as geometry_ch3_lesson2 from './geometry/chapter-03/lesson-02-statements-conditionals-biconditionals';
import * as geometry_ch3_lesson3 from './geometry/chapter-03/lesson-03-deductive-reasoning';
import * as geometry_ch3_lesson4 from './geometry/chapter-03/lesson-04-writing-proofs';
import * as geometry_ch3_lesson5 from './geometry/chapter-03/lesson-05-proving-segment-relationships';
import * as geometry_ch3_lesson6 from './geometry/chapter-03/lesson-06-proving-angle-relationships';
import * as geometry_ch3_lesson7 from './geometry/chapter-03/lesson-07-parallel-lines-transversals';
import * as geometry_ch3_lesson8 from './geometry/chapter-03/lesson-08-slope-equations-lines';
import * as geometry_ch3_lesson9 from './geometry/chapter-03/lesson-09-proving-lines-parallel';
import * as geometry_ch3_lesson10 from './geometry/chapter-03/lesson-10-perpendiculars-distance';

import * as geometry_ch5_lesson1 from './geometry/chapter-05/lesson-01-angles-triangles';
import * as geometry_ch5_lesson2 from './geometry/chapter-05/lesson-02-congruent-triangles';
import * as geometry_ch5_lesson3 from './geometry/chapter-05/lesson-03-proving-triangles-congruent-sss-sas';
import * as geometry_ch5_lesson4 from './geometry/chapter-05/lesson-04-proving-triangles-congruent-asa-aas';
import * as geometry_ch5_lesson5 from './geometry/chapter-05/lesson-05-proving-right-triangles-congruent';
import * as geometry_ch5_lesson6 from './geometry/chapter-05/lesson-06-isosceles-equilateral-triangles';

import * as geometry_ch6_lesson1 from './geometry/chapter-06/lesson-01-perpendicular-bisectors';
import * as geometry_ch6_lesson2 from './geometry/chapter-06/lesson-02-angle-bisectors';
import * as geometry_ch6_lesson3 from './geometry/chapter-06/lesson-03-medians-altitudes-triangles';
import * as geometry_ch6_lesson4 from './geometry/chapter-06/lesson-04-inequalities-one-triangle';
import * as geometry_ch6_lesson6 from './geometry/chapter-06/lesson-06-triangle-inequality';

import * as geometry_ch7_lesson1 from './geometry/chapter-07/lesson-01-angles-polygons';
import * as geometry_ch7_lesson2 from './geometry/chapter-07/lesson-02-parallelograms';
import * as geometry_ch7_lesson3 from './geometry/chapter-07/lesson-03-tests-parallelograms';
import * as geometry_ch7_lesson4 from './geometry/chapter-07/lesson-04-rectangles';
import * as geometry_ch7_lesson5 from './geometry/chapter-07/lesson-05-rhombi-squares';
import * as geometry_ch7_lesson6 from './geometry/chapter-07/lesson-06-trapezoids-kites';

import * as geometry_ch8_lesson1 from './geometry/chapter-08/lesson-01-dilations';
import * as geometry_ch8_lesson2 from './geometry/chapter-08/lesson-02-similar-polygons';
import * as geometry_ch8_lesson3 from './geometry/chapter-08/lesson-03-similar-triangles-aa';
import * as geometry_ch8_lesson4 from './geometry/chapter-08/lesson-04-similar-triangles-sss-sas';
import * as geometry_ch8_lesson5 from './geometry/chapter-08/lesson-05-triangle-proportionality';
import * as geometry_ch8_lesson6 from './geometry/chapter-08/lesson-06-parts-similar-triangles';

import * as geometry_ch9_lesson1 from './geometry/chapter-09/lesson-01-geometric-mean';
import * as geometry_ch9_lesson2 from './geometry/chapter-09/lesson-02-pythagorean-theorem';
import * as geometry_ch9_lesson3 from './geometry/chapter-09/lesson-03-coordinates-space';
import * as geometry_ch9_lesson4 from './geometry/chapter-09/lesson-04-special-right-triangles';
import * as geometry_ch9_lesson5 from './geometry/chapter-09/lesson-05-trigonometry';
import * as geometry_ch9_lesson6 from './geometry/chapter-09/lesson-06-applying-trigonometry';
import * as geometry_ch9_lesson7 from './geometry/chapter-09/lesson-07-law-sines';
import * as geometry_ch9_lesson8 from './geometry/chapter-09/lesson-08-law-cosines';

import * as geometry_ch10_lesson1 from './geometry/chapter-10/lesson-01-circles-circumference';
import * as geometry_ch10_lesson2 from './geometry/chapter-10/lesson-02-measuring-angles-arcs';
import * as geometry_ch10_lesson3 from './geometry/chapter-10/lesson-03-arcs-chords';
import * as geometry_ch10_lesson4 from './geometry/chapter-10/lesson-04-inscribed-angles';
import * as geometry_ch10_lesson5 from './geometry/chapter-10/lesson-05-tangents';
import * as geometry_ch10_lesson6 from './geometry/chapter-10/lesson-06-tangents-secants-angle-measures';
import * as geometry_ch10_lesson7 from './geometry/chapter-10/lesson-07-equations-circles';

// Export curriculum structure
export const curriculumCourses: CurriculumCourse[] = [
  {
    id: 'algebra1',
    title: 'Algebra 1',
    description: 'Foundation of algebraic thinking with linear equations, inequalities, and basic functions.',
    icon: 'Calculator',
    color: 'from-blue-500 to-blue-600',
    chapters: [
      {
        id: 'expressions',
        title: 'Chapter 1: Expressions',
        description: 'Work with numerical and algebraic expressions.',
        lessons: [
          algebra1_ch1_lesson1.lessonData,
          algebra1_ch1_lesson2.lessonData,
          algebra1_ch1_lesson3.lessonData,
          algebra1_ch1_lesson4.lessonData,
          algebra1_ch1_lesson5.lessonData,
          algebra1_ch1_lesson6.lessonData
        ]
      },
      {
        id: 'equations-one-variable',
        title: 'Chapter 2: Equations in One Variable',
        description: 'Learn to solve various types of equations.',
        lessons: [
          algebra1_ch2_lesson1.lessonData,
          algebra1_ch2_lesson2.lessonData,
          algebra1_ch2_lesson3.lessonData,
          algebra1_ch2_lesson4.lessonData,
          algebra1_ch2_lesson5.lessonData,
          algebra1_ch2_lesson6.lessonData,
          algebra1_ch2_lesson7.lessonData
        ]
      },
      {
        id: 'relations-functions',
        title: 'Chapter 3: Relations and Functions',
        description: 'Explore relations, functions, and their graphs.',
        lessons: [
          algebra1_ch3_lesson1.lessonData,
          algebra1_ch3_lesson2.lessonData,
          algebra1_ch3_lesson3.lessonData,
          algebra1_ch3_lesson4.lessonData,
          algebra1_ch3_lesson5.lessonData,
          algebra1_ch3_lesson6.lessonData
        ]
      },
      {
        id: 'linear-functions-equations',
        title: 'Chapter 4: Linear Functions and Equations',
        description: 'Master linear functions and their equations.',
        lessons: [
          algebra1_ch4_lesson1.lessonData,
          algebra1_ch4_lesson2.lessonData,
          algebra1_ch4_lesson3.lessonData
        ]
      },
      {
        id: 'writing-linear-equations',
        title: 'Chapter 5: Writing Linear Equations',
        description: 'Learn different forms of linear equations.',
        lessons: [
          algebra1_ch5_lesson1.lessonData,
          algebra1_ch5_lesson2.lessonData
        ]
      },
      {
        id: 'linear-inequalities',
        title: 'Chapter 6: Linear Inequalities',
        description: 'Solve and graph linear inequalities.',
        lessons: [
          algebra1_ch6_lesson1.lessonData,
          algebra1_ch6_lesson2.lessonData,
          algebra1_ch6_lesson3.lessonData,
          algebra1_ch6_lesson4.lessonData,
          algebra1_ch6_lesson5.lessonData
        ]
      },
      {
        id: 'systems-linear-equations-inequalities',
        title: 'Chapter 7: Systems of Linear Equations and Inequalities',
        description: 'Solve systems using multiple methods.',
        lessons: [
          algebra1_ch7_lesson1.lessonData,
          algebra1_ch7_lesson2.lessonData,
          algebra1_ch7_lesson3.lessonData,
          algebra1_ch7_lesson4.lessonData,
          algebra1_ch7_lesson5.lessonData
        ]
      },
      {
        id: 'exponents-roots',
        title: 'Chapter 8: Exponents and Roots',
        description: 'Work with exponents and radical expressions.',
        lessons: [
          algebra1_ch8_lesson1.lessonData,
          algebra1_ch8_lesson2.lessonData,
          algebra1_ch8_lesson3.lessonData,
          algebra1_ch8_lesson4.lessonData,
          algebra1_ch8_lesson5.lessonData,
          algebra1_ch8_lesson6.lessonData
        ]
      },
      {
        id: 'exponential-functions',
        title: 'Chapter 9: Exponential Functions',
        description: 'Explore exponential functions and sequences.',
        lessons: [
          algebra1_ch9_lesson1.lessonData,
          algebra1_ch9_lesson2.lessonData,
          algebra1_ch9_lesson3.lessonData,
          algebra1_ch9_lesson5.lessonData,
          algebra1_ch9_lesson6.lessonData
        ]
      },
      {
        id: 'quadratic-functions',
        title: 'Chapter 11: Quadratic Functions',
        description: 'Study quadratic functions and their solutions.',
        lessons: [
          algebra1_ch11_lesson1.lessonData,
          algebra1_ch11_lesson2.lessonData,
          algebra1_ch11_lesson3.lessonData,
          algebra1_ch11_lesson4.lessonData,
          algebra1_ch11_lesson6.lessonData
        ]
      },
      {
        id: 'statistics',
        title: 'Chapter 12: Statistics',
        description: 'Analyze and interpret data.',
        lessons: [
          algebra1_ch12_lesson1.lessonData,
          algebra1_ch12_lesson2.lessonData,
          algebra1_ch12_lesson3.lessonData,
          algebra1_ch12_lesson4.lessonData,
          algebra1_ch12_lesson5.lessonData,
          algebra1_ch12_lesson6.lessonData,
          algebra1_ch12_lesson7.lessonData
        ]
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
        id: 'tools-geometry',
        title: 'Module 1: Tools of Geometry',
        description: 'Learn the fundamental tools and concepts of geometry.',
        lessons: [
          geometry_ch1_lesson1.lessonData,
          geometry_ch1_lesson2.lessonData,
          geometry_ch1_lesson3.lessonData,
          geometry_ch1_lesson4.lessonData,
          geometry_ch1_lesson5.lessonData,
          geometry_ch1_lesson6.lessonData,
          geometry_ch1_lesson7.lessonData
        ]
      },
      {
        id: 'angles-geometric-figures',
        title: 'Module 2: Angles and Geometric Figures',
        description: 'Study angles and various geometric figures.',
        lessons: [
          geometry_ch2_lesson1.lessonData,
          geometry_ch2_lesson2.lessonData,
          geometry_ch2_lesson3.lessonData,
          geometry_ch2_lesson4.lessonData,
          geometry_ch2_lesson5.lessonData
        ]
      },
      {
        id: 'logical-arguments-line-relationships',
        title: 'Module 3: Logical Arguments and Line Relationships',
        description: 'Develop logical reasoning and study line relationships.',
        lessons: [
          geometry_ch3_lesson1.lessonData,
          geometry_ch3_lesson2.lessonData,
          geometry_ch3_lesson3.lessonData,
          geometry_ch3_lesson4.lessonData,
          geometry_ch3_lesson5.lessonData,
          geometry_ch3_lesson6.lessonData,
          geometry_ch3_lesson7.lessonData,
          geometry_ch3_lesson8.lessonData,
          geometry_ch3_lesson9.lessonData,
          geometry_ch3_lesson10.lessonData
        ]
      },
      {
        id: 'triangles-congruence',
        title: 'Module 5: Triangles and Congruence',
        description: 'Study triangles and prove congruence relationships.',
        lessons: [
          geometry_ch5_lesson1.lessonData,
          geometry_ch5_lesson2.lessonData,
          geometry_ch5_lesson3.lessonData,
          geometry_ch5_lesson4.lessonData,
          geometry_ch5_lesson5.lessonData,
          geometry_ch5_lesson6.lessonData
        ]
      },
      {
        id: 'relationships-triangles',
        title: 'Module 6: Relationships in Triangles',
        description: 'Explore special relationships within triangles.',
        lessons: [
          geometry_ch6_lesson1.lessonData,
          geometry_ch6_lesson2.lessonData,
          geometry_ch6_lesson3.lessonData,
          geometry_ch6_lesson4.lessonData,
          geometry_ch6_lesson6.lessonData
        ]
      },
      {
        id: 'quadrilaterals',
        title: 'Module 7: Quadrilaterals',
        description: 'Study properties of quadrilaterals and polygons.',
        lessons: [
          geometry_ch7_lesson1.lessonData,
          geometry_ch7_lesson2.lessonData,
          geometry_ch7_lesson3.lessonData,
          geometry_ch7_lesson4.lessonData,
          geometry_ch7_lesson5.lessonData,
          geometry_ch7_lesson6.lessonData
        ]
      },
      {
        id: 'similarity',
        title: 'Module 8: Similarity',
        description: 'Explore similarity relationships and proportions.',
        lessons: [
          geometry_ch8_lesson1.lessonData,
          geometry_ch8_lesson2.lessonData,
          geometry_ch8_lesson3.lessonData,
          geometry_ch8_lesson4.lessonData,
          geometry_ch8_lesson5.lessonData,
          geometry_ch8_lesson6.lessonData
        ]
      },
      {
        id: 'right-triangles-trigonometry',
        title: 'Module 9: Right Triangles and Trigonometry',
        description: 'Study right triangles and introduction to trigonometry.',
        lessons: [
          geometry_ch9_lesson1.lessonData,
          geometry_ch9_lesson2.lessonData,
          geometry_ch9_lesson3.lessonData,
          geometry_ch9_lesson4.lessonData,
          geometry_ch9_lesson5.lessonData,
          geometry_ch9_lesson6.lessonData,
          geometry_ch9_lesson7.lessonData,
          geometry_ch9_lesson8.lessonData
        ]
      },
      {
        id: 'circles',
        title: 'Module 10: Circles',
        description: 'Explore properties and relationships in circles.',
        lessons: [
          geometry_ch10_lesson1.lessonData,
          geometry_ch10_lesson2.lessonData,
          geometry_ch10_lesson3.lessonData,
          geometry_ch10_lesson4.lessonData,
          geometry_ch10_lesson5.lessonData,
          geometry_ch10_lesson6.lessonData,
          geometry_ch10_lesson7.lessonData
        ]
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
        id: 'relations-functions',
        title: 'Module 1: Relations and Functions',
        description: 'Explore advanced function concepts and their properties.',
        lessons: [
          algebra2_ch1_lesson1.lessonData,
          algebra2_ch1_lesson2.lessonData,
          algebra2_ch1_lesson3.lessonData,
          algebra2_ch1_lesson4.lessonData,
          algebra2_ch1_lesson5.lessonData,
          algebra2_ch1_lesson6.lessonData,
          algebra2_ch1_lesson7.lessonData
        ]
      },
      {
        id: 'linear-equations-inequalities-systems',
        title: 'Module 2: Linear Equations, Inequalities, and Systems',
        description: 'Master advanced techniques for linear equations and systems.',
        lessons: [
          algebra2_ch2_lesson1.lessonData
        ]
      }
    ]
  },
  {
    id: 'precalculus',
    title: 'PreCalculus',
    description: 'Prepare for calculus with advanced functions, trigonometry, and analytical geometry.',
    icon: 'Waves',
    color: 'from-red-500 to-red-600',
    chapters: [
      {
        id: 'functions-graphs',
        title: 'Chapter 1: Functions and Graphs',
        description: 'Study advanced function concepts including transformations and compositions.',
        lessons: [
          precalc_ch1_lesson1.lessonData,
          precalc_ch1_lesson2.lessonData
        ]
      },
      {
        id: 'exponential-logarithmic',
        title: 'Chapter 2: Exponential and Logarithmic Functions',
        description: 'Explore exponential and logarithmic functions and their applications.',
        lessons: [
          precalc_ch2_lesson1.lessonData,
          precalc_ch2_lesson2.lessonData
        ]
      }
    ]
  }
];