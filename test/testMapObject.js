const _mapObject = require("../mapObject");

const roll = {
    r1 : 1,
    r2 : 2,
    r3 : 3,
    r4 : 4,
    r5 : 5
};


const result = _mapObject(roll , (value) => value * 2);

console.log(result);