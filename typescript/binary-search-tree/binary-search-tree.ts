export class BinarySearchTree {
  public data: number;
  public left?: BinarySearchTree;
  public right?: BinarySearchTree;

  constructor(data: number) {
    this.data = data;
    this.left = undefined;
    this.right = undefined;
  }

  public insert(item: number): BinarySearchTree|undefined {
    if (item <= this.data) {
      if (this.left) {
        this.left.insert(item);
      } else {
        this.left = new BinarySearchTree(item);
      }
      return this.left;
    } else {
      if (this.right) {
        this.right.insert(item);
      } else {
        this.right = new BinarySearchTree(item);
      }      
      return this.right;
    }
  }

  public each(callback: (data: number) => unknown): void {
    if (this.left) {
      this.left.each(callback);
    }

    callback(this.data);

    if (this.right) {
      this.right.each(callback);
    }
  }
}
