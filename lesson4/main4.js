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
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].




