
// 1-6
let myVar = 'baNaNa';
myVar = myVar.toUpperCase()[0]
    + myVar.toLowerCase().slice(1);
console.log(myVar);
//==================================================================================
let height = parseFloat('0.6vh');
let width = parseFloat('0.7vh');
let div = `${2*(height+width).toFixed(1)}vh`;
console.log(div);
//==================================================================================
let merged = true;
let unmerged =! merged;
unmerged = Number();
console.log(unmerged);
//==================================================================================
const a = 0, b = '0', c = null, d = false;

let e = ((a == b)==(c == b));
let h = (a == b == c == d);
//==================================================================================
let k = 2;
let a = Number(++k === k++);
let b = Number(k++ === ++k);
console.log(a);
console.log(b);
//==================================================================================
//conditions
let word = 'Bogdan';

//first
let kk = word.length > 3 ? 'red' : 'green';
console.log(kk);

//second
let bb;
    if (word.length > 3) {
        console.log('red');
    }
    else {
        console.log('green');
}

//third
switch (word.length > 3) {
    case true:
        console.log('red');
        break;
    default:
        console.log('green');
        break;
}



