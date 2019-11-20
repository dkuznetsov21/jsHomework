//7

const apples = 3;
const pears = -9;
const oranges = 7;
const color = 'Red';
const check = true;

if (apples > oranges) {
    if (oranges < pears){
        return !check;
    } else {
        if (!color) {
            return check;
        } else {
            return !check;
        }
    }
} else {
    if (pears < apples) {
        return check;
    } else {
        if (!color) {
            return check;
        } else {
            return !check;
        }
    }
}
