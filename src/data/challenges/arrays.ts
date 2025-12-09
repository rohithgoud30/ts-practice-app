import type { Challenge } from '../../types/challenge';

export const arraysChallenges: Challenge[] = [
  {
    id: 'array-map',
    title: 'Array Map',
    difficulty: 'easy',
    category: 'arrays',
    points: 10,
    successRate: 97.5,
    description: `## Array Map

Use the \`map\` method to transform an array.

Given an array of numbers, return a new array where each number is multiplied by 2.

### Example
\`\`\`typescript
doubleArray([1, 2, 3]) // Returns: [2, 4, 6]
\`\`\`
`,
    starterCode: `function doubleArray(arr: number[]): number[] {
    // Use array map to double each element
    
}
`,
    solution: `function doubleArray(arr: number[]): number[] {
    return arr.map(x => x * 2);
}`,
    testCases: [
      { id: '1', input: '[1, 2, 3]', expectedOutput: '[2, 4, 6]' },
      { id: '2', input: '[5, 10]', expectedOutput: '[10, 20]' }
    ]
  },
  {
    id: 'array-filter',
    title: 'Array Filter',
    difficulty: 'easy',
    category: 'arrays',
    points: 10,
    successRate: 96.8,
    description: `## Array Filter

Use the \`filter\` method to select elements from an array.

Given an array of numbers, return only the even numbers.

### Example
\`\`\`typescript
filterEvens([1, 2, 3, 4, 5, 6]) // Returns: [2, 4, 6]
\`\`\`
`,
    starterCode: `function filterEvens(arr: number[]): number[] {
    // Use array filter to get even numbers
    
}
`,
    solution: `function filterEvens(arr: number[]): number[] {
    return arr.filter(x => x % 2 === 0);
}`,
    testCases: [
      { id: '1', input: '[1, 2, 3, 4, 5, 6]', expectedOutput: '[2, 4, 6]' },
      { id: '2', input: '[7, 8, 9, 10]', expectedOutput: '[8, 10]' }
    ]
  },
  {
    id: 'array-reduce',
    title: 'Array Reduce',
    difficulty: 'easy',
    category: 'arrays',
    points: 15,
    successRate: 94.2,
    description: `## Array Reduce

Use the \`reduce\` method to compute a single value from an array.

Given an array of numbers, return the sum of all elements.

### Example
\`\`\`typescript
sumArray([1, 2, 3, 4]) // Returns: 10
\`\`\`
`,
    starterCode: `function sumArray(arr: number[]): number {
    // Use array reduce to sum all elements
    
}
`,
    solution: `function sumArray(arr: number[]): number {
    return arr.reduce((sum, x) => sum + x, 0);
}`,
    testCases: [
      { id: '1', input: '[1, 2, 3, 4]', expectedOutput: '10' },
      { id: '2', input: '[10, 20, 30]', expectedOutput: '60' }
    ]
  },
  {
    id: 'array-find',
    title: 'Array Find & FindIndex',
    difficulty: 'easy',
    category: 'arrays',
    points: 10,
    successRate: 95.5,
    description: `## Find and FindIndex

Use \`find\` to get the first element matching a condition.
Use \`findIndex\` to get its index.

Given an array of numbers, find the first number greater than 10 and return an object with the value and its index.

### Example
\`\`\`typescript
findFirstGreater([5, 8, 12, 15]) // Returns: { value: 12, index: 2 }
\`\`\`
`,
    starterCode: `function findFirstGreater(arr: number[]): { value: number | undefined; index: number } {
    // Use find and findIndex
    
}
`,
    solution: `function findFirstGreater(arr: number[]): { value: number | undefined; index: number } {
    const value = arr.find(x => x > 10);
    const index = arr.findIndex(x => x > 10);
    return { value, index };
}`,
    testCases: [
      { id: '1', input: '[5, 8, 12, 15]', expectedOutput: '{"value":12,"index":2}' },
      { id: '2', input: '[1, 2, 3]', expectedOutput: '{"index":-1}' }
    ]
  },
  {
    id: 'array-some-every',
    title: 'Array Some & Every',
    difficulty: 'easy',
    category: 'arrays',
    points: 10,
    successRate: 96.0,
    description: `## Some and Every

- \`some\` returns true if at least one element passes the test
- \`every\` returns true if all elements pass the test

Given an array, check if it has at least one negative number and if all numbers are positive.

### Example
\`\`\`typescript
checkArray([1, 2, -3, 4]) // Returns: { hasNegative: true, allPositive: false }
\`\`\`
`,
    starterCode: `function checkArray(arr: number[]): { hasNegative: boolean; allPositive: boolean } {
    // Use some and every
    
}
`,
    solution: `function checkArray(arr: number[]): { hasNegative: boolean; allPositive: boolean } {
    return {
        hasNegative: arr.some(x => x < 0),
        allPositive: arr.every(x => x > 0)
    };
}`,
    testCases: [
      { id: '1', input: '[1, 2, -3, 4]', expectedOutput: '{"hasNegative":true,"allPositive":false}' },
      { id: '2', input: '[1, 2, 3]', expectedOutput: '{"hasNegative":false,"allPositive":true}' }
    ]
  },
  {
    id: 'array-flat',
    title: 'Array Flat & FlatMap',
    difficulty: 'medium',
    category: 'arrays',
    points: 20,
    successRate: 89.5,
    description: `## Flat and FlatMap

- \`flat\` flattens nested arrays
- \`flatMap\` maps then flattens

Given a nested array, flatten it completely.

### Example
\`\`\`typescript
flattenDeep([1, [2, [3, [4]]]]) // Returns: [1, 2, 3, 4]
\`\`\`
`,
    starterCode: `function flattenDeep(arr: any[]): number[] {
    // Flatten the array completely
    
}
`,
    solution: `function flattenDeep(arr: any[]): number[] {
    return arr.flat(Infinity) as number[];
}`,
    testCases: [
      { id: '1', input: '[1, [2, [3, [4]]]]', expectedOutput: '[1,2,3,4]' },
      { id: '2', input: '[[1, 2], [3, 4]]', expectedOutput: '[1,2,3,4]' }
    ]
  },
  {
    id: 'array-sort',
    title: 'Array Sort (Custom Comparators)',
    difficulty: 'medium',
    category: 'arrays',
    points: 20,
    successRate: 88.3,
    description: `## Array Sort with Comparator

Sort an array of objects by a specific property.

Given an array of people with name and age, sort by age ascending.

### Example
\`\`\`typescript
sortByAge([{name: "Bob", age: 30}, {name: "Alice", age: 25}])
// Returns: [{name: "Alice", age: 25}, {name: "Bob", age: 30}]
\`\`\`
`,
    starterCode: `interface Person {
    name: string;
    age: number;
}

function sortByAge(people: Person[]): Person[] {
    // Sort by age ascending
    
}
`,
    solution: `interface Person {
    name: string;
    age: number;
}

function sortByAge(people: Person[]): Person[] {
    return [...people].sort((a, b) => a.age - b.age);
}`,
    testCases: [
      { id: '1', input: '[{"name":"Bob","age":30},{"name":"Alice","age":25}]', expectedOutput: '[{"name":"Alice","age":25},{"name":"Bob","age":30}]' }
    ]
  },
  {
    id: 'array-slice-splice',
    title: 'Array Slice & Splice',
    difficulty: 'easy',
    category: 'arrays',
    points: 10,
    successRate: 94.8,
    description: `## Slice vs Splice

- \`slice(start, end)\` returns a portion without modifying original
- \`splice(start, deleteCount, ...items)\` modifies the array

Given an array and indices, return the sliced portion.

### Example
\`\`\`typescript
getSlice([1, 2, 3, 4, 5], 1, 4) // Returns: [2, 3, 4]
\`\`\`
`,
    starterCode: `function getSlice(arr: number[], start: number, end: number): number[] {
    // Use slice to get portion
    
}
`,
    solution: `function getSlice(arr: number[], start: number, end: number): number[] {
    return arr.slice(start, end);
}`,
    testCases: [
      { id: '1', input: '[1, 2, 3, 4, 5], 1, 4', expectedOutput: '[2,3,4]' },
      { id: '2', input: '[10, 20, 30, 40], 0, 2', expectedOutput: '[10,20]' }
    ]
  },
  {
    id: 'runner-up-score',
    title: 'Find the Runner-Up Score!',
    difficulty: 'easy',
    category: 'arrays',
    points: 10,
    successRate: 94.59,
    description: `## Runner-Up Score

Given an array of scores, find the second highest (runner-up) score.

### Example
\`\`\`typescript
runnerUp([5, 2, 3, 6, 6, 5]) // Returns: 5
\`\`\`
`,
    starterCode: `function runnerUp(scores: number[]): number {
    // Find the second highest score
    
}
`,
    solution: `function runnerUp(scores: number[]): number {
    const uniqueSorted = [...new Set(scores)].sort((a, b) => b - a);
    return uniqueSorted[1];
}`,
    testCases: [
      { id: '1', input: '[5, 2, 3, 6, 6, 5]', expectedOutput: '5' },
      { id: '2', input: '[2, 3, 6, 6, 5]', expectedOutput: '5' }
    ]
  },
  {
    id: 'nested-arrays',
    title: 'Nested Arrays',
    difficulty: 'easy',
    category: 'arrays',
    points: 10,
    successRate: 92.43,
    description: `## Nested Arrays

Given a list of students with their scores, find the student(s) with the second lowest score.

Return the names of students with the second lowest score, sorted alphabetically.

### Example
\`\`\`typescript
secondLowest([["Harry", 37.21], ["Berry", 37.21], ["Tina", 37.2], ["Akriti", 41]])
// Returns: ["Berry", "Harry"]
\`\`\`
`,
    starterCode: `function secondLowest(students: [string, number][]): string[] {
    // Find names with second lowest score
    
}
`,
    solution: `function secondLowest(students: [string, number][]): string[] {
    const scores = [...new Set(students.map(s => s[1]))].sort((a, b) => a - b);
    const secondLowestScore = scores[1];
    return students
        .filter(s => s[1] === secondLowestScore)
        .map(s => s[0])
        .sort();
}`,
    testCases: [
      { id: '1', input: '[["Harry",37.21],["Berry",37.21],["Tina",37.2],["Akriti",41]]', expectedOutput: '["Berry","Harry"]' }
    ]
  }
];
