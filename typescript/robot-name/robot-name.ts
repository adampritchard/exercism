export class Robot {
  protected static usedNames = new Set<string>();
  protected _name: string;

  constructor() {
    this._name = this.generateName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.generateName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }

  protected generateName(): string {
    // Loop until we find a unique name.
    let name: string;
    do {
      name = `${randomLetter()}${randomLetter()}${randomNumber()}${randomNumber()}${randomNumber()}`;
    } while (Robot.usedNames.has(name));

    Robot.usedNames.add(name);

    return name;
  }
}

function randomLetter(): string {
  const index = Math.floor(Math.random() * 26);
  const code = 65 + index;
  return String.fromCharCode(code);
}

function randomNumber(): number {
  return Math.floor(Math.random() * 10);
}
