import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '2.2',
  title: '2.2 Solving Absolute Value Equations and Inequalities',
  description: 'Master techniques for solving equations and inequalities involving absolute value.',
  learningObjectives: [
    'Solve absolute value equations using case analysis',
    'Solve absolute value inequalities and graph solutions',
    'Understand the geometric meaning of absolute value',
    'Apply absolute value concepts to real-world problems',
    'Identify extraneous solutions'
  ],
  keyConceptsFile: 'algebra2/chapter-02/concepts/solving-absolute-value-equations-inequalities-concepts.md',
  thinkingTask: {
    title: 'The Quality Control Challenge',
    content: 'A manufacturing company produces bolts that must be exactly 5.0 cm long. Due to machine variations, the actual length varies, but they can only accept bolts within 0.2 cm of the target length.\n\n**Your Investigation:** Work together to analyze this quality control situation:\n\n1. Write an absolute value inequality that represents acceptable bolt lengths\n2. What range of lengths will pass quality control?\n3. If a bolt measures 4.9 cm, will it pass? What about 5.3 cm?\n4. The company wants to tighten quality control to ±0.1 cm. How does this change the acceptable range?\n5. How would you model a situation where bolts must be at least 0.3 cm away from 5.0 cm (rejected range)?\n\n**Extension Questions:**\n• How do real manufacturers use tolerance specifications?\n• What happens if the target length changes to 4.8 cm?\n• How do absolute value inequalities model "distance from a target"?\n• What other real-world situations involve acceptable ranges?\n\n*Think about: How does absolute value represent distance on a number line? What makes certain solutions "acceptable" or "unacceptable" in real contexts?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Solve: $|x - 3| = 7$',
        level: 'beginner',
        answer: 'Case 1: $x - 3 = 7$, so $x = 10$. Case 2: $x - 3 = -7$, so $x = -4$. Solutions: $x = 10, -4$'
      },
      { 
        id: 'p2', 
        problem: 'Solve and graph: $|x| \\leq 5$',
        level: 'beginner',
        answer: '$-5 \\leq x \\leq 5$. Graph: closed circles at -5 and 5, line segment between them'
      },
      { 
        id: 'p3', 
        problem: 'Solve: $|2x + 1| = 9$',
        level: 'intermediate',
        answer: 'Case 1: $2x + 1 = 9$, so $x = 4$. Case 2: $2x + 1 = -9$, so $x = -5$. Solutions: $x = 4, -5$'
      },
      { 
        id: 'p4', 
        problem: 'Solve: $|3x - 2| > 7$',
        level: 'intermediate',
        answer: '$3x - 2 > 7$ or $3x - 2 < -7$, giving $x > 3$ or $x < -\\frac{5}{3}$. Solution: $(-\\infty, -\\frac{5}{3}) \\cup (3, \\infty)$'
      },
      { 
        id: 'p5', 
        problem: 'Solve: $|x - 1| + 3 = 2$',
        level: 'advanced',
        answer: '$|x - 1| = -1$. Since absolute value cannot be negative, there is no solution.'
      },
      { 
        id: 'p6', 
        problem: 'A thermostat is set to 72°F with a tolerance of ±3°F. Write and solve an absolute value inequality for acceptable temperatures.',
        level: 'advanced',
        answer: '$|T - 72| \\leq 3$, which gives $69 \\leq T \\leq 75$. Acceptable temperature range: 69°F to 75°F'
      }
    ]
  }
};