import { useEffect, useRef } from "react";

function CursorEffect() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = cursorRef.current;
      if (cursor) {
        // Calcula o tamanho real da bola
        const rect = cursor.getBoundingClientRect();
        const halfWidth = rect.width / 2;
        const halfHeight = rect.height / 2;

        // Move a bola centralizando no cursor
        cursor.style.transform = `translate(${e.clientX - halfWidth}px, ${e.clientY - halfHeight}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-50 w-2/6 h-4/6 rounded-full bg-gradient-to-r from-blue-900 to-cyan-900 opacity-30 blur-2xl mix-blend-difference transition-transform duration-75 ease-out"
    />
  );
}

export default CursorEffect;
