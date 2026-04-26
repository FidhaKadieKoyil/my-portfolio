import { useRef } from "react";

export default function MagneticButton({ children }) {

  const ref = useRef();

  const handleMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;

    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    ref.current.style.transform = "translate(0,0)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="px-6 py-3 bg-purple-600 rounded-lg transition duration-300"
    >
      {children}
    </button>
  );
}