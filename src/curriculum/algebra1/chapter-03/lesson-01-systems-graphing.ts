import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '3.1',
  title: '3.1 Solving Systems by Graphing',
  description: 'Learn to solve systems of linear equations using graphical methods.',
  learningObjectives: [
    'Understand what a system of equations represents',
    'Solve systems by graphing both equations',
    'Interpret the intersection point as the solution',
    'Identify systems with no solution or infinitely many solutions',
    'Apply systems to real-world problems'
  ],
  keyConceptsFile: 'algebra1/chapter-03/concepts/systems-graphing-concepts.md',
  thinkingTask: {
    title: 'The Fundraising Challenge',
    content: 'Two student clubs are having fundraising competitions. They\'re both selling items, but they started with different amounts of money and earn different amounts per item sold.\n\n**Drama Club:**\n• Started with $50 in their account\n• Earns $3 for each item sold\n• Total money = $50 + $3 × (items sold)\n\n**Science Club:**\n• Started with $20 in their account  \n• Earns $5 for each item sold\n• Total money = $20 + $5 × (items sold)\n\n**Your Challenge:** Work together to investigate these questions:\n\n1. Create a visual representation showing how much money each club has after selling different numbers of items\n2. Will the clubs ever have the same amount of money? If so, when?\n3. After selling how many items will they have equal amounts?\n4. What will that equal amount be?\n5. Which club will have more money after selling 100 items?\n\n**Extension Questions:**\n• What if the Drama Club started with $80 instead?\n• What if both clubs earned the same amount per item?\n\n*Think about: What does the intersection point tell us? How can graphs help us solve problems involving two changing quantities?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Solve by graphing: $y = x + 1$ and $y = -x + 3$',
        level: 'beginner',
        answer: 'Solution: $(1, 2)$ (intersection point)'
      },
      { 
        id: 'p2', 
        problem: 'Find the solution: $y = 2x$ and $y = x + 2$',
        level: 'beginner',
        answer: 'Solution: $(2, 4)$'
      },
      { 
        id: 'p3', 
        problem: 'Solve: $x + y = 5$ and $x - y = 1$',
        level: 'intermediate',
        answer: 'Rewrite as $y = -x + 5$ and $y = x - 1$. Solution: $(3, 2)$'
      },
      { 
        id: 'p4', 
        problem: 'Determine if the system has one solution, no solution, or infinitely many: $y = 2x + 1$ and $y = 2x - 3$',
        level: 'intermediate',
        answer: 'No solution (parallel lines with same slope but different y-intercepts)'
      },
      { 
        id: 'p5', 
        problem: 'Solve: $2x + y = 7$ and $x - y = 2$',
        level: 'advanced',
        answer: 'Rewrite as $y = -2x + 7$ and $y = x - 2$. Solution: $(3, 1)$'
      },
      { 
        id: 'p6', 
        problem: 'A system has equations $ax + y = 4$ and $2x + y = 6$. For what value of $a$ will the system have no solution?',
        level: 'advanced',
        answer: '$a = 2$ (same slope, different y-intercepts create parallel lines)'
      }
    ]
  }
};