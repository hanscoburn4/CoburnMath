import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '8.1',
  title: '8.1 Logarithms and Logarithmic Functions',
  description: 'Understand logarithms as inverse functions of exponentials and learn their properties.',
  learningObjectives: [
    'Define logarithms as inverse functions of exponentials',
    'Convert between exponential and logarithmic forms',
    'Evaluate logarithmic expressions',
    'Graph logarithmic functions',
    'Apply logarithms to real-world problems'
  ],
  keyConceptsFile: 'algebra2/chapter-08/concepts/logarithms-logarithmic-functions-concepts.md',
  thinkingTask: {
    title: 'The Archaeological Dating Mystery',
    content: 'Archaeologists have discovered artifacts with different amounts of carbon-14 remaining:\n\n**Artifact A:** 75% of original carbon-14\n**Artifact B:** 50% of original carbon-14\n**Artifact C:** 25% of original carbon-14\n**Artifact D:** 12.5% of original carbon-14\n\nCarbon-14 has a half-life of 5,730 years, meaning half decays every 5,730 years.\n\n**Your Investigation:** Work together to determine the age of each artifact:\n\n1. How many half-lives have passed for each artifact?\n2. Calculate the approximate age of each artifact\n3. If an artifact has 60% of its carbon-14, how would you estimate its age?\n4. What mathematical operation "undoes" the exponential decay?\n5. How do archaeologists use this method in practice?\n\n**Extension Questions:**\n• What are the limitations of carbon-14 dating?\n• How do other radioactive elements provide different dating ranges?\n• What if the decay rate was different?\n• How do scientists verify their dating methods?\n\n**Mathematical Connection:**\n• If N(t) = N₀(0.5)^(t/5730), how do you solve for t?\n• What role do logarithms play in "undoing" exponential functions?\n\n*Think about: How do logarithms help us solve problems involving exponential relationships? What makes logarithms the "inverse" of exponentials?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Convert to logarithmic form: $2^5 = 32$',
        level: 'beginner',
        answer: '$\\log_2(32) = 5$'
      },
      { 
        id: 'p2', 
        problem: 'Evaluate: $\\log_3(27)$',
        level: 'beginner',
        answer: '$\\log_3(27) = \\log_3(3^3) = 3$'
      },
      { 
        id: 'p3', 
        problem: 'Solve: $\\log_5(x) = 3$',
        level: 'intermediate',
        answer: 'Convert to exponential form: $x = 5^3 = 125$'
      },
      { 
        id: 'p4', 
        problem: 'Find the domain of $f(x) = \\log_2(x - 3)$',
        level: 'intermediate',
        answer: 'Need $x - 3 > 0$, so $x > 3$. Domain: $(3, \\infty)$'
      },
      { 
        id: 'p5', 
        problem: 'Graph $g(x) = \\log_2(x) + 1$ and identify key features',
        level: 'advanced',
        answer: 'Vertical shift of $\\log_2(x)$ up 1 unit. Vertical asymptote: $x = 0$, passes through $(1, 1)$ and $(2, 2)$'
      },
      { 
        id: 'p6', 
        problem: 'If a population grows according to $P(t) = 1000 \\cdot 2^t$ and reaches 8000, find the time t.',
        level: 'advanced',
        answer: '$8000 = 1000 \\cdot 2^t$, so $8 = 2^t$, giving $t = \\log_2(8) = 3$ time units'
      }
    ]
  }
};