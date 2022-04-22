import { Card } from './Card';

export class Game {
  constructor(
    private dom: HTMLDivElement,
    private cards: Card[]
  ) {}

  init() {
    this.dom.innerHTML = `
      ${this.cards.map(card => (`
        <div class="card" data-card="${card.id}">
          <img src="img/${card.img}" class="card-front" alt="${card.description}">
          <img src="img/back.png" class="card-back" alt="Memory Card">
        </div>  
      `)).join('')}
    `
  }
}