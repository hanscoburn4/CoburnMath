import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '1.1',
  title: '1.1 Functions and Function Notation',
  description: 'Understand function notation, domain, range, and function evaluation.',
  learningObjectives: [
    'Define and identify functions using various representations',
    'Use function notation to evaluate functions at specific values',
    'Determine the domain and range of functions',
    'Interpret function notation in real-world contexts',
    'Distinguish between functions and non-functions'
  ],
  keyConceptsFile: 'precalculus/chapter-01/concepts/functions-notation-concepts.md',
  thinkingTask: {
    title: 'The Mystery Machine Investigation',
    content: 'Your group has discovered a mysterious machine in the school basement. When you input different numbers, it produces outputs according to some hidden rule. Here are some of the input-output pairs you\'ve observed:\n\n• Input 2 → Output 7\n• Input 5 → Output 16\n• Input -1 → Output 4\n• Input 0 → Output 3\n• Input 3 → Output 12\n\n**Your Mission:** Work together to figure out what this machine is doing. Can you discover the rule? Once you think you\'ve found it, test your theory by predicting what would happen with other inputs. How would you describe this machine\'s behavior to someone else? What questions arise as you investigate?\n\n*Consider: Are there inputs that might not work? What makes this relationship special? How might you represent this rule mathematically?*'
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
};

// Problem generation functions for dynamic practice
export const generateFunctionProblems = (level: 'beginner' | 'intermediate' | 'advanced') => {
  const problems = [];
  
  if (level === 'beginner') {
    // Generate simple function evaluation problems
    const coeffs = [1, 2, 3, -1, -2];
    const constants = [1, 2, 3, 4, 5, -1, -2, -3];
    const inputs = [0, 1, 2, 3, -1, -2];
    
    for (let i = 0; i < 3; i++) {
      const a = coeffs[Math.floor(Math.random() * coeffs.length)];
      const b = constants[Math.floor(Math.random() * constants.length)];
      const c = constants[Math.floor(Math.random() * constants.length)];
      const x = inputs[Math.floor(Math.random() * inputs.length)];
      
      const result = a * x * x + b * x + c;
      problems.push({
        id: `gen-b-${i}`,
        problem: `If $f(x) = ${a === 1 ? '' : a === -1 ? '-' : a}x^2 ${b >= 0 ? '+' : ''}${b === 1 ? '' : b === -1 ? '-' : b}x ${c >= 0 ? '+' : ''}${c}$, find $f(${x})$`,
        answer: `$f(${x}) = ${a === 1 ? '' : a === -1 ? '-' : a}(${x})^2 ${b >= 0 ? '+' : ''}${b === 1 ? '' : b === -1 ? '-' : b}(${x}) ${c >= 0 ? '+' : ''}${c} = ${result}$`,
        level: 'beginner'
      });
    }
  } else if (level === 'intermediate') {
    // Generate domain problems and function composition
    const problems_templates = [
      {
        type: 'domain_rational',
        generate: () => {
          const denom = Math.floor(Math.random() * 10) - 5;
          return {
            problem: `Find the domain of $g(x) = \\frac{1}{x ${denom >= 0 ? '+' : ''}${denom}}$`,
            answer: `Domain: $(-\\infty, ${-denom}) \\cup (${-denom}, \\infty)$ (all real numbers except $x = ${-denom}$)`
          };
        }
      },
      {
        type: 'domain_sqrt',
        generate: () => {
          const a = Math.floor(Math.random() * 5) + 1;
          const b = Math.floor(Math.random() * 10) - 5;
          const boundary = -b/a;
          return {
            problem: `Find the domain of $h(x) = \\sqrt{${a}x ${b >= 0 ? '+' : ''}${b}}$`,
            answer: `Need $${a}x ${b >= 0 ? '+' : ''}${b} \\geq 0$, so $x \\geq ${boundary}$. Domain: $[${boundary}, \\infty)$`
          };
        }
      }
    ];
    
    for (let i = 0; i < 3; i++) {
      const template = problems_templates[Math.floor(Math.random() * problems_templates.length)];
      const generated = template.generate();
      problems.push({
        id: `gen-i-${i}`,
        problem: generated.problem,
        answer: generated.answer,
        level: 'intermediate'
      });
    }
  } else { // advanced
    // Generate complex domain and composition problems
    const advanced_templates = [
      {
        generate: () => {
          const a = Math.floor(Math.random() * 3) + 1;
          const b = Math.floor(Math.random() * 6) - 3;
          const c = Math.floor(Math.random() * 5) + 1;
          return {
            problem: `Find the domain of $f(x) = \\frac{\\sqrt{x${b >= 0 ? '+' : ''}${b}}}{x^2-${c*c}}$`,
            answer: `Need $x${b >= 0 ? '+' : ''}${b} \\geq 0$ (so $x \\geq ${-b}$) and $x^2-${c*c} \\neq 0$ (so $x \\neq \\pm ${c}$). Domain: $[${-b}, ${c}) \\cup (${c}, \\infty)$`
          };
        }
      }
    ];
    
    for (let i = 0; i < 2; i++) {
      const template = advanced_templates[0];
      const generated = template.generate();
      problems.push({
        id: `gen-a-${i}`,
        problem: generated.problem,
        answer: generated.answer,
        level: 'advanced'
      });
    }
  }
  
  return problems;
};