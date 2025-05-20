import React from "react";
import { Code, Server, Database, Layout, PenTool, Cpu } from "lucide-react";

const SkillsContent: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-mac-highlight w-5 h-5" />,
      skills: ["JavaScript", "TypeScript", "HTML (HTML5)", "CSS (CSS3)"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layout className="text-mac-highlight w-5 h-5" />,
      skills: [
        "React",
        "Redux",
        "Webpack",
        "Parcel",
        "Vite",
        "NextJS",
        "NodeJS",
        "Material UI",
        "Bootstrap",
        "Tailwind",
        "Styled-Components",
        "CSS in JS",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <PenTool className="text-mac-highlight w-5 h-5" />,
      skills: ["Git", "AWS", "Jenkins", "Unit Testing", "CI/CD"],
    },
    {
      title: "Architecture",
      icon: <Cpu className="text-mac-highlight w-5 h-5" />,
      skills: ["Micro-frontend", "GraphQL", "Microservice", "Agile"],
    },
  ];

  return (
    <div className="skills-content h-full overflow-auto">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Code className="text-mac-highlight" />
        <span className="leading-tight">Skills & Expertise</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white/70 p-5 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              {category.icon}
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-mac-highlight/10 text-mac-highlight rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white/70 p-5 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Professional Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-mac-highlight mt-2 mr-2"></div>
            <p className="text-mac-text-secondary">
              Team Leadership & Mentoring
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-mac-highlight mt-2 mr-2"></div>
            <p className="text-mac-text-secondary">Architecture Planning</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-mac-highlight mt-2 mr-2"></div>
            <p className="text-mac-text-secondary">
              Component-Driven Development
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-mac-highlight mt-2 mr-2"></div>
            <p className="text-mac-text-secondary">Test-Driven Development</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-mac-highlight mt-2 mr-2"></div>
            <p className="text-mac-text-secondary">
              Custom Boilerplate Creation
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-mac-highlight mt-2 mr-2"></div>
            <p className="text-mac-text-secondary">
              Cross-functional Collaboration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
