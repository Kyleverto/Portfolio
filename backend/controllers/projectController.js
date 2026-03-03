const Project = require("../models/Project");

// @desc    Get all projects
// @route   GET /api/projects
const getProjects = async (req, res) => {
  try {
    // .sort({ createdAt: -1 }) puts the newest projects at the top
    const projects = await Project.find({}).sort({ createdAt: -1 });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error: Could not fetch projects" });
  }
};

module.exports = {
  getProjects,
};
