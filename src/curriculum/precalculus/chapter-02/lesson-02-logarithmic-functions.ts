import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '2.2',
  title: '2.2 Logarithmic Functions',
  description: 'Understand logarithmic functions as inverses of exponential functions.',
  learningObjectives: [
    'Define logarithmic functions as inverses of exponential functions',
    'Convert between exponential and logarithmic forms',
    'Evaluate logarithmic expressions using properties of logarithms',
    'Solve logarithmic equations',
    'Apply logarithmic functions to real-world problems'
  ],
  keyConceptsFile: 'precalculus/chapter-02/concepts/logarithmic-functions-concepts.md',
  thinkingTask: {
    title: 'The Time Detective Challenge',
    content: 'You\'re an archaeologist who has discovered several ancient artifacts. Carbon-14 dating shows that these artifacts contain different amounts of carbon-14 compared to living organisms:\n\n• Artifact A: 75% of original carbon-14\n• Artifact B: 50% of original carbon-14  \n• Artifact C: 25% of original carbon-14\n• Artifact D: 12.5% of original carbon-14\n\nYou know that carbon-14 has a half-life of 5,730 years (meaning half of it decays every 5,730 years).\n\n**Your Mission:** Work together to determine the age of each artifact. But here\'s the challenge - you can\'t use a calculator that directly computes logarithms!\n\n**Guiding Questions:**\n• How can you use the half-life information to work backwards?\n• What patterns do you notice in the percentages?\n• How might you estimate ages that fall between the obvious half-life intervals?\n• What mathematical tools could help you solve this more systematically?\n\n**Extension:** If you found an artifact with 60% of its original carbon-14, how would you estimate its age? What mathematical operation would "undo" the exponential decay?\n\n*Think about: What\'s the relationship between exponential growth/decay and the process of finding unknown exponents?*'
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
        answer: '$\\log_4(16) - \\log_4(2) = \\log_4(\\frac{16}{2}) = \\log_4(8) = \\frac{3}{2}$ (since $4^{3/2} = 8$)'
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
};