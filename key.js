
const objKey = (obj) => {
    if(obj !== Object(obj)){
        return [];
    }
    let keys = [];
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj, key)){
            keys.push(key);
        }
    }

    return keys;
}

module.exports = objKey;