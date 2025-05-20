import React from "react";
import { Rnd } from "react-rnd";

interface DraggableWidgetProps {
  defaultPosition?: { x: number; y: number };
  children: React.ReactNode;
}

const DraggableWidget: React.FC<DraggableWidgetProps> = ({
  defaultPosition = { x: 100, y: 100 },
  children,
}) => {
  return (
    <Rnd
      default={{
        x: defaultPosition.x,
        y: defaultPosition.y,
        width: "auto",
        height: "auto",
      }}
      enableResizing={false}
      bounds="parent"
      style={{ zIndex: 10 }}
    >
      {children}
    </Rnd>
  );
};

export default DraggableWidget;
