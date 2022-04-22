export interface Card {
  id: string;
  description: string;
  img: string;
}


const shuffleNumber = (min: number, max: number) => {
  const n = Math.random() * (max - min + 1) + min;
  return parseInt(n.toString());
}

const originalCards: Card[] = [];
const cards: Card[] = [];

const uniqueCards: Card[] = [
  { id: 'card01', description: 'card01', img: '01.png' },
  { id: 'card02', description: 'card02', img: '02.png' },
  { id: 'card03', description: 'card03', img: '03.png' },
  { id: 'card04', description: 'card04', img: '04.png' },
  { id: 'card05', description: 'card05', img: '05.png' },
  { id: 'card06', description: 'card06', img: '06.png' },
  { id: 'card07', description: 'card07', img: '07.png' },
  { id: 'card08', description: 'card08', img: '08.png' },
];

uniqueCards.forEach(card => {
  originalCards.push({ ...card });
  originalCards.push({ ...card });
})

let len = originalCards.length

while (cards.length < len) {
  let shuffled = shuffleNumber(0, originalCards.length - 1);
  const item = originalCards.splice(shuffled, 1);
  cards.push(item[0]);
}

export {cards }