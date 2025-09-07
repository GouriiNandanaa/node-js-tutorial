const fs = require('fs')
const path = require('path')

const dataFolder = path.join(__dirname,"data")




// all this are synchronous way of file methods
// SYNCHRONOUS 


if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log('data subfolder created')
}
// this is how we will check if a folder exist with the name and if not creating a new folder



const filePath = path.join(dataFolder, "abc.txt")
fs.writeFileSync(filePath, 'Hello from node js')
console.log('file created successfully')
// this is how we will create a file and write contents into the file


const readContentsFromFile = fs.readFileSync(filePath,'utf-8')
console.log('File content:', readContentsFromFile)
// this is how we will read contents from the given file


fs.appendFileSync(filePath, "\nthis is the newly added line");
console.log("Newly added line")
// this is how we will append a line to a file




//ASYNCHRONOUS

const asyncFilePath = path.join(dataFolder, "async-eg.txt")
fs.writeFile(asyncFilePath, "hello, async node js", (err)=>{
    if(err) throw err;
    console.log("file created in the async section")
})



fs.readFile(asyncFilePath, 'utf-8', (err)=>{
    if(err) throw err;
    console.log("file read correctly");
})


fs.appendFile(asyncFilePath, "\n this is the new page", (err)=>{
    if(err) throw err;
    console.log("appended")
})