const colors = require('colors');

function isPrime(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

let num1 = +process.argv[2];
let num2 = +process.argv[3];

function printPrimeNumbers() {
    if (num1 >= num2) {
        console.log(colors.red('Ошибка!Первое число диапазона должно быть меньше второго!'));
        return;
    }
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        console.log(colors.red('Ошибка!Аргументы должны быть числами!'));
        return
    }
    let cnt = 0;
    let hasPrimeNumbers = false;
    for (let i = num1; i <= num2; i++) {
        if (isPrime(i)) {
            cnt++;
            if (cnt > 3) cnt = 1;
            if (cnt === 1) console.log(colors.green(`${i}`))
            if (cnt === 2) console.log(colors.yellow(`${i}`))
            if (cnt === 3) console.log(colors.red(`${i}`))
            hasPrimeNumbers = true;
        }
    }
    if (!hasPrimeNumbers) console.log(colors.red('Простых чисел в диапазоне нет :('))
}

printPrimeNumbers();
