import type { Challenge } from '../../types/challenge';

export const functionalsChallenges: Challenge[] = [
  {
    id: 'arrow-functions',
    title: 'Arrow Functions',
    difficulty: 'easy',
    category: 'functionals',
    points: 10,
    successRate: 96.0,
    description: `## Arrow Functions

Convert regular functions to arrow function syntax.

Create arrow functions for add, multiply, and square.

### Example
\`\`\`typescript
add(2, 3) // Returns: 5
multiply(4, 5) // Returns: 20
square(6) // Returns: 36
\`\`\`
`,
    starterCode: `// Convert these to arrow functions and return an object containing them
function createMathFunctions(): { 
    add: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    square: (n: number) => number;
} {
    // Create arrow functions
    
}

function testArrow(a: number, b: number): { add: number; multiply: number; square: number } {
    const { add, multiply, square } = createMathFunctions();
    return { add: add(a, b), multiply: multiply(a, b), square: square(a) };
}
`,
    solution: `function createMathFunctions(): { 
    add: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    square: (n: number) => number;
} {
    return {
        add: (a, b) => a + b,
        multiply: (a, b) => a * b,
        square: (n) => n * n
    };
}`,
    testCases: [
      { id: '1', input: '2, 3', expectedOutput: '{"add":5,"multiply":6,"square":4}' }
    ]
  },
  {
    id: 'map-lambda',
    title: 'Map and Lambda Functions',
    difficulty: 'easy',
    category: 'functionals',
    points: 20,
    successRate: 95.12,
    description: `## Map with Arrow Functions

Use map with arrow functions to transform arrays.

Given a list of numbers, return the cubes of each number using map.

### Example
\`\`\`typescript
cubeList([1, 2, 3]) // Returns: [1, 8, 27]
\`\`\`
`,
    starterCode: `function cubeList(nums: number[]): number[] {
    // Use map with arrow function to cube each number
    
}
`,
    solution: `function cubeList(nums: number[]): number[] {
    return nums.map(n => n ** 3);
}`,
    testCases: [
      { id: '1', input: '[1, 2, 3]', expectedOutput: '[1,8,27]' },
      { id: '2', input: '[0, 5, 10]', expectedOutput: '[0,125,1000]' }
    ]
  },
  {
    id: 'reduce-function',
    title: 'Reduce Function',
    difficulty: 'medium',
    category: 'functionals',
    points: 30,
    successRate: 97.92,
    description: `## Reduce

Use reduce to compute a single value from an array.

Compute the product of all numbers in the array.

### Example
\`\`\`typescript
product([1, 2, 3, 4]) // Returns: 24
\`\`\`
`,
    starterCode: `function product(nums: number[]): number {
    // Use reduce to compute product
    
}
`,
    solution: `function product(nums: number[]): number {
    return nums.reduce((acc, n) => acc * n, 1);
}`,
    testCases: [
      { id: '1', input: '[1, 2, 3, 4]', expectedOutput: '24' },
      { id: '2', input: '[5, 5, 2]', expectedOutput: '50' }
    ]
  },
  {
    id: 'currying',
    title: 'Currying',
    difficulty: 'medium',
    category: 'functionals',
    points: 25,
    successRate: 85.0,
    description: `## Currying

Currying transforms a function with multiple arguments into a sequence of functions.

Create a curried add function.

### Example
\`\`\`typescript
curriedAdd(2)(3) // Returns: 5
const add5 = curriedAdd(5);
add5(10) // Returns: 15
\`\`\`
`,
    starterCode: `function curriedAdd(a: number): (b: number) => number {
    // Return a function that adds b to a
    
}

function testCurry(a: number, b: number): number {
    return curriedAdd(a)(b);
}
`,
    solution: `function curriedAdd(a: number): (b: number) => number {
    return (b: number) => a + b;
}`,
    testCases: [
      { id: '1', input: '2, 3', expectedOutput: '5' },
      { id: '2', input: '10, 20', expectedOutput: '30' }
    ]
  },
  {
    id: 'function-composition',
    title: 'Function Composition',
    difficulty: 'medium',
    category: 'functionals',
    points: 30,
    successRate: 82.0,
    description: `## Function Composition

Compose multiple functions into one.

Create a compose function that applies functions right to left.

### Example
\`\`\`typescript
const addOne = (x: number) => x + 1;
const double = (x: number) => x * 2;
compose(addOne, double)(5) // Returns: 11 (double first: 10, then add one: 11)
\`\`\`
`,
    starterCode: `function compose<T>(...fns: ((x: T) => T)[]): (x: T) => T {
    // Compose functions right to left
    
}

function testCompose(n: number): number {
    const addOne = (x: number) => x + 1;
    const double = (x: number) => x * 2;
    return compose(addOne, double)(n);
}
`,
    solution: `function compose<T>(...fns: ((x: T) => T)[]): (x: T) => T {
    return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);
}`,
    testCases: [
      { id: '1', input: '5', expectedOutput: '11' },
      { id: '2', input: '10', expectedOutput: '21' }
    ]
  },
  {
    id: 'closures',
    title: 'Closures',
    difficulty: 'medium',
    category: 'functionals',
    points: 25,
    successRate: 88.0,
    description: `## Closures

A closure is a function that remembers its outer scope.

Create a counter factory that returns increment/decrement/getValue functions.

### Example
\`\`\`typescript
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.getValue(); // 1
\`\`\`
`,
    starterCode: `function createCounter(initial: number): {
    increment: () => number;
    decrement: () => number;
    getValue: () => number;
} {
    // Use closure to maintain state
    
}

function testCounter(initial: number, ops: string[]): number {
    const counter = createCounter(initial);
    for (const op of ops) {
        if (op === 'inc') counter.increment();
        else if (op === 'dec') counter.decrement();
    }
    return counter.getValue();
}
`,
    solution: `function createCounter(initial: number): {
    increment: () => number;
    decrement: () => number;
    getValue: () => number;
} {
    let count = initial;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
}`,
    testCases: [
      { id: '1', input: '0, ["inc", "inc", "dec"]', expectedOutput: '1' },
      { id: '2', input: '10, ["dec", "dec"]', expectedOutput: '8' }
    ]
  }
];
