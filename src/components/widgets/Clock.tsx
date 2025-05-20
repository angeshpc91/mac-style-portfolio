import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center widget w-64 h-auto bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-sm">
      <div className="flex justify-center flex-col text-center">
        <div className="text-4xl font-light mb-1">
          {format(time, "h:mm")}
          <span className="text-xl ml-1">{format(time, "a")}</span>
        </div>
        <div className="text-sm text-mac-text-secondary">
          {format(time, "EEEE, MMMM d")}
        </div>
      </div>
    </div>
  );
};

export default Clock;
