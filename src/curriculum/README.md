# Modular Curriculum Structure

This directory contains a modular, file-based curriculum system designed for easy maintenance, editing, and expansion.

## Directory Structure

```
src/curriculum/
├── index.ts                          # Main curriculum export and course definitions
├── precalculus/                      # PreCalculus course content
│   ├── chapter-01/                   # Functions and Graphs
│   │   ├── lesson-01-functions-notation.ts
│   │   ├── lesson-02-function-transformations.ts
│   │   └── concepts/                 # Supporting concept files
│   │       ├── functions-notation-concepts.md
│   │       └── function-transformations-concepts.md
│   └── chapter-02/                   # Exponential and Logarithmic Functions
│       ├── lesson-01-exponential-functions.ts
│       ├── lesson-02-logarithmic-functions.ts
│       └── concepts/
│           ├── exponential-functions-concepts.md
│           └── logarithmic-functions-concepts.md
├── supporting-materials/             # Cross-curricular resources
│   ├── assessment-rubrics.md
│   ├── teaching-strategies.md
│   └── media-assets-guide.md
└── README.md                         # This file
```

## File Naming Conventions

### Lesson Files
- Format: `lesson-##-descriptive-name.ts`
- Example: `lesson-01-functions-notation.ts`
- Use TypeScript for structured data and type safety

### Concept Files
- Format: `descriptive-name-concepts.md`
- Example: `functions-notation-concepts.md`
- Use Markdown for rich text formatting

### Supporting Materials
- Use descriptive kebab-case names
- Include file type in name when helpful
- Group related materials in subdirectories

## Lesson File Structure

Each lesson file exports a standardized `CurriculumLesson` object containing:

```typescript
export const lessonData: CurriculumLesson = {
  id: string,                    // Unique identifier (e.g., "1.1")
  title: string,                 // Full lesson title
  description: string,           // Brief lesson description
  learningObjectives: string[],  // Array of specific learning goals
  keyConceptsFile: string,       // Path to concepts markdown file
  thinkingTask: {
    title: string,               // Task title
    content: string              // Full task description with LaTeX
  },
  practice: {
    title: string,               // Practice section title
    problems: PracticeProblem[]  // Array of practice problems
  }
};
```

## Practice Problem Structure

```typescript
interface PracticeProblem {
  id: string,                           // Unique identifier
  problem: string,                      // Problem statement with LaTeX
  answer?: string,                      // Solution with LaTeX
  level?: 'beginner' | 'intermediate' | 'advanced'
}
```

## Key Features

### 1. Modular Design
- Each lesson is completely self-contained
- Easy to edit individual lessons without affecting others
- Simple to add new lessons or remove existing ones
- Clear separation of content and structure

### 2. Standardized Format
- Consistent structure across all lessons
- Type safety with TypeScript interfaces
- Predictable file organization
- Easy to maintain and update

### 3. Rich Content Support
- LaTeX mathematical notation support
- Markdown formatting for concept files
- Structured thinking tasks following Building Thinking Classrooms principles
- Differentiated practice problems with multiple difficulty levels

### 4. Dynamic Problem Generation
- Each lesson can include problem generation functions
- Supports "Try Another Set" functionality
- Maintains educational value while providing variety
- Customizable difficulty and problem types

## Adding New Content

### Adding a New Lesson
1. Create a new lesson file following the naming convention
2. Export a `lessonData` object with all required fields
3. Create corresponding concept file in the `concepts/` directory
4. Add the lesson to the appropriate chapter in `index.ts`
5. Include any problem generation functions if needed

### Adding a New Chapter
1. Create a new directory under the course folder
2. Add lesson files and concepts subdirectory
3. Update the course definition in `index.ts`
4. Ensure all file paths are correct

### Adding a New Course
1. Create a new course directory
2. Follow the established chapter/lesson structure
3. Add course definition to `index.ts`
4. Update any navigation or routing logic

## Best Practices

### Content Creation
- Write clear, engaging thinking tasks that promote collaboration
- Include multiple difficulty levels for practice problems
- Provide complete solutions with step-by-step reasoning
- Use consistent mathematical notation and terminology

### File Management
- Keep individual files focused and manageable in size
- Use descriptive names that clearly indicate content
- Maintain consistent formatting and structure
- Include comments in TypeScript files for complex logic

### Quality Assurance
- Review all mathematical content for accuracy
- Test LaTeX rendering in the application
- Verify that all file paths are correct
- Ensure thinking tasks align with Building Thinking Classrooms principles

## Integration with Application

The curriculum system integrates with the main application through:

1. **Type Safety**: TypeScript interfaces ensure data consistency
2. **Dynamic Loading**: Lessons are imported and structured automatically
3. **Problem Generation**: Functions can be called to create new problem sets
4. **Content Rendering**: LaTeX and Markdown content is processed for display

## Future Enhancements

### Planned Features
- Automatic problem difficulty adjustment based on student performance
- Integration with external mathematical tools and graphing utilities
- Support for multimedia content (images, videos, interactive elements)
- Assessment and progress tracking capabilities
- Collaborative editing tools for educators

### Extensibility
The modular structure supports easy addition of:
- New problem types and generators
- Additional metadata for lessons and problems
- Integration with learning management systems
- Analytics and reporting capabilities
- Accessibility features and accommodations

## Contributing

When contributing to the curriculum:

1. Follow established naming conventions and file structure
2. Ensure all content is mathematically accurate and pedagogically sound
3. Test new content thoroughly in the application
4. Update documentation as needed
5. Consider the needs of diverse learners and teaching contexts

For questions or suggestions about the curriculum structure, please refer to the supporting materials or contact the development team.