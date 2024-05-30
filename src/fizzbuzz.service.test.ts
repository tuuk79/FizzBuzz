import { fizzBuzz } from './fizzbuzz.service';

describe('fizzbuzz service', () => {
    it('should create the service', () => {
        expect(fizzBuzz).not.toBeUndefined();
    });

    it('should return "Divided 1 by 3" when input is 1', () => {
        const input = 1;
        const actual = fizzBuzz(input);
        const expected = 'Divided 1 by 3';
        expect(actual).toBe(expected);
    });
});