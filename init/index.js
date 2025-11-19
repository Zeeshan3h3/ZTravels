const mongoose = require("mongoose")
const listing = require("../models/listing.js")
const dataDB = require("./sample.js")






async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Wonderlust")
}
main().then(() =>{
    console.log("COnnected to DBS")
}).catch((err) => {
    console.log(err)
})
//sample data addition..
const initDB = async () => {
    await listing.deleteMany({})
    
    dataDB.data = dataDB.data.map((obj) => 
        ({ ...obj, owner : "690e23a5f68edfb73def8423" }))
    await listing.insertMany(dataDB.data);
    console.log("Data saved Successfully!!!!!!!!!")
    
}



initDB();

