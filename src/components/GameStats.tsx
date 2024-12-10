import React from 'react';
import { Trophy, Move } from 'lucide-react';
import { GameState } from '../types/game';

interface GameStatsProps {
  gameState: GameState;
}

export const GameStats: React.FC<GameStatsProps> = ({ gameState }) => {
  return (
    <div className="flex gap-8 mb-8">
      <div className="flex items-center gap-2">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <span className="text-lg font-semibold">Score: {gameState.score}</span>
      </div>
      <div className="flex items-center gap-2">
        <Move className="w-6 h-6 text-blue-500" />
        <span className="text-lg font-semibold">Moves: {gameState.moves}</span>
      </div>
    </div>
  );
};