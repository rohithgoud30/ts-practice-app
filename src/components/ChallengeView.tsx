import { useState, useEffect, useRef, useCallback } from 'react';
import type { Challenge, TestResult } from '../types/challenge';
// import { DIFFICULTY_COLORS } from '../types/challenge';
import CodeEditor from './CodeEditor';
import TestResults from './TestResults';
import { executeCode } from '../utils/testRunner';
import { markChallengeSolved, isChallengeSolved } from '../utils/progress';

interface ChallengeViewProps {
  challenge: Challenge;
  onBack: () => void;
  onSolved: () => void;
}

const ChallengeView: React.FC<ChallengeViewProps> = ({ challenge, onBack, onSolved }) => {
  const [code, setCode] = useState(challenge.starterCode);
  const [results, setResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [solved, setSolved] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  
  // Resizable panel state
  const [leftPanelWidth, setLeftPanelWidth] = useState(40); // percentage
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Fullscreen state
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setCode(challenge.starterCode);
    setResults([]);
    setSolved(isChallengeSolved(challenge.id));
    setShowSolution(false);
  }, [challenge]);

  // Handle resize
  const handleMouseDown = useCallback(() => {
    setIsResizing(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing || !containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const newWidth = ((e.clientX - rect.left) / rect.width) * 100;
    
    // Clamp between 20% and 80%
    setLeftPanelWidth(Math.min(80, Math.max(20, newWidth)));
  }, [isResizing]);

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);

  const runTests = () => {
    setIsRunning(true);
    setResults([]);

    setTimeout(() => {
      const testResults = executeCode(code, challenge.testCases);
      setResults(testResults);
      setIsRunning(false);

      const allPassed = testResults.every(r => r.passed);
      if (allPassed && !solved) {
        markChallengeSolved(challenge.id, challenge.points);
        setSolved(true);
        onSolved();
      }
    }, 300);
  };

  const resetCode = () => {
    setCode(challenge.starterCode);
    setResults([]);
  };

  const loadSolution = () => {
    setCode(challenge.solution);
    setShowSolution(true);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`challenge-view ${isFullscreen ? 'fullscreen-mode' : ''}`}>
      {!isFullscreen && (
        <div className="challenge-workspace-header">
          <div className="back-link" onClick={onBack}>
            <span>←</span> Back to Challenges
          </div>
          <div className="workspace-title">
            <h1>{challenge.title}</h1>
            <div className="challenge-meta">
              <span className={`badge ${challenge.difficulty}`}>
                {challenge.difficulty}
              </span>
              <span className="badge" style={{ color: 'var(--primary-glow)', borderColor: 'var(--primary)' }}>+{challenge.points} XP</span>
              {solved && (
                <span className="badge" style={{ color: 'var(--success)', background: 'rgba(16, 185, 129, 0.1)' }}>
                  ✓ Solved
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      <div 
        className="challenge-content" 
        ref={containerRef}
        style={isFullscreen ? {} : { gridTemplateColumns: `${leftPanelWidth}% 12px 1fr` }}
      >
        {!isFullscreen && (
          <>
            <div className="challenge-left">
              <div className="problem-description">
                <h2>Problem Statement</h2>
                <div 
                  className="description-content"
                  dangerouslySetInnerHTML={{ 
                    __html: challenge.description
                      .replace(/```typescript([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
                      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
                      .replace(/`([^`]+)`/g, '<code>$1</code>')
                      .replace(/## (.*)/g, '<h3>$1</h3>')
                      .replace(/### (.*)/g, '<h4>$1</h4>')
                      .replace(/\n\n/g, '</p><p>')
                      .replace(/\n- /g, '</p><li>')
                  }}
                />
              </div>
            </div>

            {/* Resizable Divider */}
            <div 
              className="resize-handle"
              onMouseDown={handleMouseDown}
            >
              <div className="resize-dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </>
        )}

        <div className="challenge-right">
          <div className="editor-section">
            <div className="editor-toolbar">
              <div className="file-tab">
                <span>TS</span> script.ts
              </div>
              <div className="editor-actions">
                <button 
                  className="action-btn" 
                  onClick={toggleFullscreen}
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? 'Exit' : '⛶'}
                </button>
                <button className="action-btn" onClick={resetCode}>
                  Reset
                </button>
                <button className="action-btn" onClick={loadSolution}>
                  {showSolution ? 'Loaded' : 'Solution'}
                </button>
                <button className="run-btn" onClick={runTests} disabled={isRunning}>
                  {isRunning ? 'Running...' : 'Run Code'}
                </button>
              </div>
            </div>
            <CodeEditor code={code} onChange={setCode} height="100%" />
          </div>

          <div className="results-section">
            <div className="results-header">Terminal Output</div>
            <div className="terminal-output">
              <TestResults results={results} isRunning={isRunning} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeView;
