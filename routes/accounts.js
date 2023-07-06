const express = require("express");
const router = express.Router();

let accounts = [];

function isAdmin(role, username, password) {
  return role === "Admin" && username === "admin" && password === "admin123";
}

router.get("/", (req, res) => {
  res.json(accounts);
});

router.post("/", (req, res) => {
  const { username, role, password } = req.body;
  accounts.push({ username, role, password });
  res.status(201).json({ message: "Account created successfully" });
});

router.put("/:username", (req, res) => {
  const { username } = req.params;
  const { role, password } = req.body;

  const account = accounts.find((acc) => acc.username === username);
  if (!account) {
    return res.status(404).json({ error: "Account not found" });
  }

  if (
    !isAdmin(account.role, req.query.adminUsername, req.query.adminPassword)
  ) {
    return res.status(403).json({ error: "Only admins can update accounts" });
  }

  account.role = role;
  account.password = password;

  res.json({ message: "Account updated successfully" });
});

router.delete("/:username", (req, res) => {
  const { username } = req.params;

  const accountIndex = accounts.findIndex((acc) => acc.username === username);
  if (accountIndex === -1) {
    return res.status(404).json({ error: "Account not found" });
  }

  if (
    !isAdmin(
      accounts[accountIndex].role,
      req.query.adminUsername,
      req.query.adminPassword
    )
  ) {
    return res.status(403).json({ error: "Only admins can delete accounts" });
  }

  accounts.splice(accountIndex, 1);

  res.json({ message: "Account deleted successfully" });
});

router.get("/:username/tokens", (req, res) => {
  const { username } = req.params;

  const account = accounts.find((acc) => acc.username === username);
  if (!account) {
    return res.status(404).json({ error: "Account not found" });
  }
  res.json({ tokens: [] });
});

module.exports = router;
