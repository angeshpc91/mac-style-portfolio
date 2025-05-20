import React from "react";
import { User, Folders, Code, Codepen, FileText, Mail } from "lucide-react";

interface DesktopIconProps {
  id: string;
  title: string;
  icon: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({
  id,
  title,
  icon,
  onClick,
}) => {
  // Function to render the correct icon based on the icon name
  const renderIcon = () => {
    switch (icon) {
      case "user":
        return <User className="w-10 h-10 text-mac-highlight" />;
      case "folders":
        return <Folders className="w-10 h-10 text-mac-highlight" />;
      case "code":
        return <Code className="w-10 h-10 text-mac-highlight" />;
      case "file-text":
        return <FileText className="w-10 h-10 text-mac-highlight" />;
      case "mail":
        return <Mail className="w-10 h-10 text-mac-highlight" />;
      default:
        return <Folders className="w-10 h-10 text-mac-highlight" />; // Default icon
    }
  };

  return (
    <div
      className="desktop-icon flex flex-col items-end justify-center p-2 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <div className="icon-container bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-2 group-hover:bg-white/20 transition-colors">
          {renderIcon()}
        </div>
        <span className="text-xs text-white bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
          {title}
        </span>
      </div>
    </div>
  );
};

export default DesktopIcon;
