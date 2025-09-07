const firstModule = require('./first-module')
firstModule.add(3,4)


try{
    console.log("Trying to divide by 0")
    let result = firstModule.divide(0,10);
    console.log(result)
}catch(error){
    console.log("caught an error ", error.message)
}