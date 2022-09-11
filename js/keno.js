class Keno {
  constructor() {
    this.numbersDrawn = 0
    this.headsCount = 0;
    this.tailsCount = 0
    this.timeToGameStart = 180
    this.isGameInProgress = false
  }

  createGameGrid() {
    const gridObj = {
      heads: [],
      tails: []
    }

    for (let i=0; i<=7; i++) {
      const row = `<div id="row-${i+1}" class="row"></div>`
      i <= 3 ? gridObj.heads.push(row) : gridObj.tails.push(row)
    }
    return gridObj
  }
}

// METHODS
// Countdown
// createGameGrid
// appendRowNumbers
// addTiles
// addTileData
// incrementNumbersDrawn
// resetKeno

module.exports = Keno