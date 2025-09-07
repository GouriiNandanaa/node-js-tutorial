const path = require('path')

console.log('The directory name is : ',path.dirname(__filename))    //directory name
console.log('The file name is : ',path.basename(__filename))    //filename
console.log('The extension is : ', path.extname(__filename))    //extension


// const joinPath = path.join(__filename, "test.txt")
const joinPath = path.join("user", "test.txt")
console.log(joinPath)
// used to join the terms into a path


const resolvePath = path.resolve("user","abc.txt")
console.log(resolvePath)
// to resolves the path to an absolute path

const normalizedPath = path.normalize('user/../../../abc.txt')
console.log(normalizedPath)
// cleans up and simplifies a file path string