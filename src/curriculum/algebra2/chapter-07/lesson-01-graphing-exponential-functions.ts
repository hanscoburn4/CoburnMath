import { CurriculumLesson } from '../../index';

export const lessonData: CurriculumLesson = {
  id: '7.1',
  title: '7.1 Graphing Exponential Functions',
  description: 'Learn to graph exponential functions and understand their properties.',
  learningObjectives: [
    'Graph exponential functions of the form f(x) = abˣ',
    'Identify domain, range, and asymptotes of exponential functions',
    'Distinguish between exponential growth and decay',
    'Apply transformations to exponential functions',
    'Model real-world situations with exponential functions'
  ],
  keyConceptsFile: 'algebra2/chapter-07/concepts/graphing-exponential-functions-concepts.md',
  thinkingTask: {
    title: 'The Social Media Viral Challenge',
    content: 'A video goes viral on social media with different sharing patterns:\n\n**Pattern A:** Starts with 5 views, doubles every hour\n**Pattern B:** Starts with 100 views, increases by 50% every hour\n**Pattern C:** Starts with 1000 views, but loses 20% of viewers every hour\n\n**Your Investigation:** Work together to analyze these viral patterns:\n\n1. Write exponential functions for each pattern\n2. Graph all three functions on the same coordinate system\n3. Which video has the most views after 6 hours?\n4. Which video grows fastest initially? Which grows fastest long-term?\n5. What happens to Pattern C over time? Is this realistic?\n\n**Extension Questions:**\n• How do real social media algorithms affect view patterns?\n• What factors cause viral content to "peak" and then decline?\n• How would you model a video that goes viral, peaks, then declines?\n• What if Pattern A had a maximum capacity of 1 million views?\n\n**Real-World Connections:**\n• How do marketing teams predict viral content success?\n• What role does timing play in viral content?\n• How do different platforms have different growth patterns?\n\n*Think about: What makes exponential growth so powerful? How do real-world limitations affect mathematical models?*'
  },
  practice: {
    title: 'Practice Problems',
    problems: [
      { 
        id: 'p1', 
        problem: 'Identify the base and initial value of $f(x) = 3 \\cdot 2^x$',
        level: 'beginner',
        answer: 'Initial value: $a = 3$, Base: $b = 2$. This represents exponential growth since $b > 1$'
      },
      { 
        id: 'p2', 
        problem: 'Determine if $g(x) = 5 \\cdot (0.8)^x$ represents growth or decay',
        level: 'beginner',
        answer: 'Exponential decay since $0 < b = 0.8 < 1$. The function decreases by 20% each time x increases by 1'
      },
      { 
        id: 'p3', 
        problem: 'Find the domain and range of $h(x) = 2^x - 3$',
        level: 'intermediate',
        answer: 'Domain: $(-\\infty, \\infty)$. Range: $(-3, \\infty)$ since $2^x > 0$ always, so $2^x - 3 > -3$'
      },
      { 
        id: 'p4', 
        problem: 'Graph $f(x) = (\\frac{1}{2})^x$ and identify key features',
        level: 'intermediate',
        answer: 'Exponential decay, y-intercept: $(0, 1)$, horizontal asymptote: $y = 0$, passes through $(1, 0.5)$ and $(-1, 2)$'
      },
      { 
        id: 'p5', 
        problem: 'A bacteria population triples every 2 hours. If there are initially 50 bacteria, write the exponential function.',
        level: 'advanced',
        answer: 'Since population triples every 2 hours: $P(t) = 50 \\cdot 3^{t/2}$ where t is time in hours'
      },
      { 
        id: 'p6', 
        problem: 'Compare the growth rates of $f(x) = 2^x$ and $g(x) = x^2$ for large values of x.',
        level: 'advanced',
        answer: 'For large x, exponential function $f(x) = 2^x$ grows much faster than polynomial $g(x) = x^2$. Exponential functions eventually dominate polynomial functions.'
      }
    ]
  }
};