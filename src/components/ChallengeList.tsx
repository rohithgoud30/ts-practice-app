import { useState, useEffect } from 'react';
import type { Challenge, Category, Difficulty } from '../types/challenge';
import { CATEGORY_LABELS, DIFFICULTY_COLORS } from '../types/challenge';
import { getSolvedChallenges } from '../db';

interface ChallengeListProps {
  challenges: Challenge[];
  selectedCategory: Category | 'all';
  selectedDifficulty: Difficulty | 'all';
  onSelectChallenge: (challenge: Challenge) => void;
  onCategoryChange: (category: Category | 'all') => void;
  onDifficultyChange: (difficulty: Difficulty | 'all') => void;
}

const CATEGORY_ICONS: Record<Category, string> = {
  'introduction': '🚀',
  'basic-data-types': '📦',
  'strings': '📝',
  'arrays': '📚',
  'sets': '💠',
  'maps': '🗺️',
  'math': '🔢',
  'iterators': '🔄',
  'date-time': '📅',
  'errors': '⚠️',
  'classes': '🏗️',
  'interfaces': '🧬',
  'built-ins': '🛠️',
  'functionals': 'λ',
  'regex': '🔍',
  'promises': '⏳',
};

const ChallengeList: React.FC<ChallengeListProps> = ({
  challenges,
  selectedCategory,
  selectedDifficulty,
  onSelectChallenge,
  onCategoryChange,
  onDifficultyChange,
}) => {
  const [solvedIds, setSolvedIds] = useState<string[]>([]);
  const categories = Object.keys(CATEGORY_LABELS) as Category[];
  const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];

  useEffect(() => {
    const loadSolved = async () => {
      try {
        const solved = await getSolvedChallenges();
        setSolvedIds(solved);
      } catch (error) {
        console.error('Failed to load solved challenges:', error);
      }
    };
    loadSolved();
  }, []);

  // Listen for progress updates
  useEffect(() => {
    const handleProgressUpdate = async () => {
      const solved = await getSolvedChallenges();
      setSolvedIds(solved);
    };
    window.addEventListener('progress-updated', handleProgressUpdate);
    return () => window.removeEventListener('progress-updated', handleProgressUpdate);
  }, []);

  const filteredChallenges = challenges.filter(c => {
    if (selectedCategory !== 'all' && c.category !== selectedCategory) return false;
    if (selectedDifficulty !== 'all' && c.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const getSolvedCount = (category?: Category) => {
    const list = category 
      ? challenges.filter(c => c.category === category)
      : challenges;
    return list.filter(c => solvedIds.includes(c.id)).length;
  };

  const isChallengeSolved = (id: string) => solvedIds.includes(id);

  return (
    <div className="challenge-list-container">
      <aside className="sidebar">
        <div className="filter-section">
          <h3>Subdomains</h3>
          <ul className="category-list">
            <li 
              className={selectedCategory === 'all' ? 'active' : ''}
              onClick={() => onCategoryChange('all')}
            >
              <span className="cat-label">All Challenges</span>
              <span className="count">{getSolvedCount()}/{challenges.length}</span>
            </li>
            {categories.map(cat => {
              const catChallenges = challenges.filter(c => c.category === cat);
              return (
                <li 
                  key={cat}
                  className={selectedCategory === cat ? 'active' : ''}
                  onClick={() => onCategoryChange(cat)}
                >
                  <span className="cat-label">
                    <span style={{ marginRight: '8px' }}>{CATEGORY_ICONS[cat]}</span>
                    {CATEGORY_LABELS[cat]}
                  </span>
                  <span className="count">{getSolvedCount(cat)}/{catChallenges.length}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="filter-section">
          <h3>Difficulty</h3>
          <ul className="difficulty-list">
            <li 
              className={selectedDifficulty === 'all' ? 'active' : ''}
              onClick={() => onDifficultyChange('all')}
            >
              All Levels
            </li>
            {difficulties.map(diff => (
              <li 
                key={diff}
                className={selectedDifficulty === diff ? 'active' : ''}
                onClick={() => onDifficultyChange(diff)}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span 
                    className="diff-dot" 
                    style={{ backgroundColor: DIFFICULTY_COLORS[diff] }}
                  />
                  {diff.charAt(0).toUpperCase() + diff.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="challenge-grid">
        <div className="grid-header">
          <div>
            <h2>
              {selectedCategory === 'all' 
                ? 'All Challenges' 
                : CATEGORY_LABELS[selectedCategory]}
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
              {selectedCategory === 'all' 
                ? 'Master TypeScript through interactive challenges.' 
                : `Focus on ${CATEGORY_LABELS[selectedCategory].toLowerCase()} concepts.`}
            </p>
          </div>
          <span className="challenge-count">
            {filteredChallenges.length} Available
          </span>
        </div>

        <div className="challenges">
          {filteredChallenges.map(challenge => {
            const solved = isChallengeSolved(challenge.id);
            return (
              <div 
                key={challenge.id}
                className={`challenge-card ${solved ? 'solved' : ''}`}
                onClick={() => onSelectChallenge(challenge)}
              >
                <div className="card-header">
                  <h3>{challenge.title}</h3>
                  {solved && <span className="solved-icon">✓</span>}
                </div>
                <div className="card-meta">
                  <span className={`badge ${challenge.difficulty}`}>
                    {challenge.difficulty}
                  </span>
                  <span className="badge">
                    {CATEGORY_ICONS[challenge.category]} {CATEGORY_LABELS[challenge.category]}
                  </span>
                </div>
                <div className="card-footer">
                  <span className="points">+{challenge.points} XP</span>
                  <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default ChallengeList;
