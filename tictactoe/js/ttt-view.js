class View {
  constructor(game, $el, newGame) {
    this.game = game;
    this.$el = $el;
    this.newGame = newGame;
  }

  bindEvents($li) {
    $li.on("click", event => {
      this.makeMove($li)
    });
  }

  makeMove($square) {
    const i = $square.prevAll().length

    const pos = [];
    pos[0] = i % 3;
    if (i < 3){
      pos[1] = 0;
    } else if (i > 5) {
      pos[1] = 2;
    } else {
      pos[1] = 1;
    }

    try {
      this.game.playMove(pos);

      $square.css("background-color", "white");
      const player = {
        "x": '<img src="http://www.drodd.com/images14/x15.jpg"/>',
        'o': '<img src="https://us.123rf.com/450wm/newromashka/newromashka1410/newromashka141000017/32562956-blue-vector-marker-circle-stain.jpg?ver=6"/>'
      }


      $square.append(`<p>${player[this.game.currentPlayer]}</p>`);
    }
    catch (e) {
      alert(e.msg);
    }

    setTimeout(() => {
      if (this.game.isOver()){
        alert(`${this.game.currentPlayer} wins!`);
        $("ul").remove();
        this.newGame();
      }
    }, 0);
  }

  setupBoard() {
    const $ul = $("<ul></ul>");
    this.$el.append($ul);
    for (var i = 0; i < 9; i++) {
      const $li = $("<li></li>");
      this.bindEvents($li);
      $ul.append($li);
    }
  }
}

module.exports = View;
