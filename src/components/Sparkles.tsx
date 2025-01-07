import React from 'react';

const Sparkles: React.FC = () => {
  const numberOfHearts = 30;

  return (
    <div className="hearts-background absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: numberOfHearts }).map((_, index) => (
        <div
          key={index}
          className={`heart absolute`}
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.5 + 0.5,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Sparkles;
