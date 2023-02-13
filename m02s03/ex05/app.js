const container = document.getElementById('container');
const logMessage = (message = '') => {
  const p = document.createElement('p');
  p.innerText = message;
  container.prepend(p);
};

let initialWindowWidth = window.innerWidth;
let initialWindowHeight = window.innerHeight;

let calculateWindowSurface = () => {
  return initialWindowWidth * initialWindowHeight;
};

let initialWindowArea = calculateWindowSurface();

window.addEventListener('DOMContentLoaded', () => {
  logMessage(initialWindowWidth);
  logMessage(initialWindowArea);
});

window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  let message = newWidth;

  const newHeight = window.innerHeight;
  initialWindowHeight = newHeight;

  const newArea = calculateWindowSurface();

  if (newWidth !== initialWindowWidth) {
    message = `Fereastra si-a schimbat dimensiunea: ${newWidth}`;

    initialWindowWidth = newWidth;
    logMessage(message);
    logMessage('Fereastra si-a schimbat dimensiune orizontala.');
  }

  if (newHeight !== initialWindowHeight) {
    initialWindowHeight = newHeight;
  }

  message = `Fereastra are acum suprafata de ${newArea} pixeli`;
  logMessage(message);
});
