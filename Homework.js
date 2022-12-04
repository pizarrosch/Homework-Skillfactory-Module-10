// Task 1

// let result = +prompt('Please enter your number', '');
//
// if (typeof result === 'number' && !isNaN(result)) {
//   if (result % 2 === 0) {
//     console.log('Ваше число чётное');
//   } else {
//     console.log('Ваше число нечётное');
//   }
// } else {
//     console.log('Упс, кажется, вы ошиблись');
// }

// Task 2
let x;

switch (x) {
  case Number(x):
    console.log("х - число");
    break;
  case String(x):
    console.log("х - строка");
    break;
  case Boolean(x):
    console.log("х - логический тип");
    break;
  default:
    console.log("Тип х не определён")
}
