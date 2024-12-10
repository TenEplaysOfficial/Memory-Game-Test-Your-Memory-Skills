import React from 'react';
import { Card as CardType } from '../types/game';

interface CardProps {
  card: CardType;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({ card, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-24 h-24 cursor-pointer perspective"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-gpu preserve-3d ${
          card.isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg" />
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-white shadow-lg rotate-y-180 flex items-center justify-center text-4xl">
          {card.emoji}
        </div>
      </div>
    </div>
  );
};