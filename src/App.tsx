import { useState, useCallback, useMemo } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import type { Challenge, Category, Difficulty } from './types/challenge';
import { allChallenges } from './data';
import Header from './components/Header';
import ChallengeList from './components/ChallengeList';
import ChallengeView from './components/ChallengeView';
import './App.css';

// Challenge page component
function ChallengePage({ 
  allChallenges, 
  filteredChallenges,
  onSolved 
}: { 
  allChallenges: Challenge[];
  filteredChallenges: Challenge[];
  onSolved: () => void;
}) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const challenge = allChallenges.find(c => c.id === id);
  
  if (!challenge) {
    return (
      <div className="challenge-not-found">
        <h2>Challenge not found</h2>
        <p>The challenge you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/')}>Back to Challenges</button>
      </div>
    );
  }

  const currentIndex = filteredChallenges.findIndex(c => c.id === id);
  const hasNext = currentIndex !== -1 && currentIndex < filteredChallenges.length - 1;
  
  const handleNext = () => {
    if (hasNext) {
      navigate(`/challenge/${filteredChallenges[currentIndex + 1].id}`);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <Header 
        challenge={challenge}
        onBack={handleBack}
      />
      <main className="main-content">
        <ChallengeView 
          challenge={challenge}
          onBack={handleBack}
          onSolved={onSolved}
          onNext={handleNext}
          hasNext={hasNext}
        />
      </main>
    </>
  );
}

// Home page component
function HomePage({
  challenges,
  selectedCategory,
  selectedDifficulty,
  onCategoryChange,
  onDifficultyChange,
  refreshKey
}: {
  challenges: Challenge[];
  selectedCategory: Category | 'all';
  selectedDifficulty: Difficulty | 'all';
  onCategoryChange: (category: Category | 'all') => void;
  onDifficultyChange: (difficulty: Difficulty | 'all') => void;
  refreshKey: number;
}) {
  const navigate = useNavigate();
  
  const handleSelectChallenge = useCallback((challenge: Challenge) => {
    navigate(`/challenge/${challenge.id}`);
  }, [navigate]);

  return (
    <>
      <Header challenge={null} />
      <main className="main-content">
        <ChallengeList
          key={`list-${refreshKey}`}
          challenges={challenges}
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          onSelectChallenge={handleSelectChallenge}
          onCategoryChange={onCategoryChange}
          onDifficultyChange={onDifficultyChange}
        />
      </main>
    </>
  );
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [refreshKey, setRefreshKey] = useState(0);

  const filteredChallenges = useMemo(() => {
    return allChallenges.filter(c => {
      const categoryMatch = selectedCategory === 'all' || c.category === selectedCategory;
      const difficultyMatch = selectedDifficulty === 'all' || c.difficulty === selectedDifficulty;
      return categoryMatch && difficultyMatch;
    });
  }, [selectedCategory, selectedDifficulty]);

  const handleSolved = useCallback(() => {
    setRefreshKey(k => k + 1);
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              challenges={allChallenges}
              selectedCategory={selectedCategory}
              selectedDifficulty={selectedDifficulty}
              onCategoryChange={setSelectedCategory}
              onDifficultyChange={setSelectedDifficulty}
              refreshKey={refreshKey}
            />
          } 
        />
        <Route 
          path="/challenge/:id" 
          element={
            <ChallengePage 
              allChallenges={allChallenges}
              filteredChallenges={filteredChallenges}
              onSolved={handleSolved}
            />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
