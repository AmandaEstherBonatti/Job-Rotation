function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

function isInFibonacciSequence(n) {
    const sequence = fibonacci(n);
    return sequence.includes(n);
}

const input = 13;
const sequence = fibonacci(input);
const isInSequence = isInFibonacciSequence(input);

console.log(`A sequência de Fibonacci até o número ${input} é: ${sequence}`);
console.log(`O número ${input} ${isInSequence ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);