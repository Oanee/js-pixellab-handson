const button = document.querySelector('.btn');
const loWTarget = document.querySelector('.low-res');
const midTarget = document.querySelector('.mid-res');
const highTarget = document.querySelector('.high-res');

const eventHandler = () => {
  const width = window.innerWidth;
  let target = null;

  if (width <= 650) {
    target = loWTarget;
  }

  if (width > 650 && width < 1000) {
    target = midTarget;
  }

  if (width >= 1000) {
    target = highTarget;
  }

  const p = document.createElement('p');
  p.innerText = 'Butonul a fost apasat in aceasta rezolutie';

  target.append(p);
};

button.addEventListener('click', eventHandler);
