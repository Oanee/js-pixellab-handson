var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

var personAge = new Date().getFullYear() - person.birthYear;

console.warn(`
Afiseaza in consola folosind metoda forEach() numele fiecarui animal. `);
Object.keys(person.pets).forEach(function (key) {
  console.log(person.pets[key].name);
});

console.warn(`
Folosind o bucla for afiseaza suma anilor animalelor.
`);
var sumAge = 0;
for (var i = 0; i < person.pets.length; i++) {
  sumAge += person.pets[i].age;
}
console.log(sumAge);

console.warn(`
Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.
`);
Object.keys(person.pets).forEach(function (key) {
  petName = person.pets[key].name;
  petAge = person.pets[key].age;
  petSpecies = person.pets[key].species;
  console.log(`${petName} este ${petSpecies} si are ${petAge} ani.`);
});

console.warn(`
Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
`);
var diff = 0;
for (var i = 0; i < person.pets.length; i++) {
  diff = personAge - person.pets[i].age;
  petName = person.pets[i].name;
  console.log(
    `Intre ${person.firstName} si ${petName} este o diferenta de ${diff} ani.`,
  );
}

console.warn(`
Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”.
`);
for (var i = person.pets.length - 1; i > -1; i--) {
  console.log(`Animalul meu se numeste ${person.pets[i].name}`);
}

console.warn(`
Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.”
`);
var biggestAge = 0;
var diff = 0;
for (var i = 0; i < person.pets.length; i++) {
  if (person.pets[i].age > biggestAge) {
    biggestAge = person.pets[i].age;
    diff = personAge - biggestAge;
    var petName = person.pets[i].name;
  }
}
console.log(
  `${petName} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${diff} ani.`,
);

console.warn(`
Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.
`);
var message = 'Am ';
var punctuation = ', ';
Object.keys(person.pets).forEach(function (species, index, pets) {
  petSpecies = person.pets[species].species;

  if (index === pets.length - 2) {
    punctuation = ' si ';
  } else if (index === pets.length - 1) {
    punctuation = '.';
  }

  message += `${petSpecies}${punctuation}`;
});
console.log(`${message}`);
