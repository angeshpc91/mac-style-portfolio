import React from "react";
import { User, Briefcase, Award, BookOpen } from "lucide-react";

const AboutContent: React.FC = () => {
  return (
    <div className="about-content h-full overflow-auto">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <User className="text-mac-highlight" />
        <span className="leading-tight">About Me</span>
      </h1>

      <div className="space-y-6">
        <div className="bg-white/70 p-5 rounded-lg">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Briefcase className="text-mac-highlight w-5 h-5" />
            Professional Summary
          </h2>
          <p className="text-mac-text-secondary mb-4">
            A proven engineering leader with experience in building robust,
            scalable frontend systems and driving product success across
            fintech, healthtech, and digital platforms. As a Principal Lead,
            I've led cross-functional teams at Freecharge (AXIS Bank), Tata
            Digital, and now Unico Connect, delivering high-impact solutions
            using React, TypeScript, Node.js, and modern frameworks like
            Next.js.
          </p>
        </div>

        <div className="bg-white/70 p-5 rounded-lg">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Award className="text-mac-highlight w-5 h-5" />
            Experience Highlights
          </h2>
          <ul className="list-disc list-inside space-y-3 text-mac-text-secondary">
            <li>
              <span className="font-medium">
                Principal Lead at Unico Connect
              </span>{" "}
              - Led a high-performing development team of 12 developers using
              JavaScript, React, Node, and CSS3.
            </li>
            <li>
              <span className="font-medium">
                Senior Frontend Developer at Fluent Health
              </span>{" "}
              - Implemented FHIR standards and GraphQL in healthcare
              applications using React and Next.js.
            </li>
            <li>
              <span className="font-medium">
                Frontend Lead at Freecharge (AXIS Bank)
              </span>{" "}
              - Championed efficient development practices by creating reusable
              UI components for banking products.
            </li>
            <li>
              <span className="font-medium">Frontend Lead at Tata Digital</span>{" "}
              - Crafted user-friendly and scalable web applications prioritizing
              efficiency and brand consistency.
            </li>
          </ul>
        </div>

        <div className="bg-white/70 p-5 rounded-lg">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <BookOpen className="text-mac-highlight w-5 h-5" />
            Education
          </h2>
          <ul className="list-disc list-inside space-y-2 text-mac-text-secondary">
            <li>
              B.Sc. (Information Technology), SIES College, MUMBAI (2012 — 2013)
            </li>
            <li>Class XII, ICLES' Jhunjhunwala, VASHI, MUMBAI (2008 — 2009)</li>
            <li>
              Class X, General Education Academy, CHEMBUR, MUMBAI (2006 — 2007)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
