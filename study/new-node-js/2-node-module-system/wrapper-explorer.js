console.log("Node module wrapper explorer");

console.log('Filename from explorer',__filename)
console.log('Dirname from explorer',__dirname)

console.log('__filename',__filename)
module.exports.greet = function (name) {
    console.log(`Hello ${name}`)
}