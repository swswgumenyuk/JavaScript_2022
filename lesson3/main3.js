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
for (let i = 0; i < 10; i++) {
    console.log(`крок`, i);
    document.write(`крок: ${i} <br>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write



// class work
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)