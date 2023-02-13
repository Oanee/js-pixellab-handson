const stage = document.querySelector('.stage');
let entriesCounter = 0;
let borderCounter = 0;

const log = (message = '', cssClass = 'log') => {
  let paragraph = document.querySelector(`.${cssClass}`);

  if (paragraph === null) {
    paragraph = document.createElement('p');
    paragraph.classList.add(cssClass);
    document.body.appendChild(paragraph);
  }

  paragraph.innerText = message;
};

stage.addEventListener('mouseover', () => {
  const message = 'Mouseul este pe scena';
  console.log(message);
  log(message);
  log(`Mouseul a fost pe scena de ${++entriesCounter} ori.`, 'entriesCount');
  log(`Mouseul a trectu peste laturi de ${++borderCounter}`, 'borderCount');
});

stage.addEventListener('mouseout', () => {
  const message = 'Mouseul nu este pe scena';
  console.log(message);
  log(message);
  log(`Mouseul a trectu peste laturi de ${++borderCounter}`, 'borderCount');
});
