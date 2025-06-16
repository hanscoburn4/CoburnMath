import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '2.1',
  title: '2.1 Graphing Linear Equations',
  description: 'Learn to graph linear equations and understand their characteristics.',
  learningObjectives: [
    'Graph linear equations using tables of values',
    'Identify x-intercepts and y-intercepts',
    'Understand the relationship between equations and their graphs',
    'Recognize linear vs. non-linear relationships',
    'Apply graphing to real-world situations'
  ],
  keyConceptsFile: 'algebra1/chapter-02/concepts/graphing-lines-concepts.md',
  thinkingTask: {
    title: 'The Phone Plan Detective',
    content: 'Three friends are comparing their cell phone plans. They each pay a monthly fee plus a cost per text message, but they won\'t tell you the exact details. Here\'s what you know:\n\n**Alex\'s Plan:**\n• Month 1: Sent 100 texts, paid $25\n• Month 2: Sent 200 texts, paid $30\n• Month 3: Sent 300 texts, paid $35\n\n**Blake\'s Plan:**\n• Month 1: Sent 50 texts, paid $22\n• Month 2: Sent 150 texts, paid $27\n• Month 3: Sent 250 texts, paid $32\n\n**Casey\'s Plan:**\n• Month 1: Sent 0 texts, paid $15\n• Month 2: Sent 100 texts, paid $25\n• Month 3: Sent 200 texts, paid $35\n\n**Your Investigation:** Work together to figure out each person\'s monthly fee and cost per text. Create visual representations of each plan.\n\n**Guiding Questions:**\n• How can you organize this data to see patterns?\n• What would a graph of each plan look like?\n• Which plan would be best for different texting habits?\n• How can you predict costs for any number of texts?\n\n*Think about: What makes these relationships "linear"? How do graphs help us compare different situations?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Find the y-intercept of the line $y = 2x + 5$',
        level: 'beginner',
        answer: 'y-intercept is $(0, 5)$'
      },
      { 
        id: 'p2', 
        problem: 'Complete the table for $y = x - 3$: $x = 0, 1, 2, 3$',
        level: 'beginner',
        answer: 'When $x = 0$: $y = -3$; $x = 1$: $y = -2$; $x = 2$: $y = -1$; $x = 3$: $y = 0$'
      },
      { 
        id: 'p3', 
        problem: 'Find both intercepts of $2x + 3y = 12$',
        level: 'intermediate',
        answer: 'x-intercept: $(6, 0)$; y-intercept: $(0, 4)$'
      },
      { 
        id: 'p4', 
        problem: 'Graph the equation $y = -\\frac{1}{2}x + 4$',
        level: 'intermediate',
        answer: 'y-intercept at $(0, 4)$, slope $-\\frac{1}{2}$ means down 1, right 2'
      },
      { 
        id: 'p5', 
        problem: 'Write the equation of a line passing through $(0, -2)$ and $(4, 6)$',
        level: 'advanced',
        answer: 'Slope $m = \\frac{6-(-2)}{4-0} = 2$, so $y = 2x - 2$'
      },
      { 
        id: 'p6', 
        problem: 'A line passes through $(-1, 5)$ and $(3, -3)$. Find its equation.',
        level: 'advanced',
        answer: 'Slope $m = \\frac{-3-5}{3-(-1)} = -2$, using point-slope: $y = -2x + 3$'
      }
    ]
  }
};