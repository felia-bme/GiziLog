// SQLite via sql.js — persisted in localStorage
let db = null;

async function initDatabase() {
  const SQL = await initSqlJs({
    locateFile: (file) =>
      `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${file}`,
  });

  const saved = localStorage.getItem('sophia_sqlite');
  if (saved) {
    const bytes = new Uint8Array(JSON.parse(saved));
    db = new SQL.Database(bytes);
  } else {
    db = new SQL.Database();
  }

  db.run(`
    CREATE TABLE IF NOT EXISTS profiles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      gender TEXT NOT NULL,
      weight REAL NOT NULL,
      height REAL NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);
  try {
    db.run(`ALTER TABLE profiles ADD COLUMN created_at TEXT DEFAULT (datetime('now'))`);
  } catch (_) {
    // column already exists
  }

  db.run(`
    CREATE TABLE IF NOT EXISTS daily_calories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      total_calories REAL NOT NULL,
      carb REAL NOT NULL DEFAULT 0,
      protein REAL NOT NULL DEFAULT 0,
      fat REAL NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL
    )
  `);
  persistDatabase();
  return db;
}

function persistDatabase() {
  if (!db) return;
  const data = db.export();
  const buffer = Array.from(new Uint8Array(data));
  localStorage.setItem('sophia_sqlite', JSON.stringify(buffer));
}

function insertProfile(name, gender, weight, height) {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const createdAt =
    `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ` +
    `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

  db.run(
    'INSERT INTO profiles (name, gender, weight, height, created_at) VALUES (?, ?, ?, ?, ?)',
    [name, gender, weight, height, createdAt]
  );
  persistDatabase();
  return db.exec('SELECT last_insert_rowid()')[0].values[0][0];
}

function updateProfile(id, name, gender, weight, height) {
  db.run(
    'UPDATE profiles SET name = ?, gender = ?, weight = ?, height = ? WHERE id = ?',
    [name, gender, weight, height, id]
  );
  persistDatabase();
}

function deleteProfile(id) {
  db.run('DELETE FROM profiles WHERE id = ?', [id]);
  persistDatabase();
}

function getAllProfiles() {
  const result = db.exec(
    'SELECT id, name, gender, weight, height, created_at FROM profiles ORDER BY id DESC'
  );
  if (!result.length) return [];
  const cols = result[0].columns;
  return result[0].values.map((row) => {
    const obj = {};
    cols.forEach((col, i) => (obj[col] = row[i]));
    return obj;
  });
}

function getProfileById(id) {
  const stmt = db.prepare(
    'SELECT id, name, gender, weight, height, created_at FROM profiles WHERE id = ?'
  );
  stmt.bind([id]);
  if (!stmt.step()) {
    stmt.free();
    return null;
  }
  const row = stmt.getAsObject();
  stmt.free();
  return row;
}

function localDateTimeNow() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return (
    `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ` +
    `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
  );
}

function insertDailyCalories(totalCalories, carb, protein, fat) {
  const createdAt = localDateTimeNow();
  db.run(
    'INSERT INTO daily_calories (total_calories, carb, protein, fat, created_at) VALUES (?, ?, ?, ?, ?)',
    [totalCalories, carb, protein, fat, createdAt]
  );
  persistDatabase();
  return db.exec('SELECT last_insert_rowid()')[0].values[0][0];
}

function getAllDailyCalories() {
  const result = db.exec(
    'SELECT id, total_calories, carb, protein, fat, created_at FROM daily_calories ORDER BY created_at ASC, id ASC'
  );
  if (!result.length) return [];
  const cols = result[0].columns;
  return result[0].values.map((row) => {
    const obj = {};
    cols.forEach((col, i) => (obj[col] = row[i]));
    return obj;
  });
}

function deleteDailyCalories(id) {
  db.run('DELETE FROM daily_calories WHERE id = ?', [id]);
  persistDatabase();
}
