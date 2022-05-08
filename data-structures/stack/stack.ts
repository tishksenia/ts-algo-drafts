class Stack<T> {
  st: T[];

  constructor(st: T[]) {
    this.st = st;
  }

  pop(): void {
    this.st.pop();
  }

  push(value: T): void {
    this.st.push(value);
  }

  peek(): T {
    return this.st[this.st.length - 1];
  }

  isEmpty(): boolean {
    return this.st.length === 0;
  }
}

export default Stack;
