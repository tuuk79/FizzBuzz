import { fizzBuzz } from './fizzbuzz-service';

describe('fizzbuzz service', () => {
    it('should create the service', () => {
        expect(fizzBuzz).not.toBeUndefined();
    });

    it('should return ["Divided 1 by 3","Divided 1 by 5"] when input is 1', () => {
        const input = '1';
        const actual = fizzBuzz(input);
        const expected = ['Divided 1 by 3', 'Divided 1 by 5'];
        expect(actual).toEqual(expected);
    });

    it('should return ["Fizz"] when input is 3', () => {
        const input = '3';
        const actual = fizzBuzz(input);
        const expected = ['Fizz'];
        expect(actual).toEqual(expected);
    });

    it('should return ["Buzz"] when input is 5', () => {
        const input = '5';
        const actual = fizzBuzz(input);
        const expected = ['Buzz'];
        expect(actual).toEqual(expected);
    });

    it('should return ["Invalid Item"] when input is an empty string', () => {
        const input = '';
        const actual = fizzBuzz(input);
        const expected = ['Invalid Item'];
        expect(actual).toEqual(expected);
    });

    it('should return ["FizzBuzz"] when input is 15', () => {
        const input = '15';
        const actual = fizzBuzz(input);
        const expected = ['FizzBuzz'];
        expect(actual).toEqual(expected);
    });

    it('should return ["Invalid Item"] when input is A', () => {
        const input = 'A';
        const actual = fizzBuzz(input);
        const expected = ['Invalid Item'];
        expect(actual).toEqual(expected);
    });

    it('should return ["Divided 23 by 3","Divided 23 by 5"] when input is 23', () => {
        const input = '23';
        const actual = fizzBuzz(input);
        const expected = ["Divided 23 by 3", "Divided 23 by 5"];
        expect(actual).toEqual(expected);
    });
});