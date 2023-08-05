test("tes toBe", () => {
    const name = "Prins";
    const hello = `hello ${name}`

    expect(hello).toBe("hello Prins");
});

test("test toEqual", () => {
    let person = {id: "prins"};
    Object.assign(person, {name: "Prins"});

    expect(person).toEqual({id: "prins", name: "Prins"});
});