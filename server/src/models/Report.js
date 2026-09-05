const mongoose = require('mongoose');

// Task level sub-schema
const taskSchema = new mongoose.Schema({
    taskName: { type: String, required: true },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    plannedPercentage: { type: Number },
    actualPercentage: { type: Number },
    status: { type: String, enum: ['Completed', 'In Progress', 'Delayed'], default: 'In Progress' },
    timePlanned: { type: Number }, // in hours
    timeSpent: { type: Number },   // in hours
    outputDeliverable: { type: String }
});

// Review History sub-schema (Bonus & Core requirement support)
const reviewHistorySchema = new mongoose.Schema({
    comment: { type: String },
    reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['Submitted', 'Needs Correction', 'Approved'] },
    timestamp: { type: Date, default: Date.now }
});

const reportSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    weekDateRange: { type: String, required: true },
    status: {
        type: String,
        enum: ['Draft', 'Submitted', 'Needs Correction', 'Approved'],
        default: 'Draft'
    },
    plannedTasksNextWeek: { type: String },
    keyBlocker: { type: String },
    keyAchievement: { type: String },
    hoursWorked: {
        development: { type: Number, default: 0 },
        testing: { type: Number, default: 0 },
        meetings: { type: Number, default: 0 },
        documentation: { type: Number, default: 0 }
    },
    notesOrLinks: { type: String },
    tasksCompleted: [taskSchema],
    reviewHistory: [reviewHistorySchema] // to store comments , history
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);