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

// set color of the pixels
ctx.fillStyle = 'black';
// Set pointer to the centre of the container
pointer = {
  x: Math.floor(canvas.width / 2),
  y: Math.floor(canvas.height / 2),
  number: 1 // determine which number is currently represents
}

// draw first pixel
while ( pointer.number < 200 ) {
  if ( isPrime(pointer.number)) {
    ctx.fillRect(pointer.x, pointer.y, pixelX, pixelY);
  }
  // setTimeout(function () {
  //   translateRight(pointer);
  // }, 10);

}
