// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const min = (a, b, c) =>{
//     if (a < b && a < c) {
//         console.log(a);
//         document.write(a)
//     }else if (b < a && b < c) {
//         console.log(b);
//         document.write(b);
//     }else if (c < b && c < a) {
//         console.log(c);
//         document.write(c);
//     }
// }
//  min(18, 7, 2);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const max = (a, b, c) =>{
//     if (a > b && a > c) {
//         console.log(a);
//         document.write(a)
//     }else if (b > a && b > c) {
//         console.log(b);
//         document.write(b);
//     }else if (c > b && c > a) {
//         console.log(c);
//         document.write(c);
//     }
// }
// max(18, 7, 2);

// - створити функцію яка повертає найбільше число з масиву
// const myFunck = (array) => {
//     let max = array[0];
//     for (const elment of array) {
//         if (max < elment) max = elment
//     }
//     return max;
// }
// const myFunck1 = myFunck([3, 5, 2, 9, 6, 2, 7]);
// console.log(myFunck1);


// - створити функцію яка повертає найменьше число з масиву
// let minArray = [3, 5, 2, 9, 6, 2, 7];
// const myFunck = (array) => {
//     let min = array[0];
//     for (const elment of array) {
//         if (min > elment) min = elment
//     }
//     return min;
// }
// console.log(myFunck(minArray));
// document.write(`<h2>Вивести найменше число: ${myFunck(minArray)}</h2>`);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
// let sumArray = [1,2,10];
// const sumElement = (array) => {
// let sum = 0;
// for (const element of array) {
//     sum = element+sum;
// }
// return sum;
// }
// document.write(sumElement(sumArray));

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let averageArray = [3, 4, 5];
// const average = (array) => {
//     let sum = 0;
//     for (const element of array) {
//         sum = element + sum;
//     }
//     return sum/array.length
// }
// document.write(average (averageArray));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
//   const minMax = (...arguments) => {
//     let min = arguments [0];
//     let max = arguments [0];
//     for (const element of arguments) {
//         if (element>max) max = element;
//
//         if (element<min) min = element;
//     }
//     console.log('max', max);
//     return min;
//   }
// document.write('Мінімальне число з введених: ' + minMax(100, 20, 3, 100, 2021));

// - створити функцію яка заповнює масив рандомними числами
let funRandom = (value, num) => {
    let array = [];
    for (let i = 0; i < value; i++){
        array.push(Math.floor(Math.random()*num));
    }
return array
};
document.write(funRandom(12, 100));



// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].








// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника
// - створити функцію яка обчислює та повертає площу кола
// - створити функцію яка обчислює та повертає площу циліндру
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,' +
// ' та виводить їх в документ. Для кожного об'єкту окремий блок.
