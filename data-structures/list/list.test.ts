import List from "./list";

test("adds element", () => {
  let list = new List<string>();
  list.add("5");
  list.add("7");
  list.add("9");
  list.add("11");
  // ["5", "7", "9", "11"]
  expect(list.getElement("7").value).toBe("7");
  expect(list.getElement("11").value).toBe("11");
  expect(list.getElement("4")).toBeUndefined();
});

test("removes elements", () => {
  let list = new List<string>();
  list.add("5");
  expect(list.getElement("5").value).toBe("5");
  list.add("7");
  list.add("9");
  list.add("11");
  // ["5", "7", "9", "11"]
  list.remove("7");

  // ["5", "9", "11"]
  expect(list.getElement("5").value).toBe("5");
  expect(list.getElement("7")).toBeUndefined();
  list.remove("5");

  // ["7", "9", "11"]
  expect(list.getElement("5")).toBeUndefined();
});

test("gets correct tail", () => {
  let list = new List<string>();
  list.add("5");

  // ["5"]
  expect(list.getTail().value).toBe("5");

  list.add("7");
  list.add("9");
  list.add("11");

  // ["5", "7", "9", "11"]
  expect(list.getTail().value).toBe("11");
  list.destroy();

  // []
  expect(list.getTail()).toBeUndefined();
});

test("finds element", () => {
  let list = new List<string>();
  list.add("5");

  // ["5"]
  expect(list.getElement("5")).toBeTruthy();

  list.add("7");
  list.add("9");
  list.add("11");

  // ["5", "7", "9", "11"]
  expect(list.getElement("11")).toBeTruthy();
  expect(list.getElement("999")).toBeFalsy();

  list.destroy();
  // []
  expect(list.getElement("11")).toBeFalsy();
});

test("checks if element exists", () => {
  let list = new List<string>();
  list.add("5");
  // ["5"]
  expect(list.getElement("5")).toBeTruthy();

  list.add("7");
  list.add("9");
  list.add("11");
  // ["5", "7", "9", "11"]
  expect(list.exists("11")).toBeTruthy();
  expect(list.exists("999")).toBeFalsy();

  list.destroy();
  // []
  expect(list.exists("11")).toBeFalsy();
});

test("creates 1 element list from constructor", () => {
  let list = new List<number>(5);
  // ["5"]
  expect(list.exists(5)).toBeTruthy();
  list.destroy();
  list = new List<number>();
  // []
  expect(list.exists(5)).toBeFalsy();
});
