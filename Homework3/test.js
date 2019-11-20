/** Task 1 */

// Function Declaration
function multiplex() {
    try {
        for (let j = 0; j < arguments.length; j++) {
            if (typeof(arguments[j]) !== 'number') throw new Error('Argument Error');
        }
    } catch (e) {
        return `Error - ${e.message}`;
    }
    try {
        if (arguments.length === 0) throw new Error('No existing data');
    } catch (e) {
        return `Error - ${e.message}`;
    }
    if (arguments.length === 1) {
        return arguments[0];
    }
    let res = 1;
    for (let i = 0; i < arguments.length; i++) {
        res *= arguments[i];
    }
    return res;
}

// Function Expression

let multiplexExpression = function() {};

// Arrow Function

multiplexExpression = multiplex;
let multiplexArrow = () => multiplex;

console.log(`Result Task 1: multiplex(500, 23, 41, 2, 7, 5) = ${multiplex(500, 23, 41, 2, 7, 5)}`);
console.log('Result Task 1: multiplexExpression = ', multiplexExpression(61, 'hello', false, null));
console.log('Result Task 1: multiplexArrow = ', multiplexArrow()());

/** Task 2 */

function counter() {
    count = 666;
    if (typeof(arguments[0]) !== 'number' || arguments.length === 0 || arguments[1] === true) {
        return count;
    }
    if (typeof(arguments[0]) === 'number') {
        return count + arguments[0];
    }
}

function createCounter(item) {
    return counter(item);
}

let counter1 = function() {};
counter1 = createCounter;
let counter2 = function() {};
counter2 = createCounter;
let counter3 = function() {};
counter3 = createCounter;

console.log(`Result Task 2: counter1 = |${counter1(5)}| |${counter1(21)}| |${counter1('hello world')}| |${counter1()}|`);
console.log(`Result Task 2: counter2 = |${counter2(600)}| |${counter2(2)}| |${counter2(7, true)}| |${counter2(1)}| |${counter2()}|`);
console.log(`Result Task 2: counter3 = |${counter3()}|`);

/** Task 3 */

function findOne() {

    let arr = arguments[0];
    try {
        for (let j = 0; j < arr.length; j++) {
            if (typeof(arr[j]) !== 'number') throw new Error('Array contain not a number');
        }
    } catch (e) {
        return `Error - ${e.message}`;
    }
    try {
        if (arr.length === 0) throw new Error('Array is empty');
    } catch (e) {
        return `Error - ${e.message}`;
    }
    try {
        if (['min', 'max', 'avg'].indexOf(arguments[1]) === -1) new Error('Operation not found');
    } catch (e) {
        return `Error - ${e.message}`;
    }

    if (arguments[1] === 'min') {
        return Math.min.apply(null, arguments[0]);
    } else if (arguments[1] === 'max') {
        return Math.max.apply(null, arguments[0]);
    } else if (arguments[1] === 'avg') {
        let avg = 0;
        for (let j = 0; j < arr.length; j++) {
            avg += arr[j];
        }
        return avg / arguments[0].length;
    }

}

console.log(`Result Task 3: findOne([7,45,21,-2, 12, 11, 1], 'avg') = ${findOne([7,45,21,-2, 12, 11, 1], 'avg')}`);
console.log(`Result Task 3: findOne([-7,-4,-1,-2, -21, 11, 1], 'min') = ${findOne([-7,-4,-1,-2, -21, 11, 1], 'min')}`);
console.log(`Result Task 3: findOne([], 'max') = ${findOne([], 'max')}`);
console.log(`Result Task 3: findOne([true, false, null], 'avg') = ${findOne([true, false, null], 'avg')}`);
console.log(`Result Task 3: findOne([3], 'max') = ${findOne([3], 'max')}`);

/** Task 4 */

function onDone() {
    console.log('Successfull');
}

function onError() {
    console.log('Failed');
}

