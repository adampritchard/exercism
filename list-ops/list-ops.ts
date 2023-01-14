type ListNode = {
  value: unknown,
  next: ListNode|null,
};

export class List {
  public static create(...values: unknown[]): List {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // Do *not* use any of the Array.prototype methods in your solution.
    // You may use the destructuring and spreading (...) syntax from Iterable.

    // Iterate through the values backwards and build a linked list.
    let node: ListNode|null = null;
    for (let index = values.length - 1; index >= 0; index -= 1) {
      node = { value: values[index], next: node };
    }

    return new List(node);
  }

  protected root: ListNode|null;

  protected constructor(root: ListNode|null = null) {
    this.root = root;
  }

  public length(): number {
    return this.foldl((len, _) => len += 1, 0);
  }

  public append(other: List): List {
    const tailNode = this.tailNode();
    if (tailNode) {
      tailNode.next = other.root;
    } else {
      this.root = other.root;
    }

    return this;
  }

  public forEach(fn: (item: unknown) => void): void {
    let node = this.root;
    while (node) {
      fn(node.value);
      node = node.next;
    }
  }
  
  public concat(lists: List): List {
    lists.forEach(list => this.append(list as List));
    return this;
  }

  public map<T>(fn: (el: T) => T): List {
    let node = this.root;
    while (node) {
      node.value = fn(node.value as T);
      node = node.next;
    }

    return this;
  }

  public filter<T>(fn: (el: T) => boolean): List {
    let node = this.root;
    let prev: ListNode|null = null;
    while (node) {
      if (!fn(node.value as T)) {
        // 'unlink' node
        if (prev) prev.next = node.next;
        if (node === this.root) this.root = node.next;
      }

      prev = node;
      node = node.next;
    }

    return this;
  }

  public foldl<T1, T2>(fn: (acc: T1, el: T2) => T1, inital: T1): T1 {
    let result = inital;

    let node = this.root;
    while (node) {
      result = fn(result, node.value as T2);
      node = node.next;
    }

    return result;
  }

  public foldr<T1, T2>(fn: (acc: T1, el: T2) => T1, inital: T1): T1 {
    return this.foldr_recursive(this.root, fn, inital);
  }

  protected foldr_recursive<T1, T2>(node: ListNode|null, fn: (acc: T1, el: T2) => T1, acc: T1): T1 {
    if (node) {
      const newAcc = this.foldr_recursive(node.next, fn, acc);
      return fn(newAcc, node.value as T2);
    } else {
      return acc;
    }
  }

  public reverse(): List {
    let node = this.root;
    this.root = null;
    while (node) {
      const next = node.next;
      node.next = this.root;
      this.root = node;

      node = next;
    }

    return this;
  }

  protected tailNode(): ListNode|null {
    let node = this.root;
    while (node && node.next) {
      node = node.next;
    }

    return node;
  }
}
