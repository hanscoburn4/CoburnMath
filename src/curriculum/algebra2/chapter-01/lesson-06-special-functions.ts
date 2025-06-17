import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '1.6',
  title: '1.6 Special Functions',
  description: 'Explore piecewise, absolute value, and other special function types.',
  learningObjectives: [
    'Graph and analyze piecewise functions',
    'Work with absolute value functions and their transformations',
    'Understand step functions and their applications',
    'Analyze greatest integer and other special functions',
    'Apply special functions to real-world modeling'
  ],
  keyConceptsFile: 'algebra2/chapter-01/concepts/special-functions-concepts.md',
  thinkingTask: {
    title: 'The Parking Garage Rate Structure',
    content: 'A downtown parking garage uses a complex rate structure to manage demand:\n\n• First hour: $3\n• Hours 2-4: $2 per hour\n• Hours 5-8: $1.50 per hour\n• Over 8 hours: $1 per hour\n• Maximum daily rate: $15\n\n**Your Mission:** Work together to model this parking system:\n\n1. Create a piecewise function C(t) that gives the cost for parking t hours\n2. Graph your function for 0 ≤ t ≤ 12 hours\n3. Where are the "jumps" in cost, and why do they occur?\n4. At what point does the maximum daily rate take effect?\n5. How would you modify this structure to encourage shorter visits?\n\n**Extension Questions:**\n• How does this compare to a simple linear rate?\n• What if they added a "grace period" for the first 15 minutes?\n• How do businesses use piecewise functions in pricing?\n• What makes a rate structure "fair" to customers?\n\n*Think about: How do piecewise functions model real-world situations that have different rules in different ranges? What are the advantages and disadvantages of complex pricing structures?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Graph $f(x) = |x - 2| + 1$',
        level: 'beginner',
        answer: 'V-shaped graph with vertex at $(2, 1)$, opening upward. Shift $|x|$ right 2 units and up 1 unit.'
      },
      { 
        id: 'p2', 
        problem: 'Evaluate $g(x) = \\begin{cases} x + 1 & \\text{if } x < 0 \\\\ x^2 & \\text{if } x \\geq 0 \\end{cases}$ at $x = -2, 0, 3$',
        level: 'beginner',
        answer: '$g(-2) = -2 + 1 = -1$, $g(0) = 0^2 = 0$, $g(3) = 3^2 = 9$'
      },
      { 
        id: 'p3', 
        problem: 'Find the domain and range of $h(x) = \\sqrt{|x| - 3}$',
        level: 'intermediate',
        answer: 'Domain: $|x| - 3 \\geq 0$, so $|x| \\geq 3$, giving $x \\leq -3$ or $x \\geq 3$: $(-\\infty, -3] \\cup [3, \\infty)$. Range: $[0, \\infty)$'
      },
      { 
        id: 'p4', 
        problem: 'Graph the greatest integer function $f(x) = \\lfloor x \\rfloor$ for $-3 \\leq x \\leq 3$',
        level: 'intermediate',
        answer: 'Step function with horizontal segments: $y = -3$ for $-3 \\leq x < -2$, $y = -2$ for $-2 \\leq x < -1$, etc. Open circles at right endpoints, closed circles at left endpoints.'
      },
      { 
        id: 'p5', 
        problem: 'Solve $|2x - 3| = |x + 1|$',
        level: 'advanced',
        answer: 'Case 1: $2x - 3 = x + 1 \\Rightarrow x = 4$. Case 2: $2x - 3 = -(x + 1) \\Rightarrow 3x = 2 \\Rightarrow x = \\frac{2}{3}$. Solutions: $x = 4, \\frac{2}{3}$'
      },
      { 
        id: 'p6', 
        problem: 'A cell phone plan charges $40 for up to 2GB, then $10 for each additional GB or part thereof. Write a piecewise function for the cost.',
        level: 'advanced',
        answer: '$C(x) = \\begin{cases} 40 & \\text{if } 0 \\leq x \\leq 2 \\\\ 40 + 10\\lceil x - 2 \\rceil & \\text{if } x > 2 \\end{cases}$ where $\\lceil \\cdot \\rceil$ is the ceiling function'
      }
    ]
  }
};