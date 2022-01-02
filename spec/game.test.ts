import Game from '../src/Game';

describe('2048 game', () => {
  it('Should update cell to 2', () => {
    const expected = 2;
    const game = new Game(4, 4);

    game.updateCell(0, 0, expected);

    expect(game.map[0][0]).toBe(expected);
  });

  it('Shoud get cell', () => {
    const expected = 2;
    const game = new Game(4, 4);

    game.map[0][0] = expected;
    const actual = game.getCell(0, 0);

    expect(actual).toBe(expected);
  });

  it('Move to left', () => {
    const expected = [
      [4, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const game = new Game(3, 3);

    game.updateCell(0, 0, 2);
    game.updateCell(0, 1, 2);
    game.left();

    const { map: actual } = game;

    expect(actual).toEqual(expected);
  });

  it('Move to up', () => {
    const expected = [
      [4, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    const game = new Game(3, 3);

    game.updateCell(0, 0, 2);
    game.updateCell(1, 0, 2);
    game.up();

    const { map: actual } = game;

    expect(actual).toEqual(expected);
  });

  it('Move to right', () => {
    const expected = [
      [0, 0, 2],
      [0, 0, 0],
      [0, 0, 0],
    ];

    const game = new Game(3, 3);

    game.updateCell(0, 0, 2);
    game.right();

    const { map: actual } = game;

    expect(actual).toEqual(expected);
  });

  it('Move to down', () => {
    const expected = [
      [0, 0, 0],
      [0, 0, 0],
      [2, 0, 0],
    ];

    const game = new Game(3, 3);

    game.updateCell(0, 0, 2);
    game.down();

    const { map: actual } = game;

    expect(actual).toEqual(expected);
  });
});
