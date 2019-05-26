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
const cardHeight = 400;
const cardWidth = 280;
// const numCards = 24;
//
// $(canvas).height(6 * cardHeight);
// $(canvas).width(6 * cardWidth);

for (x = 0; x < 6; x++) {
  for (y = 0; y < 6; y++) {
    const bonus = getRandomInt(1, 4);
    const ability = getRandomAbility();
    // const difficulty = getRandomInt(4, 12);
    const fromLeft = x * cardWidth;
    const fromTop = y * cardHeight;

    console.log(x * cardWidth, y * cardHeight, cardWidth, cardHeight)
    //
    ctx.fillStyle = 'white';
    ctx.fillRect(x * cardWidth, y * cardHeight, cardWidth, cardHeight);
    //
    ctx.fillStyle = 'black';
    ctx.strokeRect(x * cardWidth, y * cardHeight, cardWidth, cardHeight);
    //
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '50px sans-serif';
    ctx.fillText(bonus, fromLeft + cardWidth/2, fromTop + cardHeight/2 - 20);
    //
    ctx.font = '30px sans-serif';
    ctx.fillText(ability, fromLeft + cardWidth/2, fromTop + cardWidth/2 + 100);
    // ctx.fillText(randomMove(), fromLeft + 200, fromTop + 370);
    //
    // ctx.textAlign = 'left';
    // ctx.fillText(randomMove(), fromLeft + 10, fromTop + 200);
    //
    // ctx.textAlign = 'right';
    // ctx.fillText(randomMove(), fromLeft + 390, fromTop + 200);
  }
}

// // fill in hidden card
// ctx.fillStyle = 'brown';
// ctx.fillRect(0, 0, cardSize, cardSize);
