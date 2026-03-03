require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("./backend/models/Project");

const projects = [
  {
    title: "MERN Portfolio",
    description:
      "A professional portfolio website to showcase my software development journey.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/kyleverto/portfolio",
    liveDemo: "https://kylevertodoulosportfolio.com",
    featured: true,
  },
  {
    title: "Task Management API",
    description:
      "A RESTful API built with Node and Express for managing daily tasks with JWT auth.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    githubLink: "https://github.com/yourusername/task-api",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "A frontend application that fetches real-time weather data from an external API.",
    technologies: ["JavaScript", "React", "OpenWeatherMap API"],
    githubLink: "https://github.com/yourusername/weather-app",
    featured: false,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    // 1. Clear existing data
    await Project.deleteMany({});
    console.log("Old projects cleared.");

    // 2. Insert new data
    await Project.insertMany(projects);
    console.log("Database Seeded successfully!");

    // 3. Close connection
    mongoose.connection.close();
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();
