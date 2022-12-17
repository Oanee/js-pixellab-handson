//Adauga un buton nou in document cu id-ul query si folosind addEventListener() ataseaza un eveniment care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului.
const button = document.getElementById('query');

function clickHandler() {
  const age = prompt('Varsta: ');

  return age;
}

button.addEventListener('click', clickHandler);

// Salveaza rezultatul metodei prompt intr-o variabila si afiseaza in consola folosind template strings: “Ai aa ani.”.
const age = prompt();
const result = `Ai ${age} ani.`;
console.log(result);

// Creaza un paragraf cu idul message si folosind getElementById(‘message’) stocheaza elementul intr-o variabila (paragraphElement), apoi folosind innerText, afiseaza mesajul de mai devreme in acest paragraf.

const paragraphElement = document.getElementById('message');

paragraphElement.innerText = result;
