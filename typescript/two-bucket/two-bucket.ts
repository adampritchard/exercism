type BucketName = 'one' | 'two';

type Bucket = {
  name: BucketName,
  size: number,
  fill: number,
};

export class TwoBucket {
  protected a: Bucket;
  protected b: Bucket;
  protected goal: number;

  constructor(
    size1: number,
    size2: number,
    goal: number,
    start: BucketName,
  ) {
    const b1 = { name: 'one' as const, size: size1, fill: 0 };
    const b2 = { name: 'two' as const, size: size2, fill: 0 };

    this.a = start === 'one' ? b1 : b2;
    this.b = start === 'one' ? b2 : b1;

    this.goal = goal;
  }

  moves(): number {
    if (this.goal > this.a.size && this.goal > this.b.size) {
      throw new Error('Goal unreachable');
    }

    let moveCount = 0;

    // Check if we can just fill bucket b and be done.
    if (this.b.size === this.goal) {
      this.a.fill = this.a.size;
      this.b.fill = this.b.size;
      return 2;
    }

    while (true) {
      // Check if we're just back to where we started.
      if (moveCount > 0 && this.a.fill === 0 && this.b.fill === 0) {
        throw new Error('Goal unreachable');
      }

      if (this.b.fill === this.b.size) {
        // empty b.
        this.b.fill = 0;
      } else {
        // fill a.
        this.a.fill = this.a.size;
      }
      moveCount += 1;
      if (this.hasMetGoal()) break;

      // pour a into b.
      const moved = Math.min(this.a.fill, this.b.size - this.b.fill);
      this.b.fill += moved;
      this.a.fill -= moved;
      moveCount += 1;
      if (this.hasMetGoal()) break;
    }

    return moveCount;
  }

  protected hasMetGoal(): boolean {
    return this.a.fill === this.goal || this.b.fill === this.goal;
  }

  get goalBucket(): BucketName {
    return this.a.fill === this.goal
      ? this.a.name
      : this.b.name;
  }

  get otherBucket(): number {
    return this.a.fill === this.goal
      ? this.b.fill
      : this.a.fill;
  }
}
