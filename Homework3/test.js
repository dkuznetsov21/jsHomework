//Issue 1

// Function Declaration
function multiplex() {
    for (let j = 0; j < arguments.length; j++) {
        if (typeof (arguments[j]) !== 'number')
            throw new Error('Argument Error');
    }
    if (arguments.length === 0)
        throw new Error('No existing data');
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

let multiplexExpression = function () {
};

// Arrow Function

multiplexExpression = multiplex;
let multiplexArrow = () => multiplex;

console.log(`Result Task 1: multiplex(500, 23, 41, 2, 7, 5) = ${multiplex(500, 23, 41, 2, 7, 5)}`);
console.log('Result Task 1: multiplexExpression = ', multiplexExpression(61, 'hello', false, null));
try {
    console.log('Result Task 1: multiplexArrow = ', multiplexArrow()());
} catch (e) {
    console.log(e)
}

//Issue 2

function counter() {
    count = 345;
    if (typeof (arguments[0]) !== 'number' || arguments.length === 0) {
        return count;
    }
    if (typeof (arguments[0]) === 'number') {
        return count + arguments[0];
    }
}

function createCounter() {
    let count = 345;
    return function (item, itemTwo) {
        if (typeof (arguments[0]) !== 'number' || arguments.length === 0) {
            return count;
        }
        if (typeof (arguments[0]) === 'number') {
            return count + arguments[0];
        }
    };
}

let counter1 = function () {
};
counter1 = createCounter();

let counter2 = function () {
};
counter2 = createCounter();

let counter3 = function () {
};
counter3 = createCounter();

console.log(`Result Task 2: counter1 = |${counter1(5)}| |${counter1(21)}| |${counter1('hello world')}| |${counter1()}|`);
console.log(`Result Task 2: counter2 = |${counter2(600)}| |${counter2(2)}| |${counter2(7, true)}| |${counter2(1)}| |${counter2()}|`);
console.log(`Result Task 2: counter3 = |${counter3()}|`);

//Issue 3

function findOne() {

    let arr = arguments[0];
    for (let j = 0; j < arr.length; j++) {
        if (typeof (arr[j]) !== 'number') throw new Error('Array contain not a number');
    }
    if (arr.length === 0) throw new Error('Array is empty');

    if (['min', 'max', 'avg'].indexOf(arguments[1]) === -1) new Error('Operation not found');

    if (arguments[1] === 'min') {
        return Math.min(arguments[0]);
    } else if (arguments[1] === 'max') {
        return Math.max(arguments[0]);
    } else if (arguments[1] === 'avg') {
        let avg = 0;
        for (let j = 0; j < arr.length; j++) {
            avg += arr[j];
        }
        return avg / arguments[0].length;
    }

}

try {
    console.log(`Result Task 3: findOne([7,45,21,-2, 12, 11, 1], 'avg') = ${findOne([7, 45, 21, -2, 12, 11, 1], 'avg')}`);
    console.log(`Result Task 3: findOne([-7,-4,-1,-2, -21, 11, 1], 'min') = ${findOne([-7, -4, -1, -2, -21, 11, 1], 'min')}`);
    console.log(`Result Task 3: findOne([], 'max') = ${findOne([], 'max')}`);
    console.log(`Result Task 3: findOne([true, false, null], 'avg') = ${findOne([true, false, null], 'avg')}`);
    console.log(`Result Task 3: findOne([3], 'max') = ${findOne([3], 'max')}`);
} catch (e) {
    console.log(e)
}

//Issue 4

function onDone() {
    return 'Successfull'
}

function onError() {
    return 'Failed'
}

function condition(a = 58, b = 24) {
    return a - b > 30
}

function conditionManager(condition, onDone, onError) {
    return condition() ? onDone : onError;
}

console.log('Result Task 4: conditionManager(condition(62), onDone, onError):');
conditionManager(condition(62), onDone, onError);
console.log(conditionManager(condition(58, 24), onDone(), onError()));
console.log('Result Task 4: conditionManager(condition(), onDone, onError):');
conditionManager(condition(), onDone(), onError());
console.log('Result Task 4: conditionManager(condition(600, 1000), onDone, onError):');
conditionManager(condition(600, 1000), onDone(), onError());

//Issue 5

function functionIsObject() {
}

console.log(`Result Task 5: Function is = ${typeof (functionIsObject.prototype)}`);

//Issue 6

const testArray = [];

function arrController() {
    if (['add', 'remove', 'clear', 'view'].indexOf(arguments[0]) === -1) throw new Error('Operation is not available');
    switch (arguments[0]) {
        case 'add':
            testArray.push(arguments[1]);
            return testArray;
        case 'remove':
            for (let i = 0; i < testArray.length; i++) {
                if (testArray[i] === arguments[1]) {
                    testArray.splice(i, 1);
                }
            }
            return testArray;
        case 'clear':
            testArray.length = 0;
            return testArray;
        case 'default':
            return testArray;
    }
}

try {
    console.log(`Result Task 6: arrController() = ${arrController()}`);
    console.log(`Result Task 6: arrController('view') = ${arrController('view')}`);
    console.log(`Result Task 6: arrController('add', 0) = ${arrController('add', 0)}`);
    console.log(`Result Task 6: arrController('add', 'Hello') = ${arrController('add', 'Hello')}`);
    console.log(`Result Task 6: arrController('add', false) = ${arrController('add', false)}`);
    console.log(`Result Task 6: arrController('add', 142) = ${arrController('add', 142)}`);
    console.log(`Result Task 6: arrController('remove', false) = ${arrController('remove', false)}`);
    console.log(`Result Task 6: arrController('clear') = ${arrController('clear')}`);

} catch (e) {
    console.log(e)
}
//Issue 7

let arr = [5, 7, 11, 13];
let arr2 = arr.slice();
console.log(`Result Task 7: arr1 = ${arr}`);
console.log(`Result Task 7: arr2 = ${arr2}`);
arr2.push(21);
console.log(`Result Task 7: arr1 = ${arr}`);
console.log(`Result Task 7: arr2 = ${arr2}`);

//Issue 8

let arr6 = [16, 31, 24, 7];
console.log(`Result Task 8: arr = ${arr6}`);
arr6.push(function () {
    return this;
});
console.log(`Result Task 8: arr + function = ${(arr6[arr6.length - 1])()}`);

//Issue 9

let arr7 = [1, 3, 5, 7, 11, 13, 3, 5, 7];

function arrReplaceValue(arrayMy, change, changeTo) {
    let count = 0;
    arrayMy.forEach(first => {
        if (first === change) {
            first = changeTo;
            count += 1;
        }
    });
    return count;
}

console.log(`Result Task 9: arr = ${arr7}`);
console.log(`Result Task 9: count = ${arrReplaceValue(arr7, 3, 5)}`);
console.log(`Result Task 9: arr = ${arr7}`);

//Issue 10


arr1100 = ['ananas', 'banan', 'kiwi'];
arr1200 = ['gasoline', 'kerosene', 'chlorhexidine'];
arr1300 = arr1100.concat(arr1200);
console.log(`Result Task 10: arr1100 = ${arr1100}`);
console.log(`Result Task 10: arr1200 = ${arr1200}`);
console.log(`Result Task 10: arr1300 = ${arr1300}`);