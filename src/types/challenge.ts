export type Difficulty = 'easy' | 'medium' | 'hard';

export type Category = 
  | 'introduction'
  | 'basic-data-types'
  | 'strings'
  | 'arrays'
  | 'sets'
  | 'maps'
  | 'math'
  | 'iterators'
  | 'date-time'
  | 'errors'
  | 'classes'
  | 'interfaces'
  | 'built-ins'
  | 'functionals'
  | 'regex'
  | 'promises';

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  isHidden?: boolean;
}

export interface Challenge {
  id: string;
  title: string;
  difficulty: Difficulty;
  category: Category;
  description: string;
  starterCode: string;
  testCases: TestCase[];
  solution: string;
  points: number;
  successRate: number;
}

export interface TestResult {
  testId: string;
  passed: boolean;
  input: string;
  expectedOutput: string;
  actualOutput: string;
  error?: string;
}

export interface UserProgress {
  solvedChallenges: string[];
  totalPoints: number;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  'introduction': 'Introduction',
  'basic-data-types': 'Basic Data Types',
  'strings': 'Strings',
  'arrays': 'Arrays',
  'sets': 'Sets',
  'maps': 'Maps & Collections',
  'math': 'Math',
  'iterators': 'Iterators & Generators',
  'date-time': 'Date and Time',
  'errors': 'Errors and Exceptions',
  'classes': 'Classes',
  'interfaces': 'Interfaces & Types',
  'built-ins': 'Built-Ins',
  'functionals': 'Functionals',
  'regex': 'Regex and Parsing',
  'promises': 'Promises & Async',
};

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  easy: '#43a047',
  medium: '#fb8c00',
  hard: '#e53935',
};
