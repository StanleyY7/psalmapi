/* Welcome to the Psalms API codebase */

// Config

const bodyParser = require("body-parser");
const mysql = require("mysql");
const express = require("express");
const app = express();
require("dotenv").config();

// Functions/Methods

let connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
});

connection.connect((e) => {
  if (!e) {
    console.log("\nConnected successfully to Database \n");
  } else {
    console.log(JSON.stringify(e, undefined, 2));
  }
});

app.use(bodyParser.json());

app.get("/psalms", (req, res) => {
  connection.query(`SELECT * FROM psalms`, (err, results) => {
    if (!err) {
      const psalms = results.map((row) => ({
        row: row.id,
        verse: JSON.parse(row.verse),
        version: row.version,
      }));
      console.log("Error: " + JSON.stringify(results));
      res.json(psalms);
    } else {
      console.log("Error: " + err);
      res.status(500).json({ error: `${err}` });
    }
  });
});

app.listen(3000, () => {
  console.log("\nWelcome, the Psalms API is active :) \n");
});

module.exports = app;
