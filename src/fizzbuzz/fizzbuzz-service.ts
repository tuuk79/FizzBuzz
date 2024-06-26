import { divisible } from '../divisibility/divisibility-service';
import { getBuzzText, getFizzBuzzText, getFizzText, getInvalidItemText, getDividedByText } from '../output-text/output-text.service';
import { validate } from '../validation/validation-service';

const fizzBuzz = (inputs: string[]): string[] => {
    return inputs.map(input => {
        return getText(String(input));
    });
};

const getText = (input: string | number): string => {
    if (!validate(input)) {
        return getInvalidItemText();
    }

    const inputNumber = Number(input);

    if (divisible(inputNumber, 3) && divisible(inputNumber, 5)) {
        return getFizzBuzzText();
    }

    if (divisible(inputNumber, 3)) {
        return getFizzText();
    }

    if (divisible(inputNumber, 5)) {
        return getBuzzText();
    }

    return `${getDividedByText(inputNumber, 3)}\n${getDividedByText(inputNumber, 5)}`;
};

export { fizzBuzz };