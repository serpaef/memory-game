const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');
  
  if(!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;
  checkMatching();
}

function checkMatching() {
  if(firstCard.dataset.card === secondCard.dataset.card) {
    // TODO disableCards();
    return;
  }

  // TODO unflipCards();
}

cards.forEach((card) => {
  card.addEventListener('click', flipCard);
});
