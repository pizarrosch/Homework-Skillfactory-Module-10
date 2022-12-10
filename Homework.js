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
// let x;
//
// switch (x) {
//   case Number(x):
//     console.log("х - число");
//     break;
//   case String(x):
//     console.log("х - строка");
//     break;
//   case Boolean(x):
//     console.log("х - логический тип");
//     break;
//   default:
//     console.log("Тип х не определён")
// }


//Task 3

// const string = "Merry Christmas!"
//
// console.log(string.split('').reverse().join(''));

//Task 4

// let min = 0;
// let max = 100;
// const result = Math.floor(Math.random() * (max - min + 1));
// console.log(result);

// Task 5

// const arr = [25, 'hello', true, undefined, 569, {age: 33}];
// console.log(arr.length);
//
// for(let i=0; i<arr.length; i++) {
//   console.log(arr[i]);
// }

// Task 6

// const unevenNumArr = [23, 67, 'Thanks', true, 925];
// const evenNumArr = [23, 23, 23, 23, 23];
//
// const result1 = unevenNumArr.every((item, id, arr) => item === arr[0]);
// const result2 = evenNumArr.every((item, id, arr) => item === arr[0]);
// console.log(result1);
// console.log(result2);

//Task 7

// const arr = [22, 38, 659, 0, null, 95, false, 46, undefined, 193, 321, 908];
//
// let num = 0;
// let evenNum = 0;
// let oddNum = 0;
// let zero = 0;
// let notANumber = 0;
//
// for(let item of arr){
//   let number = typeof(item) === 'number';
//
//   if(number) {
//     num++;
//   }
//   if(item % 2 === 0 && item !== 0 && number) {
//     evenNum++;
//   }
//   if(item % 2 !== 0 && number) {
//     oddNum++;
//   }
//   if(item === 0) {
//     zero++;
//   }
//   if(typeof(item) !== 'number') {
//     notANumber++;
//   }
// }

// console.log(`В данном массиве ${num} чисел, ${evenNum} чётных чисел, ${oddNum} нечётных чисел, ${zero === 1 ? `${zero} нуль` : `${zero} нулей`}, ${notANumber} элементов не являются числами`);


//Task 8

const myMap = new Map();

myMap.set('fruit', 'pineapple');
myMap.set(1989, 'year of birth');
myMap.set(true, 'affirmative');
myMap.set(false, 0);

const keys = myMap.keys();
console.log(keys);

for(let [key, value] of myMap) {
  console.log(`Ключ — ${key}, значение — ${value}`)
}