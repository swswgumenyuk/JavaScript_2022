// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt("Число від 0 до 59");
// if (time >=0 && time <=14) {
//     console.log('I чверть')
// } else if (time >=15 && time <=29) {
//     console.log('II чверть')
// } else if (time >=30 && time <=44) {
//     console.log('III чверть')
// } else if (time >=45 && time <=59) {
//     console.log('IV чверть')
// } else {
//     console.log('невірне число')
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = +prompt('Число від 1 до 31');
// if ( day >=1 && day <=10) {
//     console.log("I декада")
// } else if (day >=11 && day <=20){
//     console.log("II декада")
// } else if (day >=21 && day <=31){
//     console.log("III декада")
// } else {
//     console.log("Некоректно введено число")
// }


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
// let test = prompt('Ввести true або false');
// if (test === 'true') {
//     console.log('Вірно')
// } else if (test ==='false'){
//     console.log('Неправильно')
// }


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let a = +prompt('ввести число  1, 0, -3');
// if (a !== 0) {
//     console.log('Вірно')
// } else if (a === 0){
//     console.log('Неправильно')
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
// let a = prompt('Ввести день тижня');
// switch (a){
//     case 'понеділок':
//         console.log('робота');
//         break;
//     case 'вівторок':
//         console.log('поїздка');
//         break;
//     case 'середа':
//         console.log('прибирання');
//         break;
//     case 'четвер':
//         console.log('санітарний день');
//         break;
//     case 'п*ятниця':
//         console.log('підсумок');
//         break;
//     case 'понеділок':
//         console.log('вихідний');
//         break;
//     case 'неділя':
//         console.log('екскурсія');
//         break;
//     default:
//         console.log('некоректно введено')
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//
// let year = +prompt('ввести рік');
// if (year % 4 ===0){
//     console.log('високосний рік')
// } else if (year % 4) {
//     console.log('не високосний рік')
// } else {
//     console.log("Некоректно введено число")
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let name = prompt('Яка «офіційна» назва JavaScript?');
// if (name === 'ECMAScript') {
//     alert('Правильно!');
//     document.write('Правильно!');
//     console.log('Правильно!')
// } else if (name !== 'ECMAScript') {
//     alert('Не знаєте? ECMAScript!');
//     document.write('Не знаєте? ECMAScript!');
//     console.log('Не знаєте? ECMAScript!')
// }


// class work 2
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let a = +prompt('введіть одне число');
// let b = +prompt('введіть друге число');
// if (a > b) {
//     console.log('a-max')
// } else if (a < b) {
//     console.log('b-max')
// } else if (a === b) {
//     console.log( 'a дорівнює b')
// }


//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
// let number = +prompt('Ввести число від 1 до 90');
// if (number >=1 && number <=20) {
//     console.log('квартира у першому під*їзді')
// } else if (number >= 21 && number <=48) {
//     console.log('квартира у другому під*їзді')
// } else if (number >= 49 && number <=90) {
//     console.log('квартира у третьому під*їзді')
// } else {
//     console.log('такого номера у будинку немає')
// }


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
// let number = +prompt('Ввести число')
// if (number === 10) {
//     alert(' ВІРНО');
//     console.log('ВІРНО')
// } else if (number !== 10) {
//     alert('НЕВІРНО');
//     console.log('НЕВІРНО')
// }


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
// let T = +prompt("Введіть температуру повітря в С");
// if (T>= 10 && T<=22) {
//     alert('ми йдемо вчитися');
//     console.log('ми йдемо ВЧИТИСЯ');
//     document.write('ми йдемо ВЧИТИСЯ')
// } else  {
//     alert('сидимо вдома і вчимося ОНЛАЙН');
//     console.log('сидимо вдома і вчимося ОНЛАЙН');
//     document.write('сидимо вдома і вчимося ОНЛАЙН')
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let loto = +prompt('Введіть чмсло від 1 до 5');
// switch (loto){
//     case 1:
//         console.log('Вітаємо ви виграли телефон');
//         alert('Вітаємо ви виграли телефон');
//         break;
//     case 2:
//         console.log('Вітаємо ви виграли комп*ютер');
//         alert('Вітаємо ви виграли комп*ютер');
//         break;
//     case 3:
//         console.log('Вітаємо ви виграли годинник');
//         alert('Вітаємо ви виграли годинник');
//         break;
//     case 4:
//         console.log('Вітаємо ви виграли планшет');
//         alert('Вітаємо ви виграли планшет');
//         break;
//     case 5:
//         console.log('Вітаємо ви виграли автомобіль');
//         alert('Вітаємо ви виграли автомобіль');
//         break;
//     default:
//         console.log('число не вірне')
// }













