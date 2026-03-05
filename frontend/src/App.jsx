import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(API_URL);
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-slate-100 selection:bg-blue-500/30">
      <Header />

      <main className="max-w-6xl mx-auto px-6">
        <Hero />

        <section id="projects" className="py-20">
          <h3 className="text-3xl font-bold mb-12 text-white">
            Featured Projects
          </h3>

          {loading ? (
            <div className="text-center py-20 text-slate-500 animate-pulse">
              Loading your projects from the database...
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <ProjectCard
                    key={project._id}
                    project={project}
                    index={index}
                  />
                ))
              ) : (
                <p className="text-slate-500 italic col-span-full text-center py-10">
                  Error: No projects found
                </p>
              )}
            </div>
          )}
        </section>
      </main>

      <footer className="py-10 text-center border-t border-slate-900 text-slate-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Kyle | Software Developer</p>
      </footer>
    </div>
  );
}

export default App;
