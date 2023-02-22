const allergens = {
  'eggs':           1,
  'peanuts':        2,
  'shellfish':      4,
  'strawberries':   8,
  'tomatoes':      16,
  'chocolate':     32,
  'pollen':        64,
  'cats':         128,
};

type Allergen = keyof typeof allergens;

export class Allergies {
  public allergenIndex: number;

  constructor(allergenIndex: number) {
    this.allergenIndex = allergenIndex;
  }

  public list(): Allergen[] {
    const all = Object.keys(allergens) as Allergen[];
    return all.filter(allergen => this.allergicTo(allergen));
  }

  public allergicTo(allergen: Allergen): boolean {
    return !!(allergens[allergen] & this.allergenIndex);
  }
}
