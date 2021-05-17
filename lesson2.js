/**
 * Сделайте промис, внутри которого будет задержка setTimeout в 3
 * секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
 * */

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

/**
 * Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды,
 * после которой промис должен зареджектится (то есть выполнится с ошибкой).
 */

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

/**
 * Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так,
 * чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
 * Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
 */

function createRandomNumber() {
  return (Math.random() * 10).toFixed(0);
}

let promise3 = new Promise((resolve, reject) => {
  let randomNumber;
  randomNumber = createRandomNumber();
  setTimeout(randomNumber >= 5 ? () => reject() : () => resolve());
}, randomNumber * 1000);

/**
 * Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
 * Пусть каждый промис своим результатом возвращает эту задержку.
 * С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
 */

function createRandomNumber() {
  return Math.ceil(Math.random() * 5);
}
let randomNumber;
let promise1 = new Promise((resolve, reject) => {
  randomNumber = createRandomNumber();
  setTimeout(() => resolve(randomNumber), randomNumber * 1000);
  console.log(randomNumber);
});

let promise2 = new Promise((resolve, reject) => {
  randomNumber = createRandomNumber();
  setTimeout(() => resolve(randomNumber), randomNumber * 1000);
  console.log(randomNumber);
});

let promise3 = new Promise((resolve, reject) => {
  randomNumber = createRandomNumber();
  setTimeout(() => resolve(randomNumber), randomNumber * 1000);
  console.log(randomNumber);
});
let count = 0;
Promise.all([promise1, promise2, promise3]).then((value) =>
  value.reduce((acc, item) => {
    count++;
    acc += item;
    if (count === 3) {
      alert(acc);
    }
    return acc;
  }, 0)
);

/**
 * Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users,
 * Отфильтровать массив пользователей, чтобы остались только пользователи с четными  id.
 */

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data.filter((item) => item.id % 2 === 0)));

/**
 * Написать цикл, который будет итерироватся от 1 до 100.
 * На каждой итерации цикла нужно проверить:
 * если число кратное 3 - то вывести в консоль строку Fizz,
 * если число кратное 5 - то вывести в консоль строку Buzz,
 * если число кратное и 3 и 5 - то вывести FizzBuzz
 */

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz", i);
  } else if (i % 3 === 0) {
    console.log("Fizz", i);
  } else if (i % 5 === 0) {
    console.log("Buzz", i);
  }
}

/**
 * Нарисовать прямоугольный треугольник с длинной катетов i (любое число больше 1).
 * Для рисования использовать символ *(звездочка) или %(знак процента) и консоль.
 * Пример вывода:
 *
 **
 ***
 ****
 *****
 ******
 */

let a = "";
for (let i = 0; i < 20; i++) {
  console.log((a += "*"));
}

/**
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */

let arr = [1, 2, 3, 8, 4, 5, 1, 2, 6, 7, 7, 3, 4, 5, 8];

for (let j = 0; j < arr.length; j++) {
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[j] === arr[i]) {
      arr.splice(i, 1);
    }
  }
}
console.log(arr);

/**
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */
let arr2 = [1, 2, 3, 8, 4, 5, 1, 2, 6, 7, 7, 3, 4, 5, 8],
  arr3 = [],
  count = 0;
for (let i = 0; i < arr2.length; i++) {
  arr3.push(arr2.filter((item) => item === i));
}
arr3.forEach((i) => {
  if (i.length > 1) {
    count++;
  }
});
console.log(count);
