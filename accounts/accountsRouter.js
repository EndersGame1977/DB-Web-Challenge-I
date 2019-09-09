const express = require("express");

// database access using knex
const db = require("../data/dbConfig.js");

const router = express.Router();

// Read all
router.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then(account => {
      res.status(200).json(account);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// Read One
router.get("/:id", (req, res) => {});

// Create
router.post("/", (req, res) => {});

// Update
router.put("/:id", (req, res) => {});

// Delete
router.delete("/:id", (req, res) => {});

module.exports = router;
