import HashTable from "./hash-table";
import { Node } from "./hash-table";

test("node creates node with given values", () => {
  let node = new Node("val", 25);
  expect(node.value).toBe("val");
  expect(node.key).toBe(25);
});

test("hash table function transforms string value to index <= 50", () => {
  let hashTable = new HashTable<string>();
  expect(hashTable.hash("123123901310")).toBeLessThanOrEqual(25);
  expect(hashTable.hash("123123901310")).toBeGreaterThanOrEqual(0);
  expect(hashTable.hash("")).toBeLessThanOrEqual(25);
  expect(hashTable.hash("")).toBeGreaterThanOrEqual(0);
});

test("hash table adds new elements", () => {
  let hashTable = new HashTable<string>();
  hashTable.add(99, "abc");
  hashTable.add(24, "abc");

  expect(hashTable.exists(99)).toBeTruthy();
  expect(hashTable.exists(24)).toBeTruthy();
  expect(hashTable.exists(991)).toBeFalsy();
});

test("finds elements that were put to hashtable", () => {
  let hashTable = new HashTable<string>();
  hashTable.add(99, "abc");
  hashTable.add(24, "wa");

  expect(hashTable.get(99)).toBe("abc");
  expect(hashTable.exists(99)).toBeTruthy();

  expect(hashTable.get(24)).toBe("wa");
  expect(hashTable.exists(24)).toBeTruthy();

  expect(hashTable.get(991)).toBeUndefined();
  expect(hashTable.exists(991)).toBeFalsy();
});

test("deletes element", () => {
  let hashTable = new HashTable<string>(5);
  hashTable.add(99, "abc");
  hashTable.add(24, "wa");
  hashTable.add(34, "wa");
  hashTable.add(54, "wa");
  hashTable.add(14, "wa");
  hashTable.add(8, "wa");
  hashTable.add(9, "wa");
  hashTable.add(0, "wa");
  hashTable.add(10, "wa");
  hashTable.add(1, "wa");
  hashTable.add(4, "wa");
  hashTable.remove(9);
  hashTable.remove(4);
  expect(hashTable.exists(9)).toBeFalsy();
  expect(hashTable.get(4)).toBeUndefined();
  expect(hashTable.exists(10)).toBeTruthy();
  expect(hashTable.exists(24)).toBeTruthy();
  expect(hashTable.get(24)).toBe("wa");
});
