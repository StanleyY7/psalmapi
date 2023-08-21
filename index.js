/* Welcome to the Psalms API codebase */

// I commented out the database version of this API as it is still in development (working on deployment),
// so currently hard-coded as easier deployment with just one Dockerfile instead of docker-compose or multiple docker containers/files
// as lots of providers don't have support for docker-compose.

// Config
const helmet = require("helmet");
const bodyParser = require("body-parser");
// const mysql = require("mysql2");
const express = require("express");
const psalms = require("./data");
const app = express();
require("dotenv").config();

// Functions/Methods

/*
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
*/

app.use(bodyParser.json());
app.use(helmet());

app.get("/psalms", (req, res) => {
  /*
  connection.query(`SELECT * FROM psalms`, (err, results) => {
    if (!err) {
      const psalms = results.map((row) => ({
        row: row.id,
        verse: JSON.parse(row.verse),
        book: row.book,
        version: row.version,
      }));
      console.log("Error: " + JSON.stringify(results));
      res.json(psalms);
    } else {
      console.log("Error: " + err);
      res.status(500).json({ error: `${err}` });
    }
  });
  */

  try {
    res.send(psalms);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: `${e}` });
    res.send(`${e} Please add /psalms to end of url and try again.`);
  }
});

app.listen(3000, () => {
  console.log("\nWelcome, the Psalms API is active :) \n");
});

module.exports = app;
