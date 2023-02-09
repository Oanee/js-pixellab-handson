const myList = document.getElementsByTagName('ul')[0];
const heading = document.querySelector('h1');
const treshold = 500;

const clickHandler = (event) => {
  // this este referinta la obiectul de DOM
  // dar nu in arrow function
  const heading = event.currentTarget;
  // currentTarget = elemetul pe care a fost rulat
  // addEventListener
  const ul = heading.nextElementSibling;
  const display = ul.style.display;

  if (display === 'block') {
    ul.style.display = 'none';
  } else {
    ul.style.display = 'block';
  }
};

const resizeHandler = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth <= treshold) {
    // mobile
    myList.style.display = 'none';
    heading.addEventListener('resize', clickHandler);
  }

  if (windowWidth > treshold) {
    // desktop
    myList.style.display = 'block';
    heading.removeEventListener('resize', clickHandler);
  }
};

resizeHandler();

window.addEventListener('resize', resizeHandler);
