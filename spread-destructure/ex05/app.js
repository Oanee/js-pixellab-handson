let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

const [skill1, , skill3] = person.skills;
const message1 = `Cunosc ${skill1} si ${skill3}`;
const p1 = document.createElement('p');
p1.innerText = message1;

document.body.append(p1);

const [, friend2] = person.friends;
const { name: friend2Name, surname: friend2Surname, age: friend2Age } = friend2;
console.log(
  `Ma numesc ${friend2Name} ${friend2Surname} si am ${friend2Age} ani.`,
);

const { petOwner: hasPet } = person;
console.log(`Persoana ${hasPet === true ? 'are' : 'nu are'} animale.`);

const [larry, , carol] = person.friends;
console.log(`Prietenul meu este ${larry.name} ${larry.surname}.`);
console.log(`${carol.name} ${carol.surname} este prietena mea.`);
