import Database from 'better-sqlite3';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize database
const dbPath = path.join(__dirname, 'data', 'progress.db');
const schemaPath = path.join(__dirname, 'src', 'db', 'schema.sql');

// Ensure data directory exists
const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(dbPath);

// Initialize schema
const schema = fs.readFileSync(schemaPath, 'utf-8');
db.exec(schema);

console.log(`Database initialized at: ${dbPath}`);

// API Endpoints

// Get user progress
app.get('/api/progress', (req, res) => {
  try {
    const solvedStmt = db.prepare('SELECT challenge_id FROM solved_challenges');
    const solvedChallenges = solvedStmt.all().map(row => row.challenge_id);
    
    const pointsStmt = db.prepare('SELECT total_points FROM user_progress WHERE id = 1');
    const pointsRow = pointsStmt.get();
    const totalPoints = pointsRow ? pointsRow.total_points : 0;
    
    res.json({ solvedChallenges, totalPoints });
  } catch (error) {
    console.error('Error getting progress:', error);
    res.status(500).json({ error: 'Failed to get progress' });
  }
});

// Check if challenge is solved
app.get('/api/challenges/:id/status', (req, res) => {
  try {
    const { id } = req.params;
    const stmt = db.prepare('SELECT 1 FROM solved_challenges WHERE challenge_id = ? LIMIT 1');
    const result = stmt.get(id);
    res.json({ solved: !!result });
  } catch (error) {
    console.error('Error checking challenge status:', error);
    res.status(500).json({ error: 'Failed to check status' });
  }
});

// Mark challenge as solved
app.post('/api/challenges/:id/solve', (req, res) => {
  try {
    const { id } = req.params;
    const { points } = req.body;
    
    // Check if already solved
    const checkStmt = db.prepare('SELECT 1 FROM solved_challenges WHERE challenge_id = ? LIMIT 1');
    const exists = checkStmt.get(id);
    
    if (!exists) {
      // Insert new solved challenge
      const insertStmt = db.prepare('INSERT INTO solved_challenges (challenge_id, points) VALUES (?, ?)');
      insertStmt.run(id, points || 0);
      
      // Update total points
      const updateStmt = db.prepare('UPDATE user_progress SET total_points = total_points + ?, last_updated = CURRENT_TIMESTAMP WHERE id = 1');
      updateStmt.run(points || 0);
    } else {
      // Increment attempts
      const updateAttempts = db.prepare('UPDATE solved_challenges SET attempts = attempts + 1 WHERE challenge_id = ?');
      updateAttempts.run(id);
    }
    
    // Return updated progress
    const solvedStmt = db.prepare('SELECT challenge_id FROM solved_challenges');
    const solvedChallenges = solvedStmt.all().map(row => row.challenge_id);
    
    const pointsStmt = db.prepare('SELECT total_points FROM user_progress WHERE id = 1');
    const pointsRow = pointsStmt.get();
    const totalPoints = pointsRow ? pointsRow.total_points : 0;
    
    res.json({ solvedChallenges, totalPoints });
  } catch (error) {
    console.error('Error marking challenge as solved:', error);
    res.status(500).json({ error: 'Failed to mark as solved' });
  }
});

// Reset progress
app.delete('/api/progress', (req, res) => {
  try {
    db.prepare('DELETE FROM solved_challenges').run();
    db.prepare('UPDATE user_progress SET total_points = 0, last_updated = CURRENT_TIMESTAMP WHERE id = 1').run();
    res.json({ success: true });
  } catch (error) {
    console.error('Error resetting progress:', error);
    res.status(500).json({ error: 'Failed to reset progress' });
  }
});

// Get challenge details
app.get('/api/challenges/:id/details', (req, res) => {
  try {
    const { id } = req.params;
    const stmt = db.prepare('SELECT solved_at, attempts FROM solved_challenges WHERE challenge_id = ?');
    const result = stmt.get(id);
    
    if (result) {
      res.json({ solvedAt: result.solved_at, attempts: result.attempts });
    } else {
      res.json(null);
    }
  } catch (error) {
    console.error('Error getting challenge details:', error);
    res.status(500).json({ error: 'Failed to get details' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running at http://localhost:${PORT}`);
  console.log(`📁 Database file: ${dbPath}`);
});
