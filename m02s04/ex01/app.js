const box = document.querySelector('.box');
const controlButton = document.querySelector('.control');
const darkButton = document.querySelector('.dark');
const animationClass = 'animate-class';

setTimeout(() => {
  box.classList.add(animationClass);

  // callback hell
  setTimeout(() => {
    box.classList.remove(animationClass);
  }, 4 * 1000);
}, 6 * 1000);

controlButton.addEventListener('click', (event) => {
  // this nu este elementul pe care e pus handlerul
  const controlButton = event.currentTarget;
  const box = controlButton.previousElementSibling;
  box.classList.toggle(animationClass);

  if (box.classList.contains(animationClass)) {
    controlButton.innerText = 'Elimina';
  } else {
    controlButton.innerText = 'Aplica';
  }
});

darkButton.addEventListener('click', () => {
  if (box.hasAttribute('style', 'background-color: #000')) {
    darkButton.innerText = 'Aplica dark';
    box.removeAttribute('style', 'background-color: #000');
  } else {
    darkButton.innerText = 'Elimina dark';
    box.setAttribute('style', 'background-color: #000');
  }
});
