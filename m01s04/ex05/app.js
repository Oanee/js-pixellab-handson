// var i = 14;

// if (i % 7 === 0) {
//   console.log('Acest numar este multiplu de 7');
// }

var number = prompt('Spune un numar');
var message = 'Acest numar este multiplu de ';

if (number % 2 === 0) {
  for (number >= 0; (number /= 2); ) {
    if (number === 1) {
      break;
    }
    message += `${number}, `;
  }

  console.log(`${message} ${number}.`);
}
