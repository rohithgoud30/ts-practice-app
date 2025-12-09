import type { Challenge } from '../../types/challenge';

export const builtInsChallenges: Challenge[] = [
  {
    id: 'typeof-instanceof',
    title: 'typeof and instanceof',
    difficulty: 'easy',
    category: 'built-ins',
    points: 10,
    successRate: 95.0,
    description: `## Type Checking

Use \`typeof\` for primitive types and \`instanceof\` for object types.

Check the type of various values.

### Example
\`\`\`typescript
checkType("hello") // Returns: "string"
checkType([1,2,3]) // Returns: "array"
\`\`\`
`,
    starterCode: `function checkType(value: unknown): string {
    // Return "string", "number", "boolean", "array", "object", or "function"
    
}
`,
    solution: `function checkType(value: unknown): string {
    if (Array.isArray(value)) return "array";
    if (typeof value === "function") return "function";
    if (typeof value === "object") return "object";
    return typeof value;
}`,
    testCases: [
      { id: '1', input: '"hello"', expectedOutput: 'string' },
      { id: '2', input: '[1,2,3]', expectedOutput: 'array' },
      { id: '3', input: '42', expectedOutput: 'number' }
    ]
  },
  {
    id: 'object-methods',
    title: 'Object.keys/values/entries',
    difficulty: 'easy',
    category: 'built-ins',
    points: 10,
    successRate: 94.5,
    description: `## Object Methods

Use Object.keys(), Object.values(), and Object.entries() to work with objects.

Return information about an object.

### Example
\`\`\`typescript
objectInfo({ a: 1, b: 2 })
// Returns: { keys: ["a", "b"], values: [1, 2], entries: [["a", 1], ["b", 2]] }
\`\`\`
`,
    starterCode: `function objectInfo(obj: Record<string, number>): {
    keys: string[];
    values: number[];
    entries: [string, number][];
} {
    // Return keys, values, and entries
    
}
`,
    solution: `function objectInfo(obj: Record<string, number>): {
    keys: string[];
    values: number[];
    entries: [string, number][];
} {
    return {
        keys: Object.keys(obj),
        values: Object.values(obj),
        entries: Object.entries(obj)
    };
}`,
    testCases: [
      { id: '1', input: '{"a":1,"b":2}', expectedOutput: '{"keys":["a","b"],"values":[1,2],"entries":[["a",1],["b",2]]}' }
    ]
  },
  {
    id: 'json-methods',
    title: 'JSON Parse & Stringify',
    difficulty: 'easy',
    category: 'built-ins',
    points: 10,
    successRate: 96.0,
    description: `## JSON Methods

Use JSON.stringify() and JSON.parse() to convert between objects and strings.

### Example
\`\`\`typescript
roundTrip({ name: "John", age: 30 })
// Stringifies then parses, returning the original object
\`\`\`
`,
    starterCode: `function roundTrip<T>(obj: T): T {
    // Stringify then parse
    
}
`,
    solution: `function roundTrip<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}`,
    testCases: [
      { id: '1', input: '{"name":"John","age":30}', expectedOutput: '{"name":"John","age":30}' }
    ]
  },
  {
    id: 'spread-rest',
    title: 'Spread & Rest Operators',
    difficulty: 'easy',
    category: 'built-ins',
    points: 15,
    successRate: 93.0,
    description: `## Spread and Rest Operators

Use spread (...) to expand and rest to collect.

Merge multiple arrays and find their sum.

### Example
\`\`\`typescript
mergeAndSum([1, 2], [3, 4], [5]) // Returns: { merged: [1,2,3,4,5], sum: 15 }
\`\`\`
`,
    starterCode: `function mergeAndSum(...arrays: number[][]): { merged: number[]; sum: number } {
    // Merge arrays and calculate sum
    
}
`,
    solution: `function mergeAndSum(...arrays: number[][]): { merged: number[]; sum: number } {
    const merged = arrays.flat();
    const sum = merged.reduce((a, b) => a + b, 0);
    return { merged, sum };
}`,
    testCases: [
      { id: '1', input: '[1,2], [3,4], [5]', expectedOutput: '{"merged":[1,2,3,4,5],"sum":15}' }
    ]
  },
  {
    id: 'destructuring',
    title: 'Destructuring Assignment',
    difficulty: 'easy',
    category: 'built-ins',
    points: 15,
    successRate: 92.0,
    description: `## Destructuring

Extract values from arrays and objects using destructuring.

### Example
\`\`\`typescript
extractInfo({ name: "Alice", age: 25, city: "NYC" })
// Returns: { greeting: "Hello, Alice!", location: "NYC" }
\`\`\`
`,
    starterCode: `function extractInfo(person: { name: string; age: number; city: string }): {
    greeting: string;
    location: string;
} {
    // Use destructuring to extract name and city
    
}
`,
    solution: `function extractInfo(person: { name: string; age: number; city: string }): {
    greeting: string;
    location: string;
} {
    const { name, city } = person;
    return {
        greeting: \`Hello, \${name}!\`,
        location: city
    };
}`,
    testCases: [
      { id: '1', input: '{"name":"Alice","age":25,"city":"NYC"}', expectedOutput: '{"greeting":"Hello, Alice!","location":"NYC"}' }
    ]
  },
  {
    id: 'zipped',
    title: 'Zipped!',
    difficulty: 'easy',
    category: 'built-ins',
    points: 10,
    successRate: 97.55,
    description: `## Zip Arrays

Combine multiple arrays element-wise (like Python's zip).

### Example
\`\`\`typescript
zip([1, 2, 3], ["a", "b", "c"]) // Returns: [[1, "a"], [2, "b"], [3, "c"]]
\`\`\`
`,
    starterCode: `function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
    // Zip two arrays together
    
}
`,
    solution: `function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
    const length = Math.min(arr1.length, arr2.length);
    return Array.from({ length }, (_, i) => [arr1[i], arr2[i]]);
}`,
    testCases: [
      { id: '1', input: '[1,2,3], ["a","b","c"]', expectedOutput: '[[1,"a"],[2,"b"],[3,"c"]]' }
    ]
  },
  {
    id: 'any-or-all',
    title: 'Any or All',
    difficulty: 'easy',
    category: 'built-ins',
    points: 20,
    successRate: 94.63,
    description: `## Any or All

Check if any or all elements satisfy a condition.

Given an array of numbers, check if any is negative and if all are positive.

### Example
\`\`\`typescript
anyAllPositive([1, 2, -3, 4])
// Returns: { anyNegative: true, allPositive: false }
\`\`\`
`,
    starterCode: `function anyAllPositive(nums: number[]): { anyNegative: boolean; allPositive: boolean } {
    // Check using some and every
    
}
`,
    solution: `function anyAllPositive(nums: number[]): { anyNegative: boolean; allPositive: boolean } {
    return {
        anyNegative: nums.some(n => n < 0),
        allPositive: nums.every(n => n > 0)
    };
}`,
    testCases: [
      { id: '1', input: '[1, 2, -3, 4]', expectedOutput: '{"anyNegative":true,"allPositive":false}' },
      { id: '2', input: '[1, 2, 3]', expectedOutput: '{"anyNegative":false,"allPositive":true}' }
    ]
  },
  {
    id: 'athlete-sort',
    title: 'Sorting Athletes',
    difficulty: 'medium',
    category: 'built-ins',
    points: 30,
    successRate: 95.69,
    description: `## Sorting Athletes

Sort a list of athletes by a specific attribute index.

### Example
\`\`\`typescript
sortAthletes([
  ["Amy", "50", "36"],
  ["Bob", "30", "42"],
  ["Jo", "40", "38"]
], 1)
// Sort by column 1 (second number)
// Returns: [["Bob", "30", "42"], ["Jo", "40", "38"], ["Amy", "50", "36"]]
\`\`\`
`,
    starterCode: `function sortAthletes(athletes: string[][], k: number): string[][] {
    // Sort by the k-th column (numeric comparison)
    
}
`,
    solution: `function sortAthletes(athletes: string[][], k: number): string[][] {
    return [...athletes].sort((a, b) => Number(a[k]) - Number(b[k]));
}`,
    testCases: [
      { id: '1', input: '[["Amy","50","36"],["Bob","30","42"],["Jo","40","38"]], 1', expectedOutput: '[["Bob","30","42"],["Jo","40","38"],["Amy","50","36"]]' }
    ]
  }
];
