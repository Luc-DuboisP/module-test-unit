export function fizzBuzz(n) {
    if (isNaN(n)) {
        return false
    }
    if (containsDigit(n) === 3 || n % 3 === 0) {
        return 'fizz'
    }
    if (containsDigit(n) === 5 || n % 5 === 0) {
        return 'buzz'
    }
}
