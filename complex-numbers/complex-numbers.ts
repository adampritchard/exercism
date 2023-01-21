export class ComplexNumber {
  constructor(
    public readonly real: number,
    public readonly imag: number,
  ) {}

  public add(other: ComplexNumber): ComplexNumber {
    // (a + i * b) + (c + i * d) = (a + c) + (b + d) * i

    const a = this.real;
    const b = this.imag;
    const c = other.real;
    const d = other.imag;
    return new ComplexNumber(a + c, b + d);
  }

  public sub(other: ComplexNumber): ComplexNumber {
    // (a + i * b) - (c + i * d) = (a - c) + (b - d) * i

    const a = this.real;
    const b = this.imag;
    const c = other.real;
    const d = other.imag;
    return new ComplexNumber(a - c, b - d);
  }

  public div(other: ComplexNumber): ComplexNumber {
    // (a + i * b) / (c + i * d) = (a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2) * i

    const a = this.real;
    const b = this.imag;
    const c = other.real;
    const d = other.imag;
    return new ComplexNumber((a * c + b * d)/(c ** 2 + d ** 2), (b * c - a * d)/(c ** 2 + d ** 2));
  }

  public mul(other: ComplexNumber): ComplexNumber {
    // (a + i * b) * (c + i * d) = (a * c - b * d) + (b * c + a * d) * i

    const a = this.real;
    const b = this.imag;
    const c = other.real;
    const d = other.imag;
    return new ComplexNumber(a * c - b * d, b * c + a * d);
  }

  public get abs(): number {
    // |z| = sqrt(a^2 + b^2)
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  public get conj(): ComplexNumber {
    // TODO: is there a better way to avoid negative zero?
    return new ComplexNumber(this.real, this.imag === 0 ? this.imag : -this.imag);
  }

  public get exp(): ComplexNumber {
    // e^(a + i * b) = e^a * cos(b) + i * sin(b)

    const a = this.real;
    const b = this.imag;
    return new ComplexNumber(Math.E ** a * Math.cos(b), Math.sin(b));
  }
}
