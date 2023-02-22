export class ComplexNumber {
  constructor(
    public readonly real: number,
    public readonly imag: number,
  ) {}

  public add(other: ComplexNumber): ComplexNumber {
    // (a + i * b) + (c + i * d) = (a + c) + (b + d) * i
    const [a, b, c, d] = [this.real, this.imag, other.real, other.imag];
    return new ComplexNumber(a + c, b + d);
  }

  public sub(other: ComplexNumber): ComplexNumber {
    // (a + i * b) - (c + i * d) = (a - c) + (b - d) * i
    const [a, b, c, d] = [this.real, this.imag, other.real, other.imag];
    return new ComplexNumber(a - c, b - d);
  }

  public div(other: ComplexNumber): ComplexNumber {
    // (a + i * b) / (c + i * d) = (a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2) * i
    const [a, b, c, d] = [this.real, this.imag, other.real, other.imag];
    return new ComplexNumber((a * c + b * d) / (c ** 2 + d ** 2), (b * c - a * d) / (c ** 2 + d ** 2));
  }

  public mul(other: ComplexNumber): ComplexNumber {
    // (a + i * b) * (c + i * d) = (a * c - b * d) + (b * c + a * d) * i
    const [a, b, c, d] = [this.real, this.imag, other.real, other.imag];
    return new ComplexNumber(a * c - b * d, b * c + a * d);
  }

  public get abs(): number {
    // |z| = sqrt(a^2 + b^2)
    const [a, b] = [this.real, this.imag];
    return Math.sqrt(a ** 2 + b ** 2);
  }

  public get conj(): ComplexNumber {
    const [a, b] = [this.real, this.imag];
    return new ComplexNumber(a, b ? -b : 0);
  }

  public get exp(): ComplexNumber {
    // e^(a + i * b) = e^a * cos(b) + i * sin(b)
    const [a, b] = [this.real, this.imag];
    return new ComplexNumber(Math.E ** a * Math.cos(b), Math.sin(b));
  }
}
