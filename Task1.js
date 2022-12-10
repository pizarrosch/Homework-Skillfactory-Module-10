// Task 1

let result = +prompt('Please enter your number', '');

if (typeof result === 'number' && !isNaN(result)) {
  if (result % 2 === 0) {
    console.log('Ваше число чётное');
  } else {
    console.log('Ваше число нечётное');
  }
} else {
    console.log('Упс, кажется, вы ошиблись');
}