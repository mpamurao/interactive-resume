var add = () => {
    // designate the variables that'll be used in add function
    // .value = sets value inserted into input tag from browser
    let addInputOne = document.getElementById("addInputOne").value;
    let addInputTwo = document.getElementById("addInputTwo").value;

    const sum = parseFloat(addInputOne) + parseFloat(addInputTwo);

    let calculationArray =
    sum.toFixed(3).split(".").filter((numberToString) =>{
        if (numberToString !== "000"){
            return numberToString;
        };
    }); 
    
    let calculatedTotal = calculationArray.join(".");
    document.getElementById("addAnswer").innerHTML = "The total is " + calculatedTotal;
    alert("The total is " + calculatedTotal);
}

var subtract = () => {
    let subInputOne = parseFloat(document.getElementById("subInputOne").value);
    let subInputTwo = parseFloat(document.getElementById("subInputTwo").value);

    const subtractTotal = subInputOne - subInputTwo;

    let calculationArray =
    subtractTotal.toFixed(3).split(".").filter((numberToString) =>{
        if (numberToString !== "000"){
            return numberToString;
        };
    }); 

    let calculatedTotal = calculationArray.join(".");
    document.getElementById("subtractAnswer").innerHTML = "The total is " + calculatedTotal;
    alert("The total is " + calculatedTotal);
}

var divide = () => {
    let divideInputOne = parseFloat(document.getElementById("divideInputOne").value);
    let divideInputTwo = parseFloat(document.getElementById("divideInputTwo").value);

    const divideTotal = divideInputOne / divideInputTwo;
    
    let calculationArray =
    divideTotal.toFixed(3).split(".").filter((numberToString) =>{
        if (numberToString !== "000"){
            return numberToString;
        };
    }); 

    let calculatedTotal = calculationArray.join(".");
    document.getElementById("divideAnswer").innerHTML = "The total is " + calculatedTotal;
    alert("The total is " + calculatedTotal);
}

var multiply = () => {
    let multiplyInputOne = parseFloat(document.getElementById("multiplyInputOne").value);
    let multiplyInputTwo = parseFloat(document.getElementById("multiplyInputTwo").value);

    const multiplyTotal = multiplyInputOne * multiplyInputTwo;

    let calculationArray =
        multiplyTotal.toFixed(3).split(".").filter((numberToString) =>{
            if (numberToString !== "000"){
                return numberToString;
            };
        }); 

    const calculatedTotal = calculationArray.join(".");
    document.getElementById("multiplyAnswer").innerHTML = "The total is " + calculatedTotal;
    alert("The total is " + calculatedTotal);
}



var average = () => {
    let averageInputOne = document.getElementById("averageInputOne").value;

    const averageInputString = 
        // split the numbers/string into individual char
        // filter out the items that aren't numbers

        // regex - regular expression: https://regexr.com/3rf9u
        // useful for parsing and searching specific char
        // / / indicates open and close of regex
        // [ ] indicates character set - match any char inside this
        // \s indicates rule to match whitespace char (space, tab, breaks)
        // , indicates rule to match comma
        // + indicates to match at least 1 or more of the preceeding rule (\s,) combined
        // for +, example is searching for , or "space" or combined ",space"
        // * indicates don't have to match any of the preceeding rule
        averageInputOne.split(/[\s,]+/).filter((number) => {
            let int = parseFloat(number);
            console.log(int);
            // return if it's a number
            return !isNaN(int);
        });;
    const averageArray = 
        // convert string values into int
        averageInputString.map(number => parseFloat(number));
    console.log(averageArray)
        
    var counter = 1;
    const currentSum = averageArray.reduce((accumulator, currentValue) => {
        if (!currentValue || isNaN(currentValue)){
            return accumulator;
        }
        counter++;
        console.log(counter)
        return accumulator + currentValue;
    });

    const averageCalculated = currentSum / counter;

    let calculationArray =
        // parseFloat is considered double in other languages since 
        // the construct for Number object is a double value

        // toFixed(2) converts int to string with 2 decimal place
        // split the #.00 and if there's 00, remove it
        // example values show as 4, 4.24, 4.10, etc
        averageCalculated.toFixed(3).split(".").filter((numberToString) =>{
            if (numberToString !== "000"){
                return numberToString;
            };
        }); 

    const averageTotal = calculationArray.join(".");

    // change avgAnswer to show text of averageTotal value
    document.getElementById("avgAnswer").innerHTML = "The average is " + averageTotal;
    alert("The average is " + averageTotal);
}