import { getProgress } from '../utils/progress';
import { getTotalPoints } from '../data';

const Header: React.FC = () => {
  const progress = getProgress();
  const maxPoints = getTotalPoints();
  const progressPercent = Math.round((progress.totalPoints / maxPoints) * 100);

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
