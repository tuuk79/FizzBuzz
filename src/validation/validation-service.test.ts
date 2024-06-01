import { validate } from './validation-service';

describe('validation service', () => {
    it('should create the service', () => {
        expect(validate).not.toBeUndefined();
    });

    it('should return false if input is an empty string', () => {
        const input = '';
        const actual = validate(input);
        const expected = false;
        expect(actual).toBe(expected);
    });

    it('should return false if input is "abc"', () => {
        const input = 'abc';
        const actual = validate(input);
        const expected = false;
        expect(actual).toBe(expected);
    });

    it('should return true if input is "1"', () => {
        const input = '1';
        const actual = validate(input);
        const expected = true;
        expect(actual).toEqual(expected);
    });

    it('should return true if input is 1', () => {
        const input = 1;
        const actual = validate(input);
        const expected = true;
        expect(actual).toEqual(expected);
    });
});