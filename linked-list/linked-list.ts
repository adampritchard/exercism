type Node<T> = {
  element: T,
  prev: Node<T>|null,
  next: Node<T>|null,
};

export class LinkedList<TElement> {
  protected root: Node<TElement>|null = null;

  public push(element: TElement) {
    const head = this.head();
    const node = { element, prev: head, next: null };

    if (head) {
      head.next = node;
    } else {
      this.root = node;
    }
  }

  public pop(): TElement|null {
    const head = this.head();
    if (!head) return null;
      
    // unlink the head node.
    if (head.prev) head.prev.next = null;
    if (this.root === head) this.root = null;

    return head.element;
  }

  public shift(): TElement|null {
    if (!this.root) return null;

    // unlink the root node.
    const node = this.root;
    this.root = this.root.next;
    if (this.root) this.root.prev = null;

    return node.element;
  }

  public unshift(element: TElement) {
    const node = { element, prev: null, next: this.root };
    if (this.root) this.root.prev = node;
    this.root = node;
  }

  public delete(element: TElement) {
    let node = this.root;
    while (node && node.element !== element) {
      node = node.next;
    }

    // unlink the node.
    if (node) {
      if (node.next) node.next.prev = node.prev;
      if (node.prev) node.prev.next = node.next;
      if (this.root === node) this.root = null;
    }
  }

  public count(): number {
    let count = 0;

    let node = this.root;
    while (node) {
      count += 1;
      node = node.next;
    }

    return count;
  }

  protected head(): Node<TElement>|null {
    if (!this.root) return null;

    let node = this.root;
    while (node.next !== null) node = node.next;
    return node;
  }
}
