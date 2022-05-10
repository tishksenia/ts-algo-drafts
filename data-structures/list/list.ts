interface ListItem<T> {
  value: T;
  next: ListItem<T> | undefined;
}

class List<T> {
  head: ListItem<T>;

  constructor(value?: T) {
    this.head = value ? { value, next: undefined } : undefined;
  }

  getElementsToPrint(): ListItem<T>[] {
    let iterator = this.head;
    let elements = [];
    if (this.head) {
      elements.push(this.head.value);
    }
    while (iterator?.next) {
      iterator = iterator.next;
      elements.push(iterator.value);
    }
    return elements;
  }

  print(): void {
    console.log(this.getElementsToPrint());
  }

  toString() {
    return this.getElementsToPrint();
  }

  add(value: T): void {
    let newElement = {
      value,
      next: undefined,
    };
    if (!this.head) {
      this.head = newElement;
    } else {
      let tail = this.getTail();
      tail.next = newElement;
    }
  }

  remove(
    value: T | number | string,
    compareFunction?: (a: unknown, b: unknown) => Boolean
  ): void {
    let equals = compareFunction || ((a, b) => a === b);

    let iterator = this.head;
    let previousElement = undefined;

    while (iterator?.next && !equals(value, iterator?.value)) {
      previousElement = iterator;
      iterator = iterator.next;
    }
    if (previousElement && equals(value, iterator?.value)) {
      previousElement.next = iterator.next;
    } else if (!previousElement) {
      this.head = iterator.next;
    }
  }

  destroy(): void {
    this.head = undefined;
  }

  getTail(): ListItem<T> {
    let iterator = this.head;
    while (iterator?.next) {
      iterator = iterator.next;
    }
    return iterator;
  }

  getHead(): ListItem<T> {
    return this.head;
  }

  exists(value: T): boolean {
    let element = this.getElement(value);
    return Boolean(element);
  }

  getElement(
    value: T | number | string,
    compareFunction?: (a: unknown, b: unknown) => Boolean
  ): ListItem<T> | undefined {
    let equals = compareFunction || ((a, b) => a === b);

    let iterator = this.head;

    while (iterator?.next && !equals(value, iterator.value)) {
      iterator = iterator.next;
    }
    return equals(value, iterator?.value) ? iterator : undefined;
  }
}

export default List;
