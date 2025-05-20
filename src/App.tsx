import React, { useState } from 'react';
import Desktop from './components/Desktop';
import Dock from './components/Dock';
import { AppsProvider } from './context/AppsContext';
import MobileNavigation from './components/MobileNavigation';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile state on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AppsProvider>
      <div className="h-screen w-screen overflow-hidden relative bg-mac-bg">
        {/* Desktop wallpaper */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            filter: 'brightness(0.9)'
          }}
        />
        
        {/* Main content */}
        <Desktop />
        
        {/* Navigation based on device */}
        {isMobile ? <MobileNavigation /> : <Dock />}
      </div>
    </AppsProvider>
  );
};

export default App;