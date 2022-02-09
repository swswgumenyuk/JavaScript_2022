// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let numbersArr = [10, 20, 30, 40, 50];
// console.log(numbersArr);
//
// let strArr = ['asd', 'abc', 'xxx', 'gjhgjk', 'hgkjh'];
// console.log(strArr);
//
// let mixArr = ['dfg', 45, true, false, 78];
// console.log(mixArr);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr [0] = 10;
// arr [1] =4;
// arr [2] = 'gfdh';
// arr [3] = true;
// console.log(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// document.write('div');
// for (let i=0; i<10; i++) {
//     document.write(`<div>hello!</div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i=0; i<10; i++) {
//     document.write(`<div> ${i} hello!</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let j =0;
// while (j<20) {
//     document.write(`<h1>hello!</h1>`)
//     j++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let j =1;
// while (j<=20) {
//     document.write(`<h1>${j}hello!</h1>`)
//     j++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [1, 5, 25, 55, 456, 8, 2578, 66, 22, 100];
// for (let i = 0; i<numbers.length; i++){
//     console.log(numbers [i])
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strArr = ['hello', 'men', 'red', 'smail', 'cat', 'dog', 'blu', 'on', 'off', 'ok'];
// for (let i = 0; i<strArr.length; i++){
//     console.log(strArr [i])
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mixArr = ['hello', true, 'red', 'smail', 'cat', 'dog', 'blu', 5, 'off', 'ok'];
// for (let i = 0; i<mixArr.length; i++){
//     console.log(mixArr [i])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mixArr = ['hello', true, 'red', 'smail', 'cat', false, 'blu', 5, 'off', 'ok'];
// for (a=0; a<mixArr.length; a++)
// if (typeof mixArr[a] === 'boolean'){
//     console.log(mixArr[a]);
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mixArr = ['hello', true, 'red', 'smail', 'cat', false, 'blu', 5, 'off', 'ok'];
// for (a=0; a<mixArr.length; a++)
//     if (typeof mixArr[a] === 'number'){
//         console.log(mixArr[a]);
//     }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mixArr = ['hello', true, 'red', 'smail', 'cat', false, 'blu', 5, 'off', 'ok'];
// for (a=0; a<mixArr.length; a++)
//     if (typeof mixArr[a] === 'string'){
//         console.log(mixArr[a]);
//     }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arrey = [];
// arrey [0] = 'sad';
// arrey [1] = 'hgkhg';
// arrey [2] = true;
// arrey [3] = 55;
// arrey [4] = 10;
// arrey [5] = 'fhgfgh';
// arrey [6] = 100;
// arrey [7] = false;
// arrey [8] =325;
// arrey [9] = 'ghgj';
// for (let i = 0; i<arrey.length; i++) {
//     console.log(arrey[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(`крок`, i);
//     document.write(`крок: ${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 101; i++) {
//     console.log(`крок`, i);
//     document.write(`крок: ${i} <br>`);
// }
// у цьому завданні потрібно починати від let i =1 чи від 0?

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 200; i = i+2) {
//     console.log(`крок`, i);
//     document.write(`крок: ${i} <br>`);
// };


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 200; i = i+2) {
//     console.log(`крок`, i);
//     document.write(`крок: ${i} <br>`);
// };
// в програмуванні 0 - парне число, то в цьому завданні починаємо з 0 чи 2?


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 200; i = i+2) {
//     console.log(`крок`, i);
//     document.write(`крок: ${i} <br>`);
// };



// class work
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arrey = [2,17,13,6,22,31,45,66,100,-18];
// i = 0;
// while (i<arrey.length){
//     console.log(arrey [i]);
//     i++
// };

// let arrey = [2,17,13,6,22,31,45,66,100,-18];
// for (i=0; i<arrey.length; i++) {
//     console.log(arrey[i]);
// };

// let arrey = [2,17,13,6,22,31,45,66,100,-18];
// i = 0;
// while (i<arrey.length){
//     if (i%2 !==0) {
//         console.log(arrey [i]);
//     }
//     i++
// };

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arrey = [2,17,13,6,22,31,45,66,100,-18];
// for (i=0; i<arrey.length; i++){
//     if (i%2 !== 0) {
//         console.log(arrey [i]);
//     }
// };

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arrey = [2,17,13,6,22,31,45,66,100,-18];
// i = 0;
// while (i<arrey.length){
//     if (i%2 ===0) {
//         console.log(arrey [i]);
//     }
//     i++
// };

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arrey = [2,17,13,6,22,31,45,66,100,-18];
// for (i=0; i<arrey.length; i++){
//     if (i%2 === 0) {
//         console.log(arrey [i]);
//     }
// };

// 7. замінити кожне число кратне 3 на слово "okten"
// let arrey = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0; i<arrey.length; i++){
//     if (arrey[i]%3 === 0) {
//         arrey[i]= "okten";
//         console.log(arrey[i]);
//     }
// };
// console.log(arrey);

// 8. вивести масив в зворотньому порядку.
// let arrey = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arrey.length-1; i>=0; i--) {
//     console.log(arrey[i]);
// };


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
const array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let newArray = array.reverse();
let i = 0;
while (i < array.length) {
    console.log(newArray[i]);
    i++
}