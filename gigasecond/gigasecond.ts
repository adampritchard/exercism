export class Gigasecond {
  protected milliseconds: number;

  constructor(date: Date) {
    this.milliseconds = date.getTime();
  }

  public date(): Date {
    return new Date(this.milliseconds + 1_000_000_000 * 1000);
  }
}
