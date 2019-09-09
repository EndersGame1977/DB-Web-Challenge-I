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
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("accounts")
    .where({ id })
    .first()
    .then(account => {
      res.status(200).json(account);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// Create
router.post("/", (req, res) => {
  const accountData = req.body;
  db("accounts")
    .insert(accountData, "id")
    .then(([id]) => {
      db("accounts")
        .where({ id })
        .first()
        .then(account => {
          res.status(200).json(account);
        })
        .catch(err => {
          res.status(500).json({ message: err.message });
        });
    });
});

// Update
router.put("/:id", (req, res) => {
  const changes = req.body;
  db("accounts")
    .where("id", req.params.id)
    .update(changes)
    .then(count => {
      res.status(200).json({ message: `Updated ${count} accounts.` });
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// Delete
router.delete("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id })
    .del()
    .then(count => {
      res.status(200).json({ message: `Deleted ${count} accounts.` });
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
