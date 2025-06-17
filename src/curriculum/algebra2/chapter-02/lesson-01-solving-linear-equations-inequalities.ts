import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '2.1',
  title: '2.1 Solving Linear Equations and Inequalities',
  description: 'Master techniques for solving linear equations and inequalities in one variable.',
  learningObjectives: [
    'Solve multi-step linear equations',
    'Solve linear inequalities and graph solutions',
    'Handle equations with variables on both sides',
    'Solve equations with fractions and decimals',
    'Apply linear equations to real-world problems'
  ],
  keyConceptsFile: 'algebra2/chapter-02/concepts/solving-linear-equations-inequalities-concepts.md',
  thinkingTask: {
    title: 'The Fair Wage Investigation',
    content: 'Two companies are offering you summer jobs with different pay structures:\n\n**Company A:** $12 per hour plus a $200 signing bonus\n**Company B:** $15 per hour with no signing bonus\n\n**Your Investigation:** Work together to analyze these offers:\n\n1. Write expressions for total earnings at each company after h hours\n2. For what number of hours would both companies pay the same amount?\n3. Which company pays better for a 20-hour per week summer job (10 weeks)?\n4. Which company pays better for a 40-hour per week job (10 weeks)?\n5. What if Company A offered $13 per hour instead?\n\n**Extension Questions:**\n• How do benefits, taxes, and other factors affect the comparison?\n• What if the jobs had different skill requirements or advancement opportunities?\n• How do real workers evaluate job offers?\n• What inequalities would help you decide which job to take?\n\n*Think about: How do mathematical models help us make real-world decisions? What factors beyond mathematics might influence your choice?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Solve: $3x + 7 = 22$',
        level: 'beginner',
        answer: '$3x = 15$, so $x = 5$'
      },
      { 
        id: 'p2', 
        problem: 'Solve and graph: $2x - 5 \\leq 9$',
        level: 'beginner',
        answer: '$2x \\leq 14$, so $x \\leq 7$. Graph: closed circle at 7, arrow pointing left'
      },
      { 
        id: 'p3', 
        problem: 'Solve: $4(x - 3) = 2(x + 1) + 6$',
        level: 'intermediate',
        answer: '$4x - 12 = 2x + 2 + 6$, so $4x - 12 = 2x + 8$, giving $2x = 20$, therefore $x = 10$'
      },
      { 
        id: 'p4', 
        problem: 'Solve: $\\frac{x}{3} - \\frac{x-2}{4} = 1$',
        level: 'intermediate',
        answer: 'Multiply by 12: $4x - 3(x-2) = 12$, so $4x - 3x + 6 = 12$, giving $x = 6$'
      },
      { 
        id: 'p5', 
        problem: 'Solve: $-3(2x + 1) > 4x - 7$',
        level: 'advanced',
        answer: '$-6x - 3 > 4x - 7$, so $-10x > -4$, giving $x < \\frac{2}{5}$ (inequality flips when dividing by negative)'
      },
      { 
        id: 'p6', 
        problem: 'A rental car costs $30 per day plus $0.25 per mile. If your budget is $80, what is the maximum miles you can drive in one day?',
        level: 'advanced',
        answer: '$30 + 0.25m \\leq 80$, so $0.25m \\leq 50$, giving $m \\leq 200$ miles'
      }
    ]
  }
};