//  -----------  Issue 1.
const dog = new Object();
console.log(dog);
dog.name = "Moochskctar";
console.log(dog);
dog.age = 500;
console.log(dog);
dog.sex = 'male';
console.log(dog);
dog.sex = 'unknow';
console.log(dog);
delete dog.age;
console.log(dog);


// ------------ Issue2
function isEmpty(obj) {
    return Object.keys(obj) == 0;
}

// ----------- Issue 3
const QTY = {
    Dogs: 100000,
    Cats: 1625476540,
    Bananas: 155330
};
let allAnimals = QTY.Dogs + QTY.Cats;
console.log(allAnimals);

//---------  Issue 4
function mumu(obj) {
    const obj1 = {};
    for (let key in obj) {
        if (typeof (obj[key]) == "number") {
            obj1[key] = obj[key] * 5;
        } else {
            obj1[key] = obj[key];
        }
    }
    return obj1;
}
testClass = {a: 4, b: 5, c: "as"};
console.log(mumu(testClass));

// ------------ Issue 5
function getName() {
    for (let prop in this) {
        if (prop === 'name') {
            return this[prop];
        } else {
            return 'The object has no property Name'
        }
    }
}
dog.getName = getName;
QTY.getName = getName;
console.log('Result Task 5: Object with the name property. DOG name is :', dog.getName());
console.log('Result Task 5: Object without the name property. QTY name is : ', QTY.getName());


//-----------Issue 6.

class Controller {
    constructor() {
        this.finished = false;
        this.done = 5;
        this.atempts = 44;
        this.getAtempts = function() {
            return this.atempts;
        };
        this.switchFinished = function() {
            if (this.finished===true){
                this.finished = false;
            }else{
                this.finished = true;
            }
        }

    }
}
module.exports = Controller;