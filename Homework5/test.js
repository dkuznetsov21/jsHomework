// 1. Напишите функцию-калбэк (любую) и вызовите её на счетчике setTimeout(callback, period). Отсрочку period установите в 1000 мс.

function test() {
    console.log('text');
}
setTimeout(test,1000);

//2. Напишите функцию sleep(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд

function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}

//3. Измените функцию так, чтобы она возвращала промис:


function getText(success, error) {
    return new Promise((resolve,reject) =>{
        let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        let link = 'https://ww---w.w3.org/TR/PNG/iso_8859-1.txt';
        const xhr = new XMLHttpRequest();
        xhr.open('GET', link);
        xhr.send();
        xhr.onreadystatechange = function() {

            if (xhr.readyState !== 4) reject;

            if (xhr.status !== 200) {
                reject(error({code: xhr.status, message: xhr.statusText}));
            } else {
                resolve(success(xhr.responseText));
            }
        }});
}


//Isuue 4

getText(console.log, console.log)
    .then((result)=>{console.log(result);})
    .catch((errorMessage)=>{console.log(errorMessage);});

//issue 5

async  function getText1(success, error) {
    let link;
    try {
        let XMLHttpRequest = await require("xmlhttprequest").XMLHttpRequest;
        link = 'https://www.w3.org/TR/PNG/iso_8859-1.txt';
        const xhr = new XMLHttpRequest();
        xhr.open('GET', link);
        xhr.send();
        xhr.onreadystatechange = function () {

            return (success(xhr.responseText));
        }
    } catch (error) {
        console.log(error);
    }

}

const result = getText1(console.log,console.log);
console.log(result);