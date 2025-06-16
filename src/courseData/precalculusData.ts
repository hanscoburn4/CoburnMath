import { Course } from '../types';

export const precalculusData: Course = {
  id: 'precalculus',
  title: 'PreCalculus',
  description: 'Prepare for calculus with advanced functions, trigonometry, and analytical geometry.',
  icon: 'Waves',
  color: 'from-red-500 to-red-600',
  chapters: [
    {
      id: 'functions-graphs',
      title: 'Chapter 1: Functions and Graphs',
      description: 'Study advanced function concepts including transformations and compositions.',
      lessons: [
        {
          id: '1.1',
          title: '1.1 Functions and Function Notation',
          description: 'Understand function notation, domain, range, and function evaluation.',
          thinkingTask: {
            title: 'The Mystery Machine Investigation',
            content: 'Your group has discovered a mysterious machine in the school basement. When you input different numbers, it produces outputs according to some hidden rule. Here are some of the input-output pairs you\'ve observed:\n\n• Input 2 → Output 7\n• Input 5 → Output 16\n• Input -1 → Output 4\n• Input 0 → Output 3\n• Input 3 → Output 12\n\n**Your Mission:** Work together to figure out what this machine is doing. Can you discover the rule? Once you think you\'ve found it, test your theory by predicting what would happen with other inputs. How would you describe this machine\'s behavior to someone else? What questions arise as you investigate?\n\n*Consider: Are there inputs that might not work? What makes this relationship special? How might you represent this rule mathematically?*'
          },
          examples: {
            title: 'Guided Examples',
            problems: [
              {
                id: 'ex1',
                problem: 'If $f(x) = 2x^2 - 3x + 1$, find $f(3)$',
                solution: '$f(3) = 2(3)^2 - 3(3) + 1 = 2(9) - 9 + 1 = 18 - 9 + 1 = 10$'
              },
              {
                id: 'ex2',
                problem: 'Find the domain of $g(x) = \\sqrt{x - 2}$',
                solution: 'For the square root to be defined, we need $x - 2 \\geq 0$, which means $x \\geq 2$. Therefore, the domain is $[2, \\infty)$.'
              },
              {
                id: 'ex3',
                problem: 'If $h(x) = \\frac{x + 1}{x - 4}$, find the domain and evaluate $h(0)$',
                solution: 'Domain: All real numbers except $x = 4$ (where denominator equals zero), so $(-\\infty, 4) \\cup (4, \\infty)$.\n\n$h(0) = \\frac{0 + 1}{0 - 4} = \\frac{1}{-4} = -\\frac{1}{4}$'
              }
            ]
          },
          practice: {
            title: 'Practice Problems',
            problems: [
              { 
                id: 'p1', 
                problem: 'If $f(x) = x^2 + 3x - 2$, find $f(-1)$',
                level: 'beginner',
                answer: '$f(-1) = (-1)^2 + 3(-1) - 2 = 1 - 3 - 2 = -4$'
              },
              { 
                id: 'p2', 
                problem: 'Find the domain of $g(x) = \\frac{1}{x + 5}$',
                level: 'beginner',
                answer: 'Domain: $(-\\infty, -5) \\cup (-5, \\infty)$ (all real numbers except $x = -5$)'
              },
              { 
                id: 'p3', 
                problem: 'If $h(x) = \\sqrt{2x + 6}$, find the domain',
                level: 'intermediate',
                answer: 'Need $2x + 6 \\geq 0$, so $2x \\geq -6$, therefore $x \\geq -3$. Domain: $[-3, \\infty)$'
              },
              { 
                id: 'p4', 
                problem: 'Given $f(x) = x^2 - 4x + 3$, find $f(a+1)$',
                level: 'intermediate',
                answer: '$f(a+1) = (a+1)^2 - 4(a+1) + 3 = a^2 + 2a + 1 - 4a - 4 + 3 = a^2 - 2a$'
              },
              { 
                id: 'p5', 
                problem: 'Find the domain of $f(x) = \\frac{\\sqrt{x-1}}{x^2-9}$',
                level: 'advanced',
                answer: 'Need $x - 1 \\geq 0$ (so $x \\geq 1$) and $x^2 - 9 \\neq 0$ (so $x \\neq \\pm 3$). Domain: $[1, 3) \\cup (3, \\infty)$'
              },
              { 
                id: 'p6', 
                problem: 'If $g(x) = \\frac{2x-1}{x+3}$, find and simplify $g(x+h) - g(x)$',
                level: 'advanced',
                answer: '$g(x+h) - g(x) = \\frac{2(x+h)-1}{(x+h)+3} - \\frac{2x-1}{x+3} = \\frac{(2x+2h-1)(x+3) - (2x-1)(x+h+3)}{(x+h+3)(x+3)} = \\frac{7h}{(x+h+3)(x+3)}$'
              }
            ]
          }
        },
        {
          id: '1.2',
          title: '1.2 Function Transformations',
          description: 'Explore how functions change when we modify their equations.',
          thinkingTask: {
            title: 'The Shape-Shifting Function Family',
            content: 'Imagine you have a basic function $f(x) = x^2$ as your "parent." Now, you\'re going to create a whole family of related functions by making small changes to the equation.\n\n**Your Challenge:** Working in groups, explore what happens when you create these "children" of the parent function:\n\n• $g(x) = x^2 + 3$\n• $h(x) = (x - 2)^2$\n• $j(x) = 2x^2$\n• $k(x) = -x^2$\n• $m(x) = (x + 1)^2 - 4$\n\nSketch these functions (you can use graphing technology or create rough sketches). What patterns do you notice? How does each "child" relate to its "parent"? \n\n**Deeper Investigation:** Can you predict what $n(x) = -2(x - 3)^2 + 5$ will look like before graphing it? What "family traits" can you identify that help you understand any transformed function?\n\n*Think about: What happens to the shape, position, and orientation? Can you create rules for predicting transformations?*'
          },
          examples: {
            title: 'Guided Examples',
            problems: [
              {
                id: 'ex1',
                problem: 'Describe the transformations of $g(x) = (x - 3)^2 + 2$ compared to $f(x) = x^2$',
                solution: 'The function $g(x) = (x - 3)^2 + 2$ is the parent function $f(x) = x^2$ shifted 3 units right and 2 units up. The vertex moves from $(0,0)$ to $(3,2)$.'
              },
              {
                id: 'ex2',
                problem: 'If $f(x) = |x|$, describe $h(x) = -2|x + 1| - 3$',
                solution: '$h(x) = -2|x + 1| - 3$ represents: a horizontal shift left 1 unit, vertical stretch by factor of 2, reflection over x-axis, and vertical shift down 3 units. The vertex is at $(-1, -3)$.'
              },
              {
                id: 'ex3',
                problem: 'Write the equation for $f(x) = \\sqrt{x}$ after shifting right 4 units and up 1 unit',
                solution: 'Shifting right 4 units: replace $x$ with $(x-4)$\nShifting up 1 unit: add 1 to the function\nResult: $g(x) = \\sqrt{x-4} + 1$'
              }
            ]
          },
          practice: {
            title: 'Practice Problems',
            problems: [
              { 
                id: 'p1', 
                problem: 'Describe the transformation of $g(x) = x^2 + 4$ compared to $f(x) = x^2$',
                level: 'beginner',
                answer: 'Vertical shift up 4 units'
              },
              { 
                id: 'p2', 
                problem: 'What transformation does $h(x) = (x - 2)^2$ represent?',
                level: 'beginner',
                answer: 'Horizontal shift right 2 units'
              },
              { 
                id: 'p3', 
                problem: 'Write the equation for $f(x) = |x|$ shifted left 3 units and down 2 units',
                level: 'intermediate',
                answer: '$g(x) = |x + 3| - 2$'
              },
              { 
                id: 'p4', 
                problem: 'Describe all transformations of $g(x) = -2(x + 1)^2 - 3$ compared to $f(x) = x^2$',
                level: 'intermediate',
                answer: 'Horizontal shift left 1 unit, vertical stretch by factor 2, reflection over x-axis, vertical shift down 3 units'
              },
              { 
                id: 'p5', 
                problem: 'If $f(x) = \\frac{1}{x}$, write the equation after reflecting over the y-axis, stretching vertically by 3, and shifting up 2 units',
                level: 'advanced',
                answer: '$g(x) = \\frac{3}{-x} + 2 = -\\frac{3}{x} + 2$'
              },
              { 
                id: 'p6', 
                problem: 'Find the vertex of $h(x) = -\\frac{1}{2}(x - 4)^2 + 7$ and describe all transformations from $f(x) = x^2$',
                level: 'advanced',
                answer: 'Vertex: $(4, 7)$. Transformations: horizontal shift right 4, vertical compression by $\\frac{1}{2}$, reflection over x-axis, vertical shift up 7'
              }
            ]
          }
        }
      ]
    },
    {
      id: 'exponential-logarithmic',
      title: 'Chapter 2: Exponential and Logarithmic Functions',
      description: 'Explore exponential and logarithmic functions and their applications.',
      lessons: [
        {
          id: '2.1',
          title: '2.1 Exponential Functions',
          description: 'Study exponential functions, their properties, and applications.',
          thinkingTask: {
            title: 'The Viral Video Challenge',
            content: 'A student posts a funny video online. On the first day, 3 people watch it. Each person who watches the video shares it with exactly 2 friends the next day, and those friends watch it and share it the following day.\n\n**Your Investigation:** Work together to explore this situation:\n\n1. How many people watch the video each day for the first week?\n2. Create a visual representation (table, graph, or diagram) showing the growth pattern\n3. Can you find a mathematical rule that predicts the number of viewers on any given day?\n4. When will the video reach 1 million views?\n\n**Extension Questions:**\n• What if each person shared with 3 friends instead of 2?\n• What if only half the people who watch actually share it?\n• How does this compare to a video that gains 100 new viewers each day?\n\n**Real-World Connections:** Where else do you see this type of growth pattern? What factors might cause the growth to slow down or change?\n\n*Consider: What makes this different from linear growth? How can mathematics help us model and predict viral phenomena?*'
          },
          examples: {
            title: 'Guided Examples',
            problems: [
              {
                id: 'ex1',
                problem: 'Solve: $2^{x+1} = 8$',
                solution: 'Since $8 = 2^3$, we have $2^{x+1} = 2^3$\nTherefore: $x + 1 = 3$\nSolving: $x = 2$'
              },
              {
                id: 'ex2',
                problem: 'A bacteria culture doubles every 3 hours. If there are initially 500 bacteria, write a function for the population after $t$ hours',
                solution: 'Since the population doubles every 3 hours, after $t$ hours it doubles $\\frac{t}{3}$ times.\nThe function is: $P(t) = 500 \\cdot 2^{t/3}$'
              },
              {
                id: 'ex3',
                problem: 'Find the domain and range of $f(x) = 3^x - 2$',
                solution: 'Domain: All real numbers, $(-\\infty, \\infty)$\nRange: Since $3^x > 0$ for all $x$, we have $3^x - 2 > -2$, so the range is $(-2, \\infty)$'
              }
            ]
          },
          practice: {
            title: 'Practice Problems',
            problems: [
              { 
                id: 'p1', 
                problem: 'Solve: $2^x = 16$',
                level: 'beginner',
                answer: '$x = 4$ (since $2^4 = 16$)'
              },
              { 
                id: 'p2', 
                problem: 'Evaluate: $3^0 + 3^1 + 3^2$',
                level: 'beginner',
                answer: '$3^0 + 3^1 + 3^2 = 1 + 3 + 9 = 13$'
              },
              { 
                id: 'p3', 
                problem: 'Solve: $5^{x-1} = 125$',
                level: 'intermediate',
                answer: '$5^{x-1} = 5^3$, so $x - 1 = 3$, therefore $x = 4$'
              },
              { 
                id: 'p4', 
                problem: 'An investment of $1000 grows at 8% annually. Write the exponential function and find the value after 5 years',
                level: 'intermediate',
                answer: '$A(t) = 1000(1.08)^t$; After 5 years: $A(5) = 1000(1.08)^5 \\approx \\$1469.33$'
              },
              { 
                id: 'p5', 
                problem: 'Solve: $2^{2x+1} = 4^{x-1}$',
                level: 'advanced',
                answer: '$2^{2x+1} = (2^2)^{x-1} = 2^{2(x-1)} = 2^{2x-2}$\nSo $2x + 1 = 2x - 2$, which gives $1 = -2$ (no solution)\nActually: $2x + 1 = 2x - 2$ leads to $1 = -2$, so there is no solution.'
              },
              { 
                id: 'p6', 
                problem: 'A radioactive substance decays according to $N(t) = N_0 e^{-0.05t}$ where $t$ is in years. If 40% remains after time $T$, find $T$',
                level: 'advanced',
                answer: '$0.4N_0 = N_0 e^{-0.05T}$\n$0.4 = e^{-0.05T}$\n$\\ln(0.4) = -0.05T$\n$T = \\frac{\\ln(0.4)}{-0.05} \\approx 18.33$ years'
              }
            ]
          }
        },
        {
          id: '2.2',
          title: '2.2 Logarithmic Functions',
          description: 'Understand logarithmic functions as inverses of exponential functions.',
          thinkingTask: {
            title: 'The Time Detective Challenge',
            content: 'You\'re an archaeologist who has discovered several ancient artifacts. Carbon-14 dating shows that these artifacts contain different amounts of carbon-14 compared to living organisms:\n\n• Artifact A: 75% of original carbon-14\n• Artifact B: 50% of original carbon-14  \n• Artifact C: 25% of original carbon-14\n• Artifact D: 12.5% of original carbon-14\n\nYou know that carbon-14 has a half-life of 5,730 years (meaning half of it decays every 5,730 years).\n\n**Your Mission:** Work together to determine the age of each artifact. But here\'s the challenge - you can\'t use a calculator that directly computes logarithms!\n\n**Guiding Questions:**\n• How can you use the half-life information to work backwards?\n• What patterns do you notice in the percentages?\n• How might you estimate ages that fall between the obvious half-life intervals?\n• What mathematical tools could help you solve this more systematically?\n\n**Extension:** If you found an artifact with 60% of its original carbon-14, how would you estimate its age? What mathematical operation would "undo" the exponential decay?\n\n*Think about: What\'s the relationship between exponential growth/decay and the process of finding unknown exponents?*'
          },
          examples: {
            title: 'Guided Examples',
            problems: [
              {
                id: 'ex1',
                problem: 'Solve: $\\log_2(x) = 5$',
                solution: 'By definition of logarithm: $x = 2^5 = 32$'
              },
              {
                id: 'ex2',
                problem: 'Simplify: $\\log_3(27) + \\log_3(9)$',
                solution: 'Using the product property: $\\log_3(27) + \\log_3(9) = \\log_3(27 \\cdot 9) = \\log_3(243)$\nSince $243 = 3^5$, we have $\\log_3(243) = 5$'
              },
              {
                id: 'ex3',
                problem: 'Solve: $\\log(x + 2) + \\log(x - 1) = 1$',
                solution: 'Using the product property: $\\log[(x + 2)(x - 1)] = 1$\nConverting to exponential form: $(x + 2)(x - 1) = 10^1 = 10$\nExpanding: $x^2 + x - 2 = 10$\nSimplifying: $x^2 + x - 12 = 0$\nFactoring: $(x + 4)(x - 3) = 0$\nSolutions: $x = -4$ or $x = 3$\nChecking domains: $x = -4$ makes $\\log(x-1) = \\log(-5)$ undefined\nTherefore: $x = 3$'
              }
            ]
          },
          practice: {
            title: 'Practice Problems',
            problems: [
              { 
                id: 'p1', 
                problem: 'Solve: $\\log_3(x) = 2$',
                level: 'beginner',
                answer: '$x = 3^2 = 9$'
              },
              { 
                id: 'p2', 
                problem: 'Evaluate: $\\log_5(25)$',
                level: 'beginner',
                answer: '$\\log_5(25) = \\log_5(5^2) = 2$'
              },
              { 
                id: 'p3', 
                problem: 'Solve: $\\log_2(x - 3) = 4$',
                level: 'intermediate',
                answer: '$x - 3 = 2^4 = 16$, so $x = 19$'
              },
              { 
                id: 'p4', 
                problem: 'Simplify: $\\log_4(16) - \\log_4(2)$',
                level: 'intermediate',
                answer: '$\\log_4(16) - \\log_4(2) = \\log_4(\\frac{16}{2}) = \\log_4(8) = \\log_4(2^3) = \\log_4(2^3) = \\frac{3}{2}$ (since $4^{3/2} = 8$)'
              },
              { 
                id: 'p5', 
                problem: 'Solve: $\\log_2(x) + \\log_2(x - 6) = 4$',
                level: 'advanced',
                answer: '$\\log_2[x(x-6)] = 4$\n$x(x-6) = 2^4 = 16$\n$x^2 - 6x - 16 = 0$\n$(x-8)(x+2) = 0$\nSince $x > 6$ (for domain), $x = 8$'
              },
              { 
                id: 'p6', 
                problem: 'Use change of base formula to evaluate $\\log_3(50)$ in terms of natural logarithms',
                level: 'advanced',
                answer: '$\\log_3(50) = \\frac{\\ln(50)}{\\ln(3)} \\approx \\frac{3.912}{1.099} \\approx 3.56$'
              }
            ]
          }
        }
      ]
    }
  ]
};