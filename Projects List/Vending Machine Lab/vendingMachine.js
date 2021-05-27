// object called vendingMachine
const vendingMachine = {
    // snack array to include objects with name and price
    snack: [
        {name:"oreos", price: 0.75},
        {name:"M&M's", price: 0.25},
        {name:"twix", price: 0.5},
    ],
    // method to print the item in snack array
    vend: (index) => {
            // check for valid input
            if (index < 0 || index > vendingMachine.snack.length - 1 || isNaN(index)){
                return `Invalid input of ${index}. Please use a number within the range of snacks to request a snack.`;
            }

            // console.log(vendingMachine.snack[index]);
            return `You requested to buy ${vendingMachine.snack[index].name}. The price is $${vendingMachine.snack[index].price}. Please enter this amount in dollars or coins.`
    }
}

// module.exports - node.js keyword to export file
module.exports = vendingMachine;