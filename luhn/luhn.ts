export function valid(digitString: string): boolean {
  // Strings may only contain digits and whitespace.
  if (digitString.match(/[^\d\s]/)) return false;

  const digits: number[] = digitString.replace(/\s/g, '').split('').map(Number);

  // Strings must be longer than 1 digit.
  if (digits.length <= 1) return false;

  // Starting from the right, double every 2nd digit.
  // if the doubled digit is greater than 9, subtract 9.
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    let n = digits[i] * 2;
    digits[i] = (n > 9) ? n - 9 : n;
  }

  // Sum the digits and check if the sum is divisible by 10.
  const sum = digits.reduce((acc, val) => acc + val);
  return sum % 10 === 0;
}
