export class Clock {
  public hours: number;
  public minutes: number;

  constructor(hours: number, minutes: number = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.normalize();
  }

  public toString(): unknown {
    const hrs = this.hours.toFixed(0).padStart(2, '0');
    const mins = this.minutes.toFixed(0).padStart(2, '0');
    return `${hrs}:${mins}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hours, this.minutes + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hours, this.minutes - minutes);
  }

  public equals(other: Clock): boolean {
    return this.hours === other.hours
        && this.minutes === other.minutes;
  }

  protected normalize(): void {
    // Carry minutes to hours
    this.hours += Math.floor(this.minutes / 60);

    // Wrap hours and minutes
    this.hours %= 24;
    this.minutes %= 60;

    // Convert negative hours and minutes
    if (this.hours < 0) this.hours = 24 + this.hours;
    if (this.minutes < 0) this.minutes = 60 + this.minutes;
  }
}
