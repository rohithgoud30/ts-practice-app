import { useState, useEffect } from 'react';
import { getProgressDB } from '../db';
import { getTotalPoints } from '../data';
import type { UserProgress, Challenge } from '../types/challenge';

interface HeaderProps {
  challenge?: Challenge | null;
  onBack?: () => void;
  solved?: boolean;
}

const Header: React.FC<HeaderProps> = ({ challenge, onBack, solved }) => {
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
        <div className="logo-group">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <h1>TS Master</h1>
          </div>
          <span className="logo-divider">|</span>
          <span className="logo-subtitle">Practice Arena</span>
        </div>
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
      <div className="logo-group">
        {challenge && onBack ? (
          <>
            <div className="back-btn" onClick={onBack}>
              <span>←</span>
            </div>
            <span className="logo-divider">|</span>
            <div className="challenge-header-info">
              <span className="challenge-header-title">{challenge.title}</span>
              <div className="challenge-header-meta">
                <span className={`badge ${challenge.difficulty}`}>
                  {challenge.difficulty}
                </span>
                <span className="badge xp-badge">+{challenge.points} XP</span>
                {solved && (
                  <span className="badge solved-badge">✓ Solved</span>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="logo">
              <span className="logo-icon">⚡</span>
              <h1>TS Master</h1>
            </div>
            <span className="logo-divider">|</span>
            <span className="logo-subtitle">Practice Arena</span>
          </>
        )}
      </div>

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
