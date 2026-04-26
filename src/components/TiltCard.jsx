import { useState } from "react";

export default function TiltCard({ children }) {

  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setStyle({
      transform: `
        perspective(1000px)
        rotateX(${y * -10}deg)
        rotateY(${x * 10}deg)
        scale(1.03)
      `
    });
  };

  const reset = () => {
    setStyle({ transform: "perspective(1000px) rotateX(0) rotateY(0)" });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={style}
      className="transition-all duration-300 ease-out"
    >
      {children}
    </div>
  );
}