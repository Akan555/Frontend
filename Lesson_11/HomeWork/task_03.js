console.log("---------------------------------------------------------Задание 3--------------------------------------------------------")

//  Функция должна принимать объект и возвращать строку, где будут перечислены все значения свойств объекта через запятую.

//   Пример работы функции:
//   { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'


function objectValuesToString(obj) {      //  Принимается объект obj.
    const values = Object.values(obj);   //  Используется метод Object.values(obj), который возвращает массив значений всех свойств объекта.
    return values.join(', ');            // Затем значения объединяются в одну строку с помощью метода join(', ').
}                                       // Полученная строка с объединенными значениями возвращается из функции.

const inputObject = {      //   Создается объект inputObject с тремя свойствами:
    a: 'a',
    '36.6': 36.6,
    'John Doe': 'John Doe'
};

const outputString = objectValuesToString(inputObject);  // Вызывается функция objectValuesToString(inputObject), которая возвращает строку, объединяя значения свойств объекта через запятую.
console.log(outputString);