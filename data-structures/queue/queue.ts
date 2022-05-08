class Queue<T> {
  queue: T[];

  constructor() {
    this.queue = [];
  }

  add(element: T): void {
    this.queue.push(element);
  }

  remove(): T | undefined {
    return this.queue.shift();
  }

  peek(): T {
    return this.queue[0];
  }

  size(): number {
    return this.queue.length;
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }
}

export default Queue;
