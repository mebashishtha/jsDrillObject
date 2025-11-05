const invert = (_object) => {
    const _key = require("./key");
    const key = _key(_object);

    const _value = require("./value");
    const value = _value(_object);

    let newObject = {};

    for (let index = 0; index < value.length; index++) {
            newObject[value[index]] = key[index];
    }

    return newObject;

}

module.exports = invert;