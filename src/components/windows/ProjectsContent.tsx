import React, { useState, useEffect } from "react";
import {
  Folders,
  Github,
  ExternalLink,
  Code,
  Server,
  Database,
  CreditCard,
  CheckSquare,
  Cloud,
  BarChart,
} from "lucide-react";
import MacPortfolio from "./assets/mac-style-portfolio-project.png";
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

// Helper function to get icon for technology
const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case "react":
    case "vue.js":
      return <Code className="w-3 h-3 mr-1" />;
    case "node.js":
    case "express":
      return <Server className="w-3 h-3 mr-1" />;
    case "mongodb":
    case "firebase":
      return <Database className="w-3 h-3 mr-1" />;
    case "stripe":
      return <CreditCard className="w-3 h-3 mr-1" />;
    case "tailwind css":
    case "chart.js":
      return <BarChart className="w-3 h-3 mr-1" />;
    case "openweather api":
      return <Cloud className="w-3 h-3 mr-1" />;
    case "javascript":
    case "framer motion":
      return <CheckSquare className="w-3 h-3 mr-1" />;
    default:
      return <Code className="w-3 h-3 mr-1" />;
  }
};

const ProjectsContent: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // NOTE : Mock data
    const mockProjects: Project[] = [
      {
        id: 1,
        title: "Mac Style Portfolio Project",
        description:
          "A macOS-inspired portfolio website showcasing my projects and skills with interactive elements.",
        technologies: ["React", "Framer Motion", "JavaScript", "Tailwind CSS"],
        image: MacPortfolio,
        githubUrl: "https://github.com/angeshpc91/mac-style-portfolio.git",
        liveUrl: "#",
      },
      {
        id: 2,
        title: "React Todo App",
        description:
          "A simple to-do list application built with React, allowing users to add, edit, and delete tasks.",
        technologies: ["React.js", "Material UI"],
        image:
          "https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=1600",
        githubUrl: "https://github.com/angeshpc91/todo-react",
        liveUrl: "https://github.com/angeshpc91/todo-react",
      },
      {
        id: 3,
        title: "Basic Dashboard",
        description:
          "An interactive weather dashboard that displays current weather conditions and forecasts for multiple locations.",
        technologies: ["React", "JavaScript", "Chart.js"],
        image:
          "https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?auto=compress&cs=tinysrgb&w=1600",
        githubUrl: "https://github.com/angeshpc91/dashboard-design",
        liveUrl: "https://magnificent-quokka-b155cd.netlify.app/",
      },
      {
        id: 4,
        title: "Portfolio Website",
        description:
          "A macOS-inspired portfolio website showcasing projects and skills with interactive elements.",
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        image:
          "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1600",
        githubUrl: "https://github.com/angeshpc91/mac-style-portfolio.git",
        liveUrl: "https://angesh-portfolio.example.com",
      },
    ];

    setProjects(mockProjects);
    setLoading(false);
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(filter.toLowerCase())
          )
        );

  return (
    <div className="projects-content h-full overflow-auto">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2 px-1">
        <Folders className="text-mac-highlight" />
        <span className="leading-tight">My Projects</span>
      </h1>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-3 py-1 text-sm rounded-full ${
            filter === "all"
              ? "bg-mac-highlight text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        {["React", "Node.js", "JavaScript", "Vue.js"].map((tech) => (
          <button
            key={tech}
            className={`px-3 py-1 text-sm rounded-full flex items-center ${
              filter === tech
                ? "bg-mac-highlight text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setFilter(tech)}
          >
            {getTechIcon(tech)}
            {tech}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mac-highlight"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/70 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-mac-text-secondary mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 rounded-full flex items-center"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target={project.id === 1 ? "" : "_blank"}
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-mac-highlight text-white hover:bg-mac-highlight/90 transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsContent;
