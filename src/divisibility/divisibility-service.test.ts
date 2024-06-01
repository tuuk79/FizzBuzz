import { divisible } from './divisibility-service';

describe('divisibility service', () => {
    it('should create the service', () => {
        expect(divisible).not.toBeUndefined();
    });

    it('should return true if input is divisible by 3', () => {
        const input = 3;
        const divisibleBy = 3;
        const actual = divisible(input, divisibleBy);
        const expected = true;
        expect(actual).toEqual(expected);
    });

    it('should return false if 1 is not divisible by 3', () => {
        const input = 1;
        const divisibleBy = 3;
        const actual = divisible(input, divisibleBy);
        const expected = false;
        expect(actual).toEqual(expected);
    });

    it('should return true if 10 is divisible by 5', () => {
        const input = 10;
        const divisibleBy = 5;
        const actual = divisible(input, divisibleBy);
        const expected = true;
        expect(actual).toEqual(expected);
    });

    it('should return false if 7 is not divisible by 5', () => {
        const input = 7;
        const divisibleBy = 5;
        const actual = divisible(input, divisibleBy);
        const expected = false;
        expect(actual).toEqual(expected);
    });
});