import React from "react";
import { Code, ClockIcon } from "lucide-react";

const CurrentProjectWidget: React.FC = () => {
  return (
    <div className="widget w-64 bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-sm">
      <div className="flex flex-col">
        <h3 className="font-semibold mb-2">Current Personal Project</h3>
        <div className="bg-white/50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">MacOS Portfolio</h4>
            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
              Active
            </span>
          </div>
          <p className="text-sm text-mac-text-secondary mb-2">
            Creating a macOS-inspired portfolio website with interactive
            elements.
          </p>
          <div className="flex items-center text-xs text-mac-text-secondary">
            <ClockIcon className="w-3 h-3 mr-1" />
            <span>Last updated today</span>
          </div>
          {/* <div className="text-sm">
        <p className="font-medium">Unico Connect</p>
        <p className="text-mac-text-secondary mt-1">
          Leading a team of 12 developers to build scalable React applications with Next.js and Vite
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          <span className="px-2 py-0.5 bg-mac-highlight/10 text-mac-highlight rounded-full text-xs">
            React
          </span>
          <span className="px-2 py-0.5 bg-mac-highlight/10 text-mac-highlight rounded-full text-xs">
            Next.js
          </span>
          <span className="px-2 py-0.5 bg-mac-highlight/10 text-mac-highlight rounded-full text-xs">
            Vite
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default CurrentProjectWidget;
