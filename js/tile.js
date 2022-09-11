class Tile {
  constructor(number) {
    this.number = number
    this.isDrawn = false
    this.color;
  }

  getColor = (number) => {
    switch(true) {
      case (number>=0 && number <= 10):
        this.color = 'red'
        break
      case (number>10 && number<=20):
        this.color = 'blue'
        break
      case (number>20 && number<=30):
        this.color = 'green'
        break
      case (number>30 && number<=40):
        this.color = 'yellow'
        break
      case (number>40 && number<=50):
        this.color = 'magenta'
        break
      case (number>50 && number<=60):
        this.color = 'grey'
        break
      case (number>60 && number<=70):
        this.color = 'orange'
        break
      case (number>60 && number<=70):
        this.color = 'purple'
        break
    }
  }

  setIsDrawn = () => {
    return this.isDrawn = true
  }
}

const tile = new Tile(48)
tile.getColor(tile.number)

module.exports = Tile
