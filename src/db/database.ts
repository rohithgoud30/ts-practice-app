import type { UserProgress } from '../types/challenge';

const API_BASE = '/api';

// Get user progress
export const getProgressDB = async (): Promise<UserProgress> => {
  try {
    const response = await fetch(`${API_BASE}/progress`);
    if (!response.ok) throw new Error('Failed to get progress');
    return response.json();
  } catch (error) {
    console.error('Error getting progress:', error);
    return { solvedChallenges: [], totalPoints: 0 };
  }
};

// Check if a challenge is solved
export const isChallengeSolvedDB = async (challengeId: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE}/challenges/${challengeId}/status`);
    if (!response.ok) throw new Error('Failed to check status');
    const data = await response.json();
    return data.solved;
  } catch (error) {
    console.error('Error checking if solved:', error);
    return false;
  }
};

// Mark a challenge as solved
export const markChallengeSolvedDB = async (challengeId: string, points: number): Promise<UserProgress> => {
  try {
    const response = await fetch(`${API_BASE}/challenges/${challengeId}/solve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ points })
    });
    if (!response.ok) throw new Error('Failed to mark as solved');
    return response.json();
  } catch (error) {
    console.error('Error marking as solved:', error);
    return { solvedChallenges: [], totalPoints: 0 };
  }
};

// Get all solved challenges
export const getSolvedChallenges = async (): Promise<string[]> => {
  const progress = await getProgressDB();
  return progress.solvedChallenges;
};

// Reset all progress
export const resetProgressDB = async (): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE}/progress`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to reset progress');
  } catch (error) {
    console.error('Error resetting progress:', error);
  }
};

// Get challenge details
export const getChallengeDetails = async (challengeId: string): Promise<{
  solvedAt: string | null;
  attempts: number;
} | null> => {
  try {
    const response = await fetch(`${API_BASE}/challenges/${challengeId}/details`);
    if (!response.ok) throw new Error('Failed to get details');
    return response.json();
  } catch (error) {
    console.error('Error getting challenge details:', error);
    return null;
  }
};

// Export database - returns the current progress as JSON (for backup purposes)
export const exportDatabase = async (): Promise<UserProgress> => {
  return getProgressDB();
};

// Legacy functions that are no longer needed but kept for compatibility
export const initDatabase = async (): Promise<void> => {
  // No-op: database is now managed by the backend server
};

export const persistDatabase = async (): Promise<void> => {
  // No-op: database is automatically persisted by the backend
};
