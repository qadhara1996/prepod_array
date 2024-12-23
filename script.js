// array
// массив - коллекция значений
// [2, '3', 4, {}]
// у элемента есть индекс, начинается с 0

// CS - computer science

// length - длина массива

// const arr = [2, 3, 4];

// const arr = []; // литерал массива

// const arr2 = new Array(); // фукнция конструктор

// const arr3 = Array.of(1, 2, 3);

// const arr4 = Array.from("Hello");

// console.log(arr);
// console.log(arr2);
// console.log(arr3);

// обращение по индексу к элементу
// console.log(arr4[2]);

// тип данных => объект
// console.log(typeof arr4);

// ссылочный тип данных
// const arr = [1, 2, 3];

// const arr2 = [1, 2, 3];

// arr2[5] = 55;
// arr2[2] = 1111;

// console.log(arr === arr2);

// delete arr2[2];
// delete arr2[arr2.length - 1];

// console.log(arr2);

// // Array.isArray() => проверка на массив
// console.log(Array.isArray(arr))
// console.log(Array.isArray('t34gerg'))

// методы массивов

// const arr = [2, 4, 6, 8];
// const arr2 = [8, 10, 12];

// push(value) - добавляет элемент в конец массива
// возвращает новую длину массива
// мутирует исходный массив
// можно добавить сразу несколько элементов
// const result = arr.push('8', 10);

// console.log(arr);
// console.log(result);

// pop() - удаляет элемент с конца массива
// возвращает удаленный элемент
// мутирует исходный массив

// const result = arr.pop();

// console.log(arr);
// console.log(result);

// shift() - удаляет первый элемент массива
// возвращает удаленный элемент
// мутирует исходный массив

// const result = arr.shift();

// console.log(arr);
// console.log(result);

// unshift(value) - добавляет один или более элемент в начало массива
// возвращает новую длину массива
// мутирует исходный массив
// можно добавить сразу несколько элементов

// const result = arr.unshift(8, 22);

// console.log(arr);
// console.log(result);

// concat() - создает и возвращает новый массив

// const result = arr.concat(arr2);

// console.log(arr);
// console.log(arr2);
// console.log(result);

// slice(начало, конец) - копирует указанную часть массива и возвращает новый массив
// с начало (включительно) без конец
// без аргументов - копирует полностью

// const result = arr.slice();
// const result2 = arr.slice(0,2);

// console.log(arr);
// console.log(result);
// console.log(result2);
// console.log(arr === result);

// join(separator) - преобразует элементы в строку, объединяет и возвращает строку
// separator - разделитель - добавляется между элементами
// const result = arr.join();

// console.log(arr);
// console.log(result);

// indexOf(искомый_элемент, индекс) - возвращает индекс элемента
// если элемент найден - возвращает индекс
// если элемент не найдет - возвращает -1
// второй аргумент индекс - не обязательный, откуда начинать поиск
// const result = arr.indexOf(6);
// const result2 = arr.indexOf(5);

// console.log(arr);
// console.log(result);
// console.log(result2);

// lastIndexOf(искомый_элемент, индекс) - возвращает индекс последнего вхождения элемента
// если элемент найден - возвращает индекс
// если элемент не найдет - возвращает -1
// второй аргумент индекс - не обязательный, откуда начинать поиск

// const result = arr.lastIndexOf(6);
// const result2 = arr.lastIndexOf(5);

// console.log(arr);
// console.log(result);
// console.log(result2);

// includes(значение) - проверяет содержит ли массив указанный элемент
// возвращает true/false
// const result = arr.includes(4);
// const result2 = arr.includes(5);

// console.log(arr);
// console.log(result);
// console.log(result2);

// reverse() - переворачивает массив (меня порядок следования элементов на обратный)
// возвращает ссылку на переупорядоченный массив
// мутирует исходный

// const result = arr.reverse();

// console.log(arr);
// console.log(result);
// console.log(arr === result);

// at() - возвращает элемент по индексу
// можно отрицательные индекс, тогда в обратном направлении
// const result = arr.at(2); // arr[2]
// const result2 = arr.at(5); // undefined
// const result3 = arr.at(-1); //

// console.log(arr);
// console.log(result);
// console.log(result2);
// console.log(result3);

// fill(значение, начало, конец) - заполняет массив указанным статическим значением
// мутирует исходный массив
// const result = arr.fill(1111, 1, 3);

// console.log(arr);
// console.log(result);
// console.log(arr === result);

// splice(start, count, element, ...elementN) - можно добавлять, удалять
// мутирует исходный массив

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// // const result = numbers.splice(2); //  [3, 4, 5, 6, 7]

// // const result = numbers.splice(2, 3); //  [3, 4, 5]

// // const result = numbers.splice(2, 0, 'test'); //  []

// const result = numbers.splice(2, 2, 8, 9 ,10); //  [3, 4]

// // const result = numbers.splice(numbers.length - 1, 0, 8, 9 ,10);
// // numbers.push(8,9,10);

// console.log(numbers);
// console.log(result);

// !!! МЕТОД СТРОК
// split() => преобразует стркоу в массив, по разделителю
// возвращает массив
const str = "javascript hello";

// const result = str.split('').reverse().join('');

// console.log(result);

// циклы и массивы

// const newArr = []
// for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i] ** 2
// }

// console.log(newArr);

// for of => перебирать итерируемые сущности

// const students = ["John", "David", "Kate", "Smith"];


// for (let student of students) {
//     console.log(student)
// }

// копирование массива
// 1) const studentsCopy = students.slice();

// const studentsCopy = [];

// // 2)
// for (let i = 0; i < students.length; i++) {
//     // studentsCopy.push(students[i]);
//     studentsCopy[i] = students[i];
// }

// 3)
// for (let student of students) {
//     studentsCopy.push(student);
// }

// 4)
// const studentsCopy = [...students];

// console.log(students === studentsCopy);
// console.log(students);
// console.log(studentsCopy);

// const res = students.join("-").split("-");

// console.log(res);




// flat(depth) => уменьшает уровень вложенности, глубины
// depth по умолчанию 1
// если вложенность неизвестна - Infinity
// const testArr = [[1, 2, 3], [4, 5, [6, 7, [8, 9, 10]]]];

// const res = testArr.flat(Infinity);

// console.log(testArr);
// console.log(res);

