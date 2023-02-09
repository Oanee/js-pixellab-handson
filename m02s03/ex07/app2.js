const button = document.getElementById('matchMedia');
const media = matchMEdia('(min-width: 650px)');

const clickHandler = () => {
  alert('Arunca cu alerta');
};

const resizeHandler = (matches) => {
  if (matches) {
    button.addEventListener('click', clickHandler);
  } else {
    button.removeEventListener('click', clickHandler);
  }
};

resizeHandler(media.matches);

media.addEventListener('change', (event) => {
  resizeHandler(event.matches);
});
