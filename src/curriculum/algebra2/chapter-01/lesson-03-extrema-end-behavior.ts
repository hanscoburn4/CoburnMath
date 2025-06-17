import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '1.3',
  title: '1.3 Extrema and End Behavior',
  description: 'Analyze function extrema and end behavior patterns.',
  learningObjectives: [
    'Identify local and global extrema of functions',
    'Analyze end behavior of polynomial and rational functions',
    'Use extrema to solve optimization problems',
    'Describe function behavior using proper mathematical language',
    'Connect extrema and end behavior to real-world applications'
  ],
  keyConceptsFile: 'algebra2/chapter-01/concepts/extrema-end-behavior-concepts.md',
  thinkingTask: {
    title: 'The Roller Coaster Design Challenge',
    content: 'Your team is designing a new roller coaster for a theme park. The height function h(t) = -2t⁴ + 16t³ - 30t² + 12t + 50 models the height (in feet) of the coaster at time t (in seconds) during a 6-second ride segment.\n\n**Your Mission:** Work together to analyze this roller coaster design:\n\n1. What happens to the coaster height at the very beginning and end of this segment?\n2. Where are the highest and lowest points during this 6-second period?\n3. How many "hills" and "valleys" does the coaster have?\n4. Is this design safe and exciting for riders?\n\n**Design Considerations:**\n• The coaster should start and end at reasonable heights\n• There should be thrilling ups and downs\n• Safety requires the coaster never goes below ground level\n• The ride should be exciting but not too extreme\n\n**Extension Questions:**\n• How would changing the coefficients affect the ride experience?\n• What if the ride segment was longer or shorter?\n• How do real roller coaster designers use mathematics?\n\n*Think about: How do mathematical extrema relate to the physical experience of riding a roller coaster? What makes a function "well-behaved" for real-world applications?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Describe the end behavior of $f(x) = 3x^4 - 2x^2 + 1$',
        level: 'beginner',
        answer: 'As $x \\to \\pm\\infty$, $f(x) \\to +\\infty$ (both ends go up because leading coefficient is positive and degree is even)'
      },
      { 
        id: 'p2', 
        problem: 'Find the global maximum and minimum of $g(x) = -(x-2)^2 + 5$ on the domain $[-1, 4]$',
        level: 'beginner',
        answer: 'Global maximum: $(2, 5)$ (vertex of downward parabola). Global minimum: $(-1, -4)$ and $(4, 1)$, so minimum is $(-1, -4)$'
      },
      { 
        id: 'p3', 
        problem: 'Analyze the end behavior of $h(x) = -2x^5 + 3x^3 - x + 4$',
        level: 'intermediate',
        answer: 'As $x \\to +\\infty$, $h(x) \\to -\\infty$. As $x \\to -\\infty$, $h(x) \\to +\\infty$ (odd degree with negative leading coefficient)'
      },
      { 
        id: 'p4', 
        problem: 'A projectile\'s height is $h(t) = -16t^2 + 64t + 80$. Find the maximum height and when it occurs.',
        level: 'intermediate',
        answer: 'Vertex form: $h(t) = -16(t-2)^2 + 144$. Maximum height is 144 feet at $t = 2$ seconds'
      },
      { 
        id: 'p5', 
        problem: 'Determine the end behavior of $f(x) = \\frac{3x^2 - 1}{x^2 + 2}$',
        level: 'advanced',
        answer: 'As $x \\to \\pm\\infty$, $f(x) \\to 3$ (horizontal asymptote at $y = 3$ since degrees are equal and leading coefficients ratio is $\\frac{3}{1} = 3$)'
      },
      { 
        id: 'p6', 
        problem: 'A company\'s profit function is $P(x) = -2x^3 + 30x^2 - 96x + 50$ where x is thousands of units. Analyze the long-term behavior and business implications.',
        level: 'advanced',
        answer: 'As $x \\to +\\infty$, $P(x) \\to -\\infty$ (cubic with negative leading coefficient). This means producing too many units will eventually lead to losses, which is realistic due to market saturation and increased costs.'
      }
    ]
  }
};