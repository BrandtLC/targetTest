function isInFibonacci (number) {
  const fibonacci = [0, 1];

  if (number === 1 || number === 0) {
  return `${number} pertence a se sequência de Fibonacci`;
  }

  while (fibonacci[fibonacci.length - 1] < number) {
    const nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(nextNumber);

    if (number === nextNumber) {
    return `${number} pertence a se sequência de Fibonacci`;
    }
  }

return `${number} não pertence a se sequência de Fibonacci`;
  
}

console.log(isInFibonacci(21));
console.log(isInFibonacci(34));
console.log(isInFibonacci(35));