class Game {
  constructor(gameNumber) {
    this.gameNumber = gameNumber
    this.allNumbers = []
    this.drawnNumbers = []
    this.undrawnNumbers = []
  }

  getGameNumbers() {
    const gameNumbers = []
    for (let i =1; i<=80; i++) {
      gameNumbers.push(i)
    }
    this.allNumbers = Array.from({ length: 80 }, (x, i) => i+1)
    this.undrawnNumbers = this.allNumbers
  }

  drawNumber() {
    const idx = Math.floor(Math.random() * this.undrawnNumbers.length)
    const number = this.undrawnNumbers[idx]
    
    this.drawnNumbers.push(number)
    this.undrawnNumbers = this.undrawnNumbers.filter(num => num !== number)

    return number
  }
}

module.exports = Game