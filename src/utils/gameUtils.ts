export const EMOJIS = ['🌟', '🎮', '🎲', '🎯', '🎨', '🎭', '🎪', '🎡'];

export const createDeck = (): number[] => {
  const deck = [...Array(8).keys(), ...Array(8).keys()];
  return shuffle(deck);
};

export const shuffle = (array: number[]): number[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};