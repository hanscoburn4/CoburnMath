import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '2.1',
  title: '2.1 Exponential Functions',
  description: 'Study exponential functions, their properties, and applications.',
  learningObjectives: [
    'Define and identify exponential functions',
    'Evaluate exponential expressions and solve basic exponential equations',
    'Understand the properties of exponential functions (domain, range, asymptotes)',
    'Model real-world situations using exponential functions',
    'Distinguish between exponential growth and decay'
  ],
  keyConceptsFile: 'precalculus/chapter-02/concepts/exponential-functions-concepts.md',
  thinkingTask: {
    title: 'The Viral Video Challenge',
    content: 'A student posts a funny video online. On the first day, 3 people watch it. Each person who watches the video shares it with exactly 2 friends the next day, and those friends watch it and share it the following day.\n\n**Your Investigation:** Work together to explore this situation:\n\n1. How many people watch the video each day for the first week?\n2. Create a visual representation (table, graph, or diagram) showing the growth pattern\n3. Can you find a mathematical rule that predicts the number of viewers on any given day?\n4. When will the video reach 1 million views?\n\n**Extension Questions:**\n• What if each person shared with 3 friends instead of 2?\n• What if only half the people who watch actually share it?\n• How does this compare to a video that gains 100 new viewers each day?\n\n**Real-World Connections:** Where else do you see this type of growth pattern? What factors might cause the growth to slow down or change?\n\n*Consider: What makes this different from linear growth? How can mathematics help us model and predict viral phenomena?*'
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
        answer: '$2^{2x+1} = (2^2)^{x-1} = 2^{2(x-1)} = 2^{2x-2}$\nSo $2x + 1 = 2x - 2$, which gives $1 = -2$ (no solution)'
      },
      { 
        id: 'p6', 
        problem: 'A radioactive substance decays according to $N(t) = N_0 e^{-0.05t}$ where $t$ is in years. If 40% remains after time $T$, find $T$',
        level: 'advanced',
        answer: '$0.4N_0 = N_0 e^{-0.05T}$\n$0.4 = e^{-0.05T}$\n$\\ln(0.4) = -0.05T$\n$T = \\frac{\\ln(0.4)}{-0.05} \\approx 18.33$ years'
      }
    ]
  }
};

// Problem generation for exponential functions
export const generateExponentialProblems = (level: 'beginner' | 'intermediate' | 'advanced') => {
  const problems = [];
  
  if (level === 'beginner') {
    const bases = [2, 3, 5];
    const powers = [2, 3, 4, 5];
    
    for (let i = 0; i < 3; i++) {
      const base = bases[Math.floor(Math.random() * bases.length)];
      const power = powers[Math.floor(Math.random() * powers.length)];
      const result = Math.pow(base, power);
      
      problems.push({
        id: `gen-b-${i}`,
        problem: `Solve: $${base}^x = ${result}$`,
        answer: `$x = ${power}$ (since $${base}^${power} = ${result}$)`,
        level: 'beginner'
      });
    }
  } else if (level === 'intermediate') {
    for (let i = 0; i < 3; i++) {
      const principal = [1000, 1500, 2000][Math.floor(Math.random() * 3)];
      const rate = [0.05, 0.06, 0.08][Math.floor(Math.random() * 3)];
      const time = [3, 4, 5][Math.floor(Math.random() * 3)];
      const result = principal * Math.pow(1 + rate, time);
      
      problems.push({
        id: `gen-i-${i}`,
        problem: `An investment of $${principal} grows at ${rate * 100}% annually. Find the value after ${time} years using $A = P(1+r)^t$`,
        answer: `$A = ${principal}(1.${rate.toString().slice(2).padEnd(2, '0')})^${time} = ${principal}(${(1+rate).toFixed(2)})^${time} \\approx \\$${result.toFixed(2)}$`,
        level: 'intermediate'
      });
    }
  }
  
  return problems;
};