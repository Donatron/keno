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

// Add background colour to tiles
function addTileColor() {

  for (var i=0; i<numberOfTiles; i++) {
    var tileAtIndex = $('.tile').eq(i);

    switch(true) {
      case (i < 10):
        tileAtIndex.css('background-color', '#BE2431')
        break;
      case (i>=10 && i<20):
        tileAtIndex.css('background-color', '#0D6BB3')
        break;
      case (i>=20 && i<30):
        tileAtIndex.css('background-color', '#04863C')
        break;
      case (i>=30 && i<40):
        tileAtIndex.css('background-color', '#FAA330')
        break;
      case (i>=40 && i<50):
        tileAtIndex.css('background-color', '#A93195')
        break;
      case (i>=50 && i<60):
        tileAtIndex.css('background-color', 'orange')
        break;
      case (i>=60 && i<70):
        tileAtIndex.css('background-color', '#90ACBD')
        break;
      case (i>=70 && i<numberOfTiles):
        tileAtIndex.css('background-color', '#513397')
        break;

      default:
      break;
    }
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
  $('.number-drawn').html(currentNumber).show();

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
