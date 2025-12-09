import type { Challenge } from '../../types/challenge';

export const classesChallenges: Challenge[] = [
  {
    id: 'class-basics',
    title: 'Class Basics',
    difficulty: 'easy',
    category: 'classes',
    points: 10,
    successRate: 96.0,
    description: `## Classes in TypeScript

Create a simple class with properties and a method.

Create a Person class with name and age, and a greet method.

### Example
\`\`\`typescript
const p = new Person("Alice", 25);
p.greet() // Returns: "Hello, I'm Alice and I'm 25 years old."
\`\`\`
`,
    starterCode: `class Person {
    // Add properties and constructor
    
    greet(): string {
        // Return greeting
        
    }
}

// Test
function testPerson(name: string, age: number): string {
    const p = new Person(name, age);
    return p.greet();
}
`,
    solution: `class Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    greet(): string {
        return \`Hello, I'm \${this.name} and I'm \${this.age} years old.\`;
    }
}`,
    testCases: [
      { id: '1', input: '"Alice", 25', expectedOutput: "Hello, I'm Alice and I'm 25 years old." }
    ]
  },
  {
    id: 'constructor-properties',
    title: 'Constructor & Properties',
    difficulty: 'easy',
    category: 'classes',
    points: 10,
    successRate: 95.5,
    description: `## Parameter Properties

TypeScript allows declaring properties directly in the constructor.

Create a Rectangle class using parameter properties.

### Example
\`\`\`typescript
const r = new Rectangle(5, 3);
r.area() // Returns: 15
\`\`\`
`,
    starterCode: `class Rectangle {
    // Use parameter properties in constructor
    
    area(): number {
        // Return width * height
        
    }
    
    perimeter(): number {
        // Return 2 * (width + height)
        
    }
}

function testRectangle(w: number, h: number): { area: number; perimeter: number } {
    const r = new Rectangle(w, h);
    return { area: r.area(), perimeter: r.perimeter() };
}
`,
    solution: `class Rectangle {
    constructor(public width: number, public height: number) {}
    
    area(): number {
        return this.width * this.height;
    }
    
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}`,
    testCases: [
      { id: '1', input: '5, 3', expectedOutput: '{"area":15,"perimeter":16}' }
    ]
  },
  {
    id: 'class-inheritance',
    title: 'Class Inheritance',
    difficulty: 'medium',
    category: 'classes',
    points: 20,
    successRate: 92.0,
    description: `## Inheritance

Create a base Animal class and a Dog class that extends it.

### Example
\`\`\`typescript
const d = new Dog("Buddy", "Golden Retriever");
d.speak() // Returns: "Buddy says Woof!"
d.describe() // Returns: "Buddy is a Golden Retriever"
\`\`\`
`,
    starterCode: `class Animal {
    constructor(public name: string) {}
    
    speak(): string {
        return \`\${this.name} makes a sound\`;
    }
}

class Dog extends Animal {
    // Add breed property and override speak
    
}

function testDog(name: string, breed: string): { speak: string; describe: string } {
    const d = new Dog(name, breed);
    return { speak: d.speak(), describe: d.describe() };
}
`,
    solution: `class Animal {
    constructor(public name: string) {}
    
    speak(): string {
        return \`\${this.name} makes a sound\`;
    }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name);
    }
    
    speak(): string {
        return \`\${this.name} says Woof!\`;
    }
    
    describe(): string {
        return \`\${this.name} is a \${this.breed}\`;
    }
}`,
    testCases: [
      { id: '1', input: '"Buddy", "Golden Retriever"', expectedOutput: '{"speak":"Buddy says Woof!","describe":"Buddy is a Golden Retriever"}' }
    ]
  },
  {
    id: 'access-modifiers',
    title: 'Access Modifiers',
    difficulty: 'medium',
    category: 'classes',
    points: 20,
    successRate: 90.5,
    description: `## Public, Private, Protected

- \`public\`: accessible anywhere
- \`private\`: only within the class
- \`protected\`: within class and subclasses

Create a BankAccount class with a private balance.

### Example
\`\`\`typescript
const acc = new BankAccount(100);
acc.deposit(50);
acc.getBalance() // Returns: 150
\`\`\`
`,
    starterCode: `class BankAccount {
    // private balance
    
    constructor(initialBalance: number) {
        // initialize balance
    }
    
    deposit(amount: number): void {
        // add to balance
    }
    
    withdraw(amount: number): boolean {
        // subtract if sufficient funds, return success
    }
    
    getBalance(): number {
        // return current balance
    }
}

function testAccount(initial: number, deposit: number, withdraw: number): { balance: number; withdrawSuccess: boolean } {
    const acc = new BankAccount(initial);
    acc.deposit(deposit);
    const success = acc.withdraw(withdraw);
    return { balance: acc.getBalance(), withdrawSuccess: success };
}
`,
    solution: `class BankAccount {
    private balance: number;
    
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
    
    deposit(amount: number): void {
        this.balance += amount;
    }
    
    withdraw(amount: number): boolean {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
    
    getBalance(): number {
        return this.balance;
    }
}`,
    testCases: [
      { id: '1', input: '100, 50, 30', expectedOutput: '{"balance":120,"withdrawSuccess":true}' },
      { id: '2', input: '50, 10, 100', expectedOutput: '{"balance":60,"withdrawSuccess":false}' }
    ]
  },
  {
    id: 'getters-setters',
    title: 'Getters and Setters',
    difficulty: 'easy',
    category: 'classes',
    points: 15,
    successRate: 93.0,
    description: `## Getters and Setters

Use \`get\` and \`set\` keywords to create accessor properties.

Create a Temperature class that stores Celsius but can get/set Fahrenheit.

### Example
\`\`\`typescript
const t = new Temperature(25);
t.fahrenheit // Returns: 77
t.fahrenheit = 86;
t.celsius // Returns: 30
\`\`\`
`,
    starterCode: `class Temperature {
    private _celsius: number;
    
    constructor(celsius: number) {
        this._celsius = celsius;
    }
    
    get celsius(): number {
        // return celsius
    }
    
    set celsius(value: number) {
        // set celsius
    }
    
    get fahrenheit(): number {
        // return fahrenheit conversion
    }
    
    set fahrenheit(value: number) {
        // convert and set celsius
    }
}

function testTemp(c: number, newF: number): { celsius: number; fahrenheit: number } {
    const t = new Temperature(c);
    t.fahrenheit = newF;
    return { celsius: t.celsius, fahrenheit: t.fahrenheit };
}
`,
    solution: `class Temperature {
    private _celsius: number;
    
    constructor(celsius: number) {
        this._celsius = celsius;
    }
    
    get celsius(): number {
        return this._celsius;
    }
    
    set celsius(value: number) {
        this._celsius = value;
    }
    
    get fahrenheit(): number {
        return this._celsius * 9/5 + 32;
    }
    
    set fahrenheit(value: number) {
        this._celsius = (value - 32) * 5/9;
    }
}`,
    testCases: [
      { id: '1', input: '25, 86', expectedOutput: '{"celsius":30,"fahrenheit":86}' }
    ]
  },
  {
    id: 'static-members',
    title: 'Static Methods & Properties',
    difficulty: 'easy',
    category: 'classes',
    points: 15,
    successRate: 94.0,
    description: `## Static Members

Static members belong to the class itself, not instances.

Create a Counter class with a static count.

### Example
\`\`\`typescript
Counter.getCount() // Returns: 0
new Counter();
new Counter();
Counter.getCount() // Returns: 2
\`\`\`
`,
    starterCode: `class Counter {
    // static count property
    
    constructor() {
        // increment count
    }
    
    static getCount(): number {
        // return count
    }
    
    static reset(): void {
        // reset count to 0
    }
}

function testCounter(n: number): number {
    Counter.reset();
    for (let i = 0; i < n; i++) {
        new Counter();
    }
    return Counter.getCount();
}
`,
    solution: `class Counter {
    private static count: number = 0;
    
    constructor() {
        Counter.count++;
    }
    
    static getCount(): number {
        return Counter.count;
    }
    
    static reset(): void {
        Counter.count = 0;
    }
}`,
    testCases: [
      { id: '1', input: '5', expectedOutput: '5' },
      { id: '2', input: '3', expectedOutput: '3' }
    ]
  },
  {
    id: 'complex-numbers',
    title: 'Dealing with Complex Numbers',
    difficulty: 'medium',
    category: 'classes',
    points: 20,
    successRate: 90.77,
    description: `## Complex Numbers Class

Create a Complex class to represent complex numbers with add, subtract, multiply operations.

### Example
\`\`\`typescript
const c1 = new Complex(2, 3);
const c2 = new Complex(4, 5);
c1.add(c2) // Returns: Complex(6, 8)
\`\`\`
`,
    starterCode: `class Complex {
    constructor(public real: number, public imag: number) {}
    
    add(other: Complex): Complex {
        // (a+bi) + (c+di) = (a+c) + (b+d)i
    }
    
    subtract(other: Complex): Complex {
        // (a+bi) - (c+di) = (a-c) + (b-d)i
    }
    
    multiply(other: Complex): Complex {
        // (a+bi) * (c+di) = (ac-bd) + (ad+bc)i
    }
    
    toString(): string {
        return \`\${this.real} + \${this.imag}i\`;
    }
}

function testComplex(r1: number, i1: number, r2: number, i2: number): { add: string; sub: string; mul: string } {
    const c1 = new Complex(r1, i1);
    const c2 = new Complex(r2, i2);
    return {
        add: c1.add(c2).toString(),
        sub: c1.subtract(c2).toString(),
        mul: c1.multiply(c2).toString()
    };
}
`,
    solution: `class Complex {
    constructor(public real: number, public imag: number) {}
    
    add(other: Complex): Complex {
        return new Complex(this.real + other.real, this.imag + other.imag);
    }
    
    subtract(other: Complex): Complex {
        return new Complex(this.real - other.real, this.imag - other.imag);
    }
    
    multiply(other: Complex): Complex {
        const real = this.real * other.real - this.imag * other.imag;
        const imag = this.real * other.imag + this.imag * other.real;
        return new Complex(real, imag);
    }
    
    toString(): string {
        return \`\${this.real} + \${this.imag}i\`;
    }
}`,
    testCases: [
      { id: '1', input: '2, 3, 4, 5', expectedOutput: '{"add":"6 + 8i","sub":"-2 + -2i","mul":"-7 + 22i"}' }
    ]
  }
];
