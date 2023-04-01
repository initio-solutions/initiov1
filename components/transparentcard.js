import React, { useRef } from "react";

const TransparentCard = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const halfWidth = (rect.right - rect.left) / 2;
    const halfHeight = (rect.bottom - rect.top) / 2;
    const xPos = (e.clientX - rect.left) / halfWidth - 1;
    const yPos = (e.clientY - rect.top) / halfHeight - 1;

    card.style.transform = `translateY(-8px) rotateX(${
      -yPos * -20
    }deg) rotateY(${-xPos * 20}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        ref={cardRef}
        className="transparent-card w-64 h-48 bg-transparent border-2 border-gray-300 rounded-lg p-4"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-2">Transparent Card</h2>
          <p className="text-base text-gray-700">
            This card has a 3D hover effect and gloss.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransparentCard;
