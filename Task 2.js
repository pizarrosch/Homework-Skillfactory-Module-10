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