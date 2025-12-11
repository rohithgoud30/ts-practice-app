-- SQLite schema for tracking solved problems
-- This file defines the database structure for local progress tracking

-- Table to store solved challenges
CREATE TABLE IF NOT EXISTS solved_challenges (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    challenge_id TEXT NOT NULL UNIQUE,
    solved_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    points INTEGER NOT NULL DEFAULT 0,
    attempts INTEGER NOT NULL DEFAULT 1,
    user_code TEXT
);

-- Table to store user progress summary
CREATE TABLE IF NOT EXISTS user_progress (
    id INTEGER PRIMARY KEY CHECK (id = 1), -- Only one row allowed
    total_points INTEGER NOT NULL DEFAULT 0,
    last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster lookups by challenge_id
CREATE INDEX IF NOT EXISTS idx_challenge_id ON solved_challenges(challenge_id);

-- Initialize user_progress with a single row if not exists
INSERT OR IGNORE INTO user_progress (id, total_points) VALUES (1, 0);
