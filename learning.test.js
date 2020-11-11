test("try", () => {
    // given
    const input1 = 1;
    const input2 = 2;

    // when
    const result = add(input1, input2);

    // then
    expect(result).toBe(3);
});



function add(one, two) {
    return one + two;
}



test('array', () => {
    // given
    const arr = [];
    const input1 = 1;
    const input2 = 2;

    // when
    const result = concat(arr, input1, input2);

    // then
    expect(result).toBe(arr);
    expect(result).toEqual([1, 2]);
})


function concat(arr, one, two) {
    arr.push(one);
    arr.push(two);
    return arr;
}
