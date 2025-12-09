import type { UserProgress } from '../types/challenge';

const STORAGE_KEY = 'ts-practice-progress';

export const getProgress = (): UserProgress => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return { solvedChallenges: [], totalPoints: 0 };
};

export const saveProgress = (progress: UserProgress): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const markChallengeSolved = (challengeId: string, points: number): UserProgress => {
  const progress = getProgress();
  if (!progress.solvedChallenges.includes(challengeId)) {
    progress.solvedChallenges.push(challengeId);
    progress.totalPoints += points;
    saveProgress(progress);
  }
  return progress;
};

export const isChallengeSolved = (challengeId: string): boolean => {
  const progress = getProgress();
  return progress.solvedChallenges.includes(challengeId);
};

export const resetProgress = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
