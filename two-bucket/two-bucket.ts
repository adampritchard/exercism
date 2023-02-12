type BucketId = 'one' | 'two';

export class TwoBucket {
  protected b1: number;
  protected b2: number;

  constructor(
    protected size1: number,
    protected size2: number,
    protected goal: number,
    protected start: BucketId,
  ) {
    this.b1 = 0;
    this.b2 = 0;
  }

  moves(): number {
    if (this.goal > this.size1 && this.goal > this.size2) {
      throw new Error('Goal unreachable');
    }

    let moveCount = 0;

    if (this.start === 'one') {

      // Check if we can just fill the other bucket and be done.
      if (this.size2 === this.goal) {
        this.b1 = this.size1;
        this.b2 = this.size2;
        return 2;
      }


      while (this.b1 !== this.goal && this.b2 !== this.goal) {
        if (this.b2 === this.size2) {
          // empty b2.
          this.b2 = 0;
        } else {
          // fill b1.
          this.b1 = this.size1;
        }
        moveCount += 1;

        if (this.b1 === this.goal || this.b2 === this.goal) {
          break;
        }

        // pour b1 into b2.
        const moved = Math.min(this.b1, this.size2 - this.b2);
        this.b2 += moved;
        this.b1 -= moved;
        moveCount += 1;

        // temp
        if (moveCount >= 100) {
          throw new Error('Goal unreachable');
        }
      }
    } else {
      // Check if we can just fill the other bucket and be done.
      if (this.size1 === this.goal) {
        this.b1 = this.size1;
        this.b2 = this.size2;
        return 2;
      }

      while (this.b1 !== this.goal && this.b2 !== this.goal) {
        if (this.b1 === this.size1) {
          // empty b1.
          this.b1 = 0;
        } else {
          // fill b2.
          this.b2 = this.size2;
        }
        moveCount += 1;

        if (this.b1 === this.goal || this.b2 === this.goal) {
          break;
        }

        // pour b2 into b1.
        const moved = Math.min(this.b2, this.size1 - this.b1);
        this.b1 += moved;
        this.b2 -= moved;
        moveCount += 1;
      }

      // temp
      if (moveCount >= 100) {
        throw new Error('Goal unreachable');
      }
    }

    return moveCount;
  }

  get goalBucket(): BucketId {
    if (this.b1 === this.goal) return 'one';
    if (this.b2 === this.goal) return 'two';
    throw new Error('No goal bucket!');
  }

  get otherBucket(): number {
    switch (this.goalBucket) {
      case 'one': return this.b2;
      case 'two': return this.b1;
    }
  }
}
