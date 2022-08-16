'use strict';
// SET. Особый вид коллекции по типу массива, где каждое значение может повторятся только один раз!

const arr = ['Alex', 'Anna', 'Oleg', 'Alex'];

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));

// const set = new Set();
//
// set.add('Ivan')
//     .add('Oleg');
//
// console.log(set);
//
// set.delete(value);
// set.has(value);
// set.clear();
// set.size;
//
// for (let value of set) console.log(value);
// set.forEach(value, valueAgaing, set) => {
//     console.log(value, valueAgaing);
// }
//
// console.log(set.value());
// console.log(set.keys());
// console.log(set.entries());

