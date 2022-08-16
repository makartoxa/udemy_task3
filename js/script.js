'use strict';
// Task 1
// В каждой книге есть n страниц с номерами страниц от 1 до n.
//     Написать функцию amountOfPages, аргумент которой summary
// составляется путем сложения количества цифр всех номеров страниц.
//     Эта функция возвращает число - количество страниц n в книге.
//     Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.

function amountOfPages(summary){
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
        result += i;
        if (result.length >= summary) {
            n = i;
            break;
        }
    }

    return n;
}
console.log(amountOfPages(231));

// Task 2
// Панграмма — это предложение, в котором каждая буква алфавита встречается
// хотя бы по одному разу без повторений. Например,
// предложение «The quick brown fox jumps over the lazy dog» является панграммой,
// поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).

// Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение.
// Если строка является панграммой - вернется true, если нет - false.

// Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// Это должно экономить ресурсы компьютера
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
        return string.indexOf(x) !== -1;
    });
}

// С другим методом и строка каждый раз преобразовывается в коллбэке
function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every((x) => string.toLowerCase().includes(x));
}

// При помощи цикла
function isPangram(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (let i = 0; i < str.length; i++) {
            let s = str.charCodeAt(i)
            if (s < 65 || s > 90 && s < 97 || s > 122) continue
            if (s === 65 + c || s === 97 + c) continue letters
        }

        return false
    }

    return true
}

// При помощи Set
function isPangram(string) {
    return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}

// С использованием регулярных выражений
function isPangram(string) {
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

//Task 3

// Создайте функцию deepCount, которая будет считать количество всех элементов в массиве,
// включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет.
// Чтобы понять задачу детальнее, давайте рассмотрим примеры:
// deepCount([1, 5, 3]) => 3

// Вариант с циклом
function deepCount(a){
    let count = a.length;
    for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
    return count;
}

console.log(deepCount([1, 5, '3', [4, [5, 6]]]));





