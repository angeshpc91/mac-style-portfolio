import React from "react";
import Window from "./Window";
import DesktopIcon from "./DesktopIcon";
import { useApps } from "../context/AppsContext";
import AboutContent from "./windows/AboutContent";
import ProjectsContent from "./windows/ProjectsContent";
import SkillsContent from "./windows/SkillsContent";
import ResumeContent from "./windows/ResumeContent";
import ContactContent from "./windows/ContactContent";
import Clock from "./widgets/Clock";
import ProfileWidget from "./widgets/ProfileWidget";
import CurrentProjectWidget from "./widgets/CurrentProjectWidget";
import DraggableWidget from "./DraggableWidget";
import { format } from "date-fns";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "../context/ThemeContext";

const Desktop: React.FC = () => {
  const { apps, openApp, focusApp } = useApps();
  const { theme } = useTheme();

  // Map theme to background style
  const backgroundStyles: Record<string, React.CSSProperties> = {
    light: {
      backgroundImage: "url('/light-desktop-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#e0e7ef",
    },
    dark: {
      backgroundImage: "url('/dark-desktop-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#181c24",
    },
    system: {
      background: "linear-gradient(135deg, #e0e7ef 0%, #181c24 100%)",
    },
  };

  return (
    <div
      className="desktop w-full h-full pt-12 pb-20 px-6 overflow-hidden"
      style={backgroundStyles[theme] || backgroundStyles.light}
    >
      {/* Desktop Icons */}
      <div className="grid grid-cols-1 gap-4">
        {apps.map(({ id, title, icon }) => (
          <DesktopIcon
            key={id}
            id={id}
            title={title}
            icon={icon}
            onClick={() => openApp(id)}
          />
        ))}
      </div>

      {/* Desktop Widgets */}
      <DraggableWidget defaultPosition={{ x: 50, y: 80 }}>
        <Clock />
      </DraggableWidget>
      <DraggableWidget defaultPosition={{ x: 50, y: 290 }}>
        <ProfileWidget />
      </DraggableWidget>
      <DraggableWidget defaultPosition={{ x: 50, y: 550 }}>
        <CurrentProjectWidget />
      </DraggableWidget>

      {/* Windows */}
      {apps.map(
        (app, idx) =>
          app.isOpen && (
            <Window
              key={app.id}
              id={app.id}
              title={app.title}
              isMinimized={app.isMinimized}
              initialPosition={app.position}
              initialSize={app.size}
              zIndex={app.zIndex}
              onFocus={() => focusApp(app.id)}
            >
              {app.id === "about" && <AboutContent />}
              {app.id === "projects" && <ProjectsContent />}
              {app.id === "skills" && <SkillsContent />}
              {app.id === "resume" && <ResumeContent />}
              {app.id === "contact" && <ContactContent />}
            </Window>
          )
      )}

      {/* Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-1 text-xs bg-mac-window/70 backdrop-blur-xl border-b border-mac-border">
        <div className="flex items-center space-x-4">
          <span className="font-semibold">Angesh Chettiar</span>
          <span>Principal Engineer</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>{format(new Date(), "EEE MMM d")}</span>
          <span>{format(new Date(), "h:mm a")}</span>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
