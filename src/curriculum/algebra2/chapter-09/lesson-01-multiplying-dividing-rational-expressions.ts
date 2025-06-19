import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '9.1',
  title: '9.1 Multiplying and Dividing Rational Expressions',
  description: 'Learn to multiply and divide rational expressions using algebraic techniques.',
  learningObjectives: [
    'Multiply rational expressions by factoring and canceling',
    'Divide rational expressions using reciprocal multiplication',
    'Simplify complex rational expressions',
    'Identify restrictions on variables',
    'Apply rational expressions to real-world problems'
  ],
  keyConceptsFile: 'algebra2/chapter-09/concepts/multiplying-dividing-rational-expressions-concepts.md',
  thinkingTask: {
    title: 'The Recipe Scaling Challenge',
    content: 'A restaurant chef needs to scale recipes for different group sizes. The original recipe serves 8 people and uses these ratios:\n\n**Ingredient Ratios:**\n• Flour: $\\frac{x^2 + 2x}{x + 4}$ cups per person\n• Sugar: $\\frac{x - 1}{x + 2}$ cups per person\n• Butter: $\\frac{2x}{x^2 - 4}$ cups per person\n\n**Your Mission:** Work together to help the chef scale recipes:\n\n1. If the chef wants to make the recipe for 12 people instead of 8, what multiplication factor is needed?\n2. Calculate the new amount of each ingredient per person\n3. Simplify your expressions and identify any restrictions\n4. What happens if x = 2? Why might this be problematic?\n5. For what values of x do these ratios make sense in a cooking context?\n\n**Extension Questions:**\n• How do professional chefs actually scale recipes?\n• What real-world factors affect recipe scaling beyond simple multiplication?\n• How might ingredient interactions change with different quantities?\n• What if some ingredients don\'t scale linearly?\n\n**Mathematical Connections:**\n• How do restrictions on variables relate to practical cooking constraints?\n• When might rational expressions be undefined, and what does this mean?\n\n*Think about: How do mathematical restrictions translate to real-world limitations? What makes certain algebraic operations valid or invalid?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Multiply: $\\frac{x^2}{3} \\cdot \\frac{6}{x}$',
        level: 'beginner',
        answer: '$\\frac{x^2 \\cdot 6}{3 \\cdot x} = \\frac{6x^2}{3x} = 2x$ (for $x \\neq 0$)'
      },
      { 
        id: 'p2', 
        problem: 'Divide: $\\frac{x + 2}{5} \\div \\frac{x + 2}{10}$',
        level: 'beginner',
        answer: '$\\frac{x + 2}{5} \\cdot \\frac{10}{x + 2} = \\frac{10}{5} = 2$ (for $x \\neq -2$)'
      },
      { 
        id: 'p3', 
        problem: 'Multiply and simplify: $\\frac{x^2 - 4}{x + 1} \\cdot \\frac{x + 1}{x - 2}$',
        level: 'intermediate',
        answer: '$\\frac{(x-2)(x+2)}{x+1} \\cdot \\frac{x+1}{x-2} = \\frac{(x-2)(x+2)(x+1)}{(x+1)(x-2)} = x + 2$ (for $x \\neq -1, 2$)'
      },
      { 
        id: 'p4', 
        problem: 'Divide: $\\frac{x^2 - 9}{x^2 + 3x} \\div \\frac{x - 3}{x}$',
        level: 'intermediate',
        answer: '$\\frac{x^2-9}{x^2+3x} \\cdot \\frac{x}{x-3} = \\frac{(x-3)(x+3)}{x(x+3)} \\cdot \\frac{x}{x-3} = 1$ (for $x \\neq 0, -3, 3$)'
      },
      { 
        id: 'p5', 
        problem: 'Simplify: $\\frac{x^2 + 5x + 6}{x^2 - 4} \\cdot \\frac{x^2 - 2x}{x^2 + 2x - 3}$',
        level: 'advanced',
        answer: '$\\frac{(x+2)(x+3)}{(x-2)(x+2)} \\cdot \\frac{x(x-2)}{(x+3)(x-1)} = \\frac{x}{x-1}$ (for $x \\neq -3, -2, 1, 2$)'
      },
      { 
        id: 'p6', 
        problem: 'A rectangle has area $\\frac{x^2-1}{x+2}$ and width $\\frac{x-1}{x+3}$. Find the length.',
        level: 'advanced',
        answer: 'Length = Area ÷ Width = $\\frac{x^2-1}{x+2} \\div \\frac{x-1}{x+3} = \\frac{(x-1)(x+1)}{x+2} \\cdot \\frac{x+3}{x-1} = \\frac{(x+1)(x+3)}{x+2}$ (for $x \\neq -3, -2, 1$)'
      }
    ]
  }
};