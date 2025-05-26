import React from "react";
import { Github as GitHub, Linkedin, Codepen } from "lucide-react";

const ProfileWidget: React.FC = () => {
  return (
    <div className="widget w-64 bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-sm">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-mac-highlight mb-2 flex items-center justify-center text-white text-2xl font-bold">
          AC
        </div>
        <h3 className="text-lg font-semibold">Angesh Chettiar</h3>
        <p className="text-sm text-mac-text-secondary mb-3">
          Principal Engineer <br />
          (Frontend/Full-stack)
        </p>

        <div className="flex space-x-3">
          <a
            href="https://github.com/angeshpc91"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <GitHub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/angesh-chettiar/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://codepen.io/angeshpc91"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Codepen className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileWidget;
