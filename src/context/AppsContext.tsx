import React, { createContext, useContext, useState } from "react";

export interface App {
  id: string;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex?: number;
}

interface AppsContextProps {
  apps: App[];
  openApp: (id: string) => void;
  closeApp: (id: string) => void;
  minimizeApp: (id: string) => void;
  restoreApp: (id: string) => void;
  focusApp: (id: string) => void;
  updateAppPosition: (id: string, position: { x: number; y: number }) => void;
  updateAppSize: (id: string, size: { width: number; height: number }) => void;
}

const initialApps: App[] = [
  {
    id: "about",
    title: "About Me",
    icon: "user",
    isOpen: false,
    isMinimized: false,
    position: { x: 100, y: 50 },
    size: { width: 600, height: 500 },
    zIndex: 0,
  },
  {
    id: "projects",
    title: "Projects",
    icon: "folders",
    isOpen: false,
    isMinimized: false,
    position: { x: 150, y: 80 },
    size: { width: 700, height: 550 },
    zIndex: 0,
  },
  {
    id: "skills",
    title: "Skills",
    icon: "code",
    isOpen: false,
    isMinimized: false,
    position: { x: 200, y: 100 },
    size: { width: 650, height: 500 },
    zIndex: 0,
  },
  {
    id: "resume",
    title: "Resume",
    icon: "file-text",
    isOpen: false,
    isMinimized: false,
    position: { x: 250, y: 120 },
    size: { width: 700, height: 700 },
    zIndex: 0,
  },
  {
    id: "contact",
    title: "Contact",
    icon: "mail",
    isOpen: false,
    isMinimized: false,
    position: { x: 300, y: 150 },
    size: { width: 600, height: 600 },
    zIndex: 0,
  },
];

const AppsContext = createContext<AppsContextProps | null>(null);

export const AppsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [apps, setApps] = useState<App[]>(initialApps);

  const openApp = (id: string) => {
    setApps((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, isOpen: true, isMinimized: false } : app
      )
    );
  };

  const closeApp = (id: string) => {
    setApps((prevApps) =>
      prevApps.map((app) => (app.id === id ? { ...app, isOpen: false } : app))
    );
  };

  const minimizeApp = (id: string) => {
    setApps((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, isMinimized: true } : app
      )
    );
  };

  const restoreApp = (id: string) => {
    setApps((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, isMinimized: false } : app
      )
    );
  };
  const focusApp = (id: string) => {
    setApps((prevApps) => {
      // Find the highest z-index among all apps
      const maxZIndex = Math.max(...prevApps.map((app) => app.zIndex || 100));

      return prevApps.map((app) =>
        app.id === id ? { ...app, zIndex: maxZIndex + 1 } : app
      );
    });
  };

  const updateAppPosition = (
    id: string,
    position: { x: number; y: number }
  ) => {
    setApps((prevApps) =>
      prevApps.map((app) => (app.id === id ? { ...app, position } : app))
    );
  };

  const updateAppSize = (
    id: string,
    size: { width: number; height: number }
  ) => {
    setApps((prevApps) =>
      prevApps.map((app) => (app.id === id ? { ...app, size } : app))
    );
  };

  return (
    <AppsContext.Provider
      value={{
        apps,
        openApp,
        closeApp,
        minimizeApp,
        restoreApp,
        focusApp,
        updateAppPosition,
        updateAppSize,
      }}
    >
      {children}
    </AppsContext.Provider>
  );
};

export const useApps = () => {
  const context = useContext(AppsContext);
  if (!context) {
    throw new Error("useApps must be used within an AppsProvider");
  }
  return context;
};
