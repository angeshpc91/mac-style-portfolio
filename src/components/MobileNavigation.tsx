import React from 'react';
import { useApps } from '../context/AppsContext';
import * as Icons from 'lucide-react';

const MobileNavigation: React.FC = () => {
  const { apps, openApp } = useApps();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-mac-window/90 backdrop-blur-xl border-t border-mac-border z-50">
      <div className="flex justify-around py-3">
        {apps.map((app) => {
          const IconComponent = Icons[app.icon as keyof typeof Icons] || Icons.Box;
          
          return (
            <button
              key={app.id}
              className="flex flex-col items-center"
              onClick={() => openApp(app.id)}
            >
              <IconComponent className="w-6 h-6 text-mac-text" />
              <span className="text-xs mt-1">{app.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavigation;