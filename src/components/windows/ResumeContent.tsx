import React from "react";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Calendar,
  Download,
} from "lucide-react";
import angeshcPdf from "./assets/Angesh_Chettiar.pdf";

const ResumeContent: React.FC = () => {
  const workExperience = [
    {
      title: "Principal Engineer",
      company: "Unico Connect",
      location: "Mumbai",
      period: "February 2025 — Current",
      responsibilities: [
        "Led a high-performing development team of 12 developers using JavaScript, React, Node, and CSS3 to deliver scalable, maintainable applications that met client specifications and deadlines.",
        "Managed 7 cross-functional projects by leveraging frameworks like Next.js and tools like Vite for architecture planning, resource allocation, and timeline estimation to ensure on-time delivery and alignment with business goals.",
        "Revamped the whole project implementing design system and custom components and delivered it to client's satisfaction within record time.",
        "Restructured development workflows by applying industry-standard best practices and coding guidelines such as Component-Driven Development (CDD) and Test-Driven Development (TDD) to improve code quality, maintainability, and team collaboration.",
        "Designed and implemented custom Vite boilerplates tailored to unique projects and requirements to streamline build processes, reduce setup time, and enhance development efficiency.",
      ],
    },
    {
      title: "Senior Frontend Developer",
      company: "Fluent Health",
      location: "Mumbai",
      period: "June 2024 — February 2025",
      responsibilities: [
        "Implemented FHIR standards and GraphQL in healthcare applications using TypeScript, React and Next.js to ensure interoperability, data consistency, and modern API integration, also incorporated RBAC (Role Based Access Control) from scratch.",
        "Developed reusable UI components and led a team of 5 developers with a focus on analytics features and maintaining architectural integrity to enhance code reusability, performance, and project scalability.",
      ],
    },
    {
      title: "Frontend Lead",
      company: "Freecharge (Subsidiary of AXIS Bank)",
      location: "Mumbai",
      period: "May 2020 — June 2024",
      responsibilities: [
        "Championed efficient development practices by creating reusable UI components for banking products such as account creation, loans, and mutual funds to enhance user experience and reduce front-end redundancy.",
        "Implemented State Machine Architecture which eliminated the need to develop separate applications for multiple workflows, which reduced the development time and efforts exponentially resulting in faster delivery and feature deployment.",
        "Conducted comprehensive requirement analysis and led a small development team through task delegation and code reviews to ensure timely delivery, code quality, and alignment with business goals.",
        "Utilized tools like Webpack, Parcel, Vite, and Next.js to build custom boilerplates and streamline front-end development workflows resulting in improved efficiency and reduced setup time.",
        "Developed backend functionality and APIs using NodeJS to support front-end features and enable seamless data interaction.",
      ],
    },
    {
      title: "Frontend Lead",
      company: "Tata Digital",
      location: "Mumbai",
      period: "November 2019 — February 2020",
      responsibilities: [
        "Crafted user-friendly and scalable web applications by prioritizing efficiency and brand consistency through the use of reusable components to enhance maintainability and ensure a cohesive user experience across platforms.",
        "Employed agile project management practices including requirement analysis, team leadership, task delegation, and code review to drive project success and maintain high development standards.",
      ],
    },
    {
      title: "Senior Software Analyst",
      company: "Accenture",
      location: "Mumbai",
      period: "March 2018 — November 2019",
      responsibilities: [
        "Translated UI/UX designs into functional web applications by architecting scalable projects and mentoring teams on JavaScript best practices to ensure high-performance, maintainable codebases.",
        "Excelled in client communication and requirement gathering to align development efforts with business goals resulting in efficient, performance-driven solutions.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Xoriant Solutions Pvt Ltd",
      location: "Mumbai",
      period: "November 2015 — November 2016",
      responsibilities: [
        "Engaged in web design and development by implementing unit testing practices to ensure code functionality, reliability, and maintainability.",
      ],
    },
    {
      title: "Software Engineer",
      company: "TCS",
      location: "Chennai",
      period: "July 2013 — October 2015",
      responsibilities: [
        "Designed, developed, and deployed web applications while managing servers using manual configurations and custom scripts to ensure reliable deployment and infrastructure stability.",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Sc. (Information Technology)",
      institution: "SIES College",
      location: "MUMBAI",
      period: "2012 — 2013",
    },
    {
      degree: "Class XII",
      institution: "ICLES' Jhunjhunwala",
      location: "VASHI, MUMBAI",
      period: "2008 — 2009",
    },
    {
      degree: "Class X",
      institution: "General Education Academy",
      location: "CHEMBUR, MUMBAI",
      period: "2006 — 2007",
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = angeshcPdf;
    link.download = "Angesh_Chettiar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-content h-full overflow-auto">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center">
            <FileText className="mr-2 text-mac-highlight" />
            Resume
          </h1>
          <p className="text-mac-text-secondary">
            Principal Engineer (Frontend / Full-Stack) with 11+ years of
            experience
          </p>
        </div>
        <button
          className="btn btn-primary flex items-center"
          onClick={handleDownload}
        >
          <Download className="w-4 h-4 mr-1" />
          Download PDF
        </button>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Briefcase className="text-mac-highlight w-5 h-5" />
            Work Experience
          </h2>

          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-white/70 p-5 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-mac-text-secondary">
                      {job.company}, {job.location}
                    </p>
                  </div>
                  <div className="flex items-center text-sm text-mac-text-secondary">
                    <Calendar className="w-4 h-4 mr-1" />
                    {job.period}
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  {job.responsibilities.map((responsibility, respIndex) => (
                    <li
                      key={respIndex}
                      className="text-mac-text-secondary text-sm"
                    >
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <GraduationCap className="text-mac-highlight w-5 h-5" />
            Education
          </h2>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/70 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-mac-text-secondary">
                      {edu.institution}, {edu.location}
                    </p>
                  </div>
                  <div className="flex items-center text-sm text-mac-text-secondary">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
