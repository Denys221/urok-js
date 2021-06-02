"use strict"
// Первая задача

/*let a = 1, b = 1, c, d;
c = ++a;
alert(c); //префиксная форма: сначала к а плюсуем 1 (a = 2) и передаем в с (c = 2)

d = b++;
alert(d); //постфиксная форма: сначала b (b = 1) передаем в d (d = 1) и потом плюсуем 1 к b (b = 2)

c = 2 + ++a; //префиксная форма: сначала к а плюсуем 1 (a = 3) потом плюсуем 2 выйдет 5 и записываем в c (c = 5)
alert(c);

d = 2 + b++; //постфиксная форма: сначала 2 плюсуем к b (b = 2), выйдет 4 и записуем в d (d = 4). потом плюсуем 1 к b (b = 3)
alert(d);

alert(a);
alert(b);*/

// Вторая задача

/*let a = 2;
let x = 1 +(a *= 2); // умножаю сначала содержимое в душках a(2) на 2 = 4 и присваиваю а (a = 4); потом плюсую 1 + 4 = 5;
alert(x);*/ // a = 4; x = 5;


//Третья задача

/*let a = 5;
let b = 3;
if (a >= 0 && b >= 0) {
  alert(a - b);
} else if (a < 0 && b < 0) {
  alert(a * b);
} else if (a < 0 && b > 0 || a > 0 && b < 0) {
  alert(a + b);
}*/


//Четвертая задача


// функция плюсует два значения
function plus(a, b) {
  return a + b;
}
// console.log(plus(13, 13));

// функция вичисления
function minus(a, b) {
  return a - b;
}
// console.log(minus(23, 13));

// функция деления
function delenie(a, b) {
  return a / b;
}
// console.log(delenie(20, 5));

// функция умножения
function umnozenie(a, b) {
  return a * b;
}
// console.log(umnozenie(5, 5));


//  Пятая задача

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "dodavanie" :
      console.log(plus(arg1, arg2))
      break;
    case "otnimanie":
      console.log(minus(arg1, arg2))
      break;
    default:

  }
}
mathOperation(4, 5, "dodavanie")
mathOperation(6, 3, "otnimanie")
