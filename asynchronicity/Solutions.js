/* CHALLENGE 2 */
function delayedGreet() {
    // ADD CODE HERE
    setTimeout(() => console.log('Hello'), 3000);
}

delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */
function helloGoodbye() {
    // ADD CODE HERE
    console.log('Hello');
    setTimeout(() => console.log('Good bye'), 3000);
}

helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */
function brokenRecord() {
    // ADD CODE HERE
    setInterval(() => console.log('Hi again'), 1000);
}

brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5*/
function limitedRepeat() {
    // ADD CODE HERE
    const intervalId = setInterval(() => console.log('hi for now'), 1000);
    setTimeout(() => clearInterval(intervalId), 5000);
}

limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */
function everyXsecsForYsecs(func, interval, duration) {
    // ADD CODE HERE
    const intervalId = setInterval(func, interval * 1000);
    setTimeout(() => clearInterval(intervalId), duration * 1000);
}

function theEnd() {
    console.log('This is the end!');
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/* CHALLENGE 7 */
const printCounter = (count) => console.log(count);

function delayCounter(target, wait) {
    function showCounter() {
        for (let i = 0; i < target; i++) {
            setTimeout((i) => console.log(i), wait);
        }
    }
    return showCounter;
}