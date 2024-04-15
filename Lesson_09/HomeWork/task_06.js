console.log("----------------------------------------Задание 6 -----------------------------------------------------");
//Разбить строку на слова и вывести в консоль по одному слову в строке: "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота."

const inputString = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.";

// Разбиваем строку на слова
const words = inputString.split(" ");
// 1. inputString.split(" ") - это метод строки split(), который разделяет строку на подстроки (слова) на основе заданного разделителя. В данном случае:
// inputString - это строка, которую мы хотим разделить.
// " " - это разделитель, который указывает, что мы хотим разделить строку по пробелам.
// 2. Метод split(" ") разбивает строку inputString на массив слов, используя пробел в качестве разделителя.
// Теперь массив words содержит каждое слово из исходной строки.

// Выводим каждое слово в консоль
for (const word of words) {
    console.log(word);
}
