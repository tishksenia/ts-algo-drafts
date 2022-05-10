import List from "../List/list";

class Node<T> {
  key: string | number;
  value: T;

  constructor(value: T, key: string | number) {
    this.value = value;
    this.key = key;
  }

  toString(): string {
    return `| key ${this.key} : ${this.value} | -> `;
  }
}

class HashTable<T> {
  hashTable: List<Node<T>>[];
  maxLength: number;

  constructor(maxLength?: number) {
    this.maxLength = maxLength || 50;
    this.hashTable = new Array(this.maxLength);
  }

  print() {
    for (let i = 0; i < this.maxLength; i++) {
      this.hashTable[i] && console.log(`${i}: ${this.hashTable[i].toString()}`);
    }
  }

  hash(value: string): number {
    var hash = 0;
    for (let i = 0; i < value.length; i++) {
      let char = value.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      // convert to 32bit integer
      hash = hash & hash;
    }
    return (Math.sign(hash) * hash) % this.maxLength;
  }

  add(key: string | number, value: T): void {
    let hashCode = this.hash(key.toString());
    let newElement = new Node<T>(value, key);
    // if list at that index exists, add new element
    if (this.hashTable[hashCode]?.head) {
      this.hashTable[hashCode].add(newElement);
    } else {
      // if not, create new list with that element
      this.hashTable[hashCode] = new List<Node<T>>(newElement);
    }
  }

  get(key: string | number): T | undefined {
    let hashCode = this.hash(key.toString());
    if (!this.hashTable[hashCode]) {
      // no element on this index
      return undefined;
    } else {
      // find node chained on this index
      let node = this.hashTable[hashCode].getElement(
        key,
        (a, b) => a === (b as Node<T>)?.key
      );
      // return node value or undefined, if it hasn't been found
      return node?.value?.value;
    }
  }

  remove(key: string | number): void {
    let hashCode = this.hash(key.toString());
    if (this.hashTable[hashCode]) {
      // find node chained on this index and delete it
      this.hashTable[hashCode].remove(key, (a, b) => a === (b as Node<T>)?.key);
    }
  }

  exists(key: string | number): boolean {
    return Boolean(this.get(key));
  }
}

export default HashTable;
export { Node };
