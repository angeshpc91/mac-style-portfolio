import React, { useEffect, useRef } from "react";
import { Rnd } from "react-rnd";
import { X, Minus, Square } from "lucide-react";
import { useApps } from "../context/AppsContext";

interface WindowProps {
  id: string;
  title: string;
  isMinimized: boolean;
  initialPosition: { x: number; y: number };
  initialSize: { width: number; height: number };
  zIndex?: number;
  onFocus?: () => void;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({
  id,
  title,
  isMinimized,
  initialPosition,
  initialSize,
  zIndex = 100,
  onFocus,
  children,
}) => {
  const { closeApp, minimizeApp, updateAppPosition, updateAppSize } = useApps();
  const windowRef = useRef<Rnd>(null);

  useEffect(() => {
    if (!isMinimized && windowRef.current?.resizableElement?.current) {
      windowRef.current.resizableElement.current.style.zIndex = "10";
    }
    // Focus the window when it is opened
    if (!isMinimized && onFocus) {
      onFocus();
    }
  }, [isMinimized]);

  if (isMinimized) {
    return null;
  }

  return (
    initialPosition && (
      <Rnd
        ref={windowRef}
        default={{
          x: initialPosition.x,
          y: initialPosition.y,
          width: initialSize.width,
          height: initialSize.height,
        }}
        minWidth={300}
        minHeight={200}
        dragHandleClassName="draggable-handle"
        bounds="parent"
        onDragStop={(e, d) => {
          updateAppPosition(id, { x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          updateAppSize(id, {
            width: parseInt(ref.style.width),
            height: parseInt(ref.style.height),
          });
          updateAppPosition(id, position);
        }}
        className="mac-window animate-scale-up"
        style={{ zIndex }} // <-- Apply zIndex here
        onMouseDown={onFocus} // <-- Bring to front on click
      >
        {/* Title bar */}
        <div className="window-title-bar draggable-handle">
          <div className="flex items-center">
            <div
              className="window-control bg-mac-danger"
              onClick={() => closeApp(id)}
            >
              <X className="w-3 h-3 opacity-0 group-hover:opacity-100" />
            </div>
            <div
              className="window-control bg-mac-warning"
              onClick={() => minimizeApp(id)}
            >
              <Minus className="w-3 h-3 opacity-0 group-hover:opacity-100" />
            </div>
            <div className="window-control bg-mac-accent">
              <Square className="w-3 h-3 opacity-0 group-hover:opacity-100" />
            </div>
          </div>
          <div className="font-medium text-sm">{title}</div>
        </div>

        {/* Window content */}
        <div className="p-4 overflow-auto h-[calc(100%-40px)]">{children}</div>
      </Rnd>
    )
  );
};

export default Window;
