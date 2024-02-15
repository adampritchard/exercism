export class CustomSet {
  protected values: number[];

  constructor(initial?: number[]) {
    this.values = [];

    if (initial) {
      for (const val of initial) {
        this.add(val);
      }
    }
  }

  empty(): boolean {
    return this.values.length === 0;
  }

  contains(element: number): boolean {
    return this.values.indexOf(element) !== -1;
  }

  add(element: number): CustomSet {
    if (!this.contains(element)) {
      this.values.push(element);
    }

    return this;
  }

  subset(other: CustomSet): boolean {
    return this.values.every(val => other.contains(val));
  }

  disjoint(other: CustomSet): boolean {
    return !this.values.some(val => other.contains(val));
  }

  eql(other: CustomSet): boolean {
    if (this.values.length !== other.values.length) {
      return false;
    }

    return this.subset(other);
  }

  union(other: CustomSet): CustomSet {
    const vals = [...this.values, ...other.values];
    return new CustomSet(vals);
  }

  intersection(other: CustomSet): CustomSet {
    const vals = this.values.filter(val => other.contains(val));
    return new CustomSet(vals);
  }

  difference(other: CustomSet): CustomSet {
    const vals = this.values.filter(val => !other.contains(val));
    return new CustomSet(vals);
  }
}
