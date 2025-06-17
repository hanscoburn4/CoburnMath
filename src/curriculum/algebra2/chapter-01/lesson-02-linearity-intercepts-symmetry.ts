import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '1.2',
  title: '1.2 Linearity, Intercepts, and Symmetry',
  description: 'Analyze functions for linearity, find intercepts, and explore symmetry properties.',
  learningObjectives: [
    'Identify linear and non-linear functions',
    'Find and interpret x-intercepts and y-intercepts',
    'Recognize different types of symmetry in functions',
    'Use symmetry to analyze and graph functions',
    'Apply intercept and symmetry concepts to solve problems'
  ],
  keyConceptsFile: 'algebra2/chapter-01/concepts/linearity-intercepts-symmetry-concepts.md',
  thinkingTask: {
    title: 'The Art Gallery Mirror Investigation',
    content: 'An art gallery is designing a new exhibit featuring mathematical art. They have several function-based artworks and want to understand their symmetry properties for optimal placement.\n\n**The Artworks:**\n• Piece A: f(x) = x² - 4\n• Piece B: g(x) = x³ - 2x\n• Piece C: h(x) = |x| + 3\n• Piece D: j(x) = 2x - 1\n\n**Your Mission:** Work together to analyze these mathematical artworks:\n\n1. Which pieces would look the same if reflected in a mirror placed vertically down the center?\n2. Which pieces would look the same if rotated 180° around their center point?\n3. Where do these artworks intersect the walls (axes) of the gallery?\n4. How can you use symmetry to help visitors understand and appreciate these pieces?\n\n**Extension Questions:**\n• If you could only display pieces with certain symmetry properties, which would you choose?\n• How might symmetry affect the lighting and viewing angles?\n• Can you create a new artwork that has both types of symmetry?\n\n*Think about: How does mathematical symmetry relate to visual beauty? What makes certain patterns pleasing to the eye?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Find the x and y intercepts of $f(x) = 2x - 6$',
        level: 'beginner',
        answer: 'y-intercept: $f(0) = -6$, so $(0, -6)$. x-intercept: $2x - 6 = 0$, so $x = 3$, giving $(3, 0)$'
      },
      { 
        id: 'p2', 
        problem: 'Determine if $g(x) = x^2 + 4$ is even, odd, or neither',
        level: 'beginner',
        answer: 'Even function. $g(-x) = (-x)^2 + 4 = x^2 + 4 = g(x)$'
      },
      { 
        id: 'p3', 
        problem: 'Find all intercepts of $h(x) = x^2 - 9$',
        level: 'intermediate',
        answer: 'y-intercept: $(0, -9)$. x-intercepts: $x^2 - 9 = 0$, so $x = \\pm 3$, giving $(-3, 0)$ and $(3, 0)$'
      },
      { 
        id: 'p4', 
        problem: 'Test $f(x) = \\frac{x^3}{x^2 + 1}$ for symmetry',
        level: 'intermediate',
        answer: 'Odd function. $f(-x) = \\frac{(-x)^3}{(-x)^2 + 1} = \\frac{-x^3}{x^2 + 1} = -f(x)$'
      },
      { 
        id: 'p5', 
        problem: 'A function has the property that $f(2 + x) = f(2 - x)$ for all x. What type of symmetry does this represent?',
        level: 'advanced',
        answer: 'Line symmetry about the vertical line $x = 2$. The function is symmetric about $x = 2$'
      },
      { 
        id: 'p6', 
        problem: 'If $g(x) = ax^3 + bx^2 + cx + d$ is an odd function, what can you conclude about the coefficients?',
        level: 'advanced',
        answer: 'For odd function: $g(-x) = -g(x)$. This gives $-ax^3 + bx^2 - cx + d = -ax^3 - bx^2 - cx - d$. Therefore $b = 0$ and $d = 0$, so $g(x) = ax^3 + cx$'
      }
    ]
  }
};