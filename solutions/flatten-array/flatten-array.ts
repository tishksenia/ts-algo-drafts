function flattenArray<T>(arr: T[]) {
    let stack = [...arr];
    let result = [];
    while(stack.length !== 0) {
        let newElement = stack.pop();
        if(Array.isArray(newElement)) {
            stack.push(...newElement);
        }
        else {
            result.push(newElement);
        }
    }
    return result.reverse();
};

export default flattenArray;
