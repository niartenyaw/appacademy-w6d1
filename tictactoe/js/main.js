const View = require('./ttt-view');
const Game = require('./game');

$( () => {
  const newGame = () => {
    const game = new Game();
    const view = new View(game, $('.ttt'), newGame);
    view.setupBoard();
  }

  newGame();
});
