import { textResponses } from './text-responses';

const getInvalidItemText = () => {
    return textResponses.INVALID_ITEM;
};

const getFizzBuzzText = () => {
    return textResponses.FIZZ_BUZZ;
};

const getFizzText = () => {
    return textResponses.FIZZ;
};

const getBuzzText = () => {
    return textResponses.BUZZ;
};

const getDividedByText = (input: number, divisibleBy: number) => {
    return `Divided ${input} by ${divisibleBy}`;
};


export { getInvalidItemText, getFizzBuzzText, getFizzText, getBuzzText, getDividedByText };