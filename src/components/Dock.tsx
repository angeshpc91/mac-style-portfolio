import React from "react";
import { useApps } from "../context/AppsContext";
import DockIcon from "./DockIcon";

const Dock: React.FC = () => {
  const { apps, openApp } = useApps();

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="mac-dock py-2 px-4 flex items-center space-x-2">
        {apps.map((app) => (
          <DockIcon
            key={app.id}
            id={app.id}
            icon={app.icon}
            title={app.title}
            isOpen={app.isOpen}
            onClick={() => openApp(app.id)}
          />
        ))}

        <div className="h-8 w-px bg-mac-border mx-2"></div>

        {/* Additional dock utilities */}
        <DockIcon
          id="github"
          icon="github"
          title="GitHub"
          onClick={() => window.open("https://github.com/angeshpc91", "_blank")}
        />
        <DockIcon
          id="codepen"
          icon="codepen"
          title="CodePen"
          onClick={() => window.open("https://codepen.io/angeshpc91", "_blank")}
        />
      </div>
    </div>
  );
};

export default Dock;
