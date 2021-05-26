
// load file inside div body-content to view html sources
// include external link icon

function load_default() {
    document.getElementById("body-content").innerHTML = 'CLICK ON A PROJECT TO VIEW ITS LAYOUT';
    
    console.log(document.getElementById("body-content"));
}
function load_aboutMe() {
    document.getElementById("body-content").innerHTML =
        '<object class="window" type="text/html" data="./Projects List/Pre-Work-Final/index.html"></object>'+
            '<div class="icon-wrapper"><a href="./Projects List/Pre-Work-Final/index.html" target="_blank">'+
            '<i class="fas fa-external-link-alt"></i>'+
            '<img src="fontawesome-free-5.15.3-desktop/svgs/external-link-alt.svg"'+
            ' alt="External" class="external-icon"></a></div>';

        console.log(document.getElementById("body-content"));
}

function load_flowerBox() {
    document.getElementById("body-content").innerHTML =
        '<object class="window" type="text/html" data="./Projects List/Flower Box/index.html"></object>'+
            '<div class="icon-wrapper"><a href="./Projects List/Flower Box/index.html" target="_blank">'+
            '<i class="fas fa-external-link-alt"></i>'+
            '<img src="fontawesome-free-5.15.3-desktop/svgs/external-link-alt.svg"'+
            ' alt="External" class="external-icon"></a></div>';

        console.log(document.getElementById("body-content"));
}

function load_vendingMachine() {
    document.getElementById("body-content").innerHTML =
        '<div class="window"><object class="window1" type="text/html" data="./Projects List/Vending Machine Lab/vendingMachine.js"></object>'+
        '<object class="window2" type="text/html" data="./Projects List/Vending Machine Lab/vendingMachine.test.js"></object></div>';
        

    console.log(document.getElementById("body-content"));
}

function load_calculator() {
    document.getElementById("body-content").innerHTML =
        '<object class="window" type="text/html" data="./Projects List/Calculator/index.html"></object>'+
            '<div class="icon-wrapper"><a href="./Projects List/Calculator/index.html" target="_blank">'+
            '<i class="fas fa-external-link-alt"></i>'+
            '<img src="fontawesome-free-5.15.3-desktop/svgs/external-link-alt.svg"'+
            ' alt="External" class="external-icon"></a></div>';

    // JS path is looking for what's in the calculator HTML index
    // calc HTML script is written as <script src="/calculator.js">
    // will look inside root folder (interactive resume) instead of calculator folder
    console.log(document.getElementById("body-content"));
}

function load_websiteMockup() {
    document.getElementById("body-content").innerHTML =
        '<object class="window" type="text/html" data="./Projects List/Mockup Website - April 8/index.html"></object>'+
            '<div class="icon-wrapper"><a href="./Projects List/Mockup Website - April 8/index.html" target="_blank">'+
            '<i class="fas fa-external-link-alt"></i>'+
            '<img src="fontawesome-free-5.15.3-desktop/svgs/external-link-alt.svg"'+
            ' alt="External" class="external-icon"></a></div>';

    console.log(document.getElementById("body-content"));
}



// create typewriter effect
// array of words
var wordArray = ["About Me...", "Studious | Detail-Oriented | Reliable",
                    "Curious | Goal-Oriented | Dedicated",
                    "Software Developer"]

// obtain element to apply function to
const changeText = document.getElementById("header-about-me");

// initialize global counters
let wordCount = 0;
let letterCount = 0;

let typing = true;
let delay = true;
let oneDelay = true;
let secondDelay = true;

// counter for number of times function has been delayed
let delayCounter = 0;

// run function after page loads
window.onload = function typewriter() {
    // repeat typeWriter every 100ms
    setInterval(typeWriter, 90)}

function typeWriter() {
    // first word = "About Me". loop through array as count increases
    // after reaching end of array, reset to beginning
    if (wordCount >= wordArray.length){
        wordCount = 0;
    }

    let word = wordArray[wordCount];
    
    
    // add letter to html
    if (typing){
        
        
        // delay typing until 0.9s has passed
        if (delay && delayCounter < 10){
            delayCounter++;
            return;
        }
        
        // on first delay, wait for animation to run before typing begins
        if (oneDelay && delayCounter < 95){
            delayCounter++;
            // console.log(delayCounter);
            return;
        }
        oneDelay = false;
        delay = false;
        delayCounter = 0;

        changeText.innerHTML += (word[letterCount]);
        letterCount++;
        
        // all letters have printed once letterCount reaches > word.length
        // change typing to start removing letters
        // set delay to true for next iteration
        if (letterCount >= word.length){
            typing = false;
            delay = true;
        }
    }
    
    // remove letter
    else{
        // delay erasing until 1.35s has passed (15 iterations)
        if (secondDelay && delayCounter < 15){
            delayCounter++;
            return;
        }
        // for last word, add more delay time
        if (secondDelay && (wordCount === wordArray.length - 1) && delayCounter < 45){
            delayCounter++;
            return;
        }
        secondDelay = false;
        delayCounter = 0;

        // .substr = returns new substring by extracting (first index, last index) from string
        // -1 to not include the last letter of the string
        changeText.innerHTML = word.substr(0, changeText.innerHTML.length - 1);
        letterCount--;
        // console.log(letterCount);
        
        // move to next word. reset letterCount. set to typing. begin delays again
        if (letterCount < 0){
            wordCount++;
            letterCount = 0;
            typing = true;
            secondDelay = true;
        }
    }
}