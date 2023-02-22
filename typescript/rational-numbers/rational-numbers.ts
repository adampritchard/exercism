export class Rational {
  public numerator: number;
  public denominator: number;

  constructor(numerator: number, denominator: number) {
    const gcd = greatestCommonDenominator(numerator, denominator);
    this.numerator = numerator / gcd;
    this.denominator = denominator / gcd;

    if (this.denominator < 0) {
      this.numerator *= -1;
      this.denominator *= -1;
    }
  }

  add(other: Rational): Rational {
    const a1 = this.numerator;
    const b1 = this.denominator;
    const a2 = other.numerator;
    const b2 = other.denominator;
    return new Rational(a1 * b2 + a2 * b1, b1 * b2);
  }

  sub(other: Rational): Rational {
    const a1 = this.numerator;
    const b1 = this.denominator;
    const a2 = other.numerator;
    const b2 = other.denominator;
    return new Rational(a1 * b2 - a2 * b1, b1 * b2);
  }

  mul(other: Rational): Rational {
    const a1 = this.numerator;
    const b1 = this.denominator;
    const a2 = other.numerator;
    const b2 = other.denominator;
    return new Rational(a1 * a2, b1 * b2);
  }

  div(other: Rational): Rational {
    const a1 = this.numerator;
    const b1 = this.denominator;
    const a2 = other.numerator;
    const b2 = other.denominator;
    return new Rational(a1 * b2, a2 * b1);
  }

  abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  exprational(n: number): Rational {
    return new Rational(this.numerator ** n, this.denominator ** n);
  }

  expreal(n: number): number {
    return Math.pow(n, 1.0 / this.denominator) ** this.numerator;
  }

  reduce(): Rational {
    // Rationals are already reduced when constructed.
    // But we create and return a new one for consistency.
    return new Rational(this.numerator, this.denominator);
  }
}

export function greatestCommonDenominator(a: number, b: number): number {
  return b !== 0
    ? greatestCommonDenominator(b, a % b)
    : a;
}
