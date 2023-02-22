const minutesPerDay = 60 * 24;

export class Clock {
  protected minutes: number;

  constructor(hours: number, minutes: number = 0) {
    this.minutes = (hours * 60 + minutes) % minutesPerDay;

    // Wrap negative minutes.
    if (this.minutes < 0) this.minutes += minutesPerDay;
  }

  public toString(): unknown {
    const hrs = Math.floor(this.minutes / 60).toFixed(0).padStart(2, '0');
    const mins = (this.minutes % 60).toFixed(0).padStart(2, '0');
    return `${hrs}:${mins}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.minutes + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.minutes - minutes);
  }

  public equals(other: Clock): boolean {
    return this.minutes === other.minutes;
  }
}
