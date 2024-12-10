import React from 'react';
import { GameBoard } from './components/GameBoard';
import { GameStats } from './components/GameStats';
import { useGame } from './hooks/useGame';
import { Gamepad2 } from 'lucide-react';

function App() {
  const { cards, gameState, initializeGame, handleCardClick } = useGame();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad2 className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-800">Memory Game</h1>
          </div>
          {gameState.gameStatus === 'idle' ? (
            <button
              onClick={initializeGame}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Start Game
            </button>
          ) : (
            <>
              <GameStats gameState={gameState} />
              <GameBoard cards={cards} onCardClick={handleCardClick} />
              {gameState.gameStatus === 'won' && (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-green-600 mb-4">
                    Congratulations! You won! 🎉
                  </h2>
                  <button
                    onClick={initializeGame}
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Play Again
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;