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

const difficulty = getRandomInt(4, 12);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.strokeRect(0, 0, 400, 400);
// 
// ctx.textAlign = 'center';
// ctx.textBaseline = 'middle';
// ctx.font = '50px sans-serif';
// ctx.fillText(difficulty, 200, 200);
//
// ctx.font = '30px sans-serif';
// ctx.fillText(randomMove(), 200, 30);
// ctx.fillText(randomMove(), 200, 370);
//
// ctx.textAlign = 'left';
// ctx.fillText(randomMove(), 10, 200);
//
// ctx.textAlign = 'right';
// ctx.fillText(randomMove(), 390, 200);
