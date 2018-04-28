var row = '<div class="row"></div>'
var tile = '<div class="tile"></div>'
var numbersThisGame = 0;
var game;
var heads = 0;
var tails = 0;

// Create Keno rows
function createKenoGrid() {

  for (var i=1; i<=8; i++) {
    $('.numbers').append(row);
    $(row).addClass('row-' + i);
  }

}
createKenoGrid();

// Add tiles to rows
function addTiles() {

  for (var i=1; i<=10; i++) {
    $('.row').append(tile);
  }

}
addTiles();

// Append row number to row classes
var numberOfRows = $('.numbers .row').length;

for (var i=1; i<=numberOfRows; i++) {
  var thisClass = 'row-' + i;
  var thisRow = $('.numbers .row').eq(i-1)
  thisRow.addClass(thisClass);
}

// Append numbers to tiles
var numberOfTiles = $('.row .tile').length;

// Place overlays over all tiles
function addTileOverlays() {
  for (var i=0; i<=numberOfTiles; i++) {
    var thisTile = $('.tile').eq(i);
    thisTile.html(i + 1);
    thisTile.prepend('<div class="overlay"></div>');
  }
}
addTileOverlays();

// Remove tile overlays from drawn numbers
function removeTileOverlay(index) {
  var thisTile = $('.tile').eq(index - 1);
  thisTile.html(index);
}

// Create function for declaring CSS colours based on drawn number
function colorTiles(index) {
  switch(true) {
    case (index < 10):
      return '#BE2431'
      break;
    case (index>=10 && index<20):
      return '#0D6BB3'
      break;
    case (index>=20 && index<30):
      return '#04863C'
      break;
    case (index>=30 && index<40):
      return '#FAA330'
      break;
    case (index>=40 && index<50):
      return '#A93195'
      break;
    case (index>=50 && index<60):
      return '#F04F21'
      break;
    case (index>=60 && index<70):
      return '#90ACBD'
      break;
    case (index>=70 && index<numberOfTiles):
      return '#513397'
      break;
  }
}

// Add background colour to tiles
function addTileColor() {

  for (var i=0; i<numberOfTiles; i++) {
    var tileAtIndex = $('.tile').eq(i);
    tileAtIndex.css('background-color', colorTiles(i));
  }

}
addTileColor();

// Create initial arrays of numbers 1 to 80 and drawn numbers
var numbersArray = [];
var drawnNumbers = [];

function createNumbers() {
  for (var i=1; i<=80; i++) {
    numbersArray.push(i);
  }
}
createNumbers();

// Hide Number Drawn
$('.number-drawn').hide();

function drawNumber() {
  var length = numbersArray.length;
  var numberDrawn = Math.floor(Math.random() * length) + 1;
  return numberDrawn;
}

// Create function for checking if drawn number already drawn
function checkNumberDrawn(numberDrawn, numbersAlreadyDrawn) {

  var count = numbersAlreadyDrawn.length;

  for (var i=0; i<count; i++)
  if (numbersAlreadyDrawn[i] === numberDrawn) {
    return console.log('That\'s already been drawn');
  }
  numbersAlreadyDrawn.push(numberDrawn);
  removeTileOverlay(numberDrawn);
  numbersThisGame += 1;
  headsOrTails(numberDrawn);
}

// Create function for tallying heads and tails count
function headsOrTails(number) {
  if (number <= 40) {
    heads += 1;
  } else {
    tails += 1;
  }
}


// Play Game
function playGame() {

  // Generate random number until 20 have been generated
  var currentNumber = drawNumber();
  checkNumberDrawn(currentNumber, drawnNumbers);
  console.log(currentNumber);
  console.log(numbersThisGame);

  // Show drawn number
  $('.number-drawn').html(currentNumber).css('background-color', colorTiles(currentNumber - 1)).show();

  // Update Heads and Tails counters
  $('#heads').html(heads);
  $('#tails').html(tails);

}

function startGame() {
  game = setInterval(function() {
      if (numbersThisGame < 20) {
        playGame();
      } else if (numbersThisGame => 20) {
        $('.number-drawn').hide();
      }
    },3500);
}
startGame();
