/*
Написати функцію, яка приймає 1 параметр. Та складає значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27
*/
let sum = 0;

function getSum (sum) {
    
    return function (number) {
        sum += number;
        return sum;
    }
};

const result = getSum(sum);

console.log(result (4));
console.log(result (6));
console.log(result(10));
console.log(result(7));