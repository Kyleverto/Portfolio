import { useState, useEffect } from "react"; // Add these imports
import { ExternalLink } from "lucide-react";
import GithubIcon from "../assets/github.svg?react";

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  const getTechStyles = (tech) => {
    const name = tech.toLowerCase();
    if (name.includes("react"))
      return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
    if (name.includes("node"))
      return "bg-green-500/20 text-green-400 border-green-500/30";
    if (name.includes("express"))
      return "bg-orange-500/20 text-orange-400 border-orange-500/30";
    if (name.includes("mongo"))
      return "bg-red-500/20 text-red-400 border-red-500/30";
    if (name.includes("tailwind"))
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    if (name.includes("javascript") || name.includes("js"))
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    return "bg-blue-500/10 text-blue-400 border-blue-500/20";
  };

  return (
    <div
      className={`bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/40 transition-all duration-700 ease-out group flex flex-col h-full
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="h-48 overflow-hidden bg-slate-800/50 flex items-center justify-center text-slate-600 border-b border-slate-800 relative">
        {project.image && project.image !== "default-project.jpg" ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}
        <span
          className={`absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform text-[10px] uppercase tracking-[0.2em] font-bold ${project.image && project.image !== "default-project.jpg" ? "hidden" : ""}`}
        >
          {project.title}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h4>
        <p className="text-slate-400 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-full border ${getTechStyles(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center border-t border-slate-800 pt-5">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white flex items-center gap-2 text-xs font-semibold transition-colors"
          >
            <GithubIcon className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />{" "}
            Code
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-xs font-semibold transition-colors"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
