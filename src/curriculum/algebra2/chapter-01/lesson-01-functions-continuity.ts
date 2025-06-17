import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '1.1',
  title: '1.1 Functions and Continuity',
  description: 'Explore the concept of continuity in functions and analyze discontinuous behavior.',
  learningObjectives: [
    'Understand the concept of function continuity',
    'Identify continuous and discontinuous functions',
    'Analyze function behavior at points of discontinuity',
    'Apply continuity concepts to real-world situations',
    'Use limit notation to describe continuity'
  ],
  keyConceptsFile: 'algebra2/chapter-01/concepts/functions-continuity-concepts.md',
  thinkingTask: {
    title: 'The Broken Bridge Investigation',
    content: 'Your engineering team is analyzing a bridge design where the height function has some unusual properties. The height h(x) at position x along the bridge follows different rules in different sections:\n\n• For x < 10: h(x) = 2x + 5\n• For x = 10: h(x) = 30\n• For x > 10: h(x) = x² - 15x + 75\n\n**Your Mission:** Work together to investigate this bridge design:\n\n1. What happens to the bridge height as you approach position x = 10 from the left? From the right?\n2. Is there a "jump" or "gap" in the bridge at x = 10?\n3. How would this affect someone walking across the bridge?\n4. Can you modify the design to make the bridge "smooth" at x = 10?\n\n**Extension Questions:**\n• What if the height at x = 10 was undefined?\n• How would you describe "smoothness" mathematically?\n• What other real-world situations involve sudden changes or gaps?\n\n*Think about: What makes a function "continuous"? How do discontinuities appear in real-world contexts?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Determine if $f(x) = x^2 + 3x - 1$ is continuous at $x = 2$',
        level: 'beginner',
        answer: 'Yes, polynomial functions are continuous everywhere. $f(2) = 4 + 6 - 1 = 9$'
      },
      { 
        id: 'p2', 
        problem: 'Identify the type of discontinuity in $g(x) = \\frac{x^2-4}{x-2}$ at $x = 2$',
        level: 'beginner',
        answer: 'Removable discontinuity. $g(x) = \\frac{(x-2)(x+2)}{x-2} = x+2$ for $x \\neq 2$'
      },
      { 
        id: 'p3', 
        problem: 'For what value of $k$ is $h(x) = \\begin{cases} x^2 + 1 & \\text{if } x < 3 \\\\ k & \\text{if } x = 3 \\\\ 2x + 4 & \\text{if } x > 3 \\end{cases}$ continuous at $x = 3$?',
        level: 'intermediate',
        answer: 'For continuity: $\\lim_{x \\to 3^-} h(x) = 3^2 + 1 = 10$ and $\\lim_{x \\to 3^+} h(x) = 2(3) + 4 = 10$. So $k = 10$'
      },
      { 
        id: 'p4', 
        problem: 'Analyze the continuity of $f(x) = \\frac{1}{x-1}$ and describe its behavior',
        level: 'intermediate',
        answer: 'Discontinuous at $x = 1$ (infinite discontinuity). As $x \\to 1^+$, $f(x) \\to +\\infty$; as $x \\to 1^-$, $f(x) \\to -\\infty$'
      },
      { 
        id: 'p5', 
        problem: 'Find all points of discontinuity for $g(x) = \\frac{x^2-9}{x^2-5x+6}$',
        level: 'advanced',
        answer: 'Factor: $g(x) = \\frac{(x-3)(x+3)}{(x-2)(x-3)} = \\frac{x+3}{x-2}$ for $x \\neq 3$. Removable discontinuity at $x = 3$, infinite discontinuity at $x = 2$'
      },
      { 
        id: 'p6', 
        problem: 'A temperature function $T(t) = \\begin{cases} 20 + 5t & \\text{if } 0 \\leq t < 4 \\\\ 45 & \\text{if } t = 4 \\\\ 50 - 2t & \\text{if } t > 4 \\end{cases}$ models temperature over time. Is this realistic? Explain.',
        level: 'advanced',
        answer: 'Not realistic. At $t = 4$: left limit is $20 + 5(4) = 40°$, right limit is $50 - 2(4) = 42°$, but $T(4) = 45°$. Temperature should change continuously in nature.'
      }
    ]
  }
};