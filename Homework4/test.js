//Issue 1.

const dog = {};
console.log(dog);
dog.name = "dogger";
console.log(dog);
dog.age = 8;
console.log(dog);
dog.sex = 'male';
console.log(dog);
dog.sex = 'unknow';
console.log(dog);
delete dog.age;
console.log(dog);


//Issue2

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

//Issue 3

const ASD = {
    Dogs: 100,
    Cats: 111,
    Bananas: 333
};
let allAnimals = ASD.Dogs + ASD.Cats;
console.log(allAnimals);

//Issue 4

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
let testClass = {a: 4, b: 5, c: "as"};
console.log(mumu(testClass));


//Issue 5

function returnName() {
    return this.name
}
let obj1 = { age : 23,name:"Dimon"};
let obj2 = {name: 'Semen' , live : true};
obj1.returnName = returnName;
console.log(obj1.returnName());
obj2.returnName = returnName;
console.log(obj2.returnName());

//Issue 6

export default class Controller {
    constructor(finished = false, done = 5, atempts = 44) {
        this.finished = finished;
        this.done = done;
        this.atempts = atempts;
    }

    returnAtempts() {
        return this.atempts;
    }

    changeFinish() {
        this.finished = !this.finished;
    }
}

let amazing = new Controller();
amazing.changeFinish();
let a = amazing.returnAtempts();
console.log(a);
console.log(amazing.finished);