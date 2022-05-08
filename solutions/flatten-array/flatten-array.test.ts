import flattenArray from "./flatten-array";

test("flattens array", () => {
    expect(flattenArray([1, 2, 3, 4, [5]])).toStrictEqual([1, 2, 3, 4, 5]);
    expect(flattenArray([1, [2, 3, 4], [6]])).toStrictEqual([1, 2, 3, 4, 6]);
    expect(flattenArray([1, [2, [3, 8], 4], [6]])).toStrictEqual([1, 2, 3, 8, 4, 6]);
    expect(flattenArray([[[[[[1]]]]]])).toStrictEqual([1]);
});

test("doesnt ruin simple array", () => {
    expect(flattenArray([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
});

test("empty array stays empty", () => {
    expect(flattenArray([])).toStrictEqual([]);
});