import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '1.7',
  title: '1.7 Transformations of Functions',
  description: 'Master function transformations including shifts, stretches, compressions, and reflections.',
  learningObjectives: [
    'Apply vertical and horizontal shifts to functions',
    'Perform vertical and horizontal stretches and compressions',
    'Execute reflections across axes',
    'Combine multiple transformations',
    'Write equations for transformed functions'
  ],
  keyConceptsFile: 'algebra2/chapter-01/concepts/transformations-functions-concepts.md',
  thinkingTask: {
    title: 'The Sound Wave Engineering Challenge',
    content: 'A sound engineer is working with a basic sound wave function f(x) = sin(x) and needs to create various modified versions for different audio effects:\n\n**Required Modifications:**\n• **Echo Effect**: Shift the wave 2 units to the right\n• **Volume Boost**: Make the wave 3 times taller\n• **Bass Inversion**: Flip the wave upside down\n• **Frequency Doubling**: Compress the wave horizontally by half\n• **Offset**: Raise the entire wave 1 unit up\n\n**Your Mission:** Work together to engineer these sound modifications:\n\n1. Write the equation for each individual transformation\n2. Create a "master effect" that combines echo + volume boost + offset\n3. What would happen if you applied all transformations at once?\n4. How do the order of transformations affect the final result?\n5. Design your own custom sound effect using transformations\n\n**Extension Questions:**\n• How do real audio engineers use mathematical transformations?\n• What happens when you transform the transformed function again?\n• Can you "undo" a transformation? How?\n• How do transformations relate to music and acoustics?\n\n*Think about: How do mathematical transformations model real-world modifications? What makes certain combinations of transformations useful or problematic?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Describe the transformation of $g(x) = f(x) + 3$ compared to $f(x)$',
        level: 'beginner',
        answer: 'Vertical shift up 3 units. Every point $(x, y)$ on $f(x)$ becomes $(x, y+3)$ on $g(x)$.'
      },
      { 
        id: 'p2', 
        problem: 'If $f(x) = x^2$, write the equation for $f(x)$ shifted right 4 units and down 2 units',
        level: 'beginner',
        answer: '$g(x) = (x-4)^2 - 2$. Horizontal shift right 4: replace $x$ with $(x-4)$. Vertical shift down 2: subtract 2.'
      },
      { 
        id: 'p3', 
        problem: 'Describe all transformations of $h(x) = -2f(x-1) + 3$ compared to $f(x)$',
        level: 'intermediate',
        answer: 'Horizontal shift right 1 unit, vertical stretch by factor 2, reflection across x-axis, vertical shift up 3 units.'
      },
      { 
        id: 'p4', 
        problem: 'If $f(2) = 5$, find the corresponding point on $g(x) = 3f(x+1) - 4$',
        level: 'intermediate',
        answer: 'For $g(x) = 3f(x+1) - 4$: when $x+1 = 2$, so $x = 1$. Then $g(1) = 3f(2) - 4 = 3(5) - 4 = 11$. Point: $(1, 11)$.'
      },
      { 
        id: 'p5', 
        problem: 'Given $f(x) = |x|$, write the equation for the function that reflects across the y-axis, stretches vertically by 4, and shifts left 3 units',
        level: 'advanced',
        answer: '$g(x) = 4|-(x+3)| = 4|-x-3| = 4|x+3|$ (since $|-a| = |a|$). The reflection across y-axis doesn\'t change the absolute value function.'
      },
      { 
        id: 'p6', 
        problem: 'If $g(x) = f(2x-6) + 1$ and $g(5) = 8$, find $f(4)$',
        level: 'advanced',
        answer: 'From $g(5) = 8$: $f(2(5)-6) + 1 = 8$, so $f(4) + 1 = 8$, therefore $f(4) = 7$.'
      }
    ]
  }
};