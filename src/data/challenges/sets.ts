import type { Challenge } from '../../types/challenge';

export const setsChallenges: Challenge[] = [
  {
    id: 'intro-to-sets',
    title: 'Introduction to Sets',
    difficulty: 'easy',
    category: 'sets',
    points: 10,
    successRate: 98.31,
    description: `## Sets in TypeScript

A Set is a collection of unique values. Duplicate elements are not allowed.

Given an array of numbers, return the count of unique elements.

### Example
\`\`\`typescript
countUnique([1, 2, 3, 2, 1]) // Returns: 3
\`\`\`
`,
    starterCode: `function countUnique(arr: number[]): number {
    // Use Set to find unique count
    
}
`,
    solution: `function countUnique(arr: number[]): number {
    return new Set(arr).size;
}`,
    testCases: [
      { id: '1', input: '[1, 2, 3, 2, 1]', expectedOutput: '3' },
      { id: '2', input: '[5, 5, 5, 5]', expectedOutput: '1' }
    ]
  },
  {
    id: 'set-add',
    title: 'Set .add()',
    difficulty: 'easy',
    category: 'sets',
    points: 10,
    successRate: 98.92,
    description: `## Set add() Method

Use \`add()\` to insert elements into a Set.

Given an array of country names, create a Set and count total unique countries.

### Example
\`\`\`typescript
addCountries(["UK", "China", "USA", "UK"]) // Returns: 3
\`\`\`
`,
    starterCode: `function addCountries(countries: string[]): number {
    // Create a set and add each country
    
}
`,
    solution: `function addCountries(countries: string[]): number {
    const countrySet = new Set<string>();
    for (const country of countries) {
        countrySet.add(country);
    }
    return countrySet.size;
}`,
    testCases: [
      { id: '1', input: '["UK", "China", "USA", "UK"]', expectedOutput: '3' },
      { id: '2', input: '["India", "India", "India"]', expectedOutput: '1' }
    ]
  },
  {
    id: 'set-delete-has',
    title: 'Set .delete() & .has()',
    difficulty: 'easy',
    category: 'sets',
    points: 10,
    successRate: 97.5,
    description: `## Set delete() and has() Methods

- \`has(value)\` checks if a value exists in the Set
- \`delete(value)\` removes a value from the Set

Given a Set of numbers, check if a target exists, delete it if it does, and return final Set size.

### Example
\`\`\`typescript
checkAndDelete([1, 2, 3, 4, 5], 3)
// Returns: { existed: true, newSize: 4 }
\`\`\`
`,
    starterCode: `function checkAndDelete(arr: number[], target: number): { existed: boolean; newSize: number } {
    // Create set, check if target exists, delete it, return info
    
}
`,
    solution: `function checkAndDelete(arr: number[], target: number): { existed: boolean; newSize: number } {
    const numSet = new Set(arr);
    const existed = numSet.has(target);
    numSet.delete(target);
    return { existed, newSize: numSet.size };
}`,
    testCases: [
      { id: '1', input: '[1, 2, 3, 4, 5], 3', expectedOutput: '{"existed":true,"newSize":4}' },
      { id: '2', input: '[1, 2, 3], 10', expectedOutput: '{"existed":false,"newSize":3}' }
    ]
  },
  {
    id: 'set-union',
    title: 'Set Union (Spread Operator)',
    difficulty: 'easy',
    category: 'sets',
    points: 10,
    successRate: 99.07,
    description: `## Set Union

Find the union of two sets (all unique elements from both).

### Example
\`\`\`typescript
setUnion([1, 2, 3], [3, 4, 5]) // Returns: [1, 2, 3, 4, 5]
\`\`\`
`,
    starterCode: `function setUnion(arr1: number[], arr2: number[]): number[] {
    // Return union of both arrays as sorted array
    
}
`,
    solution: `function setUnion(arr1: number[], arr2: number[]): number[] {
    return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}`,
    testCases: [
      { id: '1', input: '[1, 2, 3], [3, 4, 5]', expectedOutput: '[1,2,3,4,5]' },
      { id: '2', input: '[1, 1, 1], [2, 2, 2]', expectedOutput: '[1,2]' }
    ]
  },
  {
    id: 'set-intersection',
    title: 'Set Intersection',
    difficulty: 'easy',
    category: 'sets',
    points: 10,
    successRate: 99.23,
    description: `## Set Intersection

Find the intersection of two sets (elements present in both).

### Example
\`\`\`typescript
setIntersection([1, 2, 3, 4], [3, 4, 5, 6]) // Returns: [3, 4]
\`\`\`
`,
    starterCode: `function setIntersection(arr1: number[], arr2: number[]): number[] {
    // Return intersection as sorted array
    
}
`,
    solution: `function setIntersection(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return [...set1].filter(x => set2.has(x)).sort((a, b) => a - b);
}`,
    testCases: [
      { id: '1', input: '[1, 2, 3, 4], [3, 4, 5, 6]', expectedOutput: '[3,4]' },
      { id: '2', input: '[1, 2], [3, 4]', expectedOutput: '[]' }
    ]
  },
  {
    id: 'set-difference',
    title: 'Set Difference',
    difficulty: 'easy',
    category: 'sets',
    points: 10,
    successRate: 99.22,
    description: `## Set Difference

Find elements in the first set that are not in the second set.

### Example
\`\`\`typescript
setDifference([1, 2, 3, 4], [3, 4, 5, 6]) // Returns: [1, 2]
\`\`\`
`,
    starterCode: `function setDifference(arr1: number[], arr2: number[]): number[] {
    // Return elements in arr1 not in arr2
    
}
`,
    solution: `function setDifference(arr1: number[], arr2: number[]): number[] {
    const set2 = new Set(arr2);
    return [...new Set(arr1)].filter(x => !set2.has(x)).sort((a, b) => a - b);
}`,
    testCases: [
      { id: '1', input: '[1, 2, 3, 4], [3, 4, 5, 6]', expectedOutput: '[1,2]' },
      { id: '2', input: '[1, 2, 3], [1, 2, 3]', expectedOutput: '[]' }
    ]
  },
  {
    id: 'symmetric-difference',
    title: 'Symmetric Difference',
    difficulty: 'easy',
    category: 'sets',
    points: 10,
    successRate: 98.08,
    description: `## Symmetric Difference

Find elements that are in either set but not in both.

### Example
\`\`\`typescript
symmetricDiff([1, 2, 3], [2, 3, 4]) // Returns: [1, 4]
\`\`\`
`,
    starterCode: `function symmetricDiff(arr1: number[], arr2: number[]): number[] {
    // Return elements in either but not both
    
}
`,
    solution: `function symmetricDiff(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const diff1 = [...set1].filter(x => !set2.has(x));
    const diff2 = [...set2].filter(x => !set1.has(x));
    return [...diff1, ...diff2].sort((a, b) => a - b);
}`,
    testCases: [
      { id: '1', input: '[1, 2, 3], [2, 3, 4]', expectedOutput: '[1,4]' },
      { id: '2', input: '[1, 2], [1, 2]', expectedOutput: '[]' }
    ]
  },
  {
    id: 'remove-duplicates',
    title: 'Set from Array (Remove Duplicates)',
    difficulty: 'easy',
    category: 'sets',
    points: 10,
    successRate: 96.5,
    description: `## Remove Duplicates Using Set

The easiest way to remove duplicates from an array is to convert it to a Set and back.

Given an array, return a new array with duplicates removed (maintain order of first occurrences).

### Example
\`\`\`typescript
removeDuplicates([1, 2, 2, 3, 4, 4, 5]) // Returns: [1, 2, 3, 4, 5]
\`\`\`
`,
    starterCode: `function removeDuplicates(arr: number[]): number[] {
    // Remove duplicates
    
}
`,
    solution: `function removeDuplicates(arr: number[]): number[] {
    return [...new Set(arr)];
}`,
    testCases: [
      { id: '1', input: '[1, 2, 2, 3, 4, 4, 5]', expectedOutput: '[1,2,3,4,5]' },
      { id: '2', input: '[5, 5, 5, 5]', expectedOutput: '[5]' }
    ]
  },
  {
    id: 'check-subset',
    title: 'Check Subset',
    difficulty: 'easy',
    category: 'sets',
    points: 10,
    successRate: 98.73,
    description: `## Check if Subset

Check if the first array is a subset of the second (all elements of first exist in second).

### Example
\`\`\`typescript
isSubset([1, 2], [1, 2, 3, 4]) // Returns: true
\`\`\`
`,
    starterCode: `function isSubset(arr1: number[], arr2: number[]): boolean {
    // Check if arr1 is subset of arr2
    
}
`,
    solution: `function isSubset(arr1: number[], arr2: number[]): boolean {
    const set2 = new Set(arr2);
    return arr1.every(x => set2.has(x));
}`,
    testCases: [
      { id: '1', input: '[1, 2], [1, 2, 3, 4]', expectedOutput: 'true' },
      { id: '2', input: '[1, 5], [1, 2, 3]', expectedOutput: 'false' }
    ]
  },
  {
    id: 'captains-room',
    title: "The Captain's Room",
    difficulty: 'easy',
    category: 'sets',
    points: 10,
    successRate: 91.52,
    description: `## The Captain's Room

Mr. Anant owns a hotel and keeps a record of room numbers. Each group gets K rooms, but the Captain gets only one unique room.

Given K (group size) and an array of room numbers, find the Captain's unique room number.

### Example
\`\`\`typescript
captainsRoom(5, [1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 8, 4, 3, 1, 5, 6, 2])
// Returns: 8
\`\`\`
`,
    starterCode: `function captainsRoom(k: number, rooms: number[]): number {
    // Find the unique room number (appears once, not k times)
    
}
`,
    solution: `function captainsRoom(k: number, rooms: number[]): number {
    const uniqueSum = [...new Set(rooms)].reduce((a, b) => a + b, 0);
    const totalSum = rooms.reduce((a, b) => a + b, 0);
    return (uniqueSum * k - totalSum) / (k - 1);
}`,
    testCases: [
      { id: '1', input: '5, [1,2,3,6,5,4,4,2,5,3,6,1,6,5,3,2,4,1,2,5,1,4,3,6,8,4,3,1,5,6,2]', expectedOutput: '8' }
    ]
  }
];
