import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '2.3',
  title: '2.3 Equations of Linear Functions',
  description: 'Write equations of linear functions in various forms using given information.',
  learningObjectives: [
    'Write equations in slope-intercept form',
    'Write equations in point-slope form',
    'Write equations in standard form',
    'Find equations given two points, point and slope, or other conditions',
    'Convert between different forms of linear equations'
  ],
  keyConceptsFile: 'algebra2/chapter-02/concepts/equations-linear-functions-concepts.md',
  thinkingTask: {
    title: 'The Delivery Service Route Planning',
    content: 'A new delivery service is planning routes in your city. They need to create mathematical models for different delivery scenarios:\n\n**Scenario A:** A driver starts at the warehouse (2, 5) and drives to a customer at (8, 17). The coordinates represent miles from a reference point.\n\n**Scenario B:** Another route has a constant rate of 3 miles north for every 2 miles east, passing through the point (4, 10).\n\n**Scenario C:** A third route is perpendicular to the line 2x + 3y = 12 and passes through (6, -1).\n\n**Your Mission:** Work together to model these delivery routes:\n\n1. Find the equation of the line for each scenario\n2. Which form of equation is most useful for each situation?\n3. Where do routes A and B intersect (if they do)?\n4. How would you describe the slope of each route in real-world terms?\n5. Design a fourth route that is parallel to route A but passes through the origin\n\n**Extension Questions:**\n• How do delivery companies actually plan optimal routes?\n• What factors besides distance affect route planning?\n• How do GPS systems use mathematical models?\n\n*Think about: How do different forms of linear equations serve different purposes? What makes one form more useful than another in specific contexts?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Write the equation of the line with slope 3 and y-intercept -2',
        level: 'beginner',
        answer: '$y = 3x - 2$ (slope-intercept form)'
      },
      { 
        id: 'p2', 
        problem: 'Find the equation of the line passing through (1, 4) and (3, 10)',
        level: 'beginner',
        answer: 'Slope: $m = \\frac{10-4}{3-1} = 3$. Using point-slope: $y - 4 = 3(x - 1)$, so $y = 3x + 1$'
      },
      { 
        id: 'p3', 
        problem: 'Write the equation of the line passing through (-2, 5) with slope $-\\frac{1}{2}$',
        level: 'intermediate',
        answer: 'Point-slope form: $y - 5 = -\\frac{1}{2}(x - (-2))$, so $y - 5 = -\\frac{1}{2}(x + 2)$ or $y = -\\frac{1}{2}x + 4$'
      },
      { 
        id: 'p4', 
        problem: 'Find the equation of the line parallel to $y = 2x - 3$ passing through (4, 1)',
        level: 'intermediate',
        answer: 'Parallel lines have same slope: $m = 2$. Using point-slope: $y - 1 = 2(x - 4)$, so $y = 2x - 7$'
      },
      { 
        id: 'p5', 
        problem: 'Write the equation of the line perpendicular to $3x + 2y = 6$ passing through (-1, 4)',
        level: 'advanced',
        answer: 'Original slope: $m_1 = -\\frac{3}{2}$. Perpendicular slope: $m_2 = \\frac{2}{3}$. Equation: $y - 4 = \\frac{2}{3}(x + 1)$, so $y = \\frac{2}{3}x + \\frac{14}{3}$'
      },
      { 
        id: 'p6', 
        problem: 'A line passes through (2, -1) and has x-intercept 5. Find its equation in standard form.',
        level: 'advanced',
        answer: 'x-intercept 5 means point (5, 0). Slope: $m = \\frac{0-(-1)}{5-2} = \\frac{1}{3}$. Equation: $y + 1 = \\frac{1}{3}(x - 2)$. Standard form: $x - 3y = 5$'
      }
    ]
  }
};