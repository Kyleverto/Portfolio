const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a project title"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  technologies: {
    type: [String],
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  liveDemo: {
    type: String,
  },
  image: {
    type: String,
    default: "default-project.jpg",
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Project", projectSchema);
