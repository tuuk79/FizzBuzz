import { FizzBuzzService } from './fizzbuzz.service';

describe('fizzbuzz service', () => {
    it('should create the service', () => {
        const svc = FizzBuzzService
        expect(svc).not.toBeUndefined()
    })
})