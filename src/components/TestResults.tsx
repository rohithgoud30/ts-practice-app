import type { TestResult } from '../types/challenge';

interface TestResultsProps {
  results: TestResult[];
  isRunning: boolean;
}

const TestResults: React.FC<TestResultsProps> = ({ results, isRunning }) => {
  if (isRunning) {
    return (
      <div className="font-mono text-sm">
        <span className="text-muted">Running tests...</span>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="font-mono text-sm text-muted">
        &gt; Ready to execute. Click "Run Code" to start.
      </div>
    );
  }

  const passedCount = results.filter(r => r.passed).length;
  const allPassed = passedCount === results.length;

  return (
    <div className="font-mono text-sm">
      <div className="mb-4">
        <span className={allPassed ? 'pass' : 'fail'}>
          {allPassed ? '✓' : '✗'} {passedCount}/{results.length} tests passed
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {results.map((result, index) => (
          <div key={result.testId} className="mb-2">
            <div className={result.passed ? 'pass' : 'fail'}>
              {result.passed ? '✓' : '✗'} Test Case {index + 1}
            </div>
            
            {!result.passed && (
              <div className="pl-4 mt-1 border-l-2 border-slate-700 ml-1">
                {result.input && (
                  <div>
                    <span className="text-muted">Input:    </span>
                    <span className="text-primary">{result.input}</span>
                  </div>
                )}
                <div>
                  <span className="text-muted">Expected: </span>
                  <span className="text-success">{result.expectedOutput}</span>
                </div>
                <div>
                  <span className="text-muted">Actual:   </span>
                  <span className="text-error">{result.error || result.actualOutput}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestResults;
