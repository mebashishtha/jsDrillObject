const mapObject = (_object, cb) => {
    if(_object !== Object(_object)){
        return [];
    }

    //const value = require("./value");
    const _key = require("./key");
    const key = _key(_object);

    
    for (let index = 0; index < key.length; index++) {
          _object[key[index]] =  cb(_object[key[index]]);
           

    }

    return _object;
}

module.exports = mapObject;