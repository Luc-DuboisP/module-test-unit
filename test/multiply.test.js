import {multiply} from "../src/multiply";

test('multiply 2 and 2 equals 4', () => {
    expect(multiply(2, 2)).toEqual(4)
})

test('parameters are number', () => {
    expect(multiply('a', 2)).toBe(false)
    expect(multiply(2, 'b')).toBe(false)
    expect(multiply('a', 'b')).toBe(false)
})
