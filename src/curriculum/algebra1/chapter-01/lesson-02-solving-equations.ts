import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '1.2',
  title: '1.2 Solving One-Step Equations',
  description: 'Learn to solve equations using inverse operations.',
  learningObjectives: [
    'Understand the concept of equation as a balance',
    'Use inverse operations to solve one-step equations',
    'Check solutions by substitution',
    'Solve equations involving addition, subtraction, multiplication, and division',
    'Apply equation solving to real-world problems'
  ],
  keyConceptsFile: 'algebra1/chapter-01/concepts/solving-equations-concepts.md',
  thinkingTask: {
    title: 'The Balance Scale Investigation',
    content: 'Imagine you have a balance scale that\'s perfectly balanced. On one side, you have some identical mystery boxes (each weighing the same unknown amount) plus some known weights. On the other side, you have only known weights.\n\n**Scenario 1:** 3 mystery boxes + 5 kg = 17 kg\n**Scenario 2:** 2 mystery boxes + 8 kg = 20 kg  \n**Scenario 3:** 4 mystery boxes - 3 kg = 13 kg\n**Scenario 4:** Half a mystery box + 7 kg = 12 kg\n\n**Your Challenge:** Work together to figure out the weight of one mystery box in each scenario. You can use physical objects, drawings, or any method that makes sense to your group.\n\n**Key Questions:**\n• How can you "remove" items from both sides while keeping the scale balanced?\n• What operations help you isolate one mystery box?\n• How can you check if your answer is correct?\n• What patterns do you notice across different scenarios?\n\n**Extension:** Create your own balance scale puzzle for another group. What makes a puzzle challenging but fair?\n\n*Consider: How does the balance scale metaphor help us understand equation solving? What does it mean to "do the same thing to both sides"?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Solve: $x + 7 = 12$',
        level: 'beginner',
        answer: '$x = 5$ (subtract 7 from both sides)'
      },
      { 
        id: 'p2', 
        problem: 'Solve: $3x = 21$',
        level: 'beginner',
        answer: '$x = 7$ (divide both sides by 3)'
      },
      { 
        id: 'p3', 
        problem: 'Solve: $\\frac{x}{4} = 9$',
        level: 'intermediate',
        answer: '$x = 36$ (multiply both sides by 4)'
      },
      { 
        id: 'p4', 
        problem: 'Solve: $x - 15 = -8$',
        level: 'intermediate',
        answer: '$x = 7$ (add 15 to both sides)'
      },
      { 
        id: 'p5', 
        problem: 'Solve: $-5x = 35$',
        level: 'advanced',
        answer: '$x = -7$ (divide both sides by -5)'
      },
      { 
        id: 'p6', 
        problem: 'The perimeter of a square is 28 cm. If the perimeter formula is $P = 4s$, find the side length.',
        level: 'advanced',
        answer: '$28 = 4s$, so $s = 7$ cm'
      }
    ]
  }
};