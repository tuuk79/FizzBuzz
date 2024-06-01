const validate = (input: string | number) => {
    return !!Number(input) && !Number.isNaN(input);
};

export { validate };