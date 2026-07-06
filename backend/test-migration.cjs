const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

async function runMigration() {
  try {
    console.log('Running migration for itineraries_data column...');
    
    // Check if column exists
    const tableInfo = await new Promise((resolve, reject) => {
      db.all("PRAGMA table_info(page_content)", (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
    
    const hasColumn = tableInfo.some(col => col.name === 'itineraries_data');
    
    if (!hasColumn) {
      await new Promise((resolve, reject) => {
        db.run("ALTER TABLE page_content ADD COLUMN itineraries_data TEXT", (err) => {
          if (err) reject(err);
          else resolve();
        });
      });
      console.log('✅ Added itineraries_data column to page_content table');
    } else {
      console.log('✅ itineraries_data column already exists');
    }
    
    console.log('Migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigration();
