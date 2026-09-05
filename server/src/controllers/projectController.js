const Project = require('../models/Project');

// Create a new project
const createProject = async (req, res) => {
    try {
        const { projectName, description, assignedMembers } = req.body;

        const project = new Project({
            projectName,
            description,
            assignedMembers
        });

        const savedProject = await project.save();
        res.status(201).json({ success: true, data: savedProject });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all projects
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate('assignedMembers', 'name email role');
        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createProject,
    getProjects
};