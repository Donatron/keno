// Declare variables
var row = '<div class="row"></div>';
var tile = '<div class="tile"></div>';
var numbersThisGame = 0;
var game;
var heads = 0;
var tails = 0;
var timeToGameStart = 10;
var gameNumber = 1;
var gameInProgress = false;


// Create function for displaying next game countdown timer
function countdown() {
  $('.timer').html(timeToGameStart);

  var timer = setInterval(function() {
    if (timeToGameStart > 1) {
      timeToGameStart -= 1;
      console.log(timeToGameStart);
      $('.timer').html(timeToGameStart);
    } else {
      $('.message').html('<h1>Let\'s Get Ready To Play!');
      clearInterval(timer);
      gameInProgress = true;
      setTimeout(function() {
        $('.message').html('<h3>Now Drawing Game Number</h3><div class="timer">' + gameNumber + '</div>');
      }, 3000);
    }
  }, 1000);

}

// Check if game in progress before starting timer
if (!gameInProgress) {
  countdown();
}

// Create Keno rows
function createKenoGrid() {

  // Add 4 rows to Heads Container
  for (var i=1; i<=4; i++) {
    $('.heads-container').append(row);
  }

  // Add 4 rows to Tails Container
  for (var i=5; i<=8; i++) {
    $('.tails-container').append(row);
  }

}
createKenoGrid();

function appendRowNumbers() {

  // Append row number to row classes
  var numberOfRows = $('.row').length;
  console.log(numberOfRows);

  for (var i=1; i<=numberOfRows; i++) {
    var thisClass = 'row-' + i;
    var thisRow = $('.row').eq(i-1)
    thisRow.addClass(thisClass);
  }

}
appendRowNumbers();

// Add tiles to rows
function addTiles() {

  for (var i=1; i<=10; i++) {
    $('.row').append(tile);
  }

}
addTiles();

// Declare variable for accessing individual tiles
var numberOfTiles = $('.tile').length;

function addTileData() {

  // Append numbers to tiles
  for (var i=0; i<=numberOfTiles; i++) {
    var thisTile = $('.tile').eq(i);
    thisTile.html(i + 1);

    // Place overlays over all tiles
    thisTile.prepend('<div class="overlay"></div>');
  }
}
addTileData();

// Remove tile overlays from drawn numbers
function removeTileOverlay(index) {
  var thisTile = $('.tile').eq(index - 1);
  thisTile.html(index);
}

// Create function for declaring CSS colours based on drawn number
function colorTiles(index) {
  switch(true) {
    case (index < 10):
      return 'linear-gradient(to right,#e6007e 0,#a81815 100%)'
      break;
    case (index>=10 && index<20):
      return 'linear-gradient(to right,#009fe3 0,#522583 100%)'
      break;
    case (index>=20 && index<30):
      return 'linear-gradient(to right,#f2e500 0,#007f2d 100%)'
      break;
    case (index>=30 && index<40):
      return 'linear-gradient(to right,#ffed00 0,#e74011 100%)'
      break;
    case (index>=40 && index<50):
      return 'linear-gradient(to right, rgba(169,49,149,1) 0%, rgba(121,8,103,1) 100%)'
      break;
    case (index>=50 && index<60):
      return 'linear-gradient(to right, rgba(240,79,33,1) 0%, rgba(155,35,0,1) 100%)'
      break;
    case (index>=60 && index<70):
      return 'linear-gradient(to right, rgba(144,172,189,1) 0%, rgba(59,102,127,1) 100%)'
      break;
    case (index>=70 && index<numberOfTiles):
      return 'linear-gradient(to right, rgba(81,51,151,1) 0%, rgba(40,14,102,1) 100%)'
      break;
  }
}

// Add background colour to tiles
function addTileColor() {

  for (var i=0; i<numberOfTiles; i++) {
    var tileAtIndex = $('.tile').eq(i);
    tileAtIndex.css('background', colorTiles(i));
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
  $('.number-drawn').html(currentNumber).css('background', colorTiles(currentNumber - 1)).show();

  // Update Heads and Tails counters
  $('#heads').html(heads);
  $('#tails').html(tails);

  // Hide drawn number
  setTimeout(function() {
    $('.number-drawn').hide();
  }, 3000);

}

function startGame() {
  game = setInterval(function() {
      if (numbersThisGame < 20) {
        playGame();
      } else if (numbersThisGame => 20) {
        $('.number-drawn').hide();
      }
    },4500);
}
startGame();
