import type { Challenge } from '../../types/challenge';

export const promisesChallenges: Challenge[] = [
  {
    id: 'promise-basics',
    title: 'Promise Basics',
    difficulty: 'easy',
    category: 'promises',
    points: 15,
    successRate: 94.0,
    description: `## Creating Promises

Create a function that returns a Promise that resolves with a greeting.

### Example
\`\`\`typescript
await greetAsync("World") // Returns: "Hello, World!"
\`\`\`
`,
    starterCode: `function greetAsync(name: string): Promise<string> {
    // Return a promise that resolves with greeting
    
}
`,
    solution: `function greetAsync(name: string): Promise<string> {
    return new Promise((resolve) => {
        resolve(\`Hello, \${name}!\`);
    });
}`,
    testCases: [
      { id: '1', input: '"World"', expectedOutput: 'Hello, World!' }
    ]
  },
  {
    id: 'promise-all',
    title: 'Promise.all',
    difficulty: 'medium',
    category: 'promises',
    points: 20,
    successRate: 91.0,
    description: `## Promise.all

Use Promise.all to wait for multiple promises.

Given an array of numbers, return promises that double each number, then sum results.

### Example
\`\`\`typescript
await sumDoubled([1, 2, 3]) // Returns: 12 (2 + 4 + 6)
\`\`\`
`,
    starterCode: `async function sumDoubled(nums: number[]): Promise<number> {
    // Create promises that double each number, use Promise.all, sum results
    
}
`,
    solution: `async function sumDoubled(nums: number[]): Promise<number> {
    const promises = nums.map(n => Promise.resolve(n * 2));
    const results = await Promise.all(promises);
    return results.reduce((a, b) => a + b, 0);
}`,
    testCases: [
      { id: '1', input: '[1, 2, 3]', expectedOutput: '12' }
    ]
  },
  {
    id: 'promise-race',
    title: 'Promise.race',
    difficulty: 'medium',
    category: 'promises',
    points: 20,
    successRate: 89.5,
    description: `## Promise.race

Use Promise.race to get the first resolved value.

Create a function that returns "timeout" if the operation takes too long.

### Example
\`\`\`typescript
// If fast enough
await withTimeout(Promise.resolve("data"), 1000) // Returns: "data"

// If too slow
await withTimeout(slowPromise, 100) // Returns: "timeout"
\`\`\`
`,
    starterCode: `function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | "timeout"> {
    // Race between promise and timeout
    
}
`,
    solution: `function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | "timeout"> {
    const timeout = new Promise<"timeout">((resolve) => {
        setTimeout(() => resolve("timeout"), ms);
    });
    return Promise.race([promise, timeout]);
}`,
    testCases: [
      { id: '1', input: 'Promise.resolve("data"), 1000', expectedOutput: 'data' }
    ]
  },
  {
    id: 'async-await',
    title: 'Async/Await Basics',
    difficulty: 'easy',
    category: 'promises',
    points: 15,
    successRate: 93.0,
    description: `## Async/Await

Convert callback-style to async/await.

Fetch multiple users sequentially and return their names joined.

### Example
\`\`\`typescript
await getUserNames([1, 2, 3]) // Returns: "User1, User2, User3"
\`\`\`
`,
    starterCode: `// Simulated fetch function
function fetchUser(id: number): Promise<{ id: number; name: string }> {
    return Promise.resolve({ id, name: \`User\${id}\` });
}

async function getUserNames(ids: number[]): Promise<string> {
    // Fetch each user and join names
    
}
`,
    solution: `function fetchUser(id: number): Promise<{ id: number; name: string }> {
    return Promise.resolve({ id, name: \`User\${id}\` });
}

async function getUserNames(ids: number[]): Promise<string> {
    const names: string[] = [];
    for (const id of ids) {
        const user = await fetchUser(id);
        names.push(user.name);
    }
    return names.join(", ");
}`,
    testCases: [
      { id: '1', input: '[1, 2, 3]', expectedOutput: 'User1, User2, User3' }
    ]
  },
  {
    id: 'async-error-handling',
    title: 'Error Handling with Async/Await',
    difficulty: 'medium',
    category: 'promises',
    points: 25,
    successRate: 88.0,
    description: `## Async Error Handling

Use try/catch to handle errors in async functions.

Create a safe fetch that returns a default on error.

### Example
\`\`\`typescript
await safeFetch<string>(Promise.resolve("data"), "default") // Returns: "data"
await safeFetch<string>(Promise.reject("error"), "default") // Returns: "default"
\`\`\`
`,
    starterCode: `async function safeFetch<T>(promise: Promise<T>, defaultValue: T): Promise<T> {
    // Return result or default on error
    
}
`,
    solution: `async function safeFetch<T>(promise: Promise<T>, defaultValue: T): Promise<T> {
    try {
        return await promise;
    } catch {
        return defaultValue;
    }
}`,
    testCases: [
      { id: '1', input: 'Promise.resolve("data"), "default"', expectedOutput: 'data' }
    ]
  },
  {
    id: 'promise-chaining',
    title: 'Promise Chaining',
    difficulty: 'medium',
    category: 'promises',
    points: 20,
    successRate: 90.5,
    description: `## Promise Chaining

Chain multiple .then() calls to transform data.

Start with a number, double it, add 10, then convert to string.

### Example
\`\`\`typescript
await chainedOperations(5) // Returns: "20" ((5 * 2) + 10)
\`\`\`
`,
    starterCode: `function chainedOperations(n: number): Promise<string> {
    // Chain: double -> add 10 -> to string
    
}
`,
    solution: `function chainedOperations(n: number): Promise<string> {
    return Promise.resolve(n)
        .then(x => x * 2)
        .then(x => x + 10)
        .then(x => String(x));
}`,
    testCases: [
      { id: '1', input: '5', expectedOutput: '20' }
    ]
  },
  {
    id: 'delay-promise',
    title: 'setTimeout & Promises',
    difficulty: 'easy',
    category: 'promises',
    points: 15,
    successRate: 92.0,
    description: `## Delay with Promise

Create a delay function that returns a Promise.

### Example
\`\`\`typescript
await delay(100) // Waits 100ms then resolves
\`\`\`
`,
    starterCode: `function delay(ms: number): Promise<void> {
    // Return a promise that resolves after ms milliseconds
    
}

// For testing: return the delay function itself
function testDelay(): string {
    return typeof delay(100).then === 'function' ? 'valid' : 'invalid';
}
`,
    solution: `function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}`,
    testCases: [
      { id: '1', input: '', expectedOutput: 'valid' }
    ]
  }
];
