const Tile = require('../js/tile')

describe('Tile Test', () => {
  it('Creates a Keno Tile with the correct number', () => {
    const tile = new Tile(21)
    tile.getColor(tile.number)

    expect(tile.number).toEqual(21)
  })

  it('Creates a new Keno Tile with isDrawn as false', () => {
    const tile = new Tile(58)

    expect(tile.isDrawn).toBeFalsy()
  })

  it('Adds the correct color to a Keno Tile', () => {
    const tile1 = new Tile(21)
    tile1.getColor(tile1.number)
    const tile2 = new Tile(45)
    tile2.getColor(tile2.number)
    const tile3 = new Tile(67)
    tile3.getColor(tile3.number)

    expect(tile1.color).toBe('green')
    expect(tile2.color).toBe('magenta')
    expect(tile3.color).toBe('orange')
  })

  it('Can can change a Keno Tile status to drawn', () => {
    const tile = new Tile(23)
    tile.setIsDrawn(true)
    
    expect(tile.isDrawn).toBeTruthy()
  })
})