var userName = prompt('Numele tau este');
var myName = 'Alin';
var mySurname = 'Oancea';
var letters = ['a'];

if (isNaN(userName)) {
  var mess01Element = document.getElementById('mess01');
  mess01 = 'Numele meu este: ' + myName + ' ' + mySurname + '.';
  mess01Element.innerText = mess01;

  var mess02Element = document.getElementById('mess02');
  mess02 = 'Numele introdus are ' + userName.length + ' caractere.';
  mess02Element.innerText = mess02;

  var mess03Element = document.getElementById('mess03');
  if (userName.includes(letters[0]) == true) {
    mess03 = 'Numele introdus contine litera a';
  } else {
    mess03 = 'Numele introdus nu contine litera a';
  }
  mess03Element.innerText = mess03;
} else {
  var mess01Element = document.getElementById('mess01');
  mess01 = 'Nu ai introdus un nume corect';
  mess01Element.innerText = mess01;
}
