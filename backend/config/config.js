const path = require("path");
const projectDir = path.join(__dirname, "..");

function projectPath(...localPaths) {
  return path.join(projectDir, ...localPaths);
}

module.exports = { projectPath };
