interface ListItem<T> {
  value: T;
  next: ListItem<T> | undefined;
}

class List<T> {
  head: ListItem<T>;

  constructor(value?: T) {
    this.head = value ? { value, next: undefined } : undefined;
  }

  destroy(): void {
    this.head = undefined;
  }

  print(): void {
    let iterator = this.head;
    let elements = [];
    if (this.head) {
      elements.push(this.head.value);
    }
    while (iterator?.next) {
      iterator = iterator.next;
      elements.push(iterator.value);
    }
    console.log(elements);
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

  remove(value: T): void {
    let iterator = this.head;
    let previousElement = undefined;
    while (iterator?.next && iterator?.value !== value) {
      previousElement = iterator;
      iterator = iterator.next;
    }
    if (previousElement && iterator?.value === value) {
      previousElement.next = iterator.next;
    } else if (!previousElement) {
      this.head = iterator.next;
    }
  }

  getTail(): ListItem<T> {
    let iterator = this.head;
    while (iterator?.next) {
      iterator = iterator.next;
    }
    return iterator;
  }

  exists(value: T): boolean {
    let element = this.getElement(value);
    return Boolean(element);
  }

  getElement(value: T): ListItem<T> | undefined {
    let iterator = this.head;
    while (iterator?.next && iterator?.value !== value) {
      iterator = iterator.next;
    }

    return iterator?.value === value ? iterator : undefined;
  }
}

export default List;
