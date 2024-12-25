function factorial(n) {
    if ( n === 1) return n;
    return n * factorial(n - 1);
}

console.log(factorial(25));
console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(3));