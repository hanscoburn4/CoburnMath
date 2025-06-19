import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '3.1',
  title: '3.1 Graphing Quadratic Functions',
  description: 'Learn to graph quadratic functions and identify their key features.',
  learningObjectives: [
    'Graph quadratic functions using vertex form',
    'Identify vertex, axis of symmetry, and direction of opening',
    'Find x and y intercepts of quadratic functions',
    'Understand the effects of parameters on quadratic graphs',
    'Apply quadratic functions to real-world situations'
  ],
  keyConceptsFile: 'algebra2/chapter-03/concepts/graphing-quadratic-functions-concepts.md',
  thinkingTask: {
    title: 'The Basketball Shot Analysis',
    content: 'A basketball player is practicing free throws. The height of the ball (in feet) can be modeled by the function h(t) = -16t² + 20t + 6, where t is time in seconds after the ball is released.\n\n**Your Investigation:** Work together to analyze this basketball shot:\n\n1. What is the initial height of the ball when it\'s released?\n2. What is the maximum height the ball reaches, and when does this occur?\n3. How long is the ball in the air before it hits the ground?\n4. At what times is the ball at a height of 10 feet?\n5. Sketch a graph of the ball\'s path\n\n**Extension Questions:**\n• How would the function change if the player was taller?\n• What if the player threw the ball with more initial velocity?\n• How does this compare to a shot from the 3-point line?\n• What factors affect the shape of a projectile\'s path?\n\n**Real-World Connections:**\n• How do sports analysts use mathematics to improve performance?\n• What other sports involve projectile motion?\n• How do video games simulate realistic ball physics?\n\n*Think about: How do quadratic functions model real-world motion? What do the different parts of the equation represent physically?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Find the vertex of $f(x) = (x - 3)^2 + 2$',
        level: 'beginner',
        answer: 'Vertex: $(3, 2)$. The function is in vertex form $f(x) = a(x - h)^2 + k$ where $(h, k) = (3, 2)$'
      },
      { 
        id: 'p2', 
        problem: 'Determine if $g(x) = -2x^2 + 4x - 1$ opens upward or downward',
        level: 'beginner',
        answer: 'Opens downward because the coefficient of $x^2$ is negative ($a = -2 < 0$)'
      },
      { 
        id: 'p3', 
        problem: 'Find the vertex of $h(x) = x^2 - 6x + 5$',
        level: 'intermediate',
        answer: 'Using $x = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = 3$. Then $h(3) = 9 - 18 + 5 = -4$. Vertex: $(3, -4)$'
      },
      { 
        id: 'p4', 
        problem: 'Find the x-intercepts of $f(x) = x^2 - 5x + 6$',
        level: 'intermediate',
        answer: 'Set $f(x) = 0$: $x^2 - 5x + 6 = 0$. Factor: $(x - 2)(x - 3) = 0$. x-intercepts: $x = 2, 3$'
      },
      { 
        id: 'p5', 
        problem: 'Write $f(x) = 2x^2 + 12x + 10$ in vertex form',
        level: 'advanced',
        answer: 'Complete the square: $f(x) = 2(x^2 + 6x) + 10 = 2(x^2 + 6x + 9 - 9) + 10 = 2(x + 3)^2 - 8$'
      },
      { 
        id: 'p6', 
        problem: 'A ball is thrown upward with initial velocity 48 ft/s from height 6 ft. The height function is $h(t) = -16t^2 + 48t + 6$. Find the maximum height.',
        level: 'advanced',
        answer: 'Vertex at $t = -\\frac{48}{2(-16)} = 1.5$ seconds. Maximum height: $h(1.5) = -16(1.5)^2 + 48(1.5) + 6 = 42$ feet'
      }
    ]
  }
};