const lodash = require('lodash');
const names = ['gouri','nandana'];

const capitalize = lodash.map(names, lodash.capitalize)
console.log(capitalize)