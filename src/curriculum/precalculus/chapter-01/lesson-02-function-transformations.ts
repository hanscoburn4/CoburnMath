import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '1.2',
  title: '1.2 Function Transformations',
  description: 'Explore how functions change when we modify their equations.',
  learningObjectives: [
    'Identify and describe vertical and horizontal shifts of functions',
    'Recognize vertical and horizontal stretches and compressions',
    'Understand reflections across the x-axis and y-axis',
    'Combine multiple transformations and predict their effects',
    'Write equations for transformed functions given the parent function'
  ],
  keyConceptsFile: 'precalculus/chapter-01/concepts/function-transformations-concepts.md',
  thinkingTask: {
    title: 'The Shape-Shifting Function Family',
    content: 'Imagine you have a basic function $f(x) = x^2$ as your "parent." Now, you\'re going to create a whole family of related functions by making small changes to the equation.\n\n**Your Challenge:** Working in groups, explore what happens when you create these "children" of the parent function:\n\n• $g(x) = x^2 + 3$\n• $h(x) = (x - 2)^2$\n• $j(x) = 2x^2$\n• $k(x) = -x^2$\n• $m(x) = (x + 1)^2 - 4$\n\nSketch these functions (you can use graphing technology or create rough sketches). What patterns do you notice? How does each "child" relate to its "parent"? \n\n**Deeper Investigation:** Can you predict what $n(x) = -2(x - 3)^2 + 5$ will look like before graphing it? What "family traits" can you identify that help you understand any transformed function?\n\n*Think about: What happens to the shape, position, and orientation? Can you create rules for predicting transformations?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Describe the transformation of $g(x) = x^2 + 4$ compared to $f(x) = x^2$',
        level: 'beginner',
        answer: 'Vertical shift up 4 units'
      },
      { 
        id: 'p2', 
        problem: 'What transformation does $h(x) = (x - 2)^2$ represent?',
        level: 'beginner',
        answer: 'Horizontal shift right 2 units'
      },
      { 
        id: 'p3', 
        problem: 'Write the equation for $f(x) = |x|$ shifted left 3 units and down 2 units',
        level: 'intermediate',
        answer: '$g(x) = |x + 3| - 2$'
      },
      { 
        id: 'p4', 
        problem: 'Describe all transformations of $g(x) = -2(x + 1)^2 - 3$ compared to $f(x) = x^2$',
        level: 'intermediate',
        answer: 'Horizontal shift left 1 unit, vertical stretch by factor 2, reflection over x-axis, vertical shift down 3 units'
      },
      { 
        id: 'p5', 
        problem: 'If $f(x) = \\frac{1}{x}$, write the equation after reflecting over the y-axis, stretching vertically by 3, and shifting up 2 units',
        level: 'advanced',
        answer: '$g(x) = \\frac{3}{-x} + 2 = -\\frac{3}{x} + 2$'
      },
      { 
        id: 'p6', 
        problem: 'Find the vertex of $h(x) = -\\frac{1}{2}(x - 4)^2 + 7$ and describe all transformations from $f(x) = x^2$',
        level: 'advanced',
        answer: 'Vertex: $(4, 7)$. Transformations: horizontal shift right 4, vertical compression by $\\frac{1}{2}$, reflection over x-axis, vertical shift up 7'
      }
    ]
  }
};

// Problem generation functions for transformations
export const generateTransformationProblems = (level: 'beginner' | 'intermediate' | 'advanced') => {
  const problems = [];
  
  if (level === 'beginner') {
    const shifts = [1, 2, 3, 4, 5, -1, -2, -3];
    const functions = ['x^2', '|x|', '\\sqrt{x}'];
    
    for (let i = 0; i < 3; i++) {
      const func = functions[Math.floor(Math.random() * functions.length)];
      const shift = shifts[Math.floor(Math.random() * shifts.length)];
      const isVertical = Math.random() > 0.5;
      
      if (isVertical) {
        problems.push({
          id: `gen-b-${i}`,
          problem: `Describe the transformation of $g(x) = ${func} ${shift >= 0 ? '+' : ''}${shift}$ compared to $f(x) = ${func}$`,
          answer: `Vertical shift ${shift > 0 ? 'up' : 'down'} ${Math.abs(shift)} unit${Math.abs(shift) !== 1 ? 's' : ''}`,
          level: 'beginner'
        });
      } else {
        problems.push({
          id: `gen-b-${i}`,
          problem: `Describe the transformation of $g(x) = f(x ${shift >= 0 ? '-' : '+'}${Math.abs(shift)})$ where $f(x) = ${func}$`,
          answer: `Horizontal shift ${shift > 0 ? 'right' : 'left'} ${Math.abs(shift)} unit${Math.abs(shift) !== 1 ? 's' : ''}`,
          level: 'beginner'
        });
      }
    }
  }
  
  return problems;
};