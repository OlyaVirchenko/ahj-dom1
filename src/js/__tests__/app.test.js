import Game from '../app';

test('Game test', () => {
  const game = new Game(4);
  expect(game.fieldSize).toBe(4);
});
