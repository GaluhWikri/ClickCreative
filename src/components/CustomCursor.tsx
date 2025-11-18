import { useCustomCursor } from '../hooks/useScrollAnimation';

export default function CustomCursor() {
  const { position, isPointer } = useCustomCursor();

  return (
    <>
      <div
        className="fixed w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999] transition-transform duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      <div
        className="fixed w-8 h-8 rounded-full border border-white mix-blend-difference pointer-events-none z-[9999] transition-all duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.2 : 1})`,
        }}
      />
    </>
  );
}
