const express = require("express");

// database access using knex
const db = require("../data/dbConfig.js");

const router = express.Router();

// Read all
router.get("/", (req, res) => {});

// Read One
router.get("/:id", (req, res) => {});

// Create
router.post("/", (req, res) => {});

// Update
router.put("/:id", (req, res) => {});

// Delete
router.delete("/:id", (req, res) => {});

module.exports = router;
