// Task 8

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