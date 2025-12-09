import initSqlJs, { type Database } from 'sql.js';
import type { UserProgress } from '../types/challenge';

// Schema SQL - embedded for initialization
const SCHEMA_SQL = `
-- Table to store solved challenges
CREATE TABLE IF NOT EXISTS solved_challenges (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    challenge_id TEXT NOT NULL UNIQUE,
    solved_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    points INTEGER NOT NULL DEFAULT 0,
    attempts INTEGER NOT NULL DEFAULT 1
);

-- Table to store user progress summary
CREATE TABLE IF NOT EXISTS user_progress (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    total_points INTEGER NOT NULL DEFAULT 0,
    last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_challenge_id ON solved_challenges(challenge_id);

-- Initialize user_progress
INSERT OR IGNORE INTO user_progress (id, total_points) VALUES (1, 0);
`;

const DB_NAME = 'ts_practice_progress';
const DB_STORE_NAME = 'sqliteDb';

let db: Database | null = null;

// Initialize IndexedDB for persistence
const openIndexedDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(DB_STORE_NAME)) {
        db.createObjectStore(DB_STORE_NAME);
      }
    };
  });
};

// Save database to IndexedDB
const saveToIndexedDB = async (data: Uint8Array): Promise<void> => {
  const idb = await openIndexedDB();
  return new Promise((resolve, reject) => {
    const transaction = idb.transaction(DB_STORE_NAME, 'readwrite');
    const store = transaction.objectStore(DB_STORE_NAME);
    const request = store.put(data, 'database');
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
    
    transaction.oncomplete = () => idb.close();
  });
};

// Load database from IndexedDB
const loadFromIndexedDB = async (): Promise<Uint8Array | null> => {
  const idb = await openIndexedDB();
  return new Promise((resolve, reject) => {
    const transaction = idb.transaction(DB_STORE_NAME, 'readonly');
    const store = transaction.objectStore(DB_STORE_NAME);
    const request = store.get('database');
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result || null);
    
    transaction.oncomplete = () => idb.close();
  });
};

// Initialize the database
export const initDatabase = async (): Promise<Database> => {
  if (db) return db;
  
  const SQL = await initSqlJs({
    // Load sql.js wasm file from CDN
    locateFile: (file: string) => `https://sql.js.org/dist/${file}`
  });
  
  // Try to load existing database from IndexedDB
  const existingData = await loadFromIndexedDB();
  
  if (existingData) {
    db = new SQL.Database(existingData);
  } else {
    db = new SQL.Database();
    // Initialize schema
    db.run(SCHEMA_SQL);
    await persistDatabase();
  }
  
  return db;
};

// Persist database to IndexedDB
export const persistDatabase = async (): Promise<void> => {
  if (!db) return;
  const data = db.export();
  await saveToIndexedDB(data);
};

// Get all solved challenges
export const getSolvedChallenges = async (): Promise<string[]> => {
  const database = await initDatabase();
  const result = database.exec('SELECT challenge_id FROM solved_challenges');
  
  if (result.length === 0) return [];
  return result[0].values.map(row => row[0] as string);
};

// Check if a challenge is solved
export const isChallengeSolvedDB = async (challengeId: string): Promise<boolean> => {
  const database = await initDatabase();
  const result = database.exec(
    `SELECT 1 FROM solved_challenges WHERE challenge_id = '${challengeId}' LIMIT 1`
  );
  return result.length > 0 && result[0].values.length > 0;
};

// Mark a challenge as solved
export const markChallengeSolvedDB = async (challengeId: string, points: number): Promise<UserProgress> => {
  const database = await initDatabase();
  
  // Check if already solved
  const isSolved = await isChallengeSolvedDB(challengeId);
  
  if (!isSolved) {
    // Insert new solved challenge
    database.run(
      `INSERT INTO solved_challenges (challenge_id, points) VALUES (?, ?)`,
      [challengeId, points]
    );
    
    // Update total points
    database.run(
      `UPDATE user_progress SET total_points = total_points + ?, last_updated = CURRENT_TIMESTAMP WHERE id = 1`,
      [points]
    );
    
    await persistDatabase();
  } else {
    // Increment attempts if already solved
    database.run(
      `UPDATE solved_challenges SET attempts = attempts + 1 WHERE challenge_id = ?`,
      [challengeId]
    );
    await persistDatabase();
  }
  
  return getProgressDB();
};

// Get user progress
export const getProgressDB = async (): Promise<UserProgress> => {
  const database = await initDatabase();
  
  const solvedResult = database.exec('SELECT challenge_id FROM solved_challenges');
  const pointsResult = database.exec('SELECT total_points FROM user_progress WHERE id = 1');
  
  const solvedChallenges = solvedResult.length > 0 
    ? solvedResult[0].values.map((row: (string | number | Uint8Array | null)[]) => row[0] as string)
    : [];
    
  const totalPoints = pointsResult.length > 0 && pointsResult[0].values.length > 0
    ? pointsResult[0].values[0][0] as number
    : 0;
  
  return { solvedChallenges, totalPoints };
};

// Reset all progress
export const resetProgressDB = async (): Promise<void> => {
  const database = await initDatabase();
  
  database.run('DELETE FROM solved_challenges');
  database.run('UPDATE user_progress SET total_points = 0, last_updated = CURRENT_TIMESTAMP WHERE id = 1');
  
  await persistDatabase();
};

// Get challenge details (attempts, solved date)
export const getChallengeDetails = async (challengeId: string): Promise<{
  solvedAt: string | null;
  attempts: number;
} | null> => {
  const database = await initDatabase();
  const result = database.exec(
    `SELECT solved_at, attempts FROM solved_challenges WHERE challenge_id = ?`,
    [challengeId]
  );
  
  if (result.length === 0 || result[0].values.length === 0) {
    return null;
  }
  
  const row: (string | number | Uint8Array | null)[] = result[0].values[0];
  return {
    solvedAt: row[0] as string,
    attempts: row[1] as number
  };
};

// Export database for debugging/backup
export const exportDatabase = async (): Promise<Uint8Array> => {
  const database = await initDatabase();
  return database.export();
};
