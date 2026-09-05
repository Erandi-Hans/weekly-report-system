const express = require('express');
const router = express.Router();
const { createReport, getReports, addReviewToReport } = require('../controllers/reportController');

/**
 * @swagger
 * /api/reports:
 *   get:
 *     summary: Get all weekly reports
 *     responses:
 *       200:
 *         description: List of reports retrieved successfully
 *   post:
 *     summary: Create a new weekly report
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - projectId
 *               - weekDateRange
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "64a7b2c1f91a2b3c4d5e6f7a"
 *               projectId:
 *                 type: string
 *                 example: "64a7b2c1f91a2b3c4d5e6f7b"
 *               weekDateRange:
 *                 type: string
 *                 example: "2026-09-01 to 2026-09-06"
 *               status:
 *                 type: string
 *                 enum: [Draft, Submitted, Needs Correction, Approved]
 *                 default: Draft
 *               plannedTasksNextWeek:
 *                 type: string
 *                 example: "Complete frontend integration"
 *               keyBlocker:
 *                 type: string
 *                 example: "None"
 *               keyAchievement:
 *                 type: string
 *                 example: "Successfully configured backend database and Swagger"
 *               hoursWorked:
 *                 type: object
 *                 properties:
 *                   development:
 *                     type: number
 *                     example: 20
 *                   testing:
 *                     type: number
 *                     example: 5
 *                   meetings:
 *                     type: number
 *                     example: 3
 *                   documentation:
 *                     type: number
 *                     example: 2
 *     responses:
 *       201:
 *         description: Report created successfully
 */
router.route('/').get(getReports).post(createReport);

/**
 * @swagger
 * /api/reports/{reportId}/review:
 *   post:
 *     summary: Add review or comment to a report
 *     parameters:
 *       - in: path
 *         name: reportId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *                 example: "Good progress, keep it up."
 *               reviewedBy:
 *                 type: string
 *                 example: "64a7b2c1f91a2b3c4d5e6f7c"
 *               status:
 *                 type: string
 *                 enum: [Submitted, Needs Correction, Approved]
 *     responses:
 *       200:
 *         description: Review added successfully
 */
router.route('/:reportId/review').post(addReviewToReport);

module.exports = router;