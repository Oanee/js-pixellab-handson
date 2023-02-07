const container = document.getElementById('container');
const logMessage = (message = '') => {
  const p = document.createElement('p');
  p.innerText = message;
  container.prepend(p);
};

let initialWindowWidth = window.innerWidth;

logMessage(initialWindowWidth);

window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  let message = newWidth;

  if (newWidth !== initialWindowWidth) {
    message = `Fereastra si-a schimbat dimensiunea: ${newWidth}`;
    initialWindowWidth = newWidth;
  }

  logMessage(message);
});
