const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// JWT secret key
const JWT_SECRET = "your-secret-key";

// Generate JWT token
function generateToken(username) {
  return jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
}

/**
 * GET /tokens
 * Get the list of all tokens.
 */
router.get("/", (req, res) => {
  res.json({ tokens: [] });
});

/**
 * POST /tokens
 * Create a new token.
 */
router.post("/", (req, res) => {
  const token = generateToken("example-user");

  res.status(201).json({ token });
});

/**
 * PUT /tokens/:token
 * Update a token.
 */
router.put("/:token", (req, res) => {
  const { token } = req.params;

  res.json({ message: "Token updated successfully" });
});

/**
 * DELETE /tokens/:token
 * Delete a token.
 */
router.delete("/:token", (req, res) => {
  const { token } = req.params;

  res.json({ message: "Token deleted successfully" });
});

module.exports = router;
