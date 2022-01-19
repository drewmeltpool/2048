import Game from './src/Game';
const game = new Game(4, 2);

game.updateCell(0, 0, 2);

game.down();
game.down();
