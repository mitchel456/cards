function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomAbility() {
  return [
    'STR',
    'DEX',
    'CON',
    'INT',
    'WIS',
    'CHA'
  ][getRandomInt(0, 5)]
}

function randomMove() {
  return `${getRandomInt(8, 14)} ${getRandomAbility()}`
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const cardSize = 400;

// for (i = 0; i < 10; i++) {
//   for (j = 0; j < 7; j++) {
//     const difficulty = getRandomInt(4, 12);
//     const fromLeft = i * cardSize;
//     const fromTop = j * cardSize;
//
//     ctx.fillStyle = 'white';
//     ctx.fillRect(i * cardSize, j * cardSize, cardSize, cardSize);
//
//     ctx.fillStyle = 'black';
//     ctx.strokeRect(i * cardSize, j * cardSize, cardSize, cardSize);
//
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
//     ctx.font = '50px sans-serif';
//     ctx.fillText(difficulty, fromLeft + 200, fromTop + 200);
//
//     ctx.font = '30px sans-serif';
//     ctx.fillText(randomMove(), fromLeft + 200, fromTop + 30);
//     ctx.fillText(randomMove(), fromLeft + 200, fromTop + 370);
//
//     ctx.textAlign = 'left';
//     ctx.fillText(randomMove(), fromLeft + 10, fromTop + 200);
//
//     ctx.textAlign = 'right';
//     ctx.fillText(randomMove(), fromLeft + 390, fromTop + 200);
//   }
// }

// fill in hidden card
ctx.fillStyle = 'brown';
ctx.fillRect(0, 0, cardSize, cardSize);
