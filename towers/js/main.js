const HanoiGame = require('./game');
const HanoiView = require('./hanoi-view');

$( () => {
  const rootEl = $('.hanoi');
  const newGame = () => {
    rootEl.children().remove();
    const game = new HanoiGame();
    new HanoiView(game, rootEl, newGame);
  };

  newGame();
});
