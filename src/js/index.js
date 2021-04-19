var cardList = [
  { value: 1, color: "--teal" },
  { value: 2, color: "--blue" },
  { value: 3, color: "--dark-gray" },
  { value: 4, color: "--blue" },
  { value: 5, color: "--dark-gray" },
  { value: 6, color: "--gray" },
  { value: 7, color: "--gray" },
  { value: 8, color: "--teal" },
  { value: 9, color: "--dark-gray" }
];

function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function createCardElm(cardOptions) {
  const content = createCardContentElm(cardOptions);
  const card = document.createElement("div");
  card.className = "card";
  card.style = `--card-color: var(${cardOptions.color})`;
  card.appendChild(content);

  return card;
}

function createCardContentElm(cardOptions) {
  const content = document.createElement("div");
  content.className = "card-content";
  content.innerText = cardOptions.value;

  return content;
}

function addCardsToContainer(cards, container) {
  removeAllChildren(container);

  cards.forEach(cardOptions => {
    const cardElm = createCardElm(cardOptions);
    container.appendChild(cardElm);
  });
}

function shuffleCards(cards) {
  var i = cards.length,
    shuffledCards = [];

  while(i) {
    const random = Math.floor(Math.random() * i);
    const [item] = cards.splice(random, 1);
    shuffledCards.push(item);
    i--;
  }

  return shuffledCards;
}

function sortCards(cards) {
  return cards.sort((c1, c2) => c1.value - c2.value);
}

window.onload = async () => {
  var shuffleButton = document.getElementById('btnShuffle'),
    sortButton = document.getElementById('btnSort'),
    cardsMain = document.getElementById('divCardsMain');

  addCardsToContainer(cardList, cardsMain);

  shuffleButton.addEventListener('click', () => {
    cardList = shuffleCards(cardList);
    addCardsToContainer(cardList, cardsMain);
  });

  sortButton.addEventListener('click', () => {
    cardList = sortCards(cardList);
    addCardsToContainer(cardList, cardsMain);
  });
};
