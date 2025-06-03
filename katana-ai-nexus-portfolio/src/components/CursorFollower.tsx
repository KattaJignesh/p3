import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: string; color: string; duration: string; delay: string }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Trailing elements with varied delays and appearance for a tail effect
  const trailingElements = [
    { id: 1, size: 'w-1 h-1', color: 'bg-blue-400/60', blur: 'blur-sm', delay: '50ms' },
    { id: 2, size: 'w-2 h-2', color: 'bg-purple-400/60', blur: 'blur-sm', delay: '80ms' },
    { id: 3, size: 'w-1 h-1', color: 'bg-green-400/60', blur: 'blur-sm', delay: '110ms' },
    { id: 4, size: 'w-3 h-3', color: 'bg-blue-400/50', blur: 'blur-md', delay: '140ms' },
    { id: 5, size: 'w-2 h-2', color: 'bg-purple-400/50', blur: 'blur-sm', delay: '170ms' },
    { id: 6, size: 'w-1 h-1', color: 'bg-green-400/50', blur: 'blur-sm', delay: '200ms' },
    { id: 7, size: 'w-3 h-3', color: 'bg-blue-400/40', blur: 'blur-md', delay: '230ms' },
    { id: 8, size: 'w-2 h-2', color: 'bg-purple-400/40', blur: 'blur-sm', delay: '260ms' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main Cursor Follower Dot */}
      <div
        className="absolute w-6 h-6 rounded-full opacity-70 blur-md bg-gradient-to-r from-blue-400 to-purple-500 transform -translate-x-1/2 -translate-y-1/2 transition duration-75 ease-linear"
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
      ></div>

      {/* Trailing Particles/Elements */}
      {trailingElements.map(el => (
        <div
          key={el.id}
          className={`absolute rounded-full ${el.size} ${el.color} ${el.blur} transform -translate-x-1/2 -translate-y-1/2 transition duration-200 ease-out`}
          style={{ top: `${position.y}px`, left: `${position.x}px`, transitionDelay: el.delay }}
        ></div>
      ))}
    </div>
  );
};

export default CursorFollower; 