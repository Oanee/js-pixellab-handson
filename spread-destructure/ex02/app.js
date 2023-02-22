let array1 = [60, 70, 80];
let array2 = [...array1];
console.log(array2);

let array4 = [40, 50];
let array3 = [10, 20, 30, ...array4, 60, 70, 80];
console.log(array3);

let array5 = [101, 102, 103, 104];
let array6 = [106, 107, 108];
let array7 = [...array5, ...array6];
console.log(array7);

let array8 = [5, 4, 3, 2, 1];
let array9 = [...array8];
array9.reverse().forEach((elem) => console.log(elem));
