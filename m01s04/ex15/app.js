var person = {
  name: 'Alin',
  surname: 'Oancea',
  age: 36,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
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
var i = 0;

for (; i < person.friends.length; i++) {
  var friend1 = person.friends[i].name;
  var friendAge1 = person.friends[i].age;

  for (var j = 0; j < person.friends.length; j++) {
    var friend2 = person.friends[j].name;
    var friendAge2 = person.friends[j].age;
    var diff = 0;

    if (j !== i) {
      diff = Math.abs(friendAge1 - friendAge2);
      console.log(
        `Intre ${friend1} si ${friend2} este o diferenta de ${diff} ani.`,
      );
    }
  }
}
