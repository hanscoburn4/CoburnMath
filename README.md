# CoburnMath

# File Structure

src/

├── curriculum/

│   ├── courses.ts                  # Defines static course and chapter metadata (id, title, description, icon, color)

│   ├── lessons/                    # NEW: Centralized directory for all lesson data files

│   │   ├── algebra1/

│   │   │   ├── chapter-01/

│   │   │   │   ├── lesson-01-numerical-expressions.ts

│   │   │   │   ├── lesson-02-variables-expressions.ts

│   │   │   │   └── ... (all lessons for this chapter)

│   │   │   └── chapter-02/

│   │   │       └── ...

│   │   ├── algebra2/

│   │   │   └── ...

│   │   └── geometry/

│   │       └── ...

│   ├── concepts/                   # NEW: Centralized directory for all concept markdown files

│   │   ├── algebra1/

│   │   │   ├── chapter-01/

│   │   │   │   ├── numerical-expressions-concepts.md

│   │   │   │   └── variables-expressions-concepts.md

│   │   │   └── ... (all concepts for this chapter)

│   │   └── ...

│   ├── loader.ts                   # NEW: Utility to dynamically load lessons and build the full curriculumCourses object

│   ├── types.ts                    # Curriculum-specific types (can be merged with src/types/index.ts)

│   └── supporting-materials/       # Remains as is

│       └── ...

├── components/

│   └── ...

├── utils/

│   └── ...

├── types/                          # General application types (if separate from curriculum types)

│   └── index.ts

└── App.tsx

└── main.tsx

└── ...


