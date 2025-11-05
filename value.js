
const val = (obj) => {
    const _key = require("./key.js");
    const key = _key(obj);
    const length = key.length;
    const value = Array(length);

    for(let i = 0; i < length; i++){
        value[i] = obj[key[i]];
    }

    return value;
}

module.exports = val;