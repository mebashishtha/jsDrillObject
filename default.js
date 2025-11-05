function defaults(obj, defaultProps) {
    if (obj === null) {
        return obj;
    }
    /*
    const _key = require("./key");
    const key = _key(obj);



    for (let index = 0; index < key.length; index++) {
        
            if (obj[key[index]] === void 0) {
                obj[key[index]] = defaultProps[key[index]];
            }
    }
    */

    for(let key in defaultProps){
        if(obj[key] === undefined){
            obj[key] = defaultProps[key];
        }
    }
    return obj;
}

module.exports = defaults;