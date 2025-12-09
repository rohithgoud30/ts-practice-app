import type { Challenge } from '../../types/challenge';

export const errorsChallenges: Challenge[] = [
  {
    id: 'try-catch',
    title: 'Try-Catch-Finally',
    difficulty: 'easy',
    category: 'errors',
    points: 10,
    successRate: 96.11,
    description: `## Error Handling

Use try-catch-finally to handle errors gracefully.

Create a safe divide function that returns a default on error.

### Example
\`\`\`typescript
safeDivide(10, 2) // Returns: { result: 5, error: null }
safeDivide(10, 0) // Returns: { result: 0, error: "Division by zero" }
\`\`\`
`,
    starterCode: `function safeDivide(a: number, b: number): { result: number; error: string | null } {
    // Use try-catch to handle division by zero
    
}
`,
    solution: `function safeDivide(a: number, b: number): { result: number; error: string | null } {
    try {
        if (b === 0) throw new Error("Division by zero");
        return { result: a / b, error: null };
    } catch (e) {
        return { result: 0, error: (e as Error).message };
    }
}`,
    testCases: [
      { id: '1', input: '10, 2', expectedOutput: '{"result":5,"error":null}' },
      { id: '2', input: '10, 0', expectedOutput: '{"result":0,"error":"Division by zero"}' }
    ]
  },
  {
    id: 'custom-error',
    title: 'Custom Error Classes',
    difficulty: 'medium',
    category: 'errors',
    points: 20,
    successRate: 90.0,
    description: `## Custom Errors

Create custom error classes for specific error types.

### Example
\`\`\`typescript
throw new ValidationError("Invalid input")
// Creates error with name "ValidationError"
\`\`\`
`,
    starterCode: `class ValidationError extends Error {
    // Create custom error class
}

function validate(value: string): { valid: boolean; errorType: string | null } {
    try {
        if (value.length < 3) {
            throw new ValidationError("Value too short");
        }
        return { valid: true, errorType: null };
    } catch (e) {
        return { valid: false, errorType: (e as Error).name };
    }
}
`,
    solution: `class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ValidationError";
    }
}`,
    testCases: [
      { id: '1', input: '"hello"', expectedOutput: '{"valid":true,"errorType":null}' },
      { id: '2', input: '"ab"', expectedOutput: '{"valid":false,"errorType":"ValidationError"}' }
    ]
  },
  {
    id: 'error-types',
    title: 'Error Types',
    difficulty: 'easy',
    category: 'errors',
    points: 10,
    successRate: 94.0,
    description: `## Built-in Error Types

JavaScript/TypeScript has several built-in error types:
- Error
- TypeError
- RangeError
- SyntaxError
- ReferenceError

Identify the type of error that would be thrown.

### Example
\`\`\`typescript
getErrorType("range") // Returns: "RangeError"
\`\`\`
`,
    starterCode: `function getErrorType(type: string): string {
    try {
        switch (type) {
            case "range":
                throw new RangeError("Out of range");
            case "type":
                throw new TypeError("Wrong type");
            case "reference":
                throw new ReferenceError("Not defined");
            default:
                throw new Error("Generic error");
        }
    } catch (e) {
        // Return the name of the caught error
        
    }
}
`,
    solution: `function getErrorType(type: string): string {
    try {
        switch (type) {
            case "range":
                throw new RangeError("Out of range");
            case "type":
                throw new TypeError("Wrong type");
            case "reference":
                throw new ReferenceError("Not defined");
            default:
                throw new Error("Generic error");
        }
    } catch (e) {
        return (e as Error).name;
    }
}`,
    testCases: [
      { id: '1', input: '"range"', expectedOutput: 'RangeError' },
      { id: '2', input: '"type"', expectedOutput: 'TypeError' }
    ]
  },
  {
    id: 'throwing-errors',
    title: 'Throwing Errors',
    difficulty: 'easy',
    category: 'errors',
    points: 10,
    successRate: 95.0,
    description: `## Throwing Errors

Use throw to create and throw errors with meaningful messages.

Validate age and throw appropriate errors.

### Example
\`\`\`typescript
validateAge(25) // Returns: "Valid age: 25"
validateAge(-5) // Throws: "Age cannot be negative"
\`\`\`
`,
    starterCode: `function validateAge(age: number): string {
    // Throw errors for invalid age, return message for valid
    
}

function testAge(age: number): string {
    try {
        return validateAge(age);
    } catch (e) {
        return (e as Error).message;
    }
}
`,
    solution: `function validateAge(age: number): string {
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    if (age > 150) {
        throw new Error("Age is unrealistic");
    }
    return \`Valid age: \${age}\`;
}`,
    testCases: [
      { id: '1', input: '25', expectedOutput: 'Valid age: 25' },
      { id: '2', input: '-5', expectedOutput: 'Age cannot be negative' }
    ]
  }
];
