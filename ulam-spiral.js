function translateRight(pointer) {
  pointer.x++;
  pointer.number++;
}

function translateUp(pointer) {
  pointer.y++;
  pointer.number++;
}

function translateLeft(pointer) {
  pointer.x--;
  pointer.number++;
}

function translateDown(pointer) {
  pointer.y--;
  pointer.number++;
}

function isPrime(number) {
  for ( var i = 2; i < number; i++ ) {
    if ( number % i == 0 ) {
      return false;
    }
  }
  return true;
}

const canvas = $("#prime-container")[0];
const ctx = canvas.getContext('2d');
// width and height of the drawing object will be represented as
// x and y axis in Cartesian coordinate system

// width and height of the pixel in this case - 1px
const pixelX = 1;
const pixelY = 1;
// set number of pixels on the board
const totalPixels = canvas.width * canvas.height;


// set color of the pixels
ctx.fillStyle = 'black';
// Set pointer to the centre of the container
pointer = {
  x: Math.floor(canvas.width / 2),
  y: Math.floor(canvas.height / 2),
  number: 1 // determine which number is currently represents
}

// draw first pixel
ctx.fillRect(pointer.x, pointer.y, pixelX, pixelY);
// start seeking for prime numbers > 1
var spiralLength = 1
while ( pointer.number < totalPixels ) {

  for ( var i = 0; i < spiralLength; i ++) {
    translateRight(pointer);
    if ( isPrime(pointer.number) ) {
      ctx.fillRect(pointer.x, pointer.y, pixelX, pixelY);

    }
  }

  for ( var i = 0; i < spiralLength; i ++) {
    translateUp(pointer);
    if ( isPrime(pointer.number) ) {
      ctx.fillRect(pointer.x, pointer.y, pixelX, pixelY);
      ctx.save();
    }
  }
  spiralLength++;

  for ( var i = 0; i < spiralLength; i ++) {
    translateLeft(pointer);
    if ( isPrime(pointer.number) ) {
      ctx.fillRect(pointer.x, pointer.y, pixelX, pixelY);
    }
  }

  for ( var i = 0; i < spiralLength; i ++) {
    translateDown(pointer);
    if ( isPrime(pointer.number) ) {
      ctx.fillRect(pointer.x, pointer.y, pixelX, pixelY);
    }
  }
  spiralLength++;
}
