import Game from '../app';

test('Game test', () => {
  const test = new Game(4);
  expect(test.fieldSize).toEqual(4);
});
