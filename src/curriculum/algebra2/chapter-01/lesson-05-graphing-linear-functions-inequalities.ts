import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '1.5',
  title: '1.5 Graphing Linear Functions and Inequalities',
  description: 'Master graphing linear functions and linear inequalities in two variables.',
  learningObjectives: [
    'Graph linear functions using various methods',
    'Graph linear inequalities in two variables',
    'Solve systems of linear inequalities graphically',
    'Interpret solutions in real-world contexts',
    'Use linear programming concepts'
  ],
  keyConceptsFile: 'algebra2/chapter-01/concepts/graphing-linear-functions-inequalities-concepts.md',
  thinkingTask: {
    title: 'The Food Truck Profit Zone',
    content: 'A food truck owner wants to maximize profits by choosing the optimal combination of two popular items: gourmet burgers and specialty tacos. They have the following constraints:\n\n• They can make at most 100 items total per day\n• Burgers take 8 minutes each, tacos take 5 minutes each, and they have 600 minutes of cooking time\n• They need at least 20 burgers and at least 15 tacos to satisfy regular customers\n• Burgers profit $3 each, tacos profit $2 each\n\n**Your Mission:** Work together to find the profit zone:\n\n1. Let x = number of burgers, y = number of tacos. Write inequalities for all constraints\n2. Graph the feasible region (where all constraints are satisfied)\n3. Find the corner points of the feasible region\n4. Which combination gives maximum profit?\n5. What happens if cooking time increases to 700 minutes?\n\n**Extension Questions:**\n• How do changes in profit margins affect the optimal solution?\n• What if they add a third menu item?\n• How do real businesses use this type of analysis?\n\n*Think about: How do mathematical constraints translate to real-world limitations? What makes a solution "optimal" in business contexts?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Graph the linear function $f(x) = -2x + 5$',
        level: 'beginner',
        answer: 'y-intercept: $(0, 5)$, slope: $-2$. Another point: $(1, 3)$. Line decreases from left to right.'
      },
      { 
        id: 'p2', 
        problem: 'Graph the inequality $y \\leq 3x - 1$',
        level: 'beginner',
        answer: 'Graph line $y = 3x - 1$ (solid line), shade below the line since $y \\leq$'
      },
      { 
        id: 'p3', 
        problem: 'Find the equation of the line passing through $(2, -1)$ and $(4, 5)$',
        level: 'intermediate',
        answer: 'Slope: $m = \\frac{5-(-1)}{4-2} = \\frac{6}{2} = 3$. Using point-slope: $y - (-1) = 3(x - 2)$, so $y = 3x - 7$'
      },
      { 
        id: 'p4', 
        problem: 'Graph the system of inequalities: $\\begin{cases} x + y \\leq 6 \\\\ 2x - y \\geq 0 \\\\ x \\geq 0 \\\\ y \\geq 0 \\end{cases}$',
        level: 'intermediate',
        answer: 'Feasible region is bounded by vertices: $(0,0)$, $(0,6)$, $(2,4)$, $(6,0)$. Shade the intersection of all four inequalities.'
      },
      { 
        id: 'p5', 
        problem: 'A company makes chairs and tables. Chairs require 2 hours labor, tables require 4 hours. They have 40 hours available and want at least 5 chairs. If profit is $30 per chair and $50 per table, find the maximum profit.',
        level: 'advanced',
        answer: 'Let $x$ = chairs, $y$ = tables. Constraints: $2x + 4y \\leq 40$, $x \\geq 5$, $x,y \\geq 0$. Vertices: $(5,0)$, $(5,7.5)$, $(20,0)$. Max profit at $(5,7.5)$: $30(5) + 50(7.5) = \\$525$'
      },
      { 
        id: 'p6', 
        problem: 'Find the area of the region defined by $|x| + |y| \\leq 4$',
        level: 'advanced',
        answer: 'This creates a diamond (square rotated 45°) with vertices at $(4,0)$, $(0,4)$, $(-4,0)$, $(0,-4)$. Area = $\\frac{1}{2} \\cdot 8 \\cdot 8 = 32$ square units'
      }
    ]
  }
};