const error = new Error('Something went wrong');
const { reject } = require('lodash');
// console.log(error.stack);
// console.log(error.message);
// throw new Error('I am error object');

const { CustomError } = require('./CustomError');
// throw new CustomError('This is a custom error object');

//handle the exception using try and catch

// try {
//     doSomething()
// } catch (e) {
//     console.log('Error Occured')
//     console.log(e);
// }

function doSomething() {
    const data = fetch('localhost:300/api');
    console.log('I am from doSomething function');
    // const data = "I am from doSomething function";
    return data
}

//uncaught exception
// process.on('uncaughtException', (err) => {
//     console.log('There was an uncaught exception', err);
//     process.exit(1);
// })

//Exception with promises
// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve(doSomething());
//     } else {
//         reject(doSomething())
//     }
// })

// promise.then((val) => {
//     console.log(val);
// })
//     .catch((err) => {
//         console.log("error occured");
//         console.log(err);
//     })

//exception with async and await

const someFunction = async () => {
    try {
        await doSomething();
    } catch (err) {
        throw new CustomError(err.message);
    }
};

someFunction();