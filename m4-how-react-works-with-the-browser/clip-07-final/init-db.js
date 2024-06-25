// create_db.js
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const dbFilePath = 'bikestore.db';

// Function to check if the database file exists
function dbExists() {
  return fs.existsSync(dbFilePath);
}

// Function to check if the products table is already populated
function isDataPopulated(db, callback) {
  db.get("SELECT COUNT(*) as count FROM products", (err, row) => {
    if (err) {
      console.error(err.message);
      callback(false);
    } else {
      callback(row.count > 0);
    }
  });
}

// Initialize the database
const db = new sqlite3.Database(dbFilePath);

db.serialize(() => {
  if (!dbExists()) {
    // Create a products table if the database is newly created
    db.run("CREATE TABLE IF NOT EXISTS products (id INT, name TEXT, price REAL, category TEXT)", (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("Table created successfully.");
      }
    });
  }

  // Check if data is already populated
  isDataPopulated(db, (populated) => {
    if (!populated) {
      // Insert data into the table if it's not already populated
      const products = [
        [1, 'Mountain Bike', 499.99, 'Bikes'],
        [2, 'Road Bike', 999.99, 'Bikes'],
        [3, 'Hybrid Bike', 749.99, 'Bikes'],
        [4, 'Electric Bike', 1999.99, 'Bikes'],
        [5, 'Kids Bike', 199.99, 'Bikes'],
        [6, 'Bike Helmet', 49.99, 'Accessories'],
        [7, 'Bike Lock', 29.99, 'Accessories'],
        [8, 'Bike Pump', 19.99, 'Accessories'],
        [9, 'Water Bottle Cage', 9.99, 'Accessories'],
        [10, 'Bike Lights', 39.99, 'Accessories'],
        [11, 'Cycling Jersey', 59.99, 'Apparel'],
        [12, 'Cycling Shorts', 69.99, 'Apparel'],
        [13, 'Cycling Gloves', 19.99, 'Apparel'],
        [14, 'Cycling Shoes', 129.99, 'Apparel'],
        [15, 'Cycling Cap', 14.99, 'Apparel'],
        [16, 'Bike Rack', 199.99, 'Components'],
        [17, 'Bike Chain', 24.99, 'Components'],
        [18, 'Bike Pedals', 49.99, 'Components'],
        [19, 'Bike Saddle', 89.99, 'Components'],
        [20, 'Bike Tires', 34.99, 'Components']
      ];

      const stmt = db.prepare("INSERT INTO products VALUES (?, ?, ?, ?)");
      for (const product of products) {
        stmt.run(product);
      }
      stmt.finalize();
      console.log("Data inserted successfully.");
    } else {
      console.log("Data already exists. No need to insert.");
    }

    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Closed the database connection.');
    });
  });
});
