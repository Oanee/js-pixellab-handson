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

const [, skill] = person.skills;
console.log(`Vreau sa invat ${skill}.`);

const [, , friend] = person.friends;
const { name: friend2Name, surname: friend2Surname, age: friend2Age } = friend;
console.log(
  `Ma numesc ${friend2Name} ${friend2Surname} si am ${friend2Age} de ani`,
);

const { name: myName, surname: mySurname } = person;
console.log(`Ma numesc ${mySurname} ${myName}`);

const [, friend3] = person.friends;
const { name: friend3Name, surname: friend3Surname, age: friend3Age } = friend3;
console.log(
  `Ma numesc ${friend3Name} ${friend3Surname} si am ${friend3Age} de ani`,
);