function condition() {
    if (arguments.length < 2) {
        return ((58 - 24) > 30);
    } else {
        return (arguments[0] - arguments[1]) > 30;
    }
}

function conditionManager() {

    if (arguments[0]) {
        arguments[1]();
    } else {
        arguments[2]();
    }
}
console.log('Result Task 4: conditionManager(condition(62), onDone, onError):');
conditionManager(condition(62), onDone, onError);
console.log('Result Task 4: conditionManager(condition(), onDone, onError):');
conditionManager(condition(), onDone, onError);
console.log('Result Task 4: conditionManager(condition(600, 1000), onDone, onError):');
conditionManager(condition(600, 1000), onDone, onError);
/** Task 5 */

function functionIsObject() {}
console.log(`Result Task 5: Function is = ${typeof(functionIsObject.prototype)}`);

/** Task 6 */

const testArray = [];

function arrController() {

    try {
        if (['add', 'remove', 'clear', 'view'].indexOf(arguments[0]) === -1) throw new Error('Operation is not available');
    } catch (e) {
        return `Error - ${e.message}`;
    }
    if (arguments[0] === 'add') {
        testArray.push(arguments[1]);
        return testArray;
    } else if (arguments[0] === 'remove') {
        for (let i = 0; i < testArray.length; i++) {
            if (testArray[i] === arguments[1]) {
                testArray.splice(i, 1);
            }
        }
        return testArray;
    } else if (arguments[0] === 'clear') {
        while (testArray.length) {
            testArray.pop();
        }
        return testArray;
    } else if (arguments[0] === 'view') {
        return testArray;
    }
}
console.log(`Result Task 6: arrController() = ${arrController()}`);
console.log(`Result Task 6: arrController('view') = ${arrController('view')}`);
console.log(`Result Task 6: arrController('add', 0) = ${arrController('add', 0)}`);
console.log(`Result Task 6: arrController('add', 'Hello') = ${arrController('add', 'Hello')}`);
console.log(`Result Task 6: arrController('add', false) = ${arrController('add', false)}`);
console.log(`Result Task 6: arrController('add', 142) = ${arrController('add', 142)}`);
console.log(`Result Task 6: arrController('remove', false) = ${arrController('remove', false)}`);
console.log(`Result Task 6: arrController('clear') = ${arrController('clear')}`);

/** Task 7 */

let arr = [5, 7, 11, 13];
let arr2 = arr.slice();
console.log(`Result Task 7: arr1 = ${arr}`);
console.log(`Result Task 7: arr2 = ${arr2}`);
arr2.push(21);
console.log(`Result Task 7: arr1 = ${arr}`);
console.log(`Result Task 7: arr2 = ${arr2}`);

/** Task 8 */

let arr6 = [16, 31, 24, 7];
console.log(`Result Task 8: arr = ${arr6}`);
arr6.push(function() {
    return arr6
});
console.log(`Result Task 8: arr + function = ${(arr6[arr6.length-1])()}`);

/** Task 9 */

let arr7 = [1, 3, 5, 7, 11, 13, 3, 5, 7];

function arrReplaceValue() {
    let count = 0;
    for (let i = 0; i < arguments[0].length; i++) {
        if (arguments[0][i] === arguments[1]) {
            arguments[0][i] = arguments[2];
            count += 1;
        }
    }
    return count;
}
console.log(`Result Task 9: arr = ${arr7}`);
console.log(`Result Task 9: count = ${arrReplaceValue(arr7, 3, 5)}`);
console.log(`Result Task 9: arr = ${arr7}`);

/** Task 10 */

arr1100 = ['ananas', 'banan', 'kiwi'];
arr1200 = ['gasoline', 'kerosene', 'chlorhexidine'];
arr1300 = arr1100.concat(arr1200);
console.log(`Result Task 10: arr1100 = ${arr1100}`);
console.log(`Result Task 10: arr1200 = ${arr1200}`);
console.log(`Result Task 10: arr1300 = ${arr1300}`);