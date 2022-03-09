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
// let funRandom = (value, num) => {
//     let array = [];
//     for (let i = 0; i < value; i++){
//         array.push(Math.floor(Math.random()*num));
//     }
// return array
// };
// document.write(funRandom(20, 100));



// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
// const randomNumber = (length,limit) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.round(Math.random() * limit));
//     }
//     return emptyArray;
// }
// document.write(randomNumber(20,100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [2,4,6,8,10];
// const reverse = (arr) =>{
//     let newArr = [];
//     for (let i=arr.length-1,ri=0; i >=0; i--, ri++)  {
//         newArr [ri] = arr [i];
//     }
//     return newArr;
// }
// console.log(reverse([2,4,6,8,10]));



// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника
// const square =(a,b) => {
//     return a*b;
// }
// console.log(square(5,4))

// - створити функцію яка обчислює та повертає площу кола
// const squareCircle = (PI,r) => {
//     let a = 2;
//     let r2 = Math.pow(r, a);
//     let squareCircle = 3.14*r2;
//     return squareCircle;
// };
// console.log(squareCircle(3.14, 5));
// document.write('площа круга: ' +squareCircle(3.14, 5))

// const areaCircle = (r) => {
//     let radius = r ** 2;
//     return 3.14 * radius;
// }
// console.log(areaCircle(10));
// document.write('Площа круга: ' + areaCircle(10));


// - створити функцію яка обчислює та повертає площу бічної поверхні циліндра
// const  squareCylinder = (r,h) => {
//     return 2*3.14*r*h;
// }
// console.log(squareCylinder(5,10));
// document.write("площа бічної поверхні циліндра: " + squareCylinder(5,10));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [2, 5, 'hi', 'okey', 'vfh'];
// const newArray = (array) => {
//     for (let i = 0; i<array.length; i++) {
//         console.log(array[i]);
//     }
// }
// newArray(array);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// const txtP = (text) => {
//     document.write(`<p>${text}</p>`);
//     document.write(`<p>${text}</p>`);
//     document.write(`<hr>`)
// }
// txtP(`lorem`);


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//  const createUl = (arg) => {
//     for (let i = 0; i<3; i++) {
//         document.write(`<ul>`);
//         document.write(`<li>${arg}</li>`)
//         document.write(`</ul>`);
//     }
// }
// createUl('okten');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const listGreator = (text,number) =>{
//     for (let i = 0; i<3; i++) {
//         document.write(`<ul>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`</ul>`)
//     }
// }
// listGreator(`okten`,3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrey = [2, 5, 'hi', 'okey', 'vfh', true];
// const newArrey = (arrey) => {
//     document.write(`<ol>`)
//     for (let i = 0; i<arrey.length; i++){
//         document.write(`<li>${arrey[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
// newArrey(arrey)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,' +
// ' та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
];
const userOfArr = (user) => {
    for (const userElement of users){
        document.write(`<div>${userElement.id}  ${userElement.name} ${userElement.age}</div>`)
    }
}
userOfArr(users);

