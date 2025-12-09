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

  for (const testCase of testCases) {
    try {
      // Create a function from the transpiled JS code
      const fullCode = `
        ${jsCode}
        
        // Find the main function and execute it
        const functionMatch = \`${jsCode}\`.match(/function\\s+(\\w+)/);
        if (functionMatch) {
          const fnName = functionMatch[1];
          const fn = eval(fnName);
          if (typeof fn === 'function') {
            const result = fn(${testCase.input || ''});
            return result;
          }
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
      let normalizedExpected = testCase.expectedOutput;
      
      // Compare
      const passed = formattedOutput === normalizedExpected || 
                     formattedOutput.replace(/\s/g, '') === normalizedExpected.replace(/\s/g, '');

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
