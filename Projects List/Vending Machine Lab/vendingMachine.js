// object called vendingMachine
var vendingMachine = {
    // snack array to include objects with name and price
    snack: [
        {name:"oreos", price: 0.75},
        {name:"M&M's", price: 0.25},
        {name:"twix", price: 0.5},
    ],
    // method to print the item in snack array
    vend: (index) => {
            // check for valid input
            if (index < 0){
                return `Invalid input of ${index}. Please use a number greater than or equal to zero to request a snack.`;
            }

            console.log(vendingMachine.snack[index]);
            return `You requested to buy ${vendingMachine.snack[index].name}. The price is $${vendingMachine.snack[index].price}. Please enter this amount in dollars or coins.`
    }
}

console.log(vendingMachine.vend(0));
console.log(vendingMachine.vend(1));
console.log(vendingMachine.vend(2));
console.log(vendingMachine.vend(-1));

export default vendingMachine;