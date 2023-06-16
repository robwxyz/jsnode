//manual appr. (create package.json in the root)
//npm init (step by step)
//npm init -y (all default)
//npm i name


const _ = require('lodash');
const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)
