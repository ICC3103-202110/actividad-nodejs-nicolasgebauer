const F_fib= require('./fibonacciNG.js');


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese un numero : ', number =>{
    console.log(`F(${number})=${F_fib.Fibonacci(number)}`);
    readline.close();
})
