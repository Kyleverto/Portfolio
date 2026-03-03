const express = require("express");
const router = express.Router();
const { getProjects } = require("../controllers/projectController");

// When the user hits GET /api/projects, run the getProjects function
router.get("/", getProjects);

module.exports = router;
