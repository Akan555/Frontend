console.log("----------------------------------------Задание 2 -----------------------------------------------------");
// Объвить массив из 10 любых элементов, заполнить. Вырезать первый элемент и добавить его в конец массива.



// Объявляем массив из 10 элементов
const array = new Array(10);

// Заполняем массив случайными числами
for (let i = 0; i < array.length; i++)//(Здесь мы объявляем переменную i и присваиваем ей начальное значение 0;  
// Это условие, при котором цикл будет выполняться. Цикл будет продолжаться, пока значение i меньше длины массива array.;
// Это инкремент (увеличение) переменной i на 1 после каждой итерации цикла)

{ 
    array[i] = Math.floor(Math.random() * 100) + 1;
}

// Вырезаем первый элемент
 const firstElement = array.shift();    
 // .shift() - это метод массива, который удаляет первый элемент из массива и возвращает его значение.
// Таким образом, строка кода берет первый элемент из массива array и сохраняет его в переменной firstElement. Таким образом, 
//   строка кода берет первый элемент из массива array и сохраняет его в переменной firstElement.

// Добавляем его в конец массива
array.push(firstElement);

// Выводим результаты в консоль
console.log(`Массив после операции: [${array.join(', ')}]`);