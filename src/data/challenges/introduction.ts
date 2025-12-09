import type { Challenge } from '../../types/challenge';

export const introductionChallenges: Challenge[] = [
  {
    id: 'hello-world',
    title: 'Say "Hello, World!" With TypeScript',
    difficulty: 'easy',
    category: 'introduction',
    points: 5,
    successRate: 96.15,
    description: `## Welcome to TypeScript!

In this challenge, you must print \`Hello, World!\` to the console.

### Task
Write a function that returns the string "Hello, World!".

### Example
\`\`\`typescript
sayHello() // Returns: "Hello, World!"
\`\`\`
`,
    starterCode: `function sayHello(): string {
    // Write your code here
    
}

// Test your function
console.log(sayHello());
`,
    solution: `function sayHello(): string {
    return "Hello, World!";
}`,
    testCases: [
      { id: '1', input: '', expectedOutput: 'Hello, World!' }
    ]
  },
  {
    id: 'if-else',
    title: 'TypeScript If-Else',
    difficulty: 'easy',
    category: 'introduction',
    points: 10,
    successRate: 89.73,
    description: `## Conditional Statements

Given an integer \`n\`, perform the following conditional actions:

- If \`n\` is odd, return "Weird"
- If \`n\` is even and in the inclusive range of 2 to 5, return "Not Weird"
- If \`n\` is even and in the inclusive range of 6 to 20, return "Weird"
- If \`n\` is even and greater than 20, return "Not Weird"

### Example
\`\`\`typescript
weirdOrNot(3)  // Returns: "Weird"
weirdOrNot(24) // Returns: "Not Weird"
\`\`\`
`,
    starterCode: `function weirdOrNot(n: number): string {
    // Write your code here
    
}
`,
    solution: `function weirdOrNot(n: number): string {
    if (n % 2 !== 0) {
        return "Weird";
    } else if (n >= 2 && n <= 5) {
        return "Not Weird";
    } else if (n >= 6 && n <= 20) {
        return "Weird";
    } else {
        return "Not Weird";
    }
}`,
    testCases: [
      { id: '1', input: '3', expectedOutput: 'Weird' },
      { id: '2', input: '24', expectedOutput: 'Not Weird' },
      { id: '3', input: '4', expectedOutput: 'Not Weird' },
      { id: '4', input: '18', expectedOutput: 'Weird' }
    ]
  },
  {
    id: 'arithmetic-operators',
    title: 'Arithmetic Operators',
    difficulty: 'easy',
    category: 'introduction',
    points: 10,
    successRate: 97.28,
    description: `## Basic Arithmetic

Given two integers \`a\` and \`b\`, return an array containing:
1. The sum of a and b
2. The difference of a and b  
3. The product of a and b

### Example
\`\`\`typescript
arithmetic(3, 2) // Returns: [5, 1, 6]
\`\`\`
`,
    starterCode: `function arithmetic(a: number, b: number): number[] {
    // Write your code here
    
}
`,
    solution: `function arithmetic(a: number, b: number): number[] {
    return [a + b, a - b, a * b];
}`,
    testCases: [
      { id: '1', input: '3, 2', expectedOutput: '[5, 1, 6]' },
      { id: '2', input: '10, 5', expectedOutput: '[15, 5, 50]' }
    ]
  },
  {
    id: 'division',
    title: 'TypeScript Division',
    difficulty: 'easy',
    category: 'introduction',
    points: 10,
    successRate: 98.69,
    description: `## Division Operations

Given two integers \`a\` and \`b\`, return an array containing:
1. Integer division (floor division) of a by b
2. Regular division of a by b (floating point)

### Example
\`\`\`typescript
division(7, 3) // Returns: [2, 2.3333333333333335]
\`\`\`

### Hint
Use \`Math.floor()\` for integer division.
`,
    starterCode: `function division(a: number, b: number): number[] {
    // Write your code here
    
}
`,
    solution: `function division(a: number, b: number): number[] {
    return [Math.floor(a / b), a / b];
}`,
    testCases: [
      { id: '1', input: '7, 3', expectedOutput: '[2, 2.3333333333333335]' },
      { id: '2', input: '10, 4', expectedOutput: '[2, 2.5]' }
    ]
  },
  {
    id: 'loops',
    title: 'Loops',
    difficulty: 'easy',
    category: 'introduction',
    points: 10,
    successRate: 98.08,
    description: `## For Loop

Given an integer \`n\`, return an array containing the squares of all integers from 0 to n-1.

### Example
\`\`\`typescript
squares(5) // Returns: [0, 1, 4, 9, 16]
\`\`\`
`,
    starterCode: `function squares(n: number): number[] {
    // Write your code here
    
}
`,
    solution: `function squares(n: number): number[] {
    const result: number[] = [];
    for (let i = 0; i < n; i++) {
        result.push(i * i);
    }
    return result;
}`,
    testCases: [
      { id: '1', input: '5', expectedOutput: '[0, 1, 4, 9, 16]' },
      { id: '2', input: '3', expectedOutput: '[0, 1, 4]' }
    ]
  },
  {
    id: 'write-a-function',
    title: 'Write a Function',
    difficulty: 'medium',
    category: 'introduction',
    points: 10,
    successRate: 90.43,
    description: `## Leap Year Function

An extra day is added to the calendar almost every four years as February 29, and the day is called a leap day.

A leap year is a year containing a leap day. The rules:
- The year can be evenly divided by 4
- If the year can be evenly divided by 100, it is NOT a leap year, unless:
- The year is also evenly divisible by 400. Then it is a leap year.

### Task
Return \`true\` if year is a leap year, otherwise \`false\`.

### Example
\`\`\`typescript
isLeapYear(1990) // Returns: false
isLeapYear(2000) // Returns: true
\`\`\`
`,
    starterCode: `function isLeapYear(year: number): boolean {
    // Write your code here
    
}
`,
    solution: `function isLeapYear(year: number): boolean {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;
    return false;
}`,
    testCases: [
      { id: '1', input: '1990', expectedOutput: 'false' },
      { id: '2', input: '2000', expectedOutput: 'true' },
      { id: '3', input: '1900', expectedOutput: 'false' },
      { id: '4', input: '2024', expectedOutput: 'true' }
    ]
  },
  {
    id: 'print-function',
    title: 'Print Function',
    difficulty: 'easy',
    category: 'introduction',
    points: 20,
    successRate: 97.49,
    description: `## Print Without Separator

Given an integer \`n\`, return a string with all integers from 1 to n printed without any space or newline.

### Example
\`\`\`typescript
printNumbers(5) // Returns: "12345"
\`\`\`
`,
    starterCode: `function printNumbers(n: number): string {
    // Write your code here
    
}
`,
    solution: `function printNumbers(n: number): string {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}`,
    testCases: [
      { id: '1', input: '5', expectedOutput: '12345' },
      { id: '2', input: '3', expectedOutput: '123' }
    ]
  },
  {
    id: 'template-literals',
    title: 'Template Literals',
    difficulty: 'easy',
    category: 'introduction',
    points: 10,
    successRate: 95.0,
    description: `## Template Literals

TypeScript (and JavaScript) supports template literals using backticks.

Given a name and age, return a greeting string using template literals.

### Example
\`\`\`typescript
greeting("Alice", 25) // Returns: "Hello, my name is Alice and I am 25 years old."
\`\`\`
`,
    starterCode: `function greeting(name: string, age: number): string {
    // Use template literals to create the greeting
    
}
`,
    solution: `function greeting(name: string, age: number): string {
    return \`Hello, my name is \${name} and I am \${age} years old.\`;
}`,
    testCases: [
      { id: '1', input: '"Alice", 25', expectedOutput: 'Hello, my name is Alice and I am 25 years old.' },
      { id: '2', input: '"Bob", 30', expectedOutput: 'Hello, my name is Bob and I am 30 years old.' }
    ]
  }
];
