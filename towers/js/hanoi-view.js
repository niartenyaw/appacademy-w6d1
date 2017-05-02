
class HanoiView {
  constructor(game, rootEl, newGame) {
    this.game = game;
    this.rootEl = rootEl;
    this.firstTower = null;
    this.newGame = newGame;

    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for (var i = 0; i < 3; i++) {
      const $ul = $("<ul></ul>");
      $ul.attr("data-tower", i)
      this.clickTower($ul);
      this.rootEl.append($ul);
      for (var j = 0; j < 3; j++) {
        const $li = $("<li></li>");
        $ul.append($li);
      }
    }
  }

  clickTower($tower) {
    $tower.click(() => {
      const towerNum = $tower.attr('data-tower');
      if (this.firstTower === null) {
        this.firstTower = towerNum
      } else {
        if (this.firstTower === towerNum) {
          this.firstTower = null;
        } else {
          if(!this.game.move(this.firstTower, towerNum)) {
            alert("Invalid move")
          }
          this.firstTower = null;
        }
      }
      this.render();

      if(this.game.isWon()) {
        alert("Winner winner chicken dinner");
        this.newGame();
      }
    });
  }

  render() {
    const $ul = $("ul");
    for (var i = 0; i < $ul.length; i++) {
      let $current = $ul.eq(i).children().last();

      for (var j = 0; j < 3; j++) {
        const disk = this.game.towers[i][j];
        if (disk === undefined){
          $current.html("");
          $current.attr("class", "")
        } else {
          $current.html(`${disk}`);
          $current.attr("class", `disk-${disk}`)
        }
        $current = $current.prev();
      }
    }
  }
}

module.exports = HanoiView;
