export function isValid(isbn: string): boolean {
  isbn = isbn.replaceAll('-', '');

  if (isbn.length !== 10) return false;

  const acc = Array.from(isbn).reduce<number>((acc, char, index) => {
    const n = (index === 9 && char === 'X') ? 10 : Number(char);
    return acc + (n * (10 - index));
  }, 0);

  return acc % 11 === 0;
}
