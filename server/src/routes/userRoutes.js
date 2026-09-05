const express = require('express');
const router = express.Router();
const { registerUser, getUsers } = require('../controllers/userController');

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users retrieved successfully
 *   post:
 *     summary: Register a new user
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.route('/').get(getUsers).post(registerUser);

module.exports = router;