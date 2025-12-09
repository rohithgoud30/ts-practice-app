import { useState, useEffect } from 'react';
import { getProgressDB } from '../db';
import { getTotalPoints } from '../data';
import type { UserProgress } from '../types/challenge';

const Header: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress>({ solvedChallenges: [], totalPoints: 0 });
  const [loading, setLoading] = useState(true);
  const maxPoints = getTotalPoints();
  const progressPercent = Math.round((progress.totalPoints / maxPoints) * 100);

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const data = await getProgressDB();
        setProgress(data);
      } catch (error) {
        console.error('Failed to load progress:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProgress();
  }, []);

  // Listen for progress updates
  useEffect(() => {
    const handleProgressUpdate = () => {
      getProgressDB().then(setProgress);
    };
    window.addEventListener('progress-updated', handleProgressUpdate);
    return () => window.removeEventListener('progress-updated', handleProgressUpdate);
  }, []);

  if (loading) {
    return (
      <header className="app-header">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <h1>TS Master</h1>
        </div>
        <nav className="nav-links">
          <a href="#" className="active">Practice Arena</a>
        </nav>
        <div className="header-right">
          <div className="stats">
            <div className="stat">
              <span className="stat-value">...</span>
              <span className="stat-label">Solved</span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="app-header">
      <div className="logo">
        <span className="logo-icon">⚡</span>
        <h1>TS Master</h1>
      </div>

      <nav className="nav-links">
        <a href="#" className="active">Practice Arena</a>
      </nav>

      <div className="header-right">
        <div className="stats">
          <div className="stat">
            <span className="stat-value">{progress.solvedChallenges.length}</span>
            <span className="stat-label">Solved</span>
          </div>
          <div className="stat">
            <span className="stat-value">{progress.totalPoints}</span>
            <span className="stat-label">XP</span>
          </div>
        </div>

        <div className="progress-container">
          <div className="progress-text">
            <span>Progress</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
