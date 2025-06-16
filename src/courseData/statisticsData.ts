import { Course } from '../types';

export const statisticsData: Course = {
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
                problem: 'Identify the population and sample: A survey of $500$ high school students to determine average study time.',
                solution: 'Population: All high school students; Sample: The $500$ students surveyed'
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
              { id: 'p2', problem: 'Identify population and sample: Testing $100$ light bulbs to estimate average lifespan' },
              { id: 'p3', problem: 'What is the difference between a parameter and a statistic?' }
            ]
          }
        },
        {
          id: '1.2',
          title: '1.2 Measures of Central Tendency',
          description: 'Calculate and interpret mean, median, and mode.',
          thinkingTask: {
            title: 'Think About It',
            content: 'When might the median be a better measure of center than the mean? How do outliers affect these measures?'
          },
          examples: {
            title: 'Guided Examples',
            problems: [
              {
                id: 'ex1',
                problem: 'Find the mean of the data set: $\\{12, 15, 18, 20, 25\\}$',
                solution: '$\\bar{x} = \\frac{12 + 15 + 18 + 20 + 25}{5} = \\frac{90}{5} = 18$'
              },
              {
                id: 'ex2',
                problem: 'Find the median of: $\\{3, 7, 12, 15, 18, 22, 25\\}$',
                solution: 'The median is the middle value: $15$'
              }
            ]
          },
          practice: {
            title: 'Practice Problems',
            problems: [
              { id: 'p1', problem: 'Find the mean and median of: $\\{8, 12, 15, 18, 22\\}$' },
              { id: 'p2', problem: 'Which measure of center is most affected by outliers?' },
              { id: 'p3', problem: 'Find the mode of: $\\{2, 3, 3, 5, 7, 7, 7, 9\\}$' }
            ]
          }
        }
      ]
    },
    {
      id: 'probability',
      title: 'Chapter 2: Probability',
      description: 'Understand probability concepts and calculate probabilities of events.',
      lessons: [
        {
          id: '2.1',
          title: '2.1 Basic Probability',
          description: 'Learn fundamental probability concepts and calculate simple probabilities.',
          thinkingTask: {
            title: 'Think About It',
            content: 'What does it mean when we say the probability of an event is $\\frac{1}{2}$? How do we interpret probability in real-world contexts?'
          },
          examples: {
            title: 'Guided Examples',
            problems: [
              {
                id: 'ex1',
                problem: 'What is the probability of rolling a $4$ on a fair six-sided die?',
                solution: '$P(4) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}} = \\frac{1}{6}$'
              },
              {
                id: 'ex2',
                problem: 'A bag contains $3$ red balls and $7$ blue balls. What is $P(\\text{red})$?',
                solution: '$P(\\text{red}) = \\frac{3}{3 + 7} = \\frac{3}{10} = 0.3$'
              }
            ]
          },
          practice: {
            title: 'Practice Problems',
            problems: [
              { id: 'p1', problem: 'What is the probability of drawing a heart from a standard deck of cards?' },
              { id: 'p2', problem: 'If $P(A) = 0.3$, what is $P(A^c)$?' },
              { id: 'p3', problem: 'A spinner has $8$ equal sections numbered $1$ to $8$. Find $P(\\text{even number})$.' }
            ]
          }
        }
      ]
    }
  ]
};