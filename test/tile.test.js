const Tile = require('../js/tile')

describe('Tile Test', () => {
  it('It creates a Keno Tile', () => {
    const tile = new Tile(21)
    tile.getColor(tile.number)

    expect(tile.number).toEqual(21)
    expect(tile.color).toBe('blue')
  })
})