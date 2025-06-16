import { Course } from '../types';

export const mockCourses: Course[] = [
  {
    id: 'algebra1',
    title: 'Algebra 1',
    description: 'Master fundamental algebraic concepts including expressions, equations, functions, and data analysis.',
    icon: 'Calculator',
    color: 'from-blue-500 to-blue-600',
    chapters: [
      {
        id: 'expressions',
        title: 'Chapter 1: Expressions',
        description: 'Learn to work with numerical and algebraic expressions, understand properties of real numbers, and apply the distributive property.',
        lessons: [
          {
            id: '1.1',
            title: '1.1 Numerical Expressions',
            description: 'Evaluate numerical expressions using order of operations and understand mathematical notation.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why do we need an agreed-upon order of operations? What would happen if everyone solved 2 + 3 × 4 differently?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Evaluate: 2 + 3 × 4 - 1',
                  solution: '2 + 12 - 1 = 13'
                },
                {
                  id: 'ex2',
                  problem: 'Evaluate: (8 - 3)² ÷ 5',
                  solution: '5² ÷ 5 = 25 ÷ 5 = 5'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Evaluate: 15 - 2 × 3 + 4' },
                { id: 'p2', problem: 'Evaluate: (6 + 4) × 2 - 8' },
                { id: 'p3', problem: 'Evaluate: 3² + 4 × 2 - 1' }
              ]
            }
          },
          {
            id: '1.2',
            title: '1.2 Algebraic Expressions',
            description: 'Work with variables and algebraic expressions, including evaluating expressions for given values.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How is an algebraic expression like a recipe? What role do variables play in mathematical expressions?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Evaluate 3x + 5 when x = 4',
                  solution: '3(4) + 5 = 12 + 5 = 17'
                },
                {
                  id: 'ex2',
                  problem: 'Evaluate 2a² - b when a = 3 and b = 7',
                  solution: '2(3)² - 7 = 2(9) - 7 = 18 - 7 = 11'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Evaluate 2x - 3 when x = 5' },
                { id: 'p2', problem: 'Evaluate x² + 4x when x = -2' },
                { id: 'p3', problem: 'Evaluate 3a + 2b when a = 4 and b = -1' }
              ]
            }
          },
          {
            id: '1.3',
            title: '1.3 Properties of Real Numbers',
            description: 'Understand and apply properties of real numbers including commutative, associative, and identity properties.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Does the order matter when you add or multiply numbers? Can you think of operations where order does matter?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Identify the property: 5 + 3 = 3 + 5',
                  solution: 'Commutative Property of Addition'
                },
                {
                  id: 'ex2',
                  problem: 'Simplify using properties: 2 × (3 × 7)',
                  solution: '(2 × 3) × 7 = 6 × 7 = 42 (Associative Property)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Identify the property: 4 × 1 = 4' },
                { id: 'p2', problem: 'Simplify: (8 + 2) + 5' },
                { id: 'p3', problem: 'Name the property: 6 × (4 × 2) = (6 × 4) × 2' }
              ]
            }
          },
          {
            id: '1.4',
            title: '1.4 Expand Operations with Rational Numbers',
            description: 'Perform operations with fractions, decimals, and integers using proper techniques.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why might working with fractions be more precise than working with decimal approximations in some situations?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Add: 2/3 + 1/4',
                  solution: '8/12 + 3/12 = 11/12'
                },
                {
                  id: 'ex2',
                  problem: 'Multiply: -3.5 × 2.4',
                  solution: '-8.4'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Add: 3/5 + 1/3' },
                { id: 'p2', problem: 'Subtract: 2.7 - 1.9' },
                { id: 'p3', problem: 'Multiply: -2/3 × 3/4' }
              ]
            }
          },
          {
            id: '1.5',
            title: '1.5 Distributive Property',
            description: 'Apply the distributive property to simplify expressions and solve problems.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How does the distributive property relate to finding the area of a rectangle? Can you visualize 3(x + 4)?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Distribute: 3(x + 5)',
                  solution: '3x + 15'
                },
                {
                  id: 'ex2',
                  problem: 'Factor: 6x + 9',
                  solution: '3(2x + 3)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Distribute: 4(2x - 3)' },
                { id: 'p2', problem: 'Factor: 8y + 12' },
                { id: 'p3', problem: 'Simplify: 2(3x + 1) + 4x' }
              ]
            }
          },
          {
            id: '1.6',
            title: '1.6 Descriptive Modeling and Accuracy',
            description: 'Create mathematical models from real-world situations and understand precision and accuracy.',
            thinkingTask: {
              title: 'Think About It',
              content: 'When measuring something in real life, how do you decide how precise your measurement needs to be?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Write an expression for the cost of x items at $3.50 each plus $5 shipping',
                  solution: '3.50x + 5'
                },
                {
                  id: 'ex2',
                  problem: 'Round 3.14159 to 3 decimal places',
                  solution: '3.142'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Write an expression for the perimeter of a rectangle with length l and width w' },
                { id: 'p2', problem: 'Round 2.7183 to 2 decimal places' },
                { id: 'p3', problem: 'A phone plan costs $25 plus $0.10 per text. Write an expression for the monthly cost.' }
              ]
            }
          }
        ]
      },
      {
        id: 'equations-one-variable',
        title: 'Chapter 2: Equations in One Variable',
        description: 'Solve various types of equations including multi-step, absolute value, and proportion equations.',
        lessons: [
          {
            id: '2.1',
            title: '2.1 Writing and Interpreting Equations',
            description: 'Translate word problems into algebraic equations and interpret their meaning.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do you decide what the variable should represent when writing an equation from a word problem?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Write an equation: A number increased by 7 equals 15',
                  solution: 'x + 7 = 15'
                },
                {
                  id: 'ex2',
                  problem: 'Write an equation: Three times a number minus 4 is 11',
                  solution: '3x - 4 = 11'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Write an equation: A number decreased by 5 equals 12' },
                { id: 'p2', problem: 'Write an equation: Twice a number plus 3 is 17' },
                { id: 'p3', problem: 'Write an equation: The quotient of a number and 4 is 6' }
              ]
            }
          },
          {
            id: '2.2',
            title: '2.2 Solving One-Step Equations',
            description: 'Solve equations that require one operation using addition, subtraction, multiplication, or division.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What does it mean to "solve" an equation? How do you know when you have found the correct solution?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve: x + 5 = 12',
                  solution: 'x = 7'
                },
                {
                  id: 'ex2',
                  problem: 'Solve: 3x = 21',
                  solution: 'x = 7'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve: x - 8 = 15' },
                { id: 'p2', problem: 'Solve: 4x = 28' },
                { id: 'p3', problem: 'Solve: x/5 = 9' }
              ]
            }
          },
          {
            id: '2.3',
            title: '2.3 Solving Multi-Step Equations',
            description: 'Solve equations that require multiple steps and operations.',
            thinkingTask: {
              title: 'Think About It',
              content: 'When solving a multi-step equation, why is it important to follow a specific order of operations in reverse?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve: 2x + 3 = 11',
                  solution: '2x = 8, so x = 4'
                },
                {
                  id: 'ex2',
                  problem: 'Solve: 3(x - 2) = 15',
                  solution: '3x - 6 = 15, 3x = 21, x = 7'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve: 4x - 7 = 21' },
                { id: 'p2', problem: 'Solve: 2(x + 3) = 14' },
                { id: 'p3', problem: 'Solve: 5x + 2 = 3x + 10' }
              ]
            }
          },
          {
            id: '2.4',
            title: '2.4 Solving Equations with the Variable on Each Side',
            description: 'Solve equations where the variable appears on both sides of the equation.',
            thinkingTask: {
              title: 'Think About It',
              content: 'When a variable appears on both sides of an equation, what strategy would you use to collect like terms?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve: 3x + 5 = x + 11',
                  solution: '2x = 6, so x = 3'
                },
                {
                  id: 'ex2',
                  problem: 'Solve: 4x - 7 = 2x + 3',
                  solution: '2x = 10, so x = 5'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve: 5x + 2 = 3x + 8' },
                { id: 'p2', problem: 'Solve: 2x - 4 = x + 1' },
                { id: 'p3', problem: 'Solve: 6x + 1 = 4x - 5' }
              ]
            }
          },
          {
            id: '2.5',
            title: '2.5 Solving Equations Involving Absolute Value',
            description: 'Understand absolute value and solve equations containing absolute value expressions.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why might an absolute value equation have two solutions? Can you think of a real-world example?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve: |x| = 5',
                  solution: 'x = 5 or x = -5'
                },
                {
                  id: 'ex2',
                  problem: 'Solve: |x + 2| = 7',
                  solution: 'x + 2 = 7 or x + 2 = -7, so x = 5 or x = -9'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve: |x| = 8' },
                { id: 'p2', problem: 'Solve: |x - 3| = 4' },
                { id: 'p3', problem: 'Solve: |2x + 1| = 9' }
              ]
            }
          },
          {
            id: '2.6',
            title: '2.6 Solving Proportions',
            description: 'Solve proportional relationships and cross-multiply to find unknown values.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How are proportions used in everyday life? When might you need to solve a proportion?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve: x/4 = 3/6',
                  solution: '6x = 12, so x = 2'
                },
                {
                  id: 'ex2',
                  problem: 'Solve: 5/x = 2/8',
                  solution: '2x = 40, so x = 20'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve: x/3 = 4/12' },
                { id: 'p2', problem: 'Solve: 7/x = 14/6' },
                { id: 'p3', problem: 'Solve: (x+1)/5 = 3/15' }
              ]
            }
          },
          {
            id: '2.7',
            title: '2.7 Using Formulas',
            description: 'Work with mathematical formulas and solve for different variables.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why is it useful to be able to rearrange formulas to solve for different variables?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve A = lw for w',
                  solution: 'w = A/l'
                },
                {
                  id: 'ex2',
                  problem: 'Use d = rt to find t when d = 120 and r = 40',
                  solution: '120 = 40t, so t = 3'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve P = 2l + 2w for l' },
                { id: 'p2', problem: 'Use C = 2πr to find r when C = 31.4' },
                { id: 'p3', problem: 'Solve y = mx + b for x' }
              ]
            }
          }
        ]
      },
      {
        id: 'relations-functions',
        title: 'Chapter 3: Relations and Functions',
        description: 'Explore relationships between variables, understand functions, and analyze graphs.',
        lessons: [
          {
            id: '3.1',
            title: '3.1 Representing Relations',
            description: 'Understand relations and different ways to represent them including tables, graphs, and mappings.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What are some examples of relationships between two quantities in real life? How might you represent these relationships?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Represent the relation {(1,2), (3,4), (5,6)} as a table',
                  solution: 'x: 1, 3, 5; y: 2, 4, 6'
                },
                {
                  id: 'ex2',
                  problem: 'Find the domain of {(2,1), (4,3), (6,5)}',
                  solution: 'Domain: {2, 4, 6}'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the range of {(1,3), (2,5), (3,7)}' },
                { id: 'p2', problem: 'Represent {(0,1), (1,4), (2,7)} as a mapping' },
                { id: 'p3', problem: 'Create a table for y = 2x + 1 when x = 0, 1, 2' }
              ]
            }
          },
          {
            id: '3.2',
            title: '3.2 Functions',
            description: 'Define functions and use the vertical line test to identify functions.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What makes a relation a function? Why is it important that each input has exactly one output?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Is {(1,2), (2,3), (3,2)} a function?',
                  solution: 'Yes, each input has exactly one output'
                },
                {
                  id: 'ex2',
                  problem: 'Evaluate f(x) = 2x + 3 when x = 4',
                  solution: 'f(4) = 2(4) + 3 = 11'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Is {(1,2), (1,3), (2,4)} a function?' },
                { id: 'p2', problem: 'Evaluate g(x) = x² - 1 when x = 3' },
                { id: 'p3', problem: 'Find f(0) if f(x) = 3x + 5' }
              ]
            }
          },
          {
            id: '3.3',
            title: '3.3 Linearity and Continuity of Graphs',
            description: 'Identify linear functions and understand continuous vs. discrete graphs.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What makes a graph linear? When would you use a continuous graph versus a discrete graph?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Is y = 2x + 1 linear?',
                  solution: 'Yes, it has constant rate of change'
                },
                {
                  id: 'ex2',
                  problem: 'Should the graph of "number of students vs. time" be continuous or discrete?',
                  solution: 'Discrete, since you cannot have a fraction of a student'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Is y = x² linear?' },
                { id: 'p2', problem: 'Should a graph of temperature vs. time be continuous or discrete?' },
                { id: 'p3', problem: 'Identify if y = 3x - 2 is linear' }
              ]
            }
          },
          {
            id: '3.4',
            title: '3.4 Intercepts of Graphs',
            description: 'Find and interpret x-intercepts and y-intercepts of graphs and equations.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What do the x-intercept and y-intercept tell you about a real-world situation?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the y-intercept of y = 3x + 5',
                  solution: 'y-intercept is 5 (when x = 0)'
                },
                {
                  id: 'ex2',
                  problem: 'Find the x-intercept of y = 2x - 6',
                  solution: '0 = 2x - 6, so x = 3'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the y-intercept of y = -2x + 7' },
                { id: 'p2', problem: 'Find the x-intercept of y = 4x + 8' },
                { id: 'p3', problem: 'Find both intercepts of y = x - 3' }
              ]
            }
          },
          {
            id: '3.5',
            title: '3.5 Shapes of Graphs',
            description: 'Analyze the shape and behavior of different types of graphs.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How does the shape of a graph relate to the story it tells about a real-world situation?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Describe the shape of y = x²',
                  solution: 'U-shaped curve (parabola) opening upward'
                },
                {
                  id: 'ex2',
                  problem: 'What does an increasing linear graph look like?',
                  solution: 'A straight line that rises from left to right'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Describe the shape of y = -x²' },
                { id: 'p2', problem: 'What does a decreasing linear graph look like?' },
                { id: 'p3', problem: 'Sketch the general shape of y = |x|' }
              ]
            }
          },
          {
            id: '3.6',
            title: '3.6 Sketching Graphs and Comparing Functions',
            description: 'Sketch graphs of functions and compare different representations of functions.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How can you compare two functions when one is given as a graph and another as an equation?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Sketch y = 2x + 1',
                  solution: 'Line with slope 2 and y-intercept 1'
                },
                {
                  id: 'ex2',
                  problem: 'Compare the slopes of y = 3x + 2 and y = x + 5',
                  solution: 'First function has slope 3, second has slope 1; first is steeper'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Sketch y = -x + 3' },
                { id: 'p2', problem: 'Compare y-intercepts of y = 2x + 4 and y = 3x + 1' },
                { id: 'p3', problem: 'Which function is steeper: y = 5x or y = 2x + 10?' }
              ]
            }
          }
        ]
      },
      {
        id: 'linear-nonlinear-functions',
        title: 'Chapter 4: Linear and Nonlinear Functions',
        description: 'Study linear functions, slope, and different forms of linear equations.',
        lessons: [
          {
            id: '4.1',
            title: '4.1 Graphing Linear Functions',
            description: 'Graph linear functions using various methods including slope-intercept form.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What information do you need to graph a linear function? How many points do you need to determine a line?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Graph y = 2x + 3',
                  solution: 'Start at (0,3), use slope 2 to find more points'
                },
                {
                  id: 'ex2',
                  problem: 'Graph y = -x + 1',
                  solution: 'Start at (0,1), use slope -1 to find more points'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Graph y = 3x - 2' },
                { id: 'p2', problem: 'Graph y = -2x + 4' },
                { id: 'p3', problem: 'Graph y = x + 1' }
              ]
            }
          },
          {
            id: '4.2',
            title: '4.2 Rate of Change and Slope',
            description: 'Calculate and interpret slope as rate of change in various contexts.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How does slope relate to steepness? What does a negative slope mean in a real-world context?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the slope between (2,3) and (4,7)',
                  solution: 'slope = (7-3)/(4-2) = 4/2 = 2'
                },
                {
                  id: 'ex2',
                  problem: 'A car travels 120 miles in 2 hours. Find the rate of change.',
                  solution: 'Rate = 120/2 = 60 mph'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the slope between (1,2) and (3,8)' },
                { id: 'p2', problem: 'Find the slope between (-1,4) and (2,-2)' },
                { id: 'p3', problem: 'A plant grows 6 inches in 3 weeks. Find the rate of growth.' }
              ]
            }
          },
          {
            id: '4.3',
            title: '4.3 Slope-Intercept Form',
            description: 'Work with slope-intercept form y = mx + b and identify slope and y-intercept.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why is slope-intercept form useful? What information can you immediately identify from this form?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Identify slope and y-intercept of y = 3x - 5',
                  solution: 'Slope = 3, y-intercept = -5'
                },
                {
                  id: 'ex2',
                  problem: 'Write in slope-intercept form: 2x + y = 7',
                  solution: 'y = -2x + 7'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Identify slope and y-intercept of y = -2x + 4' },
                { id: 'p2', problem: 'Write in slope-intercept form: 3x + y = 9' },
                { id: 'p3', problem: 'Write the equation with slope 4 and y-intercept -1' }
              ]
            }
          }
        ]
      },
      {
        id: 'creating-linear-equations',
        title: 'Chapter 5: Creating Linear Equations',
        description: 'Write linear equations in various forms and graph linear inequalities.',
        lessons: [
          {
            id: '5.1',
            title: '5.1 Writing Equations in Slope-Intercept Form',
            description: 'Write linear equations given slope and y-intercept or two points.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What information do you need to write a linear equation? How can you find this information from different given data?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Write equation with slope 2 and y-intercept 5',
                  solution: 'y = 2x + 5'
                },
                {
                  id: 'ex2',
                  problem: 'Write equation through (1,3) and (3,7)',
                  solution: 'slope = 2, y = 2x + 1'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Write equation with slope -3 and y-intercept 2' },
                { id: 'p2', problem: 'Write equation through (0,4) and (2,8)' },
                { id: 'p3', problem: 'Write equation through (-1,1) and (1,5)' }
              ]
            }
          },
          {
            id: '5.2',
            title: '5.2 Writing Equations in Standard and Point-Slope Forms',
            description: 'Convert between different forms of linear equations and use point-slope form.',
            thinkingTask: {
              title: 'Think About It',
              content: 'When might you prefer to use point-slope form instead of slope-intercept form?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Write y = 2x + 3 in standard form',
                  solution: '2x - y = -3 or 2x - y + 3 = 0'
                },
                {
                  id: 'ex2',
                  problem: 'Write equation through (2,5) with slope 3 in point-slope form',
                  solution: 'y - 5 = 3(x - 2)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Write y = -x + 4 in standard form' },
                { id: 'p2', problem: 'Write equation through (1,2) with slope -2 in point-slope form' },
                { id: 'p3', problem: 'Convert 3x + 2y = 6 to slope-intercept form' }
              ]
            }
          },
          {
            id: '6.5',
            title: '6.5 Graphing Inequalities in Two Variables',
            description: 'Graph linear inequalities and identify solution regions.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How is graphing an inequality different from graphing an equation? What does the shaded region represent?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Graph y > 2x + 1',
                  solution: 'Dashed line y = 2x + 1, shade above'
                },
                {
                  id: 'ex2',
                  problem: 'Graph y ≤ -x + 3',
                  solution: 'Solid line y = -x + 3, shade below'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Graph y < x + 2' },
                { id: 'p2', problem: 'Graph y ≥ -2x + 1' },
                { id: 'p3', problem: 'Graph x + y > 4' }
              ]
            }
          }
        ]
      },
      {
        id: 'linear-inequalities',
        title: 'Chapter 6: Linear Inequalities',
        description: 'Solve and graph various types of inequalities including compound and absolute value inequalities.',
        lessons: [
          {
            id: '6.1',
            title: '6.1 Solving One-Step Inequalities',
            description: 'Solve inequalities using addition, subtraction, multiplication, and division.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How is solving an inequality similar to solving an equation? When do you need to reverse the inequality sign?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve: x + 3 > 7',
                  solution: 'x > 4'
                },
                {
                  id: 'ex2',
                  problem: 'Solve: -2x ≤ 8',
                  solution: 'x ≥ -4 (flip the sign)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve: x - 5 < 2' },
                { id: 'p2', problem: 'Solve: 3x ≥ 15' },
                { id: 'p3', problem: 'Solve: -x > 6' }
              ]
            }
          },
          {
            id: '6.2',
            title: '6.2 Solving Multi-Step Inequalities',
            description: 'Solve inequalities that require multiple steps and operations.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What steps do you follow when solving a multi-step inequality? How do you check your solution?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve: 2x + 5 < 13',
                  solution: '2x < 8, so x < 4'
                },
                {
                  id: 'ex2',
                  problem: 'Solve: -3x + 7 ≥ 16',
                  solution: '-3x ≥ 9, so x ≤ -3'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve: 4x - 3 > 9' },
                { id: 'p2', problem: 'Solve: -2x + 1 ≤ 7' },
                { id: 'p3', problem: 'Solve: 3(x + 2) < 15' }
              ]
            }
          },
          {
            id: '6.3',
            title: '6.3 Solving Compound Inequalities',
            description: 'Solve compound inequalities using "and" and "or" connections.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What is the difference between "and" and "or" compound inequalities? How do their solutions differ?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve: -2 < x + 1 < 5',
                  solution: '-3 < x < 4'
                },
                {
                  id: 'ex2',
                  problem: 'Solve: x < -1 or x > 3',
                  solution: 'x ∈ (-∞,-1) ∪ (3,∞)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve: 1 ≤ x + 2 ≤ 7' },
                { id: 'p2', problem: 'Solve: x ≤ -2 or x ≥ 4' },
                { id: 'p3', problem: 'Solve: -1 < 2x + 1 < 9' }
              ]
            }
          },
          {
            id: '6.4',
            title: '6.4 Solving Absolute Value Inequalities',
            description: 'Solve inequalities involving absolute value expressions.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do absolute value inequalities relate to distance on a number line? Why might they have two parts to their solutions?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve: |x| < 3',
                  solution: '-3 < x < 3'
                },
                {
                  id: 'ex2',
                  problem: 'Solve: |x + 2| ≥ 5',
                  solution: 'x ≤ -7 or x ≥ 3'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve: |x| ≤ 4' },
                { id: 'p2', problem: 'Solve: |x - 1| > 2' },
                { id: 'p3', problem: 'Solve: |2x + 3| < 7' }
              ]
            }
          }
        ]
      },
      {
        id: 'systems',
        title: 'Chapter 7: Systems',
        description: 'Solve systems of equations and inequalities using various methods.',
        lessons: [
          {
            id: '7.1',
            title: '7.1 Graphing Systems of Equations',
            description: 'Solve systems of equations by graphing and interpreting the intersection point.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What does the intersection point of two lines represent in terms of the system of equations?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve by graphing: y = x + 1 and y = -x + 3',
                  solution: 'Intersection at (1, 2)'
                },
                {
                  id: 'ex2',
                  problem: 'Solve by graphing: y = 2x and y = x + 1',
                  solution: 'Intersection at (1, 2)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve by graphing: y = x + 2 and y = -x + 4' },
                { id: 'p2', problem: 'Solve by graphing: y = 2x - 1 and y = x + 1' },
                { id: 'p3', problem: 'Solve by graphing: y = 3x and y = x + 4' }
              ]
            }
          },
          {
            id: '7.2',
            title: '7.2 Substitution',
            description: 'Solve systems of equations using the substitution method.',
            thinkingTask: {
              title: 'Think About It',
              content: 'When is substitution a good method to use for solving a system? What should you look for in the equations?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve: y = 2x and x + y = 9',
                  solution: 'Substitute: x + 2x = 9, so x = 3, y = 6'
                },
                {
                  id: 'ex2',
                  problem: 'Solve: y = x + 1 and 2x + y = 7',
                  solution: 'Substitute: 2x + (x + 1) = 7, so x = 2, y = 3'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve: y = 3x and x + y = 8' },
                { id: 'p2', problem: 'Solve: y = x - 2 and 3x + y = 6' },
                { id: 'p3', problem: 'Solve: x = 2y and x + 3y = 10' }
              ]
            }
          },
          {
            id: '7.3',
            title: '7.3 Elimination Using Addition and Subtraction',
            description: 'Solve systems using elimination when coefficients are opposites or equal.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How does elimination work? What happens when you add equations with opposite coefficients?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve: x + y = 5 and x - y = 1',
                  solution: 'Add equations: 2x = 6, so x = 3, y = 2'
                },
                {
                  id: 'ex2',
                  problem: 'Solve: 2x + y = 7 and 2x - y = 1',
                  solution: 'Add equations: 4x = 8, so x = 2, y = 3'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve: x + y = 6 and x - y = 2' },
                { id: 'p2', problem: 'Solve: 3x + y = 10 and 3x - y = 2' },
                { id: 'p3', problem: 'Solve: 2x + 3y = 8 and 2x - 3y = 4' }
              ]
            }
          },
          {
            id: '7.4',
            title: '7.4 Elimination Using Multiplication',
            description: 'Solve systems using elimination when equations must be multiplied first.',
            thinkingTask: {
              title: 'Think About It',
              content: 'When do you need to multiply equations before using elimination? How do you decide what to multiply by?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve: 2x + 3y = 7 and x + y = 3',
                  solution: 'Multiply second by -2: 2x + 3y = 7 and -2x - 2y = -6, so y = 1, x = 2'
                },
                {
                  id: 'ex2',
                  problem: 'Solve: 3x + 2y = 12 and 2x + y = 7',
                  solution: 'Multiply second by -2: 3x + 2y = 12 and -4x - 2y = -14, so x = 2, y = 3'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve: 3x + y = 11 and x + 2y = 8' },
                { id: 'p2', problem: 'Solve: 2x + 3y = 13 and x + y = 5' },
                { id: 'p3', problem: 'Solve: 4x + 2y = 14 and 3x + y = 9' }
              ]
            }
          },
          {
            id: '7.5',
            title: '7.5 Systems of Inequalities',
            description: 'Graph and solve systems of linear inequalities.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do you find the solution to a system of inequalities? What does the overlapping region represent?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Graph: y > x + 1 and y < -x + 5',
                  solution: 'Shade the region above y = x + 1 and below y = -x + 5'
                },
                {
                  id: 'ex2',
                  problem: 'Graph: y ≥ 2x and y ≤ 4',
                  solution: 'Shade the region above y = 2x and below y = 4'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Graph: y < 2x + 1 and y > x - 2' },
                { id: 'p2', problem: 'Graph: y ≥ -x + 3 and y ≤ x + 1' },
                { id: 'p3', problem: 'Graph: x + y ≤ 4 and x - y ≥ 0' }
              ]
            }
          }
        ]
      },
      {
        id: 'exponents-roots',
        title: 'Chapter 8: Exponents and Roots',
        description: 'Master exponent rules, work with rational exponents, and simplify radical expressions.',
        lessons: [
          {
            id: '8.1',
            title: '8.1 Multiplication Properties of Exponents',
            description: 'Apply the product rule and power rule for exponents.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why does x³ × x² = x⁵? How can you explain this using the definition of exponents?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Simplify: x⁴ × x³',
                  solution: 'x⁷'
                },
                {
                  id: 'ex2',
                  problem: 'Simplify: (x²)³',
                  solution: 'x⁶'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Simplify: a⁵ × a²' },
                { id: 'p2', problem: 'Simplify: (y³)⁴' },
                { id: 'p3', problem: 'Simplify: 2x³ × 3x²' }
              ]
            }
          },
          {
            id: '8.2',
            title: '8.2 Division Properties of Exponents',
            description: 'Apply the quotient rule for exponents and work with zero exponents.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why does any non-zero number to the zero power equal 1? How can you justify this rule?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Simplify: x⁷ ÷ x³',
                  solution: 'x⁴'
                },
                {
                  id: 'ex2',
                  problem: 'Simplify: 5⁰',
                  solution: '1'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Simplify: y⁸ ÷ y⁵' },
                { id: 'p2', problem: 'Simplify: (3x)⁰' },
                { id: 'p3', problem: 'Simplify: 12a⁶ ÷ 4a²' }
              ]
            }
          },
          {
            id: '8.3',
            title: '8.3 Negative Exponents',
            description: 'Work with negative exponents and convert between positive and negative exponent forms.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What does a negative exponent mean? How is x⁻³ related to x³?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Simplify: x⁻⁴',
                  solution: '1/x⁴'
                },
                {
                  id: 'ex2',
                  problem: 'Simplify: 2⁻³',
                  solution: '1/8'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Simplify: y⁻⁵' },
                { id: 'p2', problem: 'Simplify: 3⁻²' },
                { id: 'p3', problem: 'Write with positive exponents: 4x⁻³' }
              ]
            }
          },
          {
            id: '8.4',
            title: '8.4 Rational Exponents',
            description: 'Work with fractional exponents and convert between radical and exponential forms.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How are rational exponents related to radicals? What does x^(1/2) mean?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Simplify: 8^(1/3)',
                  solution: '2'
                },
                {
                  id: 'ex2',
                  problem: 'Write as a radical: x^(2/3)',
                  solution: '∛(x²) or (∛x)²'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Simplify: 16^(1/4)' },
                { id: 'p2', problem: 'Write as a radical: y^(3/4)' },
                { id: 'p3', problem: 'Simplify: 27^(2/3)' }
              ]
            }
          },
          {
            id: '8.5',
            title: '8.5 Simplifying Radical Expressions',
            description: 'Simplify square roots and higher-order radicals using perfect square factors.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How can you tell if a radical expression can be simplified? What are you looking for under the radical?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Simplify: √18',
                  solution: '3√2'
                },
                {
                  id: 'ex2',
                  problem: 'Simplify: √(x⁶)',
                  solution: 'x³'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Simplify: √32' },
                { id: 'p2', problem: 'Simplify: √(y⁸)' },
                { id: 'p3', problem: 'Simplify: √(12x⁴)' }
              ]
            }
          },
          {
            id: '8.6',
            title: '8.6 Operations with Radical Expressions',
            description: 'Add, subtract, multiply, and divide radical expressions.',
            thinkingTask: {
              title: 'Think About It',
              content: 'When can you add or subtract radical expressions? How is this similar to combining like terms?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Simplify: 3√2 + 5√2',
                  solution: '8√2'
                },
                {
                  id: 'ex2',
                  problem: 'Multiply: √3 × √12',
                  solution: '√36 = 6'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Simplify: 4√5 - 2√5' },
                { id: 'p2', problem: 'Multiply: √6 × √8' },
                { id: 'p3', problem: 'Simplify: √18 + √8' }
              ]
            }
          }
        ]
      },
      {
        id: 'exponential-functions',
        title: 'Chapter 9: Exponential Functions',
        description: 'Explore exponential functions, transformations, and geometric sequences.',
        lessons: [
          {
            id: '9.1',
            title: '9.1 Exponential Functions',
            description: 'Understand exponential functions and their properties including growth and decay.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do exponential functions differ from linear functions? What real-world situations involve exponential growth or decay?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Evaluate: f(x) = 2ˣ when x = 3',
                  solution: 'f(3) = 2³ = 8'
                },
                {
                  id: 'ex2',
                  problem: 'Is f(x) = 3ˣ growth or decay?',
                  solution: 'Growth, since base > 1'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Evaluate: g(x) = 3ˣ when x = 2' },
                { id: 'p2', problem: 'Is f(x) = (1/2)ˣ growth or decay?' },
                { id: 'p3', problem: 'Find f(0) if f(x) = 5ˣ' }
              ]
            }
          },
          {
            id: '9.2',
            title: '9.2 Transformations of Exponential Functions',
            description: 'Apply transformations to exponential functions including shifts and reflections.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do transformations affect the graph of an exponential function? What happens to the horizontal asymptote?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Describe the transformation: f(x) = 2ˣ + 3',
                  solution: 'Vertical shift up 3 units'
                },
                {
                  id: 'ex2',
                  problem: 'Find the asymptote of f(x) = 3ˣ - 2',
                  solution: 'y = -2'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Describe the transformation: f(x) = 2^(x-1)' },
                { id: 'p2', problem: 'Find the asymptote of f(x) = 4ˣ + 1' },
                { id: 'p3', problem: 'Write the function for 3ˣ shifted down 2 units' }
              ]
            }
          },
          {
            id: '9.3',
            title: '9.3 Writing Exponential Functions',
            description: 'Write exponential functions from given information such as points or growth rates.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What information do you need to write an exponential function? How can you find the base and initial value?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Write function through (0,3) and (1,6)',
                  solution: 'f(x) = 3 × 2ˣ'
                },
                {
                  id: 'ex2',
                  problem: 'Write function for 20% growth starting at 100',
                  solution: 'f(x) = 100 × 1.2ˣ'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Write function through (0,5) and (1,15)' },
                { id: 'p2', problem: 'Write function for 10% decay starting at 200' },
                { id: 'p3', problem: 'Write function through (0,2) and (2,8)' }
              ]
            }
          },
          {
            id: '9.5',
            title: '9.5 Geometric Sequences',
            description: 'Work with geometric sequences and find terms using the common ratio.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do geometric sequences relate to exponential functions? What is the pattern in a geometric sequence?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the next term: 2, 6, 18, 54, ...',
                  solution: '162 (multiply by 3)'
                },
                {
                  id: 'ex2',
                  problem: 'Find the 5th term if a₁ = 3 and r = 2',
                  solution: 'a₅ = 3 × 2⁴ = 48'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the next term: 1, 4, 16, 64, ...' },
                { id: 'p2', problem: 'Find the 6th term if a₁ = 5 and r = 3' },
                { id: 'p3', problem: 'Find the common ratio: 8, 4, 2, 1, ...' }
              ]
            }
          },
          {
            id: '9.6',
            title: '9.6 Recursive Formulas',
            description: 'Write and use recursive formulas for sequences.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How is a recursive formula different from an explicit formula? When might you prefer one over the other?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Write recursive formula for: 3, 6, 12, 24, ...',
                  solution: 'a₁ = 3, aₙ = 2 × aₙ₋₁'
                },
                {
                  id: 'ex2',
                  problem: 'Find a₄ if a₁ = 2 and aₙ = 3 × aₙ₋₁',
                  solution: 'a₄ = 54'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Write recursive formula for: 5, 10, 20, 40, ...' },
                { id: 'p2', problem: 'Find a₅ if a₁ = 1 and aₙ = 4 × aₙ₋₁' },
                { id: 'p3', problem: 'Write recursive formula for: 100, 50, 25, 12.5, ...' }
              ]
            }
          }
        ]
      },
      {
        id: 'quadratic-functions',
        title: 'Chapter 11: Quadratic Functions',
        description: 'Study quadratic functions, their graphs, and various methods for solving quadratic equations.',
        lessons: [
          {
            id: '11.1',
            title: '11.1 Graphing Quadratic Functions',
            description: 'Graph quadratic functions and identify key features like vertex and axis of symmetry.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What makes the graph of a quadratic function different from a linear function? What determines the shape and direction of a parabola?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the vertex of y = x² - 4x + 3',
                  solution: 'Vertex at (2, -1)'
                },
                {
                  id: 'ex2',
                  problem: 'Does y = -2x² open up or down?',
                  solution: 'Down, because a = -2 < 0'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the vertex of y = x² + 6x + 5' },
                { id: 'p2', problem: 'Does y = 3x² open up or down?' },
                { id: 'p3', problem: 'Find the axis of symmetry for y = x² - 2x + 1' }
              ]
            }
          },
          {
            id: '11.2',
            title: '11.2 Transformations of Quadratic Functions',
            description: 'Apply transformations to quadratic functions including vertex form.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do the values of h and k in y = a(x - h)² + k affect the graph of a parabola?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Describe y = (x - 3)² + 2',
                  solution: 'Vertex at (3, 2), opens up'
                },
                {
                  id: 'ex2',
                  problem: 'Write y = x² + 4x + 7 in vertex form',
                  solution: 'y = (x + 2)² + 3'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Describe y = -(x + 1)² - 4' },
                { id: 'p2', problem: 'Write y = x² - 6x + 10 in vertex form' },
                { id: 'p3', problem: 'Find the vertex of y = 2(x - 4)² + 1' }
              ]
            }
          },
          {
            id: '11.3',
            title: '11.3 Solving Quadratic Functions by Graphing',
            description: 'Solve quadratic equations by finding x-intercepts on graphs.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do the x-intercepts of a parabola relate to the solutions of a quadratic equation?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve by graphing: x² - 4 = 0',
                  solution: 'x = 2 and x = -2'
                },
                {
                  id: 'ex2',
                  problem: 'How many solutions does x² + 1 = 0 have?',
                  solution: 'No real solutions (parabola doesn\'t cross x-axis)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve by graphing: x² - 9 = 0' },
                { id: 'p2', problem: 'Solve by graphing: x² - 2x - 3 = 0' },
                { id: 'p3', problem: 'How many solutions does x² + 4x + 4 = 0 have?' }
              ]
            }
          },
          {
            id: '11.4',
            title: '11.4 Solving Quadratic Functions by Factoring',
            description: 'Factor quadratic expressions and solve quadratic equations using factoring.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How does factoring help you solve quadratic equations? What is the zero product property?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve: x² + 5x + 6 = 0',
                  solution: '(x + 2)(x + 3) = 0, so x = -2 or x = -3'
                },
                {
                  id: 'ex2',
                  problem: 'Factor: x² - 7x + 12',
                  solution: '(x - 3)(x - 4)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve: x² - 5x + 6 = 0' },
                { id: 'p2', problem: 'Factor: x² + 7x + 10' },
                { id: 'p3', problem: 'Solve: x² - 4x - 5 = 0' }
              ]
            }
          },
          {
            id: '11.6',
            title: '11.6 Solving Quadratic Functions by Using the Quadratic Formula',
            description: 'Use the quadratic formula to solve any quadratic equation.',
            thinkingTask: {
              title: 'Think About It',
              content: 'When is the quadratic formula most useful? How does the discriminant tell you about the nature of the solutions?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Solve: x² + 2x - 3 = 0',
                  solution: 'x = (-2 ± √16)/2 = 1 or -3'
                },
                {
                  id: 'ex2',
                  problem: 'Find the discriminant of x² + 4x + 4 = 0',
                  solution: 'b² - 4ac = 16 - 16 = 0 (one solution)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Solve: x² - 6x + 5 = 0' },
                { id: 'p2', problem: 'Find the discriminant of x² + 2x + 5 = 0' },
                { id: 'p3', problem: 'Solve: 2x² + 3x - 2 = 0' }
              ]
            }
          }
        ]
      },
      {
        id: 'statistics',
        title: 'Chapter 12: Statistics',
        description: 'Analyze data using measures of center and spread, and compare data sets.',
        lessons: [
          {
            id: '12.1',
            title: '12.1 Measures of Center',
            description: 'Calculate and interpret mean, median, and mode of data sets.',
            thinkingTask: {
              title: 'Think About It',
              content: 'When might you prefer to use median instead of mean to describe a data set? What are the advantages of each measure?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the mean of: 2, 4, 6, 8, 10',
                  solution: 'Mean = 30/5 = 6'
                },
                {
                  id: 'ex2',
                  problem: 'Find the median of: 1, 3, 5, 7, 9',
                  solution: 'Median = 5'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the mean of: 3, 7, 11, 15, 19' },
                { id: 'p2', problem: 'Find the median of: 2, 4, 6, 8, 10, 12' },
                { id: 'p3', problem: 'Find the mode of: 1, 2, 2, 3, 4, 4, 4, 5' }
              ]
            }
          },
          {
            id: '12.2',
            title: '12.2 Representing Data',
            description: 'Create and interpret various data displays including histograms and box plots.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do different types of graphs help you understand different aspects of data? When would you choose a histogram over a box plot?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'What does a histogram show?',
                  solution: 'Frequency distribution of data in intervals'
                },
                {
                  id: 'ex2',
                  problem: 'What information does a box plot provide?',
                  solution: 'Five-number summary: min, Q1, median, Q3, max'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Create a frequency table for: 1, 2, 2, 3, 3, 3, 4' },
                { id: 'p2', problem: 'Find Q1 and Q3 for: 10, 15, 20, 25, 30, 35, 40' },
                { id: 'p3', problem: 'What type of graph best shows the distribution of test scores?' }
              ]
            }
          },
          {
            id: '12.3',
            title: '12.3 Using Data',
            description: 'Make predictions and draw conclusions from data analysis.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How can data help you make predictions about future events? What are the limitations of using data to make predictions?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If 60% of 100 students prefer pizza, predict how many of 250 students prefer pizza',
                  solution: '250 × 0.6 = 150 students'
                },
                {
                  id: 'ex2',
                  problem: 'What can you conclude if the mean test score increased from 75 to 82?',
                  solution: 'Overall performance improved'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If 40% of 50 people like chocolate, predict for 200 people' },
                { id: 'p2', problem: 'What does it mean if the median income increased?' },
                { id: 'p3', problem: 'How can you use sample data to make predictions about a population?' }
              ]
            }
          },
          {
            id: '12.4',
            title: '12.4 Measures of Spread',
            description: 'Calculate and interpret range, interquartile range, and standard deviation.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why is it important to know how spread out data is, not just the center? What does it mean when data has a large standard deviation?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the range of: 5, 8, 12, 15, 20',
                  solution: 'Range = 20 - 5 = 15'
                },
                {
                  id: 'ex2',
                  problem: 'Find IQR if Q1 = 10 and Q3 = 18',
                  solution: 'IQR = 18 - 10 = 8'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the range of: 3, 7, 11, 15, 19, 23' },
                { id: 'p2', problem: 'Find IQR if Q1 = 25 and Q3 = 40' },
                { id: 'p3', problem: 'Which data set has more variability: A (range=10) or B (range=25)?' }
              ]
            }
          },
          {
            id: '12.5',
            title: '12.5 Distributions of Data',
            description: 'Identify and describe different types of data distributions.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What does the shape of a distribution tell you about the data? How can you identify if data is normally distributed?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Describe a normal distribution',
                  solution: 'Bell-shaped, symmetric, mean = median'
                },
                {
                  id: 'ex2',
                  problem: 'What is a skewed distribution?',
                  solution: 'Asymmetric distribution with a tail on one side'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If mean > median, is the distribution left or right skewed?' },
                { id: 'p2', problem: 'Describe the shape of test scores if most students scored high' },
                { id: 'p3', problem: 'What type of distribution would you expect for heights of adults?' }
              ]
            }
          },
          {
            id: '12.6',
            title: '12.6 Comparing Sets of Data',
            description: 'Compare two or more data sets using appropriate statistical measures.',
            thinkingTask: {
              title: 'Think About It',
              content: 'When comparing two data sets, what statistics should you compare? How do you decide which data set is "better"?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Compare: Set A (mean=75, SD=5) vs Set B (mean=75, SD=15)',
                  solution: 'Same center, but Set A is more consistent'
                },
                {
                  id: 'ex2',
                  problem: 'Which is more reliable: Class A (mean=85, range=20) or Class B (mean=80, range=10)?',
                  solution: 'Class B is more consistent despite lower mean'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Compare two classes with same median but different IQRs' },
                { id: 'p2', problem: 'Which team is better: Team A (mean=50, SD=8) or Team B (mean=48, SD=3)?' },
                { id: 'p3', problem: 'How would you compare the performance of two different tests?' }
              ]
            }
          },
          {
            id: '12.7',
            title: '12.7 Summarizing Categorical Data',
            description: 'Organize and analyze categorical data using frequency tables and relative frequencies.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How is analyzing categorical data different from numerical data? What types of graphs work best for categorical data?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If 15 out of 50 students prefer math, what is the relative frequency?',
                  solution: '15/50 = 0.3 or 30%'
                },
                {
                  id: 'ex2',
                  problem: 'What graph best displays favorite colors of students?',
                  solution: 'Bar graph or pie chart'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find relative frequency if 8 out of 40 chose pizza' },
                { id: 'p2', problem: 'Create a frequency table for: red, blue, red, green, blue, red' },
                { id: 'p3', problem: 'What percentage chose basketball if 12 out of 60 students chose it?' }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'geometry',
    title: 'Geometry',
    description: 'Explore geometric concepts including shapes, proofs, transformations, and spatial reasoning.',
    icon: 'Triangle',
    color: 'from-green-500 to-green-600',
    chapters: [
      {
        id: 'tools-geometry',
        title: 'Module 1: Tools of Geometry',
        description: 'Learn fundamental geometric concepts including points, lines, planes, and coordinate geometry.',
        lessons: [
          {
            id: '1.1',
            title: '1.1 The Geometric System',
            description: 'Understand the structure of geometry including undefined terms, definitions, postulates, and theorems.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why do we need undefined terms in geometry? How do these basic building blocks help us construct more complex geometric ideas?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Identify whether this is a definition, postulate, or theorem: "A line segment has exactly one midpoint."',
                  solution: 'This is a theorem that can be proven using definitions and postulates.'
                },
                {
                  id: 'ex2',
                  problem: 'What are the three undefined terms in geometry?',
                  solution: 'Point, line, and plane are the three undefined terms.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Explain why point, line, and plane are considered undefined terms.' },
                { id: 'p2', problem: 'Give an example of a geometric definition.' },
                { id: 'p3', problem: 'What is the difference between a postulate and a theorem?' }
              ]
            }
          },
          {
            id: '1.2',
            title: '1.2 Points, Lines, and Planes',
            description: 'Work with the fundamental building blocks of geometry and their relationships.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How can you visualize a plane that extends infinitely in all directions? What real-world objects help you understand geometric concepts?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Name three collinear points from the figure.',
                  solution: 'Points A, B, and C are collinear if they lie on the same line.'
                },
                {
                  id: 'ex2',
                  problem: 'How many planes can contain three non-collinear points?',
                  solution: 'Exactly one plane can contain three non-collinear points.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Name two different ways to identify a line.' },
                { id: 'p2', problem: 'What is the intersection of two distinct planes?' },
                { id: 'p3', problem: 'Can four points be coplanar? Explain.' }
              ]
            }
          },
          {
            id: '1.3',
            title: '1.3 Line Segments',
            description: 'Study line segments, their properties, and how to work with segment addition.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How is a line segment different from a line? When might you need to add or subtract segments in real life?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If AB = 5 and BC = 3, and B is between A and C, find AC.',
                  solution: 'AC = AB + BC = 5 + 3 = 8'
                },
                {
                  id: 'ex2',
                  problem: 'Point M is the midpoint of segment PQ. If PM = 7, find PQ.',
                  solution: 'PQ = 2 × PM = 2 × 7 = 14'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If XY = 12 and YZ = 8, find XZ when Y is between X and Z.' },
                { id: 'p2', problem: 'Point N is the midpoint of segment RS. If RS = 16, find RN.' },
                { id: 'p3', problem: 'If AB = 3x + 2 and BC = 2x - 1, and AC = 21, find x.' }
              ]
            }
          },
          {
            id: '1.4',
            title: '1.4 Distance',
            description: 'Calculate distances between points using the distance formula and number line.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How does the Pythagorean theorem relate to finding distance between two points in a coordinate plane?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the distance between points A(2, 3) and B(5, 7).',
                  solution: 'd = √[(5-2)² + (7-3)²] = √[9 + 16] = √25 = 5'
                },
                {
                  id: 'ex2',
                  problem: 'Find the distance between -3 and 5 on a number line.',
                  solution: 'Distance = |5 - (-3)| = |8| = 8'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the distance between points C(1, 4) and D(4, 8).' },
                { id: 'p2', problem: 'Find the distance between -7 and 2 on a number line.' },
                { id: 'p3', problem: 'What is the distance between the origin and point (3, 4)?' }
              ]
            }
          },
          {
            id: '1.5',
            title: '1.5 Locating Points on a Number Line',
            description: 'Work with coordinates on a number line and understand absolute value as distance.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How does absolute value relate to distance? Why is distance always positive?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the coordinate of the midpoint between -4 and 8 on a number line.',
                  solution: 'Midpoint = (-4 + 8)/2 = 4/2 = 2'
                },
                {
                  id: 'ex2',
                  problem: 'Point P is 5 units from point Q at coordinate 3. Find possible coordinates for P.',
                  solution: 'P could be at 3 + 5 = 8 or 3 - 5 = -2'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the midpoint between -6 and 10 on a number line.' },
                { id: 'p2', problem: 'Point R is 7 units from point S at coordinate -2. Find coordinates for R.' },
                { id: 'p3', problem: 'What is the distance between points at coordinates -5 and 3?' }
              ]
            }
          },
          {
            id: '1.6',
            title: '1.6 Locating Points on a Coordinate Plane',
            description: 'Work with coordinates in two dimensions and understand the coordinate plane.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do ordered pairs help us locate exact positions? What are some real-world examples of coordinate systems?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Plot the point A(-3, 2) and describe its location.',
                  solution: 'Point A is 3 units left of the origin and 2 units up, in Quadrant II.'
                },
                {
                  id: 'ex2',
                  problem: 'Find the midpoint of segment with endpoints (1, 3) and (7, 9).',
                  solution: 'Midpoint = ((1+7)/2, (3+9)/2) = (4, 6)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'In which quadrant is the point (-2, -5) located?' },
                { id: 'p2', problem: 'Find the midpoint of segment with endpoints (-1, 4) and (5, -2).' },
                { id: 'p3', problem: 'What are the coordinates of a point 3 units right and 2 units down from (1, 5)?' }
              ]
            }
          },
          {
            id: '1.7',
            title: '1.7 Midpoints and Bisectors',
            description: 'Find midpoints of segments and work with segment bisectors and perpendicular bisectors.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What is the difference between a segment bisector and a perpendicular bisector? When might each be useful?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the midpoint of segment AB where A(2, 1) and B(8, 5).',
                  solution: 'Midpoint = ((2+8)/2, (1+5)/2) = (5, 3)'
                },
                {
                  id: 'ex2',
                  problem: 'Line l bisects segment CD at point M. If CM = 3x + 1 and MD = 5x - 3, find x.',
                  solution: 'Since M is the midpoint: 3x + 1 = 5x - 3, so 4 = 2x, and x = 2'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the midpoint of segment with endpoints (-3, 7) and (1, -1).' },
                { id: 'p2', problem: 'Point P bisects segment QR. If QP = 2x + 5 and PR = 3x - 2, find x.' },
                { id: 'p3', problem: 'What is the perpendicular bisector of a segment?' }
              ]
            }
          }
        ]
      },
      {
        id: 'angles-geometric-figures',
        title: 'Module 2: Angles and Geometric Figures',
        description: 'Study angles, their relationships, and various geometric figures in two and three dimensions.',
        lessons: [
          {
            id: '2.1',
            title: '2.1 Angles and Congruence',
            description: 'Understand angles, angle measurement, and congruent angles.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do you measure the "opening" between two rays? What makes two angles congruent?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If ∠ABC = 45° and ∠DEF = 45°, what can you conclude?',
                  solution: '∠ABC ≅ ∠DEF because they have equal measures.'
                },
                {
                  id: 'ex2',
                  problem: 'Name the vertex and sides of ∠PQR.',
                  solution: 'Vertex: Q; Sides: QP and QR'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If ∠A = 30° and ∠B = 30°, are the angles congruent?' },
                { id: 'p2', problem: 'Name three ways to identify an angle.' },
                { id: 'p3', problem: 'What is the measure of a right angle?' }
              ]
            }
          },
          {
            id: '2.2',
            title: '2.2 Angle Relationships',
            description: 'Explore relationships between angles including complementary, supplementary, and vertical angles.',
            thinkingTask: {
              title: 'Think About It',
              content: 'When two lines intersect, what relationships exist between the angles formed? How can these relationships help you find unknown angle measures?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If two angles are complementary and one measures 35°, find the other.',
                  solution: '90° - 35° = 55°'
                },
                {
                  id: 'ex2',
                  problem: 'Vertical angles are formed when two lines intersect. If one angle is 120°, find its vertical angle.',
                  solution: 'Vertical angles are congruent, so the other angle is also 120°.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Two supplementary angles have measures in the ratio 2:3. Find both angles.' },
                { id: 'p2', problem: 'If ∠1 and ∠2 are vertical angles and ∠1 = 3x + 10°, ∠2 = 5x - 30°, find x.' },
                { id: 'p3', problem: 'What is the complement of a 67° angle?' }
              ]
            }
          },
          {
            id: '2.3',
            title: '2.3 Two-Dimensional Figures',
            description: 'Classify and analyze properties of polygons and other two-dimensional figures.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do you classify polygons? What properties help you distinguish between different types of quadrilaterals?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Classify a polygon with 6 sides.',
                  solution: 'A polygon with 6 sides is called a hexagon.'
                },
                {
                  id: 'ex2',
                  problem: 'What is the sum of interior angles in a triangle?',
                  solution: 'The sum of interior angles in any triangle is 180°.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'What is a polygon with 8 sides called?' },
                { id: 'p2', problem: 'Find the sum of interior angles in a pentagon.' },
                { id: 'p3', problem: 'What makes a polygon regular?' }
              ]
            }
          },
          {
            id: '2.4',
            title: '2.4 Transformations in the Plane',
            description: 'Understand basic transformations including translations, reflections, and rotations.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do transformations change a figure? Which properties of a figure are preserved under different transformations?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Describe the transformation that moves point A(2, 3) to A\'(5, 3).',
                  solution: 'Translation 3 units to the right.'
                },
                {
                  id: 'ex2',
                  problem: 'What happens to point (x, y) under reflection across the x-axis?',
                  solution: 'The point becomes (x, -y).'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the image of point (3, -2) after translation 4 units left and 1 unit up.' },
                { id: 'p2', problem: 'What is the image of point (4, 1) after reflection across the y-axis?' },
                { id: 'p3', problem: 'Which transformations preserve distance?' }
              ]
            }
          },
          {
            id: '2.5',
            title: '2.5 Three-Dimensional Figures',
            description: 'Identify and analyze properties of three-dimensional figures including polyhedra.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do you visualize three-dimensional objects from two-dimensional drawings? What relationships exist between faces, edges, and vertices?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'How many faces does a rectangular prism have?',
                  solution: 'A rectangular prism has 6 faces.'
                },
                {
                  id: 'ex2',
                  problem: 'Use Euler\'s formula to verify the relationship for a cube.',
                  solution: 'Cube: V = 8, E = 12, F = 6. Check: V - E + F = 8 - 12 + 6 = 2 ✓'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'How many edges does a triangular pyramid have?' },
                { id: 'p2', problem: 'What is the difference between a prism and a pyramid?' },
                { id: 'p3', problem: 'Use Euler\'s formula to find the number of faces if V = 6 and E = 9.' }
              ]
            }
          }
        ]
      },
      {
        id: 'logical-arguments-line-relationships',
        title: 'Module 3: Logical Arguments and Line Relationships',
        description: 'Develop logical reasoning skills and study relationships between lines including parallel and perpendicular lines.',
        lessons: [
          {
            id: '3.1',
            title: '3.1 Conjectures and Counterexamples',
            description: 'Make mathematical conjectures and use counterexamples to disprove false statements.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do you know if a mathematical statement is always true? What is the power of finding just one counterexample?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Test the conjecture: "All prime numbers are odd." Find a counterexample if false.',
                  solution: 'Counterexample: 2 is prime and even, so the conjecture is false.'
                },
                {
                  id: 'ex2',
                  problem: 'Make a conjecture about the sum of two even numbers.',
                  solution: 'Conjecture: The sum of two even numbers is always even.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Test: "All rectangles are squares." True or false?' },
                { id: 'p2', problem: 'Make a conjecture about the product of two odd numbers.' },
                { id: 'p3', problem: 'Find a counterexample for: "All angles in a triangle are acute."' }
              ]
            }
          },
          {
            id: '3.2',
            title: '3.2 Statements, Conditionals, and Biconditionals',
            description: 'Work with conditional statements, their converses, inverses, and contrapositives.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do you determine when a conditional statement is true? What is the relationship between a statement and its contrapositive?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Write the converse of: "If it rains, then the ground is wet."',
                  solution: 'Converse: "If the ground is wet, then it rains."'
                },
                {
                  id: 'ex2',
                  problem: 'Write the contrapositive of: "If x = 2, then x² = 4."',
                  solution: 'Contrapositive: "If x² ≠ 4, then x ≠ 2."'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Write the inverse of: "If a figure is a square, then it has four sides."' },
                { id: 'p2', problem: 'Is this biconditional true? "A number is even if and only if it is divisible by 2."' },
                { id: 'p3', problem: 'Write the contrapositive of: "If angles are vertical, then they are congruent."' }
              ]
            }
          },
          {
            id: '3.3',
            title: '3.3 Deductive Reasoning',
            description: 'Use deductive reasoning to draw logical conclusions from given information.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How is deductive reasoning different from inductive reasoning? Why is deductive reasoning so powerful in mathematics?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Given: All birds have feathers. A robin is a bird. What can you conclude?',
                  solution: 'Conclusion: A robin has feathers.'
                },
                {
                  id: 'ex2',
                  problem: 'Given: If two angles are vertical, then they are congruent. ∠1 and ∠2 are vertical. Conclude?',
                  solution: 'Conclusion: ∠1 ≅ ∠2'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Given: All right angles measure 90°. ∠ABC is a right angle. What is m∠ABC?' },
                { id: 'p2', problem: 'Use the Law of Syllogism with: "If p, then q" and "If q, then r."' },
                { id: 'p3', problem: 'What conclusion follows from: "If it\'s Tuesday, then I have math class. Today is Tuesday."?' }
              ]
            }
          },
          {
            id: '3.4',
            title: '3.4 Writing Proofs',
            description: 'Learn to write formal geometric proofs using logical reasoning and geometric properties.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What makes a mathematical proof convincing? How do you organize your reasoning to prove a geometric statement?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Write a two-column proof that vertical angles are congruent.',
                  solution: 'Given: ∠1 and ∠2 are vertical angles. Prove: ∠1 ≅ ∠2. Use linear pair and substitution.'
                },
                {
                  id: 'ex2',
                  problem: 'What are the components of a formal proof?',
                  solution: 'Given information, what to prove, diagram, and logical sequence of statements with reasons.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'List the steps needed to prove that all right angles are congruent.' },
                { id: 'p2', problem: 'What is the difference between a theorem and a postulate?' },
                { id: 'p3', problem: 'Write a paragraph proof that supplements of congruent angles are congruent.' }
              ]
            }
          },
          {
            id: '3.5',
            title: '3.5 Proving Segment Relationships',
            description: 'Prove relationships involving segments using properties of equality and congruence.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do you prove that two segments are congruent? What properties can you use in segment proofs?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Given: AB ≅ CD and CD ≅ EF. Prove: AB ≅ EF.',
                  solution: 'Use the Transitive Property of Congruence: If AB ≅ CD and CD ≅ EF, then AB ≅ EF.'
                },
                {
                  id: 'ex2',
                  problem: 'What property justifies: If AB = CD, then AB + EF = CD + EF?',
                  solution: 'Addition Property of Equality'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Given: M is the midpoint of AB. Prove: AM ≅ MB.' },
                { id: 'p2', problem: 'What property justifies: If AB = CD, then AB - EF = CD - EF?' },
                { id: 'p3', problem: 'Prove: If AB + BC = AC and BC + CD = BD, then AC + CD = AB + BD.' }
              ]
            }
          },
          {
            id: '3.6',
            title: '3.6 Proving Angle Relationships',
            description: 'Prove relationships involving angles using angle properties and theorems.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What angle relationships can you use in proofs? How do you prove that angles are congruent or supplementary?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Given: ∠1 and ∠2 are complementary, ∠2 and ∠3 are complementary. Prove: ∠1 ≅ ∠3.',
                  solution: 'Both ∠1 and ∠3 are complements of ∠2, so they are congruent by the theorem about complements of the same angle.'
                },
                {
                  id: 'ex2',
                  problem: 'What theorem states that vertical angles are congruent?',
                  solution: 'Vertical Angles Theorem: If two angles are vertical angles, then they are congruent.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Prove: If two angles are supplements of congruent angles, then they are congruent.' },
                { id: 'p2', problem: 'Given: ∠A and ∠B are right angles. Prove: ∠A ≅ ∠B.' },
                { id: 'p3', problem: 'What is the Angle Addition Postulate?' }
              ]
            }
          },
          {
            id: '3.7',
            title: '3.7 Parallel Lines and Transversals',
            description: 'Study angle relationships formed when parallel lines are cut by a transversal.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What patterns do you notice in the angles formed when a line crosses two parallel lines? How can these patterns help you solve problems?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If parallel lines are cut by a transversal and one angle is 70°, find its corresponding angle.',
                  solution: 'Corresponding angles are congruent, so the corresponding angle is also 70°.'
                },
                {
                  id: 'ex2',
                  problem: 'Name the relationship between alternate interior angles when parallel lines are cut by a transversal.',
                  solution: 'Alternate interior angles are congruent when parallel lines are cut by a transversal.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If two parallel lines are cut by a transversal and one angle is 110°, find its alternate exterior angle.' },
                { id: 'p2', problem: 'What is the relationship between consecutive interior angles?' },
                { id: 'p3', problem: 'If ∠1 and ∠2 are corresponding angles and m∠1 = 3x + 20°, m∠2 = 5x - 10°, find x.' }
              ]
            }
          },
          {
            id: '3.8',
            title: '3.8 Slope and Equations of Lines',
            description: 'Calculate slope and write equations of lines, including parallel and perpendicular lines.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How does slope relate to the steepness and direction of a line? What is special about the slopes of parallel and perpendicular lines?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the slope of the line through points (2, 3) and (6, 11).',
                  solution: 'slope = (11 - 3)/(6 - 2) = 8/4 = 2'
                },
                {
                  id: 'ex2',
                  problem: 'What is the relationship between slopes of perpendicular lines?',
                  solution: 'The slopes are negative reciprocals of each other (their product is -1).'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the slope of the line through (-1, 4) and (3, -2).' },
                { id: 'p2', problem: 'If a line has slope 2/3, what is the slope of a perpendicular line?' },
                { id: 'p3', problem: 'Write the equation of the line with slope -2 passing through (1, 5).' }
              ]
            }
          },
          {
            id: '3.9',
            title: '3.9 Proving Lines Parallel',
            description: 'Use angle relationships to prove that lines are parallel.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How can you prove that two lines are parallel? What angle relationships guarantee that lines are parallel?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If corresponding angles formed by two lines and a transversal are congruent, what can you conclude?',
                  solution: 'The two lines are parallel (Converse of Corresponding Angles Theorem).'
                },
                {
                  id: 'ex2',
                  problem: 'Given: ∠1 ≅ ∠2 where ∠1 and ∠2 are alternate interior angles. What can you prove?',
                  solution: 'The lines cut by the transversal are parallel.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If alternate exterior angles are congruent, what can you conclude about the lines?' },
                { id: 'p2', problem: 'What is the Converse of the Alternate Interior Angles Theorem?' },
                { id: 'p3', problem: 'If consecutive interior angles are supplementary, are the lines parallel?' }
              ]
            }
          },
          {
            id: '3.10',
            title: '3.10 Perpendiculars and Distance',
            description: 'Study perpendicular lines and find distances from points to lines.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What is the shortest distance from a point to a line? How do perpendicular lines help in finding distances?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'What is the distance from a point to a line?',
                  solution: 'The distance from a point to a line is the length of the perpendicular segment from the point to the line.'
                },
                {
                  id: 'ex2',
                  problem: 'If two lines are perpendicular, what is true about their slopes?',
                  solution: 'Their slopes are negative reciprocals (their product equals -1).'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'How do you construct a perpendicular from a point to a line?' },
                { id: 'p2', problem: 'What is the distance between two parallel lines?' },
                { id: 'p3', problem: 'If line m has slope 3/4, what is the slope of a line perpendicular to m?' }
              ]
            }
          }
        ]
      },
      {
        id: 'transformations-symmetry',
        title: 'Module 4: Transformations and Symmetry',
        description: 'Explore geometric transformations and symmetry in depth.',
        lessons: [
          {
            id: '4.1',
            title: '4.1 Introduction to Transformations',
            description: 'Understand the basic concepts of geometric transformations and their properties.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do transformations help us understand geometric relationships? What stays the same and what changes during different transformations?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Identify the transformation that maps triangle ABC to triangle A\'B\'C\'.',
                  solution: 'Analyze the position, orientation, and size to determine if it\'s a translation, reflection, rotation, or dilation.'
                },
                {
                  id: 'ex2',
                  problem: 'Which transformations preserve distance?',
                  solution: 'Translations, reflections, and rotations preserve distance (they are isometries).'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'What is an isometry?' },
                { id: 'p2', problem: 'Which transformation changes the size of a figure?' },
                { id: 'p3', problem: 'Name the four basic types of transformations.' }
              ]
            }
          }
        ]
      },
      {
        id: 'triangles-congruence',
        title: 'Module 5: Triangles and Congruence',
        description: 'Study triangle properties and methods for proving triangle congruence.',
        lessons: [
          {
            id: '5.1',
            title: '5.1 Angles and Triangles',
            description: 'Explore angle relationships in triangles and classify triangles by angles and sides.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why do the angles in any triangle always sum to 180°? How can you use this fact to find unknown angles?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'In triangle ABC, if ∠A = 60° and ∠B = 70°, find ∠C.',
                  solution: '∠C = 180° - 60° - 70° = 50°'
                },
                {
                  id: 'ex2',
                  problem: 'Classify a triangle with angles 90°, 45°, and 45°.',
                  solution: 'Right isosceles triangle (one right angle and two congruent angles).'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the third angle of a triangle if two angles are 30° and 80°.' },
                { id: 'p2', problem: 'What type of triangle has all angles less than 90°?' },
                { id: 'p3', problem: 'Can a triangle have two right angles? Explain.' }
              ]
            }
          },
          {
            id: '5.2',
            title: '5.2 Congruent Triangles',
            description: 'Understand triangle congruence and corresponding parts of congruent triangles.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What does it mean for two triangles to be congruent? How do you identify corresponding parts?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If △ABC ≅ △DEF, name the corresponding sides.',
                  solution: 'AB ↔ DE, BC ↔ EF, AC ↔ DF'
                },
                {
                  id: 'ex2',
                  problem: 'If △PQR ≅ △STU, and ∠P = 50°, find ∠S.',
                  solution: '∠S = 50° (corresponding angles of congruent triangles are congruent)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If △ABC ≅ △XYZ, what can you conclude about their corresponding parts?' },
                { id: 'p2', problem: 'Write a congruence statement for two congruent triangles.' },
                { id: 'p3', problem: 'What does CPCTC stand for?' }
              ]
            }
          },
          {
            id: '5.3',
            title: '5.3 Proving Triangles Congruent: SSS, SAS',
            description: 'Use SSS and SAS postulates to prove triangle congruence.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why do you only need to show three pairs of corresponding parts are congruent to prove triangles congruent? What is the minimum information needed?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Given: AB ≅ DE, BC ≅ EF, AC ≅ DF. Which postulate proves △ABC ≅ △DEF?',
                  solution: 'SSS (Side-Side-Side) Postulate'
                },
                {
                  id: 'ex2',
                  problem: 'Given: AB ≅ DE, ∠A ≅ ∠D, AC ≅ DF. Which postulate applies?',
                  solution: 'SAS (Side-Angle-Side) Postulate'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'What information do you need to use SSS?' },
                { id: 'p2', problem: 'For SAS, where must the congruent angle be located?' },
                { id: 'p3', problem: 'Given two sides and a non-included angle, can you prove congruence?' }
              ]
            }
          },
          {
            id: '5.4',
            title: '5.4 Proving Triangles Congruent: ASA, AAS',
            description: 'Use ASA and AAS theorems to prove triangle congruence.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How is ASA different from AAS? Why do both methods work to prove triangle congruence?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Given: ∠A ≅ ∠D, AB ≅ DE, ∠B ≅ ∠E. Which theorem applies?',
                  solution: 'ASA (Angle-Side-Angle) Theorem'
                },
                {
                  id: 'ex2',
                  problem: 'Given: ∠A ≅ ∠D, ∠C ≅ ∠F, BC ≅ EF. Which theorem applies?',
                  solution: 'AAS (Angle-Angle-Side) Theorem'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'What is the difference between ASA and AAS?' },
                { id: 'p2', problem: 'Can you use AAA to prove triangle congruence?' },
                { id: 'p3', problem: 'Given two angles and a non-included side, which theorem do you use?' }
              ]
            }
          },
          {
            id: '5.5',
            title: '5.5 Proving Right Triangles Congruent',
            description: 'Use special methods for proving right triangles congruent, including HL theorem.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why does the HL theorem work only for right triangles? What makes right triangles special for congruence proofs?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Given: Right triangles ABC and DEF with hypotenuse AB ≅ DE and leg AC ≅ DF. Are they congruent?',
                  solution: 'Yes, by HL (Hypotenuse-Leg) Theorem'
                },
                {
                  id: 'ex2',
                  problem: 'What information do you need to use HL theorem?',
                  solution: 'Two right triangles with congruent hypotenuses and one pair of congruent legs.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Can you use HL for triangles that are not right triangles?' },
                { id: 'p2', problem: 'What is the hypotenuse of a right triangle?' },
                { id: 'p3', problem: 'Given two right triangles with congruent legs, are they necessarily congruent?' }
              ]
            }
          },
          {
            id: '5.6',
            title: '5.6 Isosceles and Equilateral Triangles',
            description: 'Study properties of isosceles and equilateral triangles and their special angle relationships.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What special properties do isosceles triangles have? How do these properties help in solving problems?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'In isosceles triangle ABC with AB ≅ AC, if ∠A = 40°, find ∠B and ∠C.',
                  solution: '∠B = ∠C = (180° - 40°)/2 = 70° each (base angles are congruent)'
                },
                {
                  id: 'ex2',
                  problem: 'What are the angle measures in an equilateral triangle?',
                  solution: 'Each angle measures 60° (180° ÷ 3 = 60°)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If the vertex angle of an isosceles triangle is 100°, find the base angles.' },
                { id: 'p2', problem: 'What is the relationship between the sides of an equilateral triangle?' },
                { id: 'p3', problem: 'In triangle ABC, if ∠B ≅ ∠C, what can you conclude about the sides?' }
              ]
            }
          }
        ]
      },
      {
        id: 'relationships-triangles',
        title: 'Module 6: Relationships in Triangles',
        description: 'Explore special segments in triangles and triangle inequalities.',
        lessons: [
          {
            id: '6.1',
            title: '6.1 Perpendicular Bisectors',
            description: 'Study perpendicular bisectors of segments and their properties.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What is special about points on the perpendicular bisector of a segment? How can this property be useful?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If point P is on the perpendicular bisector of segment AB, what can you conclude?',
                  solution: 'PA = PB (P is equidistant from A and B)'
                },
                {
                  id: 'ex2',
                  problem: 'Where do the perpendicular bisectors of a triangle\'s sides meet?',
                  solution: 'They meet at the circumcenter, which is equidistant from all three vertices.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'What is the circumcenter of a triangle?' },
                { id: 'p2', problem: 'If PA = PB, what can you conclude about point P?' },
                { id: 'p3', problem: 'How do you construct the perpendicular bisector of a segment?' }
              ]
            }
          },
          {
            id: '6.2',
            title: '6.2 Angle Bisectors',
            description: 'Study angle bisectors and their properties, including the incenter.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What is special about points on the angle bisector? How does this relate to distance from the sides of the angle?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If point P is on the angle bisector of ∠ABC, what can you conclude about distances?',
                  solution: 'P is equidistant from the sides of the angle (rays BA and BC)'
                },
                {
                  id: 'ex2',
                  problem: 'What is the incenter of a triangle?',
                  solution: 'The point where the angle bisectors meet; it\'s the center of the inscribed circle.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'How do you construct an angle bisector?' },
                { id: 'p2', problem: 'What is the inscribed circle of a triangle?' },
                { id: 'p3', problem: 'If a point is equidistant from two sides of an angle, where must it be?' }
              ]
            }
          },
          {
            id: '6.3',
            title: '6.3 Medians and Altitudes of Triangles',
            description: 'Study medians and altitudes of triangles, including the centroid and orthocenter.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How are medians and altitudes different? What special properties do their points of concurrency have?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'What is a median of a triangle?',
                  solution: 'A segment from a vertex to the midpoint of the opposite side.'
                },
                {
                  id: 'ex2',
                  problem: 'Where do the medians of a triangle meet?',
                  solution: 'At the centroid, which divides each median in a 2:1 ratio.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'What is an altitude of a triangle?' },
                { id: 'p2', problem: 'What is the orthocenter of a triangle?' },
                { id: 'p3', problem: 'How does the centroid divide each median?' }
              ]
            }
          },
          {
            id: '6.4',
            title: '6.4 Inequalities in One Triangle',
            description: 'Apply triangle inequality theorems to compare sides and angles.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What is the relationship between the longest side and largest angle in a triangle? Why does this relationship exist?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'In triangle ABC, if AB = 5, BC = 7, and AC = 9, which angle is largest?',
                  solution: '∠B is largest because it\'s opposite the longest side AC.'
                },
                {
                  id: 'ex2',
                  problem: 'Can you form a triangle with sides 3, 4, and 8?',
                  solution: 'No, because 3 + 4 = 7 < 8, violating the triangle inequality.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'In triangle DEF, if ∠D > ∠E > ∠F, order the sides from longest to shortest.' },
                { id: 'p2', problem: 'Can you form a triangle with sides 2, 5, and 7?' },
                { id: 'p3', problem: 'What is the triangle inequality theorem?' }
              ]
            }
          },
          {
            id: '6.6',
            title: '6.6 The Triangle Inequality',
            description: 'Apply the triangle inequality to determine possible side lengths and solve problems.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why must the sum of any two sides of a triangle be greater than the third side? What happens if this condition is not met?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If two sides of a triangle are 6 and 10, what are the possible lengths for the third side?',
                  solution: 'The third side must be greater than 4 and less than 16 (4 < x < 16).'
                },
                {
                  id: 'ex2',
                  problem: 'Which set can form a triangle: {3, 4, 5} or {1, 2, 4}?',
                  solution: '{3, 4, 5} can form a triangle; {1, 2, 4} cannot because 1 + 2 = 3 < 4.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If two sides are 8 and 12, find the range for the third side.' },
                { id: 'p2', problem: 'Can sides 5, 12, and 13 form a triangle?' },
                { id: 'p3', problem: 'What is the shortest possible perimeter for a triangle with one side of length 7?' }
              ]
            }
          }
        ]
      },
      {
        id: 'quadrilaterals',
        title: 'Module 7: Quadrilaterals',
        description: 'Study properties of quadrilaterals including parallelograms, rectangles, rhombi, and trapezoids.',
        lessons: [
          {
            id: '7.1',
            title: '7.1 Angles of Polygons',
            description: 'Find interior and exterior angle measures of polygons.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How does the number of sides in a polygon relate to the sum of its interior angles? What pattern do you notice?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the sum of interior angles in a hexagon.',
                  solution: 'Sum = (n - 2) × 180° = (6 - 2) × 180° = 720°'
                },
                {
                  id: 'ex2',
                  problem: 'Find each interior angle of a regular octagon.',
                  solution: 'Each angle = 720° ÷ 6 = 135°'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the sum of interior angles in a decagon.' },
                { id: 'p2', problem: 'Each interior angle of a regular polygon is 140°. How many sides does it have?' },
                { id: 'p3', problem: 'What is the sum of exterior angles of any polygon?' }
              ]
            }
          },
          {
            id: '7.2',
            title: '7.2 Parallelograms',
            description: 'Study properties of parallelograms including opposite sides, angles, and diagonals.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What makes a quadrilateral a parallelogram? How do the properties of parallelograms help in solving problems?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'In parallelogram ABCD, if ∠A = 70°, find ∠B, ∠C, and ∠D.',
                  solution: '∠C = 70° (opposite angles), ∠B = ∠D = 110° (consecutive angles are supplementary)'
                },
                {
                  id: 'ex2',
                  problem: 'In parallelogram PQRS, if PQ = 8, find RS.',
                  solution: 'RS = 8 (opposite sides of a parallelogram are congruent)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'List four properties of parallelograms.' },
                { id: 'p2', problem: 'In parallelogram WXYZ, if WX = 12 and XY = 8, find the perimeter.' },
                { id: 'p3', problem: 'How do the diagonals of a parallelogram intersect?' }
              ]
            }
          },
          {
            id: '7.3',
            title: '7.3 Tests for Parallelograms',
            description: 'Use various conditions to prove that a quadrilateral is a parallelogram.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What minimum information do you need to prove a quadrilateral is a parallelogram? Why do these conditions work?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If both pairs of opposite sides are congruent, what can you conclude?',
                  solution: 'The quadrilateral is a parallelogram.'
                },
                {
                  id: 'ex2',
                  problem: 'If diagonals bisect each other, what type of quadrilateral is it?',
                  solution: 'It\'s a parallelogram (diagonals bisecting each other is a test for parallelograms).'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'List five ways to prove a quadrilateral is a parallelogram.' },
                { id: 'p2', problem: 'If one pair of opposite sides is both parallel and congruent, is it a parallelogram?' },
                { id: 'p3', problem: 'Can you prove a parallelogram using just one pair of parallel sides?' }
              ]
            }
          },
          {
            id: '7.4',
            title: '7.4 Rectangles',
            description: 'Study properties of rectangles and conditions for proving a parallelogram is a rectangle.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How is a rectangle different from a general parallelogram? What special properties do rectangles have?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'What are the angle measures in a rectangle?',
                  solution: 'All angles are 90° (right angles).'
                },
                {
                  id: 'ex2',
                  problem: 'In rectangle ABCD, if diagonal AC = 10, find diagonal BD.',
                  solution: 'BD = 10 (diagonals of a rectangle are congruent)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'How can you prove a parallelogram is a rectangle?' },
                { id: 'p2', problem: 'What is special about the diagonals of a rectangle?' },
                { id: 'p3', problem: 'Is every rectangle a parallelogram? Is every parallelogram a rectangle?' }
              ]
            }
          },
          {
            id: '7.5',
            title: '7.5 Rhombi and Squares',
            description: 'Study properties of rhombi and squares, including diagonal relationships.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What makes a rhombus special among parallelograms? How is a square related to both rectangles and rhombi?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'What is the defining property of a rhombus?',
                  solution: 'All four sides are congruent.'
                },
                {
                  id: 'ex2',
                  problem: 'How do the diagonals of a rhombus intersect?',
                  solution: 'They bisect each other at right angles.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'What properties does a square have that a rhombus doesn\'t necessarily have?' },
                { id: 'p2', problem: 'How can you prove a parallelogram is a rhombus?' },
                { id: 'p3', problem: 'Do the diagonals of a square bisect the vertex angles?' }
              ]
            }
          },
          {
            id: '7.6',
            title: '7.6 Trapezoids and Kites',
            description: 'Study properties of trapezoids and kites, including isosceles trapezoids.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How are trapezoids and kites different from parallelograms? What special properties do isosceles trapezoids have?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'What is the defining property of a trapezoid?',
                  solution: 'Exactly one pair of parallel sides (called bases).'
                },
                {
                  id: 'ex2',
                  problem: 'In an isosceles trapezoid, what can you say about the base angles?',
                  solution: 'Base angles are congruent.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'What is the defining property of a kite?' },
                { id: 'p2', problem: 'How are the diagonals of a kite related?' },
                { id: 'p3', problem: 'What is special about the diagonals of an isosceles trapezoid?' }
              ]
            }
          }
        ]
      },
      {
        id: 'similarity',
        title: 'Module 8: Similarity',
        description: 'Explore similar figures, dilations, and proportional relationships.',
        lessons: [
          {
            id: '8.1',
            title: '8.1 Dilations',
            description: 'Understand dilations as transformations that change size but preserve shape.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How is a dilation different from other transformations? What stays the same and what changes during a dilation?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the image of point A(2, 4) under a dilation with center O(0, 0) and scale factor 3.',
                  solution: 'A\'(6, 12) - multiply coordinates by scale factor'
                },
                {
                  id: 'ex2',
                  problem: 'If the scale factor is 1/2, is the image larger or smaller?',
                  solution: 'Smaller - scale factors between 0 and 1 create smaller images'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the image of B(3, -1) under dilation with center O(0, 0) and scale factor 2.' },
                { id: 'p2', problem: 'What happens when the scale factor is 1?' },
                { id: 'p3', problem: 'Do dilations preserve angle measures?' }
              ]
            }
          },
          {
            id: '8.2',
            title: '8.2 Similar Polygons',
            description: 'Identify similar polygons and find missing measures using proportions.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What makes two polygons similar? How can you use similarity to find unknown measurements?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If triangles ABC and DEF are similar with ratio 2:3, and AB = 6, find DE.',
                  solution: 'DE = 9 (since 6/DE = 2/3, so DE = 9)'
                },
                {
                  id: 'ex2',
                  problem: 'What conditions must be met for polygons to be similar?',
                  solution: 'Corresponding angles congruent and corresponding sides proportional'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If rectangles are similar with ratio 3:5 and one has width 9, find the corresponding width.' },
                { id: 'p2', problem: 'Are all squares similar? Explain.' },
                { id: 'p3', problem: 'If the ratio of similarity is 4:7, what is the ratio of their perimeters?' }
              ]
            }
          },
          {
            id: '8.3',
            title: '8.3 Similar Triangles: AA Similarity',
            description: 'Use AA similarity to prove triangles similar.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why do you only need two pairs of congruent angles to prove triangles similar? How does this relate to the angle sum in triangles?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If ∠A ≅ ∠D and ∠B ≅ ∠E, are triangles ABC and DEF similar?',
                  solution: 'Yes, by AA Similarity (two pairs of congruent angles)'
                },
                {
                  id: 'ex2',
                  problem: 'Why is AAA not needed to prove similarity?',
                  solution: 'If two angles are congruent, the third must be congruent too (angle sum = 180°)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'What does AA Similarity Theorem state?' },
                { id: 'p2', problem: 'If two triangles have angles 30°, 60°, 90°, are they similar?' },
                { id: 'p3', problem: 'Can you prove similarity with just one pair of congruent angles?' }
              ]
            }
          },
          {
            id: '8.4',
            title: '8.4 Similar Triangles: SSS and SAS Similarity',
            description: 'Use SSS and SAS similarity theorems to prove triangles similar.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How are SSS and SAS similarity different from SSS and SAS congruence? What role do proportions play?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If the sides of triangle ABC are 6, 8, 10 and triangle DEF has sides 9, 12, 15, are they similar?',
                  solution: 'Yes, by SSS Similarity (ratios 6:9 = 8:12 = 10:15 = 2:3)'
                },
                {
                  id: 'ex2',
                  problem: 'For SAS similarity, what must be true about the included angle?',
                  solution: 'The included angles must be congruent'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'What is the SSS Similarity Theorem?' },
                { id: 'p2', problem: 'For SAS similarity, do you need all three sides to be proportional?' },
                { id: 'p3', problem: 'If two sides are proportional but the included angles are not congruent, are the triangles similar?' }
              ]
            }
          },
          {
            id: '8.5',
            title: '8.5 Triangle Proportionality',
            description: 'Apply proportionality theorems including the Triangle Proportionality Theorem.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What happens when a line parallel to one side of a triangle intersects the other two sides? How does this create proportional segments?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'In triangle ABC, if DE || BC, AD = 6, DB = 4, and AE = 9, find EC.',
                  solution: 'By Triangle Proportionality: 6/4 = 9/EC, so EC = 6'
                },
                {
                  id: 'ex2',
                  problem: 'What does the Triangle Proportionality Theorem state?',
                  solution: 'If a line parallel to one side of a triangle intersects the other two sides, it divides them proportionally'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If MN || QR in triangle PQR, PM = 8, MQ = 12, and PN = 6, find NR.' },
                { id: 'p2', problem: 'What is the converse of the Triangle Proportionality Theorem?' },
                { id: 'p3', problem: 'How can you use proportionality to prove lines are parallel?' }
              ]
            }
          },
          {
            id: '8.6',
            title: '8.6 Parts of Similar Triangles',
            description: 'Find corresponding parts of similar triangles including altitudes, medians, and angle bisectors.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do the ratios of corresponding parts in similar triangles relate to the ratio of similarity? What about areas?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If triangles are similar with ratio 3:5, what is the ratio of their corresponding altitudes?',
                  solution: '3:5 (same as the ratio of corresponding sides)'
                },
                {
                  id: 'ex2',
                  problem: 'If the ratio of similarity is 2:3, what is the ratio of their areas?',
                  solution: '4:9 (square of the ratio of corresponding sides)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If similar triangles have ratio 4:7, find the ratio of their perimeters.' },
                { id: 'p2', problem: 'What is the ratio of areas if the ratio of similarity is 1:3?' },
                { id: 'p3', problem: 'How do corresponding angle bisectors relate in similar triangles?' }
              ]
            }
          }
        ]
      },
      {
        id: 'right-triangles-trigonometry',
        title: 'Module 9: Right Triangles and Trigonometry',
        description: 'Study right triangle relationships, Pythagorean theorem, and basic trigonometry.',
        lessons: [
          {
            id: '9.1',
            title: '9.1 Geometric Mean',
            description: 'Find geometric means and apply geometric mean relationships in right triangles.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How is geometric mean different from arithmetic mean? When do geometric mean relationships appear in right triangles?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the geometric mean of 4 and 9.',
                  solution: '√(4 × 9) = √36 = 6'
                },
                {
                  id: 'ex2',
                  problem: 'In a right triangle, what is the altitude to the hypotenuse the geometric mean of?',
                  solution: 'The segments of the hypotenuse created by the altitude'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the geometric mean of 8 and 18.' },
                { id: 'p2', problem: 'If the altitude to the hypotenuse is 6 and one segment is 4, find the other segment.' },
                { id: 'p3', problem: 'What geometric mean relationship exists for the legs of a right triangle?' }
              ]
            }
          },
          {
            id: '9.2',
            title: '9.2 Pythagorean Theorem and Its Converse',
            description: 'Apply the Pythagorean theorem and its converse to solve problems.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why does the Pythagorean theorem work? How can you use the converse to determine if a triangle is a right triangle?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the hypotenuse of a right triangle with legs 5 and 12.',
                  solution: 'c² = 5² + 12² = 25 + 144 = 169, so c = 13'
                },
                {
                  id: 'ex2',
                  problem: 'Is a triangle with sides 8, 15, 17 a right triangle?',
                  solution: 'Yes, because 8² + 15² = 64 + 225 = 289 = 17²'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the missing leg if the hypotenuse is 10 and one leg is 6.' },
                { id: 'p2', problem: 'Is a triangle with sides 7, 24, 25 a right triangle?' },
                { id: 'p3', problem: 'What is the converse of the Pythagorean theorem?' }
              ]
            }
          },
          {
            id: '9.3',
            title: '9.3 Coordinates in Space',
            description: 'Extend coordinate geometry to three dimensions and find distances in space.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do you locate points in three-dimensional space? How is the distance formula extended to three dimensions?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the distance between points A(1, 2, 3) and B(4, 6, 7).',
                  solution: 'd = √[(4-1)² + (6-2)² + (7-3)²] = √[9 + 16 + 16] = √41'
                },
                {
                  id: 'ex2',
                  problem: 'What are the coordinates of a point in space?',
                  solution: '(x, y, z) where x, y, z represent distances along three perpendicular axes'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the distance between (0, 0, 0) and (3, 4, 5).' },
                { id: 'p2', problem: 'What is the midpoint of segment with endpoints (1, 2, 3) and (7, 8, 9)?' },
                { id: 'p3', problem: 'How many coordinates are needed to locate a point in space?' }
              ]
            }
          },
          {
            id: '9.4',
            title: '9.4 Special Right Triangles',
            description: 'Work with 45-45-90 and 30-60-90 triangles and their side relationships.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why do certain right triangles have predictable side ratios? How can these patterns help you solve problems quickly?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'In a 45-45-90 triangle, if the leg is 5, find the hypotenuse.',
                  solution: 'Hypotenuse = leg × √2 = 5√2'
                },
                {
                  id: 'ex2',
                  problem: 'In a 30-60-90 triangle, if the short leg is 4, find the other sides.',
                  solution: 'Long leg = 4√3, hypotenuse = 8'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'In a 45-45-90 triangle with hypotenuse 10, find the legs.' },
                { id: 'p2', problem: 'In a 30-60-90 triangle with hypotenuse 12, find both legs.' },
                { id: 'p3', problem: 'What are the side ratios in a 30-60-90 triangle?' }
              ]
            }
          },
          {
            id: '9.5',
            title: '9.5 Trigonometry',
            description: 'Understand sine, cosine, and tangent ratios in right triangles.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do trigonometric ratios help you find unknown sides and angles in right triangles? Why are these ratios constant for a given angle?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'In a right triangle, if the opposite side is 3 and hypotenuse is 5, find sin θ.',
                  solution: 'sin θ = opposite/hypotenuse = 3/5'
                },
                {
                  id: 'ex2',
                  problem: 'What does SOH-CAH-TOA help you remember?',
                  solution: 'Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If adjacent = 4 and hypotenuse = 7, find cos θ.' },
                { id: 'p2', problem: 'If opposite = 6 and adjacent = 8, find tan θ.' },
                { id: 'p3', problem: 'What is the relationship between sin θ and cos(90° - θ)?' }
              ]
            }
          },
          {
            id: '9.6',
            title: '9.6 Applying Trigonometry',
            description: 'Use trigonometry to solve real-world problems involving right triangles.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How can trigonometry help you find heights and distances that are difficult to measure directly? What real-world situations involve right triangles?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'A ladder makes a 60° angle with the ground. If the ladder is 12 feet long, how high up the wall does it reach?',
                  solution: 'height = 12 × sin(60°) = 12 × (√3/2) = 6√3 feet'
                },
                {
                  id: 'ex2',
                  problem: 'From a point 100 feet from a building, the angle of elevation to the top is 30°. Find the building height.',
                  solution: 'height = 100 × tan(30°) = 100 × (1/√3) = 100√3/3 feet'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'A ramp makes a 15° angle with the ground. If the ramp is 20 feet long, find the vertical rise.' },
                { id: 'p2', problem: 'From 50 feet away, the angle of elevation to a tree top is 45°. Find the tree height.' },
                { id: 'p3', problem: 'What is an angle of elevation?' }
              ]
            }
          },
          {
            id: '9.7',
            title: '9.7 The Law of Sines',
            description: 'Apply the Law of Sines to solve non-right triangles.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How can you solve triangles that don\'t have a right angle? When is the Law of Sines most useful?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'What does the Law of Sines state?',
                  solution: 'a/sin A = b/sin B = c/sin C for any triangle'
                },
                {
                  id: 'ex2',
                  problem: 'In triangle ABC, if a = 8, A = 30°, and B = 45°, find b.',
                  solution: 'b = a × sin B / sin A = 8 × sin 45° / sin 30° = 8√2'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'When can you use the Law of Sines?' },
                { id: 'p2', problem: 'In triangle DEF, if d = 10, D = 60°, and E = 45°, find e.' },
                { id: 'p3', problem: 'What is the ambiguous case in the Law of Sines?' }
              ]
            }
          },
          {
            id: '9.8',
            title: '9.8 The Law of Cosines',
            description: 'Apply the Law of Cosines to solve triangles when the Law of Sines cannot be used.',
            thinkingTask: {
              title: 'Think About It',
              content: 'When is the Law of Cosines needed instead of the Law of Sines? How does it relate to the Pythagorean theorem?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'What does the Law of Cosines state?',
                  solution: 'c² = a² + b² - 2ab cos C'
                },
                {
                  id: 'ex2',
                  problem: 'Find side c if a = 5, b = 7, and C = 60°.',
                  solution: 'c² = 25 + 49 - 2(5)(7)cos 60° = 74 - 35 = 39, so c = √39'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'When do you use the Law of Cosines?' },
                { id: 'p2', problem: 'Find angle A if a = 8, b = 6, and c = 10.' },
                { id: 'p3', problem: 'How is the Law of Cosines related to the Pythagorean theorem?' }
              ]
            }
          }
        ]
      },
      {
        id: 'circles',
        title: 'Module 10: Circles',
        description: 'Study circles, their properties, and relationships involving chords, tangents, and secants.',
        lessons: [
          {
            id: '10.1',
            title: '10.1 Circles and Circumference',
            description: 'Understand circle terminology and calculate circumference and arc length.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What is the relationship between a circle\'s diameter and its circumference? Why is this ratio always the same?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Find the circumference of a circle with radius 7.',
                  solution: 'C = 2πr = 2π(7) = 14π'
                },
                {
                  id: 'ex2',
                  problem: 'Find the arc length of a 60° arc in a circle with radius 9.',
                  solution: 'Arc length = (60°/360°) × 2π(9) = π(9)/3 = 3π'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Find the circumference of a circle with diameter 12.' },
                { id: 'p2', problem: 'Find the arc length of a 90° arc in a circle with radius 8.' },
                { id: 'p3', problem: 'What is the ratio of circumference to diameter for any circle?' }
              ]
            }
          },
          {
            id: '10.2',
            title: '10.2 Measuring Angles and Arcs',
            description: 'Measure central angles, inscribed angles, and their corresponding arcs.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do central angles relate to their intercepted arcs? What about inscribed angles?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If a central angle measures 80°, what is the measure of its intercepted arc?',
                  solution: 'The arc measure equals the central angle measure: 80°'
                },
                {
                  id: 'ex2',
                  problem: 'If an inscribed angle measures 40°, what is the measure of its intercepted arc?',
                  solution: 'The arc measure is twice the inscribed angle: 80°'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If a central angle is 120°, find the intercepted arc measure.' },
                { id: 'p2', problem: 'If an inscribed angle is 35°, find the intercepted arc measure.' },
                { id: 'p3', problem: 'What is the relationship between an inscribed angle and its intercepted arc?' }
              ]
            }
          },
          {
            id: '10.3',
            title: '10.3 Arcs and Chords',
            description: 'Study relationships between arcs, chords, and their distances from the center.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What is the relationship between congruent chords and their distances from the center? How do arcs and chords relate?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If two chords are congruent, what can you say about their arcs?',
                  solution: 'Congruent chords have congruent arcs.'
                },
                {
                  id: 'ex2',
                  problem: 'What is the shortest distance from the center to a chord?',
                  solution: 'The perpendicular distance from the center to the chord.'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If two chords are equidistant from the center, what can you conclude?' },
                { id: 'p2', problem: 'How does a perpendicular from the center to a chord divide the chord?' },
                { id: 'p3', problem: 'What is the relationship between the length of a chord and its distance from the center?' }
              ]
            }
          },
          {
            id: '10.4',
            title: '10.4 Inscribed Angles',
            description: 'Study inscribed angles and their properties, including angles in semicircles.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why is an inscribed angle always half its intercepted arc? What is special about angles inscribed in a semicircle?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'An inscribed angle intercepts an arc of 100°. Find the angle measure.',
                  solution: 'Inscribed angle = (1/2) × arc = (1/2) × 100° = 50°'
                },
                {
                  id: 'ex2',
                  problem: 'What is the measure of an angle inscribed in a semicircle?',
                  solution: '90° (because it intercepts a 180° arc, and 180° ÷ 2 = 90°)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'An inscribed angle intercepts a 140° arc. Find the angle measure.' },
                { id: 'p2', problem: 'If an inscribed angle measures 65°, find its intercepted arc.' },
                { id: 'p3', problem: 'What theorem relates to angles inscribed in semicircles?' }
              ]
            }
          },
          {
            id: '10.5',
            title: '10.5 Tangents',
            description: 'Study tangent lines to circles and their properties.',
            thinkingTask: {
              title: 'Think About It',
              content: 'What makes a line tangent to a circle? How many tangent lines can be drawn from an external point?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'What is the relationship between a tangent line and the radius at the point of tangency?',
                  solution: 'They are perpendicular.'
                },
                {
                  id: 'ex2',
                  problem: 'From external point P, two tangents are drawn to circle O. If one tangent segment is 8, find the other.',
                  solution: '8 (tangent segments from an external point are congruent)'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'How many tangent lines can be drawn to a circle from an external point?' },
                { id: 'p2', problem: 'If a tangent segment from point P to circle O is 12, and PO = 15, find the radius.' },
                { id: 'p3', problem: 'What is the angle between a tangent and a chord at the point of tangency?' }
              ]
            }
          },
          {
            id: '10.6',
            title: '10.6 Tangents, Secants, and Angle Measures',
            description: 'Find angle measures formed by tangents and secants.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do you find the measure of angles formed by tangents and secants? What patterns exist in these relationships?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Two secants from external point P intercept arcs of 80° and 30°. Find the angle at P.',
                  solution: 'Angle = (1/2)|difference of arcs| = (1/2)|80° - 30°| = 25°'
                },
                {
                  id: 'ex2',
                  problem: 'A tangent and secant from external point form an angle. How do you find this angle?',
                  solution: 'Angle = (1/2)|difference of intercepted arcs|'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Two tangents from external point intercept arcs of 100° and 260°. Find the angle between tangents.' },
                { id: 'p2', problem: 'What is the formula for an angle formed by two secants from an external point?' },
                { id: 'p3', problem: 'How do you find an angle formed by two chords intersecting inside a circle?' }
              ]
            }
          },
          {
            id: '10.7',
            title: '10.7 Equations of Circles',
            description: 'Write and use equations of circles in coordinate geometry.',
            thinkingTask: {
              title: 'Think About It',
              content: 'How do you write the equation of a circle given its center and radius? How does this relate to the distance formula?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Write the equation of a circle with center (3, -2) and radius 5.',
                  solution: '(x - 3)² + (y + 2)² = 25'
                },
                {
                  id: 'ex2',
                  problem: 'Find the center and radius of the circle x² + y² - 6x + 4y = 12.',
                  solution: 'Complete the square: (x - 3)² + (y + 2)² = 25, so center (3, -2), radius 5'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Write the equation of a circle with center (-1, 4) and radius 3.' },
                { id: 'p2', problem: 'Find the center and radius of x² + y² + 8x - 6y = 0.' },
                { id: 'p3', problem: 'What is the general form of a circle equation?' }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'algebra2',
    title: 'Algebra 2',
    description: 'Advanced algebraic concepts including polynomials, rational functions, exponentials, and logarithms.',
    icon: 'Function',
    color: 'from-purple-500 to-purple-600',
    chapters: [
      {
        id: 'relations-functions',
        title: 'Module 1: Relations and Functions',
        description: '...',
        lessons: [
          {
            id: '1.1',
            title: '1.1 ...',
            description: '...',
            thinkingTask: {
              title: 'Think About It',
              content: '...'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: '...',
                  solution: '...'
                },
                {
                  id: 'ex2',
                  problem: '...',
                  solution: '...'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: '...' },
                { id: 'p2', problem: '...' },
                { id: 'p3', problem: '...' }
              ]
            }
          }
        ]
      },
      {
        id: 'linear-equations-inequalities-and-systems',
        title: 'Module 2: Linear Equations, Inequalities, and Systems',
        description: '...',
        lessons: [
          {
            id: '...',
            title: '...',
            description: '...',
            thinkingTask: {
              title: 'Think About It',
              content: '...'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: '...',
                  solution: '...'
                },
                {
                  id: 'ex2',
                  problem: '...',
                  solution: '...'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: '...' },
                { id: 'p2', problem: '...' },
                { id: 'p3', problem: '...' }
              ]
            }
          }
        ]
      },
      {
        id: 'quadratic-functions',
        title: 'Module 3: Quadratic Functions',
        description: '...',
        lessons: [
          {
            id: '...',
            title: '...',
            description: '...',
            thinkingTask: {
              title: 'Think About It',
              content: '...'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: '...',
                  solution: '...'
                },
                {
                  id: 'ex2',
                  problem: '...',
                  solution: '...'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: '...' },
                { id: 'p2', problem: '...' },
                { id: 'p3', problem: '...' }
              ]
            }
          }
        ]
      },
      {
        id: 'polynomials-polynomial-functions',
        title: 'Module 4: Polynomials and Polynomial Functions',
        description: '...',
        lessons: [
          {
            id: '...',
            title: '...',
            description: '...',
            thinkingTask: {
              title: 'Think About It',
              content: '...'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: '...',
                  solution: '...'
                },
                {
                  id: 'ex2',
                  problem: '...',
                  solution: '...'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: '...' },
                { id: 'p2', problem: '...' },
                { id: 'p3', problem: '...' }
              ]
            }
          }
        ]
      },
      {
        id: 'polynomials-equations',
        title: 'Module 5: Polynomial Equations',
        description: '...',
        lessons: [
          {
            id: '...',
            title: '...',
            description: '...',
            thinkingTask: {
              title: 'Think About It',
              content: '...'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: '...',
                  solution: '...'
                },
                {
                  id: 'ex2',
                  problem: '...',
                  solution: '...'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: '...' },
                { id: 'p2', problem: '...' },
                { id: 'p3', problem: '...' }
              ]
            }
          }
        ]
      },
      {
        id: 'inverse-radical-functions',
        title: 'Module 6: Inverse and Radical Functions',
        description: '...',
        lessons: [
          {
            id: '...',
            title: '...',
            description: '...',
            thinkingTask: {
              title: 'Think About It',
              content: '...'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: '...',
                  solution: '...'
                },
                {
                  id: 'ex2',
                  problem: '...',
                  solution: '...'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: '...' },
                { id: 'p2', problem: '...' },
                { id: 'p3', problem: '...' }
              ]
            }
          }
        ]
      },
      {
        id: 'exponential-functions',
        title: 'Module 7: Exponential Functions',
        description: '...',
        lessons: [
          {
            id: '...',
            title: '...',
            description: '...',
            thinkingTask: {
              title: 'Think About It',
              content: '...'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: '...',
                  solution: '...'
                },
                {
                  id: 'ex2',
                  problem: '...',
                  solution: '...'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: '...' },
                { id: 'p2', problem: '...' },
                { id: 'p3', problem: '...' }
              ]
            }
          }
        ]
      },
      {
        id: 'logarithmic-functions',
        title: 'Module 8: Logarithmic Functions',
        description: '...',
        lessons: [
          {
            id: '...',
            title: '...',
            description: '...',
            thinkingTask: {
              title: 'Think About It',
              content: '...'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: '...',
                  solution: '...'
                },
                {
                  id: 'ex2',
                  problem: '...',
                  solution: '...'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: '...' },
                { id: 'p2', problem: '...' },
                { id: 'p3', problem: '...' }
              ]
            }
          }
        ]
      },
      {
        id: 'rational-functions',
        title: 'Module 9: Rational Functions',
        description: '...',
        lessons: [
          {
            id: '...',
            title: '...',
            description: '...',
            thinkingTask: {
              title: 'Think About It',
              content: '...'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: '...',
                  solution: '...'
                },
                {
                  id: 'ex2',
                  problem: '...',
                  solution: '...'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: '...' },
                { id: 'p2', problem: '...' },
                { id: 'p3', problem: '...' }
              ]
            }
          }
        ]
      },
      {
        id: 'trigonometric-functions',
        title: 'Module 11: Trigonometric Functions',
        description: '...',
        lessons: [
          {
            id: '...',
            title: '...',
            description: '...',
            thinkingTask: {
              title: 'Think About It',
              content: '...'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: '...',
                  solution: '...'
                },
                {
                  id: 'ex2',
                  problem: '...',
                  solution: '...'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: '...' },
                { id: 'p2', problem: '...' },
                { id: 'p3', problem: '...' }
              ]
            }
          }
        ]
      }
    ]
  },
  {
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
              title: 'Think About It',
              content: 'What makes a relation a function? How does function notation help us work with mathematical relationships?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'If f(x) = 2x² - 3x + 1, find f(3)',
                  solution: 'f(3) = 2(3)² - 3(3) + 1 = 18 - 9 + 1 = 10'
                },
                {
                  id: 'ex2',
                  problem: 'Find the domain of g(x) = √(x - 2)',
                  solution: 'Domain: x ≥ 2 or [2, ∞) since we need x - 2 ≥ 0'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'If h(x) = x³ - 2x + 5, find h(-2)' },
                { id: 'p2', problem: 'Find the domain of f(x) = 1/(x - 3)' },
                { id: 'p3', problem: 'Find the range of f(x) = x² + 1' }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'statistics',
    title: 'Statistics',
    description: 'Analyze data, understand probability, and make statistical inferences.',
    icon: 'BarChart3',
    color: 'from-orange-500 to-orange-600',
    chapters: [
      {
        id: 'descriptive-statistics',
        title: 'Chapter 1: Descriptive Statistics',
        description: 'Summarize and describe data using measures of center, spread, and position.',
        lessons: [
          {
            id: '1.1',
            title: '1.1 Introduction to Statistics',
            description: 'Understand the role of statistics and distinguish between populations and samples.',
            thinkingTask: {
              title: 'Think About It',
              content: 'Why do we use samples instead of studying entire populations? What are the advantages and limitations of sampling?'
            },
            examples: {
              title: 'Guided Examples',
              problems: [
                {
                  id: 'ex1',
                  problem: 'Identify the population and sample: A survey of 500 high school students to determine average study time.',
                  solution: 'Population: All high school students; Sample: The 500 students surveyed'
                },
                {
                  id: 'ex2',
                  problem: 'Is this data quantitative or qualitative: Eye color of students',
                  solution: 'Qualitative (categorical) - eye color represents categories, not numerical values'
                }
              ]
            },
            practice: {
              title: 'Practice Problems',
              problems: [
                { id: 'p1', problem: 'Classify as quantitative or qualitative: Height of basketball players' },
                { id: 'p2', problem: 'Identify population and sample: Testing 100 light bulbs to estimate average lifespan' },
                { id: 'p3', problem: 'What is the difference between a parameter and a statistic?' }
              ]
            }
          }
        ]
      }
    ]
  }
];