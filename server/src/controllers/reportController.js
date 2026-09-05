const Report = require('../models/Report');

// Create a new weekly report
const createReport = async (req, res) => {
    try {
        const reportData = req.body;
        const report = new Report(reportData);
        const savedReport = await report.save();

        res.status(201).json({ success: true, data: savedReport });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all reports (with populated user and project details)
const getReports = async (req, res) => {
    try {
        const reports = await Report.find()
            .populate('userId', 'name email role')
            .populate('projectId', 'projectName description');

        res.status(200).json({ success: true, data: reports });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Add review history / comments to a report (Manager/Admin use)
const addReviewToReport = async (req, res) => {
    try {
        const { reportId } = req.params;
        const { comment, reviewedBy, status } = req.body;

        const report = await Report.findById(reportId);
        if (!report) {
            return res.status(404).json({ success: false, message: 'Report not found' });
        }

        // Push new review into reviewHistory array
        report.reviewHistory.push({ comment, reviewedBy, status });
        if (status) {
            report.status = status; // Update overall report status if provided
        }

        const updatedReport = await report.save();
        res.status(200).json({ success: true, data: updatedReport });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createReport,
    getReports,
    addReviewToReport
};