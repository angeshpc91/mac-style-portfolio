import React from "react";
import {
  User,
  Folders,
  Codepen,
  Code,
  FileText,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

interface DockIconProps {
  id: string;
  title: string;
  icon: string;
  isOpen?: boolean;
  onClick: () => void;
}

const DockIcon: React.FC<DockIconProps> = ({
  id,
  title,
  icon,
  isOpen = false,
  onClick,
}) => {
  // Function to render the correct icon based on the icon name
  const renderIcon = () => {
    switch (icon) {
      case "user":
        return <User className="w-8 h-8 text-white" />;
      case "folders":
        return <Folders className="w-8 h-8 text-white" />;
      case "code":
        return <Code className="w-8 h-8 text-white" />;
      case "codepen":
        return <Codepen className="w-8 h-8 text-white" />;
      case "file-text":
        return <FileText className="w-8 h-8 text-white" />;
      case "mail":
        return <Mail className="w-8 h-8 text-white" />;
      case "github":
        return <Github className="w-8 h-8 text-white" />;
      case "linkedin":
        return <Linkedin className="w-8 h-8 text-white" />;
      case "external-link":
        return <ExternalLink className="w-8 h-8 text-white" />;
      default:
        return <Folders className="w-8 h-8 text-white" />; // Default icon
    }
  };

  return (
    <div
      className="dock-icon group relative flex flex-col items-center justify-center"
      onClick={onClick}
    >
      {/* Tooltip that appears on hover */}
      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="text-xs text-white bg-black/80 px-2 py-1 rounded-md whitespace-nowrap">
          {title}
        </span>
      </div>

      {/* Icon container with bounce effect on hover */}
      <div
        className="icon-container bg-mac-highlight/90 rounded-xl p-3 
                    transform transition-all duration-200 
                    hover:scale-110 hover:bg-mac-highlight 
                    active:scale-95 cursor-pointer"
      >
        {renderIcon()}
      </div>

      {/* Dot indicator for open apps */}
      {isOpen && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
      )}
    </div>
  );
};

export default DockIcon;
