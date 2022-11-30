var person = {
  firstName: 'Alin',
  lastName: 'Oancea',
  email: 'oancea@gmail.com',
  birthYear: 2000,
  zipCode: '500100',
  pets: [
    {
      name: 'Nemo',
      species: 'peste',
      age: 3,
    },
    {
      name: 'Azor',
      species: 'caine',
      age: 1,
    },
    {
      name: 'Paco',
      species: 'papagal',
      age: 2,
    },
  ],
  difference: 19,
  petName: 'Nemo',
};

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.log((2022 - person.pets[2].age).toString());

console.log((2022 - person.birthYear - person.pets[0].age).toString());

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    person.petName +
    ' este o diferenta de ' +
    person.difference +
    ' ani.',
);

var prop01Element = document.getElementById('prop01');
prop01 =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ', ' +
  person.pets[2].name +
  ' locuiesc toti in aceeasi casa';
prop01Element.innerText = prop01;

var prop02Element = document.getElementById('prop02');
prop02 = person.pets[0].age - person.pets[2].age;
prop02Element.innerText = prop02;

var prop03Element = document.getElementById('prop03');
prop03 =
  'Ma numesc ' +
  person.firstName +
  ' ' +
  person.lastName +
  ', m-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode;
prop03Element.innerText = prop03;

var prop04Element = document.getElementById('prop04');
prop04 =
  'Animalele mele s-au nascut in ' +
  (2022 - person.pets[0].age) +
  ', ' +
  (2022 - person.pets[1].age) +
  ', respectiv ' +
  (2022 - person.pets[2].age);
prop04Element.innerText = prop04;
