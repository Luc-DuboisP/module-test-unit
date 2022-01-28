import {fizzBuzz} from "../src/fizzbuzz";

test('input should be a number', () => {
  expect(fizzBuzz('a')).toBe(false);
});

test('should return fizz on multiples of 3', () => {
  expect(fizzBuzz(3)).toBe('fizz');
  expect(fizzBuzz(6)).toBe('fizz');
});

test('should return buzz on multiples of 5', () => {
  expect(fizzBuzz(5)).toBe('buzz');
  expect(fizzBuzz(10)).toBe('buzz');
});

test('should return fizz if the number contains 3', () => {
  expect(fizzBuzz(13)).toBe('fizz');
  expect(fizzBuzz(33)).toBe('fizz');
});

test('should return buzz if the number contains 5', () => {
  expect(fizzBuzz(25)).toBe('buzz');
  expect(fizzBuzz(605)).toBe('buzz');
});
