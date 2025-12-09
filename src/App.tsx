import { useState, useCallback } from 'react';
import type { Challenge, Category, Difficulty } from './types/challenge';
import { allChallenges } from './data';
import Header from './components/Header';
import ChallengeList from './components/ChallengeList';
import ChallengeView from './components/ChallengeView';
import './App.css';

function App() {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSelectChallenge = useCallback((challenge: Challenge) => {
    setSelectedChallenge(challenge);
  }, []);

  const handleBack = useCallback(() => {
    setSelectedChallenge(null);
    setRefreshKey(k => k + 1);
  }, []);

  const handleSolved = useCallback(() => {
    setRefreshKey(k => k + 1);
  }, []);

  return (
    <div className="app">
      <Header 
        key={`header-${refreshKey}`}
        challenge={selectedChallenge}
        onBack={selectedChallenge ? handleBack : undefined}
      />
      
      <main className="main-content">
        {selectedChallenge ? (
          <ChallengeView 
            challenge={selectedChallenge}
            onBack={handleBack}
            onSolved={handleSolved}
          />
        ) : (
          <ChallengeList
            key={`list-${refreshKey}`}
            challenges={allChallenges}
            selectedCategory={selectedCategory}
            selectedDifficulty={selectedDifficulty}
            onSelectChallenge={handleSelectChallenge}
            onCategoryChange={setSelectedCategory}
            onDifficultyChange={setSelectedDifficulty}
          />
        )}
      </main>
    </div>
  );
}

export default App;
