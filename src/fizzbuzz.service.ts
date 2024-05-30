const fizzBuzz = (input: string): string[] => {
    if (!input || Number.isNaN(Number(input))) return ['Invalid Item'];
    if (Number(input) % 3 === 0 && Number(input) % 5 === 0) return ['FizzBuzz'];
    if (Number(input) % 3 === 0) return ['Fizz'];
    if (Number(input) % 5 === 0) return ['Buzz'];
    return [`Divided ${input} by 3`, `Divided ${input} by 5`];
};

export { fizzBuzz };