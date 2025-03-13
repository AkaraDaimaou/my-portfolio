import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  let animationFrameId: number;

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setCursor({ x: e.clientX, y: e.clientY });
        setTrail((prev) => [...prev.slice(-4), { x: e.clientX, y: e.clientY }]);
      });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => {
      window.removeEventListener("mousemove", updateCursor);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="cursor-main"
        style={{
          transform: `translate(${cursor.x}px, ${cursor.y}px)`,
        }}
      />

      {/* Cursor trail */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            transform: `translate(${point.x}px, ${point.y}px)`,
            opacity: (index + 1) / trail.length,
            scale: (index + 1) / trail.length,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
