import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '1.4',
  title: '1.4 Sketching Graphs and Comparing Functions',
  description: 'Learn to sketch function graphs and compare different functions.',
  learningObjectives: [
    'Sketch graphs of functions using key features',
    'Compare functions represented in different ways',
    'Analyze function behavior from multiple representations',
    'Use technology appropriately to verify hand-drawn graphs',
    'Communicate function comparisons clearly'
  ],
  keyConceptsFile: 'algebra2/chapter-01/concepts/sketching-comparing-functions-concepts.md',
  thinkingTask: {
    title: 'The Investment Strategy Comparison',
    content: 'Three friends are comparing different investment strategies for their college funds:\n\n**Strategy A (Linear Growth):** f(t) = 1000 + 200t\n**Strategy B (Quadratic Growth):** g(t) = 1000 + 50t + 10t²\n**Strategy C (Exponential Growth):** h(t) = 1000(1.08)^t\n\nWhere t represents years and the output is dollars.\n\n**Your Investigation:** Work together to compare these strategies:\n\n1. Sketch rough graphs of all three functions on the same coordinate system\n2. Which strategy is best for short-term goals (1-2 years)?\n3. Which strategy is best for long-term goals (10+ years)?\n4. At what points do the strategies give equal returns?\n5. What are the advantages and disadvantages of each approach?\n\n**Extension Questions:**\n• How do the rates of change compare?\n• What happens if the initial investment changes?\n• How do real-world factors affect these mathematical models?\n• Which strategy would you choose and why?\n\n*Think about: How do different function types behave over time? What makes one function "better" than another in a given context?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Sketch $f(x) = x^2 - 4x + 3$ by identifying key features',
        level: 'beginner',
        answer: 'Vertex: $(2, -1)$, y-intercept: $(0, 3)$, x-intercepts: $(1, 0)$ and $(3, 0)$, opens upward'
      },
      { 
        id: 'p2', 
        problem: 'Compare $g(x) = 2x + 1$ and $h(x) = x^2$ for $x \\in [0, 3]$',
        level: 'beginner',
        answer: 'Linear function $g(x)$ starts higher at $x=0$ (1 vs 0) and grows to 7 at $x=3$. Quadratic $h(x)$ grows to 9 at $x=3$. They intersect when $2x + 1 = x^2$, so at $x = 1$ and $x = -1$ (only $x = 1$ in given interval)'
      },
      { 
        id: 'p3', 
        problem: 'Sketch $f(x) = \\frac{1}{x-2} + 1$ and identify all key features',
        level: 'intermediate',
        answer: 'Vertical asymptote: $x = 2$, horizontal asymptote: $y = 1$, no intercepts, decreasing on $(-\\infty, 2)$ and $(2, \\infty)$'
      },
      { 
        id: 'p4', 
        problem: 'Compare the growth rates of $f(x) = x^3$ and $g(x) = 3^x$ for large positive values of x',
        level: 'intermediate',
        answer: 'For large x, exponential function $g(x) = 3^x$ grows much faster than cubic function $f(x) = x^3$. Exponential functions eventually dominate polynomial functions.'
      },
      { 
        id: 'p5', 
        problem: 'Given $f(x) = |x^2 - 4|$, sketch the graph and find all local extrema',
        level: 'advanced',
        answer: 'Graph is $x^2 - 4$ reflected above x-axis where negative. Local minima at $x = \\pm 2$ (value 0), local maximum at $x = 0$ (value 4)'
      },
      { 
        id: 'p6', 
        problem: 'Compare $f(x) = \\ln(x)$ and $g(x) = \\sqrt{x}$ on $(0, \\infty)$. Where do they intersect and which grows faster?',
        level: 'advanced',
        answer: 'They intersect at $x = 1$ (both equal 0). For $0 < x < 1$: $\\ln(x) < 0 < \\sqrt{x}$. For $x > 1$: $\\sqrt{x}$ grows faster initially, but $\\ln(x)$ eventually grows faster for very large x.'
      }
    ]
  }
};