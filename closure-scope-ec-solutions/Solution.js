// CHALLENGE 1
function createFunction() {
    function printHello() {
        console.log("hello");
    }
    return printHello;
}

const function1 = createFunction();
function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
    function printInput() {
        console.log(input);
    }
    return printInput;
}

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

let addByTwo = input => input + 2;
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

const called = function () { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed

//CHALLENGE 6
function delay(func, wait) {
    setTimeout(func, wait);
}

const sayHello = () => console.log('Hello!');
delay(sayHello, 3000);

// CHALLENGE 7
function rollCall(names) {
    let iterator = 0;
    function printName() {
        if (iterator >= names.length) {
            console.log('Everyone accounted for.');
        }
        else {
            console.log(names[iterator]);
        }
        iterator++;
    }
    return printName;
}

const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
    let answer = new Object();
    function checkInput(input) {
        if (input === magicWord) {
            return answer;
        }
        else {
            answer[input] = func(input);
            return func(input);
        }
    }
    return checkInput;
}

const multiplyBy2 = function (num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }