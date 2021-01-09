// CHALLENGE 1
function createFunction() {
    function printHello() {
        console.log("hello");
    }
    return printHello;
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
    function printInput() {
        console.log(input);
    }
    return printInput;
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter() {
        counter++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter(); //This line of code will print 1
willCounter(); //This line of code will print 2
willCounter(); //This line of code will print 3

jasCounter(); //This line of code will print 1
willCounter(); //This line of code will print 4


function addByX(x) {
    function adding(input) {
        input += x
        console.log(input)
    }
    return adding
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
    let runOnce = 0;
    let answer = 0;
    function onceAgain(input) {
        if (runOnce < 1) {
            answer = func(input);
            runOnce++;
            return answer;
        }
        else {
            return answer;
        }
    }
    return onceAgain;
}


// /*** Uncomment these to check your work! ***/
let addByTwo = input => input+2;
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
    let afterCounter = 0;
    function countToExecute() {
        afterCounter++;
        if (afterCounter >= count) {
            func();
        }
    }
    return countToExecute;
}
// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed