import type { Challenge } from '../../types/challenge';

export const stringsChallenges: Challenge[] = [
  {
    id: 'swap-case',
    title: 'sWAP cASE',
    difficulty: 'easy',
    category: 'strings',
    points: 10,
    successRate: 98.17,
    description: `## Swap Case

Given a string, swap the case of each character.

- Convert all lowercase letters to uppercase
- Convert all uppercase letters to lowercase

### Example
\`\`\`typescript
swapCase("HeLLo") // Returns: "hEllO"
\`\`\`
`,
    starterCode: `function swapCase(s: string): string {
    // Write your code here
    
}
`,
    solution: `function swapCase(s: string): string {
    return s.split('').map(char => {
        if (char === char.toLowerCase()) {
            return char.toUpperCase();
        } else {
            return char.toLowerCase();
        }
    }).join('');
}`,
    testCases: [
      { id: '1', input: '"HeLLo"', expectedOutput: 'hEllO' },
      { id: '2', input: '"Pythonist 2"', expectedOutput: 'pYTHONIST 2' }
    ]
  },
  {
    id: 'string-split-join',
    title: 'String Split and Join',
    difficulty: 'easy',
    category: 'strings',
    points: 10,
    successRate: 98.59,
    description: `## Split and Join

Given a sentence, split it by spaces and rejoin with hyphens.

### Example
\`\`\`typescript
splitAndJoin("this is a string") // Returns: "this-is-a-string"
\`\`\`
`,
    starterCode: `function splitAndJoin(s: string): string {
    // Write your code here
    
}
`,
    solution: `function splitAndJoin(s: string): string {
    return s.split(' ').join('-');
}`,
    testCases: [
      { id: '1', input: '"this is a string"', expectedOutput: 'this-is-a-string' },
      { id: '2', input: '"hello world"', expectedOutput: 'hello-world' }
    ]
  },
  {
    id: 'whats-your-name',
    title: "What's Your Name?",
    difficulty: 'easy',
    category: 'strings',
    points: 10,
    successRate: 97.11,
    description: `## Format a Name

Given firstName and lastName, return a greeting in the format:
"Hello firstName lastName! You just delighted us with your presence!"

### Example
\`\`\`typescript
formatName("John", "Doe") 
// Returns: "Hello John Doe! You just delighted us with your presence!"
\`\`\`
`,
    starterCode: `function formatName(firstName: string, lastName: string): string {
    // Write your code here
    
}
`,
    solution: `function formatName(firstName: string, lastName: string): string {
    return \`Hello \${firstName} \${lastName}! You just delighted us with your presence!\`;
}`,
    testCases: [
      { id: '1', input: '"John", "Doe"', expectedOutput: 'Hello John Doe! You just delighted us with your presence!' },
      { id: '2', input: '"Ross", "Taylor"', expectedOutput: 'Hello Ross Taylor! You just delighted us with your presence!' }
    ]
  },
  {
    id: 'mutations',
    title: 'Mutations',
    difficulty: 'easy',
    category: 'strings',
    points: 10,
    successRate: 98.31,
    description: `## String Mutations

In TypeScript, strings are immutable. But you can create a new string with a character replaced.

Given a string \`s\`, an index \`i\`, and a character \`c\`, return a new string where the character at position \`i\` is replaced with \`c\`.

### Example
\`\`\`typescript
mutateString("hello", 3, 'a') // Returns: "helao"
\`\`\`
`,
    starterCode: `function mutateString(s: string, i: number, c: string): string {
    // Write your code here
    
}
`,
    solution: `function mutateString(s: string, i: number, c: string): string {
    return s.substring(0, i) + c + s.substring(i + 1);
}`,
    testCases: [
      { id: '1', input: '"hello", 3, "a"', expectedOutput: 'helao' },
      { id: '2', input: '"abracadabra", 5, "k"', expectedOutput: 'abrackdabra' }
    ]
  },
  {
    id: 'find-a-string',
    title: 'Find a String',
    difficulty: 'easy',
    category: 'strings',
    points: 10,
    successRate: 94.26,
    description: `## Count Substring Occurrences

Count the number of occurrences of a substring in a string.

Note: Overlapping occurrences should be counted.

### Example
\`\`\`typescript
countSubstring("ABCDCDC", "CDC") // Returns: 2
\`\`\`
`,
    starterCode: `function countSubstring(s: string, sub: string): number {
    // Write your code here
    
}
`,
    solution: `function countSubstring(s: string, sub: string): number {
    let count = 0;
    for (let i = 0; i <= s.length - sub.length; i++) {
        if (s.substring(i, i + sub.length) === sub) {
            count++;
        }
    }
    return count;
}`,
    testCases: [
      { id: '1', input: '"ABCDCDC", "CDC"', expectedOutput: '2' },
      { id: '2', input: '"hello", "l"', expectedOutput: '2' }
    ]
  },
  {
    id: 'string-validators',
    title: 'String Validators',
    difficulty: 'easy',
    category: 'strings',
    points: 10,
    successRate: 94.61,
    description: `## String Validators

Given a string, determine the following:
- Does it contain any alphanumeric characters?
- Does it contain any alphabetical characters?
- Does it contain any digits?
- Does it contain any lowercase characters?
- Does it contain any uppercase characters?

Return an array of 5 booleans.

### Example
\`\`\`typescript
stringValidators("qA2") // Returns: [true, true, true, true, true]
\`\`\`
`,
    starterCode: `function stringValidators(s: string): boolean[] {
    // Write your code here
    
}
`,
    solution: `function stringValidators(s: string): boolean[] {
    const hasAlphanumeric = /[a-zA-Z0-9]/.test(s);
    const hasAlpha = /[a-zA-Z]/.test(s);
    const hasDigit = /[0-9]/.test(s);
    const hasLower = /[a-z]/.test(s);
    const hasUpper = /[A-Z]/.test(s);
    return [hasAlphanumeric, hasAlpha, hasDigit, hasLower, hasUpper];
}`,
    testCases: [
      { id: '1', input: '"qA2"', expectedOutput: '[true, true, true, true, true]' },
      { id: '2', input: '"123"', expectedOutput: '[true, false, true, false, false]' }
    ]
  },
  {
    id: 'text-alignment',
    title: 'Text Alignment',
    difficulty: 'easy',
    category: 'strings',
    points: 10,
    successRate: 96.13,
    description: `## Text Alignment (padStart & padEnd)

Return an object with the string aligned in 3 ways:
- Left aligned in a field of width \`w\`
- Right aligned in a field of width \`w\`
- Center aligned in a field of width \`w\`

### Example
\`\`\`typescript
textAlign("hi", 6)
// Returns: { left: "hi    ", right: "    hi", center: "  hi  " }
\`\`\`
`,
    starterCode: `function textAlign(s: string, width: number): { left: string; right: string; center: string } {
    // Write your code here
    
}
`,
    solution: `function textAlign(s: string, width: number): { left: string; right: string; center: string } {
    const left = s.padEnd(width);
    const right = s.padStart(width);
    const totalPad = width - s.length;
    const leftPad = Math.floor(totalPad / 2);
    const rightPad = totalPad - leftPad;
    const center = ' '.repeat(leftPad) + s + ' '.repeat(rightPad);
    return { left, right, center };
}`,
    testCases: [
      { id: '1', input: '"hi", 6', expectedOutput: '{"left":"hi    ","right":"    hi","center":"  hi  "}' },
      { id: '2', input: '"abc", 7', expectedOutput: '{"left":"abc    ","right":"    abc","center":"  abc  "}' },
      { id: '3', input: '"x", 5', expectedOutput: '{"left":"x    ","right":"    x","center":"  x  "}' }
    ]
  },
  {
    id: 'text-wrap',
    title: 'Text Wrap',
    difficulty: 'easy',
    category: 'strings',
    points: 10,
    successRate: 98.66,
    description: `## Text Wrap

Wrap a string into a paragraph of width \`w\`. Insert newlines to break the text.

### Example
\`\`\`typescript
textWrap("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 4)
// Returns: "ABCD\\nEFGH\\nIJKL\\nMNOP\\nQRST\\nUVWX\\nYZ"
\`\`\`
`,
    starterCode: `function textWrap(s: string, width: number): string {
    // Write your code here
    
}
`,
    solution: `function textWrap(s: string, width: number): string {
    const lines: string[] = [];
    for (let i = 0; i < s.length; i += width) {
        lines.push(s.substring(i, i + width));
    }
    return lines.join('\\n');
}`,
    testCases: [
      { id: '1', input: '"ABCDEFGHIJKLMNOPQRSTUVWXYZ", 4', expectedOutput: 'ABCD\\nEFGH\\nIJKL\\nMNOP\\nQRST\\nUVWX\\nYZ' }
    ]
  },
  {
    id: 'designer-door-mat',
    title: 'Designer Door Mat',
    difficulty: 'easy',
    category: 'strings',
    points: 10,
    successRate: 98.10,
    description: `## Designer Door Mat

Create a door mat of size N x M (where M = 3 * N, and N is odd).

The design has "WELCOME" in the center and a pattern of ".|." characters.

### Example (N=5)
\`\`\`
----.|.----
--.|..|.--
.|..|..|.
--WELCOME--
.|..|..|.
--.|..|.--
----.|.----
\`\`\`

Return the mat as a string with newlines.
`,
    starterCode: `function designerDoorMat(n: number): string {
    // n is always odd, m = 3 * n
    // Write your code here
    
}
`,
    solution: `function designerDoorMat(n: number): string {
    const m = 3 * n;
    const lines: string[] = [];
    
    // Top half
    for (let i = 0; i < Math.floor(n / 2); i++) {
        const pattern = '.|.'.repeat(2 * i + 1);
        lines.push(pattern.padStart((m + pattern.length) / 2, '-').padEnd(m, '-'));
    }
    
    // Middle
    lines.push('WELCOME'.padStart((m + 7) / 2, '-').padEnd(m, '-'));
    
    // Bottom half (reverse of top)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        const pattern = '.|.'.repeat(2 * i + 1);
        lines.push(pattern.padStart((m + pattern.length) / 2, '-').padEnd(m, '-'));
    }
    
    return lines.join('\\n');
}`,
    testCases: [
      { id: '1', input: '3', expectedOutput: '---.|.---\\n-WELCOME-\\n---.|.---' }
    ]
  },
  {
    id: 'string-formatting',
    title: 'String Formatting',
    difficulty: 'easy',
    category: 'strings',
    points: 10,
    successRate: 92.76,
    description: `## String Formatting

Given an integer \`n\`, return its representation in decimal, octal, hexadecimal (uppercase), and binary, all formatted with consistent width.

### Example
\`\`\`typescript
formatNumber(17)
// Returns: ["17", "21", "11", "10001"]  (decimal, octal, hex, binary)
\`\`\`
`,
    starterCode: `function formatNumber(n: number): string[] {
    // Write your code here
    
}
`,
    solution: `function formatNumber(n: number): string[] {
    return [
        n.toString(10),
        n.toString(8),
        n.toString(16).toUpperCase(),
        n.toString(2)
    ];
}`,
    testCases: [
      { id: '1', input: '17', expectedOutput: '["17","21","11","10001"]' },
      { id: '2', input: '10', expectedOutput: '["10","12","A","1010"]' }
    ]
  },
  {
    id: 'alphabet-rangoli',
    title: 'Alphabet Rangoli',
    difficulty: 'easy',
    category: 'strings',
    points: 20,
    successRate: 96.01,
    description: `## Alphabet Rangoli

Create an alphabet rangoli of size N. Rangoli is a form of Indian folk art.

The center has 'a', and it expands with the alphabet up to the Nth letter.

### Example (N=3)
\`\`\`
----c----
--c-b-c--
c-b-a-b-c
--c-b-c--
----c----
\`\`\`
`,
    starterCode: `function alphabetRangoli(n: number): string {
    // Write your code here
    
}
`,
    solution: `function alphabetRangoli(n: number): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const width = 4 * n - 3;
    const lines: string[] = [];
    
    for (let i = n - 1; i >= 0; i--) {
        const left = alphabet.slice(i, n).split('').reverse().join('-');
        const right = alphabet.slice(i + 1, n).split('').join('-');
        const row = right ? left + '-' + right : left;
        lines.push(row.padStart((width + row.length) / 2, '-').padEnd(width, '-'));
    }
    
    for (let i = 1; i < n; i++) {
        const left = alphabet.slice(i, n).split('').reverse().join('-');
        const right = alphabet.slice(i + 1, n).split('').join('-');
        const row = right ? left + '-' + right : left;
        lines.push(row.padStart((width + row.length) / 2, '-').padEnd(width, '-'));
    }
    
    return lines.join('\\n');
}`,
    testCases: [
      { id: '1', input: '3', expectedOutput: '----c----\\n--c-b-c--\\nc-b-a-b-c\\n--c-b-c--\\n----c----' }
    ]
  },
  {
    id: 'capitalize',
    title: 'Capitalize!',
    difficulty: 'easy',
    category: 'strings',
    points: 20,
    successRate: 83.17,
    description: `## Capitalize

Given a full name, capitalize the first letter of each word.

### Example
\`\`\`typescript
capitalize("chris alan") // Returns: "Chris Alan"
\`\`\`
`,
    starterCode: `function capitalize(s: string): string {
    // Write your code here
    
}
`,
    solution: `function capitalize(s: string): string {
    return s.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}`,
    testCases: [
      { id: '1', input: '"chris alan"', expectedOutput: 'Chris Alan' },
      { id: '2', input: '"hello world"', expectedOutput: 'Hello World' }
    ]
  }
];
