const express = require('express');
const router = express.Router();
const { createProject, getProjects } = require('../controllers/projectController');

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get all projects
 *     responses:
 *       200:
 *         description: List of projects retrieved successfully
 *   post:
 *     summary: Create a new project
 *     responses:
 *       201:
 *         description: Project created successfully
 */
router.route('/').get(getProjects).post(createProject);

module.exports = router;