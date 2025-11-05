const pairs = (_object) => {
    const _key = require("./key");
    const key = _key(_object);


    const _value = require("./value");
    const value = _value(_object);

    const result = [];

    for (let index = 0; index < key.length; index++) {
        const _pair = [key[index], value[index]];
        result.push(_pair);
    }

    return result;
}


module.exports = pairs;