console.log("----------------------------------------Задание 4 -----------------------------------------------------");
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50. Найти сумму всех элементов массива. Вывести в консоль.

// Объявляем массив из 10 элементов
const myArray = new Array(10);

// Заполняем массив случайными числами от 1 до 50
for (let i = 0; i < myArray.length; i++) {
    myArray[i] = Math.floor(Math.random() * 50) + 1;
}

// Находим сумму всех элементов массива
const sum = myArray.reduce((acc, curr) => acc + curr, 0);

// 1. myArray.reduce((acc, curr) => acc + curr, 0); - это метод массива reduce(), который выполняет некоторую операцию на каждом элементе массива и возвращает единственное значение. 
// В данном случае:
// acc (аккумулятор) - это переменная, которая хранит промежуточный результат.
// curr (текущий элемент) - это текущий элемент массива, который обрабатывается.
// acc + curr - это операция, которая складывает текущий элемент с аккумулятором.
// 0 - это начальное значение аккумулятора.
// 2. В начале выполнения reduce() аккумулятор устанавливается в 0. Затем для каждого элемента массива myArray выполняется операция сложения с аккумулятором. 
// Например, если myArray содержит [10, 20, 30], то выполнение будет следующим:
// Итерация 1: acc = 0, curr = 10, результат: 0 + 10 = 10
// Итерация 2: acc = 10, curr = 20, результат: 10 + 20 = 30
// Итерация 3: acc = 30, curr = 30, результат: 30 + 30 = 60

// 3. В конце выполнения reduce() возвращается окончательное значение аккумулятора, которое в данном случае равно сумме всех элементов массива.




// Выводим результат в консоль
console.log(`Сумма всех элементов массива: ${sum}`);