import type { Challenge } from '../../types/challenge';

export const regexChallenges: Challenge[] = [
  {
    id: 'regex-basics',
    title: 'Regex Basics',
    difficulty: 'easy',
    category: 'regex',
    points: 10,
    successRate: 95.0,
    description: `## Regular Expressions

Create a regex to find all digits in a string.

### Example
\`\`\`typescript
findDigits("abc123def456") // Returns: ["1", "2", "3", "4", "5", "6"]
\`\`\`
`,
    starterCode: `function findDigits(s: string): string[] {
    // Use regex to find all digits
    
}
`,
    solution: `function findDigits(s: string): string[] {
    return s.match(/\\d/g) || [];
}`,
    testCases: [
      { id: '1', input: '"abc123def456"', expectedOutput: '["1","2","3","4","5","6"]' },
      { id: '2', input: '"no digits"', expectedOutput: '[]' }
    ]
  },
  {
    id: 'regex-test',
    title: 'RegExp.test()',
    difficulty: 'easy',
    category: 'regex',
    points: 10,
    successRate: 94.5,
    description: `## Testing Patterns

Use \`test()\` to check if a pattern exists in a string.

Check if a string contains only alphabetic characters.

### Example
\`\`\`typescript
isAlphaOnly("HelloWorld") // Returns: true
isAlphaOnly("Hello123") // Returns: false
\`\`\`
`,
    starterCode: `function isAlphaOnly(s: string): boolean {
    // Test if string contains only letters
    
}
`,
    solution: `function isAlphaOnly(s: string): boolean {
    return /^[a-zA-Z]+$/.test(s);
}`,
    testCases: [
      { id: '1', input: '"HelloWorld"', expectedOutput: 'true' },
      { id: '2', input: '"Hello123"', expectedOutput: 'false' }
    ]
  },
  {
    id: 'string-match',
    title: 'String.match()',
    difficulty: 'easy',
    category: 'regex',
    points: 20,
    successRate: 93.0,
    description: `## String Match

Use \`match()\` with groups to extract parts of a string.

Extract the protocol, domain, and path from a URL.

### Example
\`\`\`typescript
parseUrl("https://example.com/path")
// Returns: { protocol: "https", domain: "example.com", path: "/path" }
\`\`\`
`,
    starterCode: `function parseUrl(url: string): { protocol: string; domain: string; path: string } | null {
    // Use regex groups to parse URL
    
}
`,
    solution: `function parseUrl(url: string): { protocol: string; domain: string; path: string } | null {
    const match = url.match(/^(https?):\\/\\/([^\\/]+)(\\/.*)$/);
    if (!match) return null;
    return {
        protocol: match[1],
        domain: match[2],
        path: match[3]
    };
}`,
    testCases: [
      { id: '1', input: '"https://example.com/path"', expectedOutput: '{"protocol":"https","domain":"example.com","path":"/path"}' }
    ]
  },
  {
    id: 'validate-email',
    title: 'Validating Email Addresses',
    difficulty: 'medium',
    category: 'regex',
    points: 20,
    successRate: 90.74,
    description: `## Email Validation

Create a function to validate email addresses.

A valid email has:
- Username (alphanumeric, can include . _ -)
- @ symbol
- Domain name (alphanumeric, can include -)
- . and extension (2-4 letters)

### Example
\`\`\`typescript
isValidEmail("test@example.com") // Returns: true
isValidEmail("invalid.email") // Returns: false
\`\`\`
`,
    starterCode: `function isValidEmail(email: string): boolean {
    // Validate email format
    
}
`,
    solution: `function isValidEmail(email: string): boolean {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
}`,
    testCases: [
      { id: '1', input: '"test@example.com"', expectedOutput: 'true' },
      { id: '2', input: '"invalid.email"', expectedOutput: 'false' },
      { id: '3', input: '"user.name@domain.org"', expectedOutput: 'true' }
    ]
  },
  {
    id: 'validate-phone',
    title: 'Validating Phone Numbers',
    difficulty: 'easy',
    category: 'regex',
    points: 20,
    successRate: 97.01,
    description: `## Phone Number Validation

Validate US phone numbers in format: XXX-XXX-XXXX

### Example
\`\`\`typescript
isValidPhone("123-456-7890") // Returns: true
isValidPhone("1234567890") // Returns: false
\`\`\`
`,
    starterCode: `function isValidPhone(phone: string): boolean {
    // Validate phone format XXX-XXX-XXXX
    
}
`,
    solution: `function isValidPhone(phone: string): boolean {
    return /^\\d{3}-\\d{3}-\\d{4}$/.test(phone);
}`,
    testCases: [
      { id: '1', input: '"123-456-7890"', expectedOutput: 'true' },
      { id: '2', input: '"1234567890"', expectedOutput: 'false' }
    ]
  },
  {
    id: 'regex-substitution',
    title: 'Regex Substitution',
    difficulty: 'medium',
    category: 'regex',
    points: 20,
    successRate: 93.87,
    description: `## Regex Replace

Use \`replace()\` with regex to modify strings.

Replace multiple spaces with a single space, and trim.

### Example
\`\`\`typescript
normalizeSpaces("  hello   world  ") // Returns: "hello world"
\`\`\`
`,
    starterCode: `function normalizeSpaces(s: string): string {
    // Replace multiple spaces with single space, trim
    
}
`,
    solution: `function normalizeSpaces(s: string): string {
    return s.replace(/\\s+/g, ' ').trim();
}`,
    testCases: [
      { id: '1', input: '"  hello   world  "', expectedOutput: 'hello world' },
      { id: '2', input: '"no  extra   spaces"', expectedOutput: 'no extra spaces' }
    ]
  },
  {
    id: 'validate-roman',
    title: 'Validating Roman Numerals',
    difficulty: 'easy',
    category: 'regex',
    points: 20,
    successRate: 92.54,
    description: `## Roman Numeral Validation

Check if a string is a valid Roman numeral.

Valid: I, V, X, L, C, D, M with proper combinations.

### Example
\`\`\`typescript
isValidRoman("XIV") // Returns: true
isValidRoman("ABC") // Returns: false
\`\`\`
`,
    starterCode: `function isValidRoman(s: string): boolean {
    // Validate Roman numeral
    
}
`,
    solution: `function isValidRoman(s: string): boolean {
    const pattern = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    return pattern.test(s) && s.length > 0;
}`,
    testCases: [
      { id: '1', input: '"XIV"', expectedOutput: 'true' },
      { id: '2', input: '"MCMXCIV"', expectedOutput: 'true' },
      { id: '3', input: '"ABC"', expectedOutput: 'false' }
    ]
  },
  {
    id: 'hex-color',
    title: 'Hex Color Code',
    difficulty: 'easy',
    category: 'regex',
    points: 30,
    successRate: 95.30,
    description: `## Extract Hex Colors

Find all valid hex color codes in a string.

Valid format: #RRGGBB or #RGB (3 or 6 hex digits)

### Example
\`\`\`typescript
findHexColors("color: #FFF; background: #123abc;")
// Returns: ["#FFF", "#123abc"]
\`\`\`
`,
    starterCode: `function findHexColors(s: string): string[] {
    // Find all hex color codes
    
}
`,
    solution: `function findHexColors(s: string): string[] {
    const matches = s.match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\\b/g);
    return matches || [];
}`,
    testCases: [
      { id: '1', input: '"color: #FFF; background: #123abc;"', expectedOutput: '["#FFF","#123abc"]' }
    ]
  },
  {
    id: 'validate-credit-card',
    title: 'Validating Credit Card Numbers',
    difficulty: 'medium',
    category: 'regex',
    points: 40,
    successRate: 95.59,
    description: `## Credit Card Validation

Validate credit card numbers with these rules:
- Must start with 4, 5, or 6
- Must be exactly 16 digits
- May have hyphens separating groups of 4 digits
- Must not have 4 or more consecutive repeated digits

### Example
\`\`\`typescript
isValidCard("4123456789012345") // Returns: true
isValidCard("1234567890123456") // Returns: false (doesn't start with 4,5,6)
\`\`\`
`,
    starterCode: `function isValidCard(card: string): boolean {
    // Validate credit card number
    
}
`,
    solution: `function isValidCard(card: string): boolean {
    // Remove hyphens for digit validation
    const cleaned = card.replace(/-/g, '');
    
    // Must be 16 digits
    if (!/^\\d{16}$/.test(cleaned)) return false;
    
    // Must start with 4, 5, or 6
    if (!/^[456]/.test(cleaned)) return false;
    
    // No 4+ consecutive repeated digits
    if (/(.)\\1{3,}/.test(cleaned)) return false;
    
    // If has hyphens, must be in format XXXX-XXXX-XXXX-XXXX
    if (card.includes('-') && !/^\\d{4}-\\d{4}-\\d{4}-\\d{4}$/.test(card)) return false;
    
    return true;
}`,
    testCases: [
      { id: '1', input: '"4123456789012345"', expectedOutput: 'true' },
      { id: '2', input: '"1234567890123456"', expectedOutput: 'false' },
      { id: '3', input: '"4123-4567-8901-2345"', expectedOutput: 'true' }
    ]
  },
  {
    id: 'validate-postal',
    title: 'Validating Postal Codes',
    difficulty: 'hard',
    category: 'regex',
    points: 80,
    successRate: 87.61,
    description: `## Postal Code Validation

Validate a postal code P:
- P must be a number in range 100000 to 999999
- P must not contain more than one alternating repetitive digit pair

Alternating repetitive: 121212, 131313 (digit repeated at alternating positions)

### Example
\`\`\`typescript
isValidPostal("121426") // Returns: true
isValidPostal("121212") // Returns: false (alternating 12)
\`\`\`
`,
    starterCode: `function isValidPostal(p: string): boolean {
    // Validate postal code
    
}
`,
    solution: `function isValidPostal(p: string): boolean {
    // Must be 6 digits in range 100000-999999
    if (!/^[1-9]\\d{5}$/.test(p)) return false;
    
    // Check for alternating repetitive pairs
    let count = 0;
    for (let i = 0; i < p.length - 2; i += 2) {
        if (p[i] === p[i + 2]) count++;
    }
    for (let i = 1; i < p.length - 2; i += 2) {
        if (p[i] === p[i + 2]) count++;
    }
    
    // Must not have more than one alternating pair
    return count <= 1;
}`,
    testCases: [
      { id: '1', input: '"121426"', expectedOutput: 'true' },
      { id: '2', input: '"121212"', expectedOutput: 'false' }
    ]
  }
];
