import Queue from "./queue";

let q = new Queue<number>();

test("pushes new element to the queue", () => {
  q.add(3);
  // [3]
  expect(q.peek()).toBe(3);
  q.add(5);
  // [3, 5]
  expect(q.size()).toBe(2);
  q.remove();
  q.remove();
});

test("removes elements from the queue", () => {
  q.add(3);
  q.add(5);
  q.remove();
  // [5]
  expect(q.size()).toBe(1);
  expect(q.peek()).toBe(5);
  q.remove();
  // []
  expect(q.size()).toBe(0);
});

test("size() returns correct size", () => {
  q.add(3);
  // [3]
  expect(q.size()).toBe(1);
  q.add(5);
  q.add(7);
  q.add(8);
  // [3, 5, 7, 8]
  expect(q.size()).toBe(4);
  q.remove();
  q.remove();
  // [7, 8]
  expect(q.size()).toBe(2);
  q.remove();
  q.remove();
  // []
  expect(q.size()).toBe(0);
});

test("isEmpty() returns if queue is empty", () => {
  q.add(3);
  q.add(5);
  q.add(7);
  q.add(8);
  // [3, 5, 7, 8]
  expect(q.isEmpty()).toBe(false);
  q.remove();
  q.remove();
  q.remove();
  q.remove();
  // []
  expect(q.isEmpty()).toBe(true);
});

test("peek() returns value in front of the queue", () => {
  q.add(3);
  q.add(5);
  // [3, 5]
  expect(q.peek()).toBe(3);
  q.add(7);
  q.add(8);
  // [3, 5, 7, 8]
  expect(q.peek()).toBe(3);
  q.remove();
  q.remove();
  // [7, 8]
  expect(q.peek()).toBe(7);
  q.remove();
  // [8]
  expect(q.peek()).toBe(8);
  q.remove();
  // []
  expect(q.peek()).toBe(undefined);
});
