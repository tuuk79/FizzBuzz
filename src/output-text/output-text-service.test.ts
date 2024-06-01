import { getInvalidItemText, getFizzBuzzText, getFizzText, getBuzzText, getDividedByText } from './output-text.service';

describe('output text service', () => {
    it('should return "Invalid Item"', () => {
        const actual = getInvalidItemText();
        const expected = 'Invalid Item';
        expect(actual).toEqual(expected);
    });

    it('should return "FizzBuzz"', () => {
        const actual = getFizzBuzzText();
        const expected = 'FizzBuzz';
        expect(actual).toEqual(expected);
    });

    it('should return "Fizz"', () => {
        const actual = getFizzText();
        const expected = 'Fizz';
        expect(actual).toEqual(expected);
    });

    it('should return "Buzz"', () => {
        const actual = getBuzzText();
        const expected = 'Buzz';
        expect(actual).toEqual(expected);
    });

    it('should return "Divided 1 by 3"', () => {
        const input = 1;
        const divisibleBy = 3;
        const actual = getDividedByText(input, divisibleBy);
        const expected = 'Divided 1 by 3';
        expect(actual).toEqual(expected);
    });

    it('should return "Divided 1 by 5"', () => {
        const input = 1;
        const divisibleBy = 5;
        const actual = getDividedByText(input, divisibleBy);
        const expected = 'Divided 1 by 5';
        expect(actual).toEqual(expected);
    });
});