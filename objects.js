/* Задачки для практики 

1. Создайте пустой объект user.
2. Добавьте свойство name со значением John.
3. Добавьте свойство surname со значением Smith.
4. Измените значение свойства name на Pete.
5. Удалите свойство name из объекта. */

// let user = {}
//     user.name = "John";
//     user.surname = "Smith";
//     user.name = "Pete";
// delete user.name;

/* Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. */

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

/* У нас есть объект, в котором хранятся зарплаты нашей команды: */
//     let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
//     let sum = 0;
//     for (let key in salaries) {
//     sum += salaries[key];
// }
//     console.log(sum);

/* 1) Создать объект myBrowser со свойствами name (значение “Chrome”) и version (значение «9.2») - двумя способами */

// let myBrowser = {
//     name: "Chrome",
//     version: "9.2"
// };

// let myBrowser = new Object();
// myBrowser.name = "Chrome";
// myBrowser.version = "9.2";

/*2) Создать объект cinema со свойствами soldTickets (хранит в себе число, которое отображает кол-во проданных билетов) и ticketCost (цена билета) и задайте значения. 
Напишите функцию которая высчитывает сколько денег заработал кинотеатр за один сеанс.*/
// let cinema = {
//     soldTickets: "100",
//     ticketCost: "500",
// };

// function calculateRevenue(cinema) {
//     return cinema.soldTickets * cinema.ticketCost;
// }
// let revenue = calculateRevenue(cinema);
// console.log("Кинотеатр заработал за один сеанс: $" + revenue);

/* 3) Напишите функцию, которая принимает в качестве аргумента объект и возвращает вложенный массив вида [[key, value], [key, value]]. 
То есть, если я вызову функцию objectToArr({ a: 1, b: 2 }), то результатом выполнения должен быть массив - [['a', 1], ['b', 2]]. 
Для решения этой задачи вам нужны будут следующие методы: Object.keys() или Object.entries() */

// function objectToArr (obj) {
//     return Object.entries(obj);
// }
// let result = objectToArr({a: 1, b: 2});
// console.log(result)

/* 4) Дан объект. Нужно извлечь число 123 одной строкой */
// const myCrazyObject = {
//     someArray: [7, 9, { purpose: "путаница", number: 123}, 3.3],
// }
// const number123 = myCrazyObject.someArray[2].number;
// console.log(number123);

/* 5) Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п. Тут вам пригодится метод Array.isArray() */
// function isPlainObject(obj) {
//     return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
// }
// const obj1 = { key: 'value' };
// const obj2 = [1, 2, 3];
// const obj3 = null;

// console.log(isPlainObject(obj1));
// console.log(isPlainObject(obj2));
// console.log(isPlainObject(obj3)); 

/* 6) Дан массив из имен например ['john', 'jane', 'kate', 'peter']. Вывести новый массив в котором каждая первая буква элемента будет с большой буквы. */

// const names = ['john', 'jane', 'kate', 'peter'];
// const capitalizedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
// console.log(capitalizedNames);

/* 7) Сумма диапазона. Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, который содержит все числа из него, включая начальное и конечное. 
Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. 
Запустите указанную выше инструкцию и убедитесь, что она возвращает сумму значений массива. */

// function range(start, end) {
//     let array = [];
//     for (let i = start; i <= end; i++) {
//     array.push(i);
//     }
//     return array;
// }
// function sum(array) {
//     return array.reduce((acc, curr) => acc + curr, 0);
// }
// const numbers = range(1, 5);
// const total = sum(numbers);
//     console.log(total);

/* 8) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'. 
Можете все оформить в функцию, которая на входе будет принимать число и на выходе отдавать объект */ 

// function calculateSquareRoot(number) {
//     const sqrt = Math.sqrt(number);
//     const floor = Math.floor(sqrt);
//     const ceil = Math.ceil(sqrt);

//     return {floor, ceil};
// }
// const number = 587;
// const result = calculateSquareRoot(number);
// console.log(result)

/* 9) Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. 
С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'. Для работы понадобится for...in */
let obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
};

for (let city in obj) {
    console.log(`${city} - это ${obj[city]}.`);  
}




