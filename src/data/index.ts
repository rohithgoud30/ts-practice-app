import type { Challenge } from '../types/challenge';
import { introductionChallenges } from './challenges/introduction';
import { stringsChallenges } from './challenges/strings';
import { arraysChallenges } from './challenges/arrays';
import { setsChallenges } from './challenges/sets';
import { mapsChallenges } from './challenges/maps';
import { mathChallenges } from './challenges/math';
import { classesChallenges } from './challenges/classes';
import { regexChallenges } from './challenges/regex';
import { promisesChallenges } from './challenges/promises';
import { functionalsChallenges } from './challenges/functionals';
import { errorsChallenges } from './challenges/errors';
import { builtInsChallenges } from './challenges/builtIns';

export const allChallenges: Challenge[] = [
  ...introductionChallenges,
  ...stringsChallenges,
  ...arraysChallenges,
  ...setsChallenges,
  ...mapsChallenges,
  ...mathChallenges,
  ...classesChallenges,
  ...regexChallenges,
  ...promisesChallenges,
  ...functionalsChallenges,
  ...errorsChallenges,
  ...builtInsChallenges,
];

export const getChallengeById = (id: string): Challenge | undefined => {
  return allChallenges.find(c => c.id === id);
};

export const getChallengesByCategory = (category: string): Challenge[] => {
  return allChallenges.filter(c => c.category === category);
};

export const getChallengesByDifficulty = (difficulty: string): Challenge[] => {
  return allChallenges.filter(c => c.difficulty === difficulty);
};

export const getCategories = (): string[] => {
  return [...new Set(allChallenges.map(c => c.category))];
};

export const getTotalPoints = (): number => {
  return allChallenges.reduce((sum, c) => sum + c.points, 0);
};
