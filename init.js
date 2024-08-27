const Database = require("better-sqlite3");
const db = new Database("lecturers.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS lecturers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        surname TEXT,
        subject TEXT,
        image TEXT
    )
`);
