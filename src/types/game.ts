export interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameState {
  score: number;
  bestScore: number;
  moves: number;
  gameStatus: 'idle' | 'playing' | 'won';
}