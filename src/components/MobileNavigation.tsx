import React from "react";
import { useApps } from "../context/AppsContext";
import DockIcon from "./DockIcon";

const MobileNavigation: React.FC = () => {
  const { apps, openApp } = useApps();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-mac-window/10 backdrop-blur-xl border-t border-mac-border z-50">
      <div className="flex justify-around py-3">
        {apps.map((app) => {
          return (
            <button
              key={app.id}
              className="flex flex-col items-center"
              onClick={() => openApp(app.id)}
            >
              <DockIcon
                key={app.id}
                id={app.id}
                icon={app.icon}
                title={app.title}
                isOpen={app.isOpen}
                onClick={() => openApp(app.id)}
              />
              <span className="text-xs mt-1">{app.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavigation;
