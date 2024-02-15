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
    for (const val of this.values) {
      if (val === element) {
        return true;
      }
    }

    return false;
  }

  add(element: number): CustomSet {
    if (!this.contains(element)) {
      this.values.push(element);
    }

    return this;
  }

  subset(other: CustomSet): boolean {
    for (const val of this.values) {
      if (!other.contains(val)) {
        return false;
      }
    }

    return true;
  }

  disjoint(other: CustomSet): boolean {
    for (const val of this.values) {
      if (other.contains(val)) {
        return false;
      }
    }

    return true;
  }

  eql(other: CustomSet): boolean {
    if (this.values.length !== other.values.length) {
      return false;
    }

    for (const val of this.values) {
      if (!other.contains(val)) {
        return false;
      }
    }

    return true;
  }

  union(other: CustomSet): CustomSet {
    return new CustomSet([...this.values, ...other.values]);
  }

  intersection(other: CustomSet): CustomSet {
    const set = new CustomSet();

    for (const val of this.values) {
      if (other.contains(val)) {
        set.add(val);
      }
    }

    return set;
  }

  difference(other: CustomSet): CustomSet {
    const set = new CustomSet();
    
    for (const val of this.values) {
      if (!other.contains(val)) {
        set.add(val);
      }
    }

    return set;
  }
}
