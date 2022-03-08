// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a, b){
//     let res = a*b;
//     return res;
// };
// let reult = square(5, 10);
// console.log(reult);

// - створити функцію яка обчислює та повертає площу круга з радіусом r (S=PIr2)
// function squareCircle(PI,r){
//     let a = 2;
//     let r2 = Math.pow(r, a);
//     let squareCircle = 3.14*r2;
//     return squareCircle;
// };
// console.log(squareCircle(3.14, 5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r (S=PIr*h+2PIr2 - це площа повної поверхні)
// function squareСylinder(r, h){
//     let a = 2;
//     let r2 = Math.pow(r, a);
//     let squareСylinder =2*3.14*r*h+2*3.14*r2;
//     return squareСylinder;
// };
// console.log(squareСylinder(3, 6));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arrey = [2, 5, 'hi', 'okey', 'vfh'];
// function newArrey (arrey){
//     for (let i = 0; i<arrey.length; i++) {
//         console.log(arrey[i])
//     }
// }
// newArrey(arrey);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(text) {
//     for (let i=0; i<5; i++) {
//         document.write(`<p>${i}  ${text}</p>`)
//     }
// }
// paragraph(`item`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function listGreator(text){
//     for (let i = 0; i<3; i++) {
//         document.write(`<ul>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`</ul>`)
//     }
// }
// listGreator(`okten`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function listGreator(text,number){
//     for (let i = 0; i<3; i++) {
//         document.write(`<ul>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`</ul>`)
//     }
// }
// listGreator(`okten`,3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrey = [2, 5, 'hi', 'okey', 'vfh', true];
// function newArrey(arrey){
//     document.write(`<ol>`)
//     for (let i = 0; i<arrey.length; i++){
//         document.write(`<li>${arrey[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
// newArrey(arrey)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28},
//     {id: 5, name: 'max', age: 30},
//     {id: 6, name: 'anya', age: 31},
// ];
// function userOfArr(user) {
//     for (const userElement of users){
//         document.write(`<div>${userElement.id}  ${userElement.name} ${userElement.age}</div>`)
//     }
// }
// userOfArr(users);



// class work
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function returnMinFromThree(a, b, c) {
//     let min;
//     if (a <= b && a <= c) min = a;
//     if (b <= a && b <= c) min = b;
//     if (c <= b && c <= a) min = c;
//     console.log('min', min);
//     return min;
// }
// const min = returnMinFromThree(4, 7, 2);
// console.log(min);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function returnMaxFromThree(a, b, c) {
//     let max;
//     if (a >= b && a >= c) max = a;
//     if (b >= a && b >= c) max = b;
//     if (c >= b && c >= a) max = c;
//     console.log('max', max);
//     return max;
// }
// const max = returnMaxFromThree(4, 7, 2);
// console.log(max);

// - створити функцію яка повертає найбільше число з масиву
// let mainArrey = [3, 5, 2, 9, 6, 2, 7];
// function arreyMax(arrey) {
//     let max = arrey[0];
//     for (const element of arrey) {
//         if (element>max) {
//             max = element;
//         }
//     }
//     return max;
// }
// console.log(arreyMax(mainArrey));

//або
// const myFunck = (array) => {
//     let max = array[0];
//     for (const item of array) {
//         if (max < item) max = item
//     }
//     return max;
// }
// const myFunck1 = myFunck([3, 5, 2, 9, 6, 2, 7]);
// console.log(myFunck1);

// - створити функцію яка повертає найменьше число з масиву
// let mainArrey = [3, 5, 2, 9, 6, 2, 7];
// function arreyMin(arrey) {
//     let min = arrey[0];
//     for (const element of arrey) {
//         if (element<min) {
//             min = element;
//         }
//     }
//     return min;
// }
// console.log(arreyMin(mainArrey));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function calculator(action, a, b, c) {
//     return action(a, b, c)
// }
// console.log(calculator(function (a, b, c) {
//     return a + b + c
// },10, 20, 30))
//або
// console.log(calculator((a, b, c) =>
//     a + b + c,10, 20, 30))
// або
// let sumArray = [1,2,3,4];
// function sumElement (array){
//     let sum = 0;
//     for (const arrayElement of array) {
//         // sum += arrayElement; // // 1 спосіб скорочений
//         sum = arrayElement + sum;
//     }
//     return sum;
// }
// document.write(sumElement(sumArray))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let averageArrey = [3, 4, 5];
// function average(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum / array.length;
// }
// document.write(average (averageArrey));

//або

// function average(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum / array.length;
// }
// const average1 = average([3, 4, 5]);
// console.log('average1', average1);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function returnMinPrintMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments){
//         if (element>max)max = element;
//         if (element<min)min = element;
//     }
//     console.log('max', max);
//     return min;
// }
// const min = returnMinPrintMax(3, 6, 5, 9, 3, 4, 7, 8, 1);
// console.log('min', min);z
// document.write('Мінімальне число з введених: ' + returnMinPrintMax(100, 20, 3, 100, 2021))

// - створити функцію яка заповнює масив рандомними числами
// let funRandom = (value, num) => {
//     let array = [];
//     for (let i = 0; i < value; i++){
//         array.push(Math.floor(Math.random()*num));
//     }
// return array
// };
// document.write(funRandom(12, 100));




// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(arr) {
//     let newArr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = arr[i];
//     }
//
//     return newArr;
// }
// console.log(reverse([10,20,30]));

// let arr = [10,20,30];
// let ri = arr.length-1;
// let arrReverse = [];
// for (let element of arr) {
//     console.log(ri);
//     arrReverse[ri] = element;
//     ri--;
// }
// console.log(arrReverse);

// let arr = [10,20,30,40];
// for (let i=0; ri=arr.length-1;
// i<arr.length;
// i++; ri--) {
//     console.log(ri)
// }



