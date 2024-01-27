export function isValid(isbn: string): boolean {
  isbn = isbn.replaceAll('-', '');

  if (isbn.length !== 10) return false;

  let acc = 0;
  for (let i = 0; i < 10; i += 1) {
    const c = isbn.charAt(i);

    const n = (i === 9 && c === 'X') ? 10 : Number(c);

    if (Number.isNaN(n)) {
      return false;
    }

    acc += n * (10 - i);
  }

  return acc % 11 === 0;
}


// (d₁ * 10 + d₂ * 9 + d₃ * 8 + d₄ * 7 + d₅ * 6 + d₆ * 5 + d₇ * 4 + d₈ * 3 + d₉ * 2 + d₁₀ * 1) mod 11 == 0