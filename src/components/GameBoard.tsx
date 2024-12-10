import React from 'react';
import { Card } from './Card';
import { Card as CardType } from '../types/game';

interface GameBoardProps {
  cards: CardType[];
  onCardClick: (id: number) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({ cards, onCardClick }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onClick={() => !card.isMatched && !card.isFlipped && onCardClick(card.id)}
        />
      ))}
    </div>
  );
};