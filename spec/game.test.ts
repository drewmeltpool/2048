import Game from '../src/Game';

describe('2048 game', () => {
  it('update cell', () => {
    const game = new Game(1, 1);
    game.updateCell(0, 0, 2);
    expect(game.getCell(0, 0)).toBe(2);
  });

  it('get cell', () => {
    const game = new Game(1, 1);
    expect(game.getCell(0, 0)).toBe(0);
  });

  it('to string', () => {
    const game = new Game(1, 1);
    expect(typeof game.toString()).toBe('string');
  });

  it('left', () => {
    const game = new Game(2, 2);

    game.updateCell(1, 1, 2);
    game.left();

    expect(game.getCell(1, 0)).toBe(2);
  });

  it('up', () => {
    const game = new Game(2, 2);

    game.updateCell(1, 0, 2);
    game.up();

    expect(game.getCell(0, 0)).toBe(2);
  });

  it('right', () => {
    const game = new Game(2, 2);

    game.updateCell(1, 0, 2);
    game.up();

    expect(game.getCell(0, 0)).toBe(2);
  });

  it('down', () => {
    const game = new Game(2, 2);

    game.updateCell(0, 0, 2);
    game.down();

    expect(game.getCell(1, 0)).toBe(2);
  });
});
