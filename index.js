 'use strict'
 //  Объекты не равны между собой ибо сравниваються по значению
 // по разному выдает ячейки в памяте, тобешь 1 выдает от 1 до 10, а 2 от 11 до 20(к примеру)




 // Массивы

// const arr = [];  запись массива

/* arr.puch('','') добовляет в масив что укажешь в скобках в конец

 const deleted1 = arr.pop() удаляет с конца строки елемент
 */


/* const deletedUser = arr.pop();
удаление последнего значения из масива
*/

// arr.unshift('',''); добовление новых значений в начало строки

/* arr.splice() удоляет пользыватеелй массива от и до, пример (-2) или (1) или ()
arr.splice(start[deleteCount[,item1[, item2]]])
deleteCount - целое число сколько елементов надо удалить, и мы должны добавить еще 1 новый елемент ОБЯЗАТЕЛЬНО

arr.splise(-2, 1, 'Pavel', 'Spiridon')

const deleted = arr.splice(-2, 1)  (-2, 1) - -2, -1, 0, 1, - удалили 4 пользователя 
*/


// const arr = [];

// // функции высшего порядка
// function goga(func1) {
//     func1();

// return function() {
//     return true;
// }

// function fuck() {
//     console.log('aboba');
    
// }
// }


//04.02.2022

// arr.unshift() вставляет в начало масива переменые
//const deletedElement = arr.shift() удаляет с начала массива переменные


// const deletedElement = arr.splice(6(удалит 6 элемент), 7(удалит 7 элемент))

// arr.splice(3, 0, 'Natasha') удалил елемнты и добавил новые
//  const newArr = arr.slice(0, 7) копирует елемнты с 1 масива в другой

// arr.revers() переварачивает масив
//arr.includ('Anton') ищет в масиве то что ввел в скобках

//1
// const number = [1,2,3,4,5];
// number.forEach(callback);

// function callback(currentName, index) {
//     console.log(`${currentName ** 3} число в кубе, которое имееет индэкс ${index} из массива number`);
// }

//2
// const chetnumber = [1,2,3,4,5];
// chetnumber.forEach(callback);

// function callback(currentName, index) {
//     if(index % 2 === 0){
//     console.log(`${currentName ** 3} число в кубе, которое имееет индэкс ${index} из массива chetnumber`);
//     }else{
//         console.log(`${currentName ** 2} число в квадрате, которое имееет индэкс ${index} из массива chetnumber`);
//     }
// }


