import type { Challenge } from '../../types/challenge';

export const mathChallenges: Challenge[] = [
  {
    id: 'mod-divmod',
    title: 'Mod and DivMod',
    difficulty: 'easy',
    category: 'math',
    points: 10,
    successRate: 98.96,
    description: `## Modulo and Division

Return both the quotient and remainder of a division.

### Example
\`\`\`typescript
divmod(177, 10) // Returns: [17, 7]
\`\`\`
`,
    starterCode: `function divmod(a: number, b: number): [number, number] {
    // Return [quotient, remainder]
    
}
`,
    solution: `function divmod(a: number, b: number): [number, number] {
    return [Math.floor(a / b), a % b];
}`,
    testCases: [
      { id: '1', input: '177, 10', expectedOutput: '[17,7]' },
      { id: '2', input: '100, 3', expectedOutput: '[33,1]' }
    ]
  },
  {
    id: 'power-math',
    title: 'Power & Math.pow',
    difficulty: 'easy',
    category: 'math',
    points: 10,
    successRate: 99.31,
    description: `## Power Operations

Calculate power using both \`**\` operator and \`Math.pow()\`, plus modular exponentiation.

### Example
\`\`\`typescript
powerOps(3, 4, 5)
// Returns: { power: 81, modPower: 1 } // 3^4 = 81, 81 % 5 = 1
\`\`\`
`,
    starterCode: `function powerOps(a: number, b: number, m: number): { power: number; modPower: number } {
    // Calculate a^b and (a^b) % m
    
}
`,
    solution: `function powerOps(a: number, b: number, m: number): { power: number; modPower: number } {
    const power = Math.pow(a, b);
    const modPower = power % m;
    return { power, modPower };
}`,
    testCases: [
      { id: '1', input: '3, 4, 5', expectedOutput: '{"power":81,"modPower":1}' },
      { id: '2', input: '2, 10, 100', expectedOutput: '{"power":1024,"modPower":24}' }
    ]
  },
  {
    id: 'bigint-sizes',
    title: 'Integers Come in All Sizes (BigInt)',
    difficulty: 'easy',
    category: 'math',
    points: 10,
    successRate: 99.39,
    description: `## BigInt for Large Numbers

TypeScript supports BigInt for arbitrarily large integers.

Calculate a^b + c^d where the result may be very large.

### Example
\`\`\`typescript
bigIntPower(2n, 10n, 3n, 5n) // Returns: 1267n
\`\`\`
`,
    starterCode: `function bigIntPower(a: bigint, b: bigint, c: bigint, d: bigint): bigint {
    // Calculate a^b + c^d using BigInt
    
}
`,
    solution: `function bigIntPower(a: bigint, b: bigint, c: bigint, d: bigint): bigint {
    return a ** b + c ** d;
}`,
    testCases: [
      { id: '1', input: '2n, 10n, 3n, 5n', expectedOutput: '1267n' }
    ]
  },
  {
    id: 'triangle-quest',
    title: 'Triangle Quest',
    difficulty: 'medium',
    category: 'math',
    points: 20,
    successRate: 93.40,
    description: `## Triangle Quest

Print a numeric triangle pattern for N rows.

Row i should contain the digit i repeated i times.

### Example (N=5)
\`\`\`
1
22
333
4444
\`\`\`

Return as a single string with newlines.
`,
    starterCode: `function triangleQuest(n: number): string {
    // Create the numeric triangle
    
}
`,
    solution: `function triangleQuest(n: number): string {
    const lines: string[] = [];
    for (let i = 1; i < n; i++) {
        lines.push(String(i).repeat(i));
    }
    return lines.join('\\n');
}`,
    testCases: [
      { id: '1', input: '5', expectedOutput: '1\\n22\\n333\\n4444' }
    ]
  },
  {
    id: 'triangle-quest-2',
    title: 'Triangle Quest 2',
    difficulty: 'medium',
    category: 'math',
    points: 20,
    successRate: 94.76,
    description: `## Triangle Quest 2

Print a palindromic numeric triangle.

### Example (N=5)
\`\`\`
1
121
12321
1234321
123454321
\`\`\`

Hint: Use the formula (10^i / 9)^2 = 1, 121, 12321, ...
`,
    starterCode: `function triangleQuest2(n: number): string {
    // Create the palindromic triangle
    
}
`,
    solution: `function triangleQuest2(n: number): string {
    const lines: string[] = [];
    for (let i = 1; i <= n; i++) {
        const num = Math.pow((Math.pow(10, i) - 1) / 9, 2);
        lines.push(String(num));
    }
    return lines.join('\\n');
}`,
    testCases: [
      { id: '1', input: '5', expectedOutput: '1\\n121\\n12321\\n1234321\\n123454321' }
    ]
  },
  {
    id: 'polar-coordinates',
    title: 'Polar Coordinates',
    difficulty: 'easy',
    category: 'math',
    points: 10,
    successRate: 96.84,
    description: `## Polar Coordinates

Convert a complex number to polar coordinates.

Given real and imaginary parts, return [r, theta] where:
- r = sqrt(x² + y²)
- theta = atan2(y, x)

### Example
\`\`\`typescript
toPolar(1, 1) // Returns: [1.414..., 0.785...] (approximately)
\`\`\`
`,
    starterCode: `function toPolar(x: number, y: number): [number, number] {
    // Convert to polar coordinates
    
}
`,
    solution: `function toPolar(x: number, y: number): [number, number] {
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan2(y, x);
    return [r, theta];
}`,
    testCases: [
      { id: '1', input: '1, 1', expectedOutput: '[1.4142135623730951,0.7853981633974483]' }
    ]
  },
  {
    id: 'find-angle',
    title: 'Find Angle MBC',
    difficulty: 'medium',
    category: 'math',
    points: 10,
    successRate: 89.41,
    description: `## Find Angle MBC

Triangle ABC has a right angle at B. M is the midpoint of AC.

Given AB and BC, find the angle MBC in degrees (rounded).

### Example
\`\`\`typescript
findAngle(10, 10) // Returns: "45°"
\`\`\`
`,
    starterCode: `function findAngle(ab: number, bc: number): string {
    // Find angle MBC in degrees
    
}
`,
    solution: `function findAngle(ab: number, bc: number): string {
    const theta = Math.atan(ab / bc);
    const degrees = Math.round(theta * 180 / Math.PI);
    return degrees + "°";
}`,
    testCases: [
      { id: '1', input: '10, 10', expectedOutput: '45°' },
      { id: '2', input: '10, 20', expectedOutput: '27°' }
    ]
  },
  {
    id: 'math-object',
    title: 'Math Object Methods',
    difficulty: 'easy',
    category: 'math',
    points: 10,
    successRate: 95.0,
    description: `## Math Object Methods

Use various Math methods: floor, ceil, round, abs, min, max.

Return an object with all computed values.

### Example
\`\`\`typescript
mathMethods(3.7) 
// Returns: { floor: 3, ceil: 4, round: 4, abs: 3.7 }
\`\`\`
`,
    starterCode: `function mathMethods(n: number): { floor: number; ceil: number; round: number; abs: number } {
    // Apply various Math methods
    
}
`,
    solution: `function mathMethods(n: number): { floor: number; ceil: number; round: number; abs: number } {
    return {
        floor: Math.floor(n),
        ceil: Math.ceil(n),
        round: Math.round(n),
        abs: Math.abs(n)
    };
}`,
    testCases: [
      { id: '1', input: '3.7', expectedOutput: '{"floor":3,"ceil":4,"round":4,"abs":3.7}' },
      { id: '2', input: '-2.3', expectedOutput: '{"floor":-3,"ceil":-2,"round":-2,"abs":2.3}' }
    ]
  }
];
