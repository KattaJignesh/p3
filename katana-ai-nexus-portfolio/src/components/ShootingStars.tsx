import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const ShootingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  const starColors = ['rgba(59, 130, 246, 0.8)', 'rgba(147, 51, 234, 0.8)', 'rgba(34, 197, 94, 0.8)', 'rgba(255, 255, 255, 0.8)'];

  useEffect(() => {
    const generateStar = () => {
      const randomColor = starColors[Math.floor(Math.random() * starColors.length)];

      const newStar: Star = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 0.6,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 1,
        color: randomColor,
      };
      setStars(prevStars => [...prevStars, newStar]);

      setTimeout(() => {
        setStars(prevStars => prevStars.filter(star => star.id !== newStar.id));
      }, (newStar.duration + newStar.delay) * 1000 + 100);
    };

    const interval = setInterval(generateStar, Math.random() * 1500 + 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full shadow-md shooting-star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}px`,
            left: `${star.x}px`,
            animation: `shoot ${star.duration}s linear forwards` ,
            animationDelay: `${star.delay}s`,
            backgroundColor: star.color,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ShootingStars;
 