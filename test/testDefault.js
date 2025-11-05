const _default = require("../default");

const testObject = { name: 'Bruce Wayne'};
const defaultValue = {name: "carles", age: 19, loaction: "Navi mumbai"};

console.log(_default(testObject,defaultValue));