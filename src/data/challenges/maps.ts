import type { Challenge } from '../../types/challenge';

export const mapsChallenges: Challenge[] = [
  {
    id: 'map-basics',
    title: 'Map Basics',
    difficulty: 'easy',
    category: 'maps',
    points: 10,
    successRate: 96.5,
    description: `## Maps in TypeScript

A Map is a collection of key-value pairs where keys can be of any type.

Create a Map from an array of [key, value] pairs and return its size.

### Example
\`\`\`typescript
createMap([["a", 1], ["b", 2], ["c", 3]]) // Returns: 3
\`\`\`
`,
    starterCode: `function createMap(pairs: [string, number][]): number {
    // Create a Map and return its size
    
}
`,
    solution: `function createMap(pairs: [string, number][]): number {
    const map = new Map(pairs);
    return map.size;
}`,
    testCases: [
      { id: '1', input: '[["a",1],["b",2],["c",3]]', expectedOutput: '3' },
      { id: '2', input: '[["x",10]]', expectedOutput: '1' }
    ]
  },
  {
    id: 'map-methods',
    title: 'Map Methods',
    difficulty: 'easy',
    category: 'maps',
    points: 10,
    successRate: 95.8,
    description: `## Map Methods

Use \`get\`, \`set\`, \`has\`, and \`delete\` methods on a Map.

Given a Map and operations, perform them and return the final Map as an object.

### Example
\`\`\`typescript
mapOperations()
// Create map, set "name" to "John", get "name", check if "age" exists
\`\`\`
`,
    starterCode: `function mapOperations(): { name: string; hasAge: boolean; size: number } {
    // Create a map, set "name" to "John", check if "age" exists
    
}
`,
    solution: `function mapOperations(): { name: string; hasAge: boolean; size: number } {
    const map = new Map<string, string>();
    map.set("name", "John");
    const name = map.get("name") || "";
    const hasAge = map.has("age");
    return { name, hasAge, size: map.size };
}`,
    testCases: [
      { id: '1', input: '', expectedOutput: '{"name":"John","hasAge":false,"size":1}' }
    ]
  },
  {
    id: 'word-order',
    title: 'Word Order',
    difficulty: 'medium',
    category: 'maps',
    points: 50,
    successRate: 91.63,
    description: `## Word Order (Frequency Counter)

Given an array of words, count the frequency of each word.

Return an array of counts in the order of first occurrence.

### Example
\`\`\`typescript
wordOrder(["bcdef", "abcdefg", "bcdef", "bcdef", "abcdefg"])
// Returns: [3, 2] (bcdef appears 3 times, abcdefg appears 2 times)
\`\`\`
`,
    starterCode: `function wordOrder(words: string[]): number[] {
    // Count frequency and return in order of first occurrence
    
}
`,
    solution: `function wordOrder(words: string[]): number[] {
    const map = new Map<string, number>();
    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }
    return [...map.values()];
}`,
    testCases: [
      { id: '1', input: '["bcdef","abcdefg","bcdef","bcdef","abcdefg"]', expectedOutput: '[3,2]' },
      { id: '2', input: '["a","b","a"]', expectedOutput: '[2,1]' }
    ]
  },
  {
    id: 'default-values',
    title: 'Default Values with Map',
    difficulty: 'easy',
    category: 'maps',
    points: 20,
    successRate: 93.29,
    description: `## Default Values

When getting a value from a Map, you can provide a default if the key doesn't exist.

Group words by their first letter.

### Example
\`\`\`typescript
groupByFirstLetter(["apple", "banana", "apricot", "cherry"])
// Returns: { a: ["apple", "apricot"], b: ["banana"], c: ["cherry"] }
\`\`\`
`,
    starterCode: `function groupByFirstLetter(words: string[]): Record<string, string[]> {
    // Group words by first letter
    
}
`,
    solution: `function groupByFirstLetter(words: string[]): Record<string, string[]> {
    const map = new Map<string, string[]>();
    for (const word of words) {
        const letter = word[0];
        if (!map.has(letter)) {
            map.set(letter, []);
        }
        map.get(letter)!.push(word);
    }
    return Object.fromEntries(map);
}`,
    testCases: [
      { id: '1', input: '["apple","banana","apricot","cherry"]', expectedOutput: '{"a":["apple","apricot"],"b":["banana"],"c":["cherry"]}' }
    ]
  },
  {
    id: 'iterating-maps',
    title: 'Iterating Over Maps',
    difficulty: 'easy',
    category: 'maps',
    points: 10,
    successRate: 94.2,
    description: `## Iterating Over Maps

You can iterate over a Map using \`for...of\`, \`.keys()\`, \`.values()\`, or \`.entries()\`.

Given a Map of student names to scores, return the sum of all scores.

### Example
\`\`\`typescript
sumScores([["Alice", 85], ["Bob", 90], ["Charlie", 78]])
// Returns: 253
\`\`\`
`,
    starterCode: `function sumScores(entries: [string, number][]): number {
    // Create map and sum all values
    
}
`,
    solution: `function sumScores(entries: [string, number][]): number {
    const map = new Map(entries);
    let sum = 0;
    for (const score of map.values()) {
        sum += score;
    }
    return sum;
}`,
    testCases: [
      { id: '1', input: '[["Alice",85],["Bob",90],["Charlie",78]]', expectedOutput: '253' }
    ]
  },
  {
    id: 'object-vs-map',
    title: 'Object vs Map',
    difficulty: 'easy',
    category: 'maps',
    points: 15,
    successRate: 92.0,
    description: `## Object vs Map

Convert between Object and Map representations.

Given an object, convert it to a Map and back to an object.

### Example
\`\`\`typescript
objectToMapToObject({ a: 1, b: 2 })
// Returns: { a: 1, b: 2 }
\`\`\`
`,
    starterCode: `function objectToMapToObject(obj: Record<string, number>): Record<string, number> {
    // Convert to Map and back
    
}
`,
    solution: `function objectToMapToObject(obj: Record<string, number>): Record<string, number> {
    const map = new Map(Object.entries(obj));
    return Object.fromEntries(map);
}`,
    testCases: [
      { id: '1', input: '{"a":1,"b":2}', expectedOutput: '{"a":1,"b":2}' }
    ]
  },
  {
    id: 'company-logo',
    title: 'Company Logo',
    difficulty: 'medium',
    category: 'maps',
    points: 30,
    successRate: 90.70,
    description: `## Company Logo (Frequency Sort)

Given a string, find the 3 most common characters.

If frequencies are equal, sort alphabetically.

Return an array of [character, count] pairs.

### Example
\`\`\`typescript
companyLogo("aabbbccde")
// Returns: [["b", 3], ["a", 2], ["c", 2]]
\`\`\`
`,
    starterCode: `function companyLogo(s: string): [string, number][] {
    // Find top 3 most common characters
    
}
`,
    solution: `function companyLogo(s: string): [string, number][] {
    const freq = new Map<string, number>();
    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }
    return [...freq.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .slice(0, 3);
}`,
    testCases: [
      { id: '1', input: '"aabbbccde"', expectedOutput: '[["b",3],["a",2],["c",2]]' }
    ]
  }
];
