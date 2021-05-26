// test cases for vendingMachine.vend()
// install jest to run test cases
// https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/

// file to be tested
const vendingMachine = require("./vendingMachine");

test("Returns response for valid input", () => {
    // if valid input of an index in the vendingMachine.snack array
    vendingMachine.snack.forEach((snack, index) => {
        expect(vendingMachine.vend(index))
            .toBe(`You requested to buy ${snack.name}. The price is $${snack.price}. Please enter this amount in dollars or coins.`);
    });
});

test("Returns response for invalid inputs", () => {
    // if input is not an index in the snack array
    let invalidInputs = [-1, -2, -3, vendingMachine.snack.length + 1]
    invalidInputs.forEach(input => {
        expect(vendingMachine.vend(input))
            .toBe(`Invalid input of ${input}. Please use a number within the range of snacks to request a snack.`);
    });
});