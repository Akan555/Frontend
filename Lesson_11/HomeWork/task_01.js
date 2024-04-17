console.log("---------------------------------------------------------Задание 1------------------------------------------------------------")
// Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. 
// Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива. Пример работы функции:
// ['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }

const inputArray = ['a', 36.6, 'John Doe'];
const outputObject = arrayToObject(inputArray);


function arrayToObject(array) {   //Это функция, которая принимает массив в качестве аргумента.
    const result = {};            // Она создает пустой объект result, который будет содержать свойства (ключи) и значения, соответствующие элементам массива.
    for (const item of array) {   // Затем она перебирает каждый элемент массива с помощью цикла for...of.
        result[item] = item;      // Для каждого элемента массива она добавляет свойство в объект result, где ключ и значение равны этому элементу.
    }
    return result;
}
console.log(outputObject);

// Цикл for...of:
// Внутри цикла for...of мы проходим по каждому элементу массива arr.
// Для каждого элемента мы добавляем свойство в объект result.

// item - это переменная, которая представляет каждый элемент массива. 
// В данном случае, в функции arrayToObject, она используется для перебора элементов массива и создания свойств в объекте. 
// Каждый элемент массива становится ключом и значением в этом объекте.
