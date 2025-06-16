import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '1.1',
  title: '1.1 Variables and Algebraic Expressions',
  description: 'Learn to work with variables and write algebraic expressions.',
  learningObjectives: [
    'Identify variables and constants in algebraic expressions',
    'Translate verbal phrases into algebraic expressions',
    'Evaluate algebraic expressions for given values',
    'Simplify algebraic expressions using properties of operations',
    'Apply algebraic thinking to real-world situations'
  ],
  keyConceptsFile: 'algebra1/chapter-01/concepts/variables-expressions-concepts.md',
  thinkingTask: {
    title: 'The School Supply Mystery',
    content: 'Your school is ordering supplies for the new year. The principal gives you these clues about the costs:\n\n• Notebooks cost some amount, let\'s call it $n$ dollars each\n• Pens cost $2 more than half the price of a notebook\n• Folders cost $1 less than a notebook\n• The total cost for 3 notebooks, 5 pens, and 2 folders is $47\n\n**Your Mission:** Work in groups to figure out the cost of each item. But here\'s the twist - you can\'t use formal algebra yet! Use reasoning, patterns, guess-and-check, or any creative method your group develops.\n\n**Guiding Questions:**\n• How can you represent the unknown prices?\n• What relationships do you notice between the items?\n• How might you organize your thinking to solve this systematically?\n• What happens if you try different values?\n\n**Extension:** Once you find the answer, can you create a similar puzzle for another group? What makes a good "mystery" problem?\n\n*Think about: How does using a letter to represent an unknown quantity help us organize our thinking? What are the advantages of this approach?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Write an algebraic expression for "5 more than a number $x$"',
        level: 'beginner',
        answer: '$x + 5$'
      },
      { 
        id: 'p2', 
        problem: 'Evaluate $3x + 7$ when $x = 4$',
        level: 'beginner',
        answer: '$3(4) + 7 = 12 + 7 = 19$'
      },
      { 
        id: 'p3', 
        problem: 'Write an expression for "the product of 6 and a number $y$, decreased by 8"',
        level: 'intermediate',
        answer: '$6y - 8$'
      },
      { 
        id: 'p4', 
        problem: 'Simplify: $4x + 3x - 2x + 5$',
        level: 'intermediate',
        answer: '$4x + 3x - 2x + 5 = 5x + 5$'
      },
      { 
        id: 'p5', 
        problem: 'A rectangle has length $(2x + 3)$ and width $(x - 1)$. Write an expression for its perimeter.',
        level: 'advanced',
        answer: 'Perimeter = $2[(2x + 3) + (x - 1)] = 2[3x + 2] = 6x + 4$'
      },
      { 
        id: 'p6', 
        problem: 'If $a = 2b + 1$ and $b = 3c - 4$, write an expression for $a$ in terms of $c$.',
        level: 'advanced',
        answer: '$a = 2(3c - 4) + 1 = 6c - 8 + 1 = 6c - 7$'
      }
    ]
  }
};

export const generateVariableProblems = (level: 'beginner' | 'intermediate' | 'advanced') => {
  const problems = [];
  
  if (level === 'beginner') {
    const operations = ['+', '-'];
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
    
    for (let i = 0; i < 3; i++) {
      const num = numbers[Math.floor(Math.random() * numbers.length)];
      const op = operations[Math.floor(Math.random() * operations.length)];
      const variable = ['x', 'y', 'n'][Math.floor(Math.random() * 3)];
      
      if (op === '+') {
        problems.push({
          id: `gen-b-${i}`,
          problem: `Write an algebraic expression for "${num} more than a number ${variable}"`,
          answer: `$${variable} + ${num}$`,
          level: 'beginner'
        });
      } else {
        problems.push({
          id: `gen-b-${i}`,
          problem: `Write an algebraic expression for "a number ${variable} decreased by ${num}"`,
          answer: `$${variable} - ${num}$`,
          level: 'beginner'
        });
      }
    }
  }
  
  return problems;
};