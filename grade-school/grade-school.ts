type Roster = Record<number, string[]>;

export class GradeSchool {
  protected _roster: Roster = {};

  public roster(): Roster {
    return structuredClone(this._roster);
  }

  public add(name: string, grade: number): void {
    // If student is already in a grade, remove them.
    for (const grade of Object.values(this._roster)) {
      const index = grade.indexOf(name);
      if (index !== -1) {
        grade.splice(index, 1);
      }
    }

    // Ensure an array exists for grade.
    if (!this._roster[grade]) {
      this._roster[grade] = [];
    }

    this._roster[grade].push(name);
    this._roster[grade].sort();
  }

  public grade(n: number): string[] {
    const grade = this._roster[n] || [];
    return structuredClone(grade);
  }
}
