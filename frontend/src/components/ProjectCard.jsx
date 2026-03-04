import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all group">
      {/* Project Image Placeholder */}
      <div className="h-48 bg-slate-800 flex items-center justify-center text-slate-600">
        <span className="group-hover:scale-110 transition-transform text-xs uppercase tracking-widest font-bold">
          {project.title} Preview
        </span>
      </div>

      <div className="p-6">
        <h4 className="text-xl font-bold mb-2 text-white">{project.title}</h4>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-[10px] uppercase font-bold bg-blue-500/10 text-blue-400 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center border-t border-slate-800 pt-4">
          <a
            href={project.githubLink}
            target="_blank"
            className="text-slate-400 hover:text-white flex items-center gap-2 text-xs font-medium transition-colors"
          >
            <Github size={16} /> Code
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-xs font-medium transition-colors"
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
