// The routes for returning information from the DB for climbing grade conversions
let express = require('express');
let router = express.Router();
const pool = require("../DB.js");

// GET all the climbing grades
router.get('/climbingGrades', async function(req, res) {
  try {
    const q = 'SELECT * FROM dbo.Grades';
    const todos = await pool.query(q)
    res.json(todos);
    console.log("Retrieved all items from dbo.Grades")

  } catch (err) {
    console.error(err.message);
  }
})

// GET all the expertise levels
router.get('/expertiseLevel', async function(req, res) {
  try {
    const q = 'SELECT * FROM dbo.ExpertiseLevel';
    const todos = await pool.query(q)
    res.json(todos);
    console.log("Retrieved all items from dbo.Grades")

  } catch (err) {
    console.error(err.message);
  }
})

// GET all the grading systems
router.get('/gradingSystems', async function(req, res) {
  try {
    const q = 'SELECT * FROM dbo.ExpertiseLevel';
    const todos = await pool.query(q)
    res.json(todos);
    console.log("Retrieved all items from dbo.Grades")

  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;
