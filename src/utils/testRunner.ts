import type { TestResult } from '../types/challenge';
import ts from 'typescript';

// Transpile TypeScript code to JavaScript
const transpileToJS = (tsCode: string): string => {
  const result = ts.transpileModule(tsCode, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.None,
      strict: false,
      esModuleInterop: true,
      skipLibCheck: true,
      forceConsistentCasingInFileNames: true,
      removeComments: false,
    }
  });
  return result.outputText;
};

export const executeCode = (code: string, testCases: { id: string; input: string; expectedOutput: string }[]): TestResult[] => {
  const results: TestResult[] = [];

  // Transpile TypeScript to JavaScript first
  let jsCode: string;
  try {
    jsCode = transpileToJS(code);
  } catch (transpileError) {
    // If transpilation fails, return error for all test cases
    return testCases.map(testCase => ({
      testId: testCase.id,
      passed: false,
      input: testCase.input,
      expectedOutput: testCase.expectedOutput,
      actualOutput: '',
      error: `TypeScript compilation error: ${transpileError instanceof Error ? transpileError.message : String(transpileError)}`
    }));
  }

  // Extract the function name from the transpiled code (done once outside the loop)
  const functionMatch = jsCode.match(/function\s+(\w+)/);
  const fnName = functionMatch ? functionMatch[1] : null;

  for (const testCase of testCases) {
    try {
      // Create a function from the transpiled JS code
      const fullCode = `
        ${jsCode}
        
        // Execute the main function
        if (typeof ${fnName} === 'function') {
          const result = ${fnName}(${testCase.input || ''});
          return result;
        }
        return undefined;
      `;

      // Execute in a try-catch
      // eslint-disable-next-line no-new-func
      const execute = new Function(fullCode);
      let actualOutput: unknown;
      
      try {
        actualOutput = execute();
      } catch (execError) {
        results.push({
          testId: testCase.id,
          passed: false,
          input: testCase.input,
          expectedOutput: testCase.expectedOutput,
          actualOutput: '',
          error: String(execError)
        });
        continue;
      }

      // Format output for comparison
      let formattedOutput: string;
      if (actualOutput === undefined) {
        formattedOutput = 'undefined';
      } else if (actualOutput === null) {
        formattedOutput = 'null';
      } else if (typeof actualOutput === 'object') {
        formattedOutput = JSON.stringify(actualOutput);
      } else if (typeof actualOutput === 'bigint') {
        formattedOutput = actualOutput.toString() + 'n';
      } else {
        formattedOutput = String(actualOutput);
      }

      // Normalize expected output for comparison
      const normalizedExpected = testCase.expectedOutput;
      
      // Normalize function to handle whitespace differences in JSON
      const normalizeForComparison = (str: string): string => {
        // Remove spaces after colons and commas in JSON-like strings
        return str.trim().replace(/\s+/g, ' ').replace(/\[\s+/g, '[').replace(/\s+\]/g, ']').replace(/,\s+/g, ',').replace(/:\s+/g, ':');
      };
      
      // Compare - normalize both strings to handle whitespace differences
      const passed = formattedOutput === normalizedExpected || 
                     formattedOutput.trim() === normalizedExpected.trim() ||
                     normalizeForComparison(formattedOutput) === normalizeForComparison(normalizedExpected);

      results.push({
        testId: testCase.id,
        passed,
        input: testCase.input,
        expectedOutput: testCase.expectedOutput,
        actualOutput: formattedOutput
      });
    } catch (error) {
      results.push({
        testId: testCase.id,
        passed: false,
        input: testCase.input,
        expectedOutput: testCase.expectedOutput,
        actualOutput: '',
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }

  return results;
};
