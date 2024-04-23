// console.log('this is node js tutorial');
// console.log('this is the first tutorial on nodejs');
// console.log('we will cover nodejs with command line');
// process.exit(1);
// process.exitCode = 0;

// const _ = require("lodash");
// const arr = [1, 4, 6, 8];
// console.log(_.chunk(arr));

// const cowsay = require('cowsay');
// console.log(cowsay.say({
//     text: "I am learning NPM modules",
//     e: "00",
//     t: "U"
// }));

const { tesla, ford } = require("./car");
console.log(JSON.stringify(tesla, null, 3));
console.log(JSON.stringify(ford, undefined, 2));