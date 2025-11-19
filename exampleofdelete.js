const express = require("express")
const app = express();
const mongoose = require("mongoose")
const { Schema } = mongoose

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/ZEE")
}
main().then(() => {
    console.log("Connected!!@!")
}).catch((err) => {
    console.log(err)
})


const customerData = new Schema({
     item : String,
     price : Number
})
const order = mongoose.model("order",customerData )
const Addorder = async () => {
    let res = await order.insertMany([
        {item:"samosa" , price: 10},
        {item :"burger", price: 30},
        {item : "Pizza", price: 50}
    ])
    console.log(res)
}

const cust = new Schema({
    name: String,
    orders : [{
        type: Schema.Types.ObjectId,
        ref : "order"
}]

})

cust.post("findOneAndDelete", async (custumer)=> {
    if(custumer.orders.length) {
       let res = await order.deleteMany({ _id : {$in : custumer.orders}})
       console.log(res)
    }
    
})







const custdata = mongoose.model("custdata", cust )
const addcustdata = async () => {
    let cust1 = new custdata({
        name:"MD AFROZ",

    })
    let order1 = await order.findOne({item:"samosa"})
    let order2 = await order.findOne({item:"burger"})
    let order3 = await order.findOne({item:"Pizza"})

    
    cust1.orders.push(order1)
    cust1.orders.push(order2)
    cust1.orders.push(order3)

    const res = await cust1.save();
    console.log(res)


}
let findcust = async () =>  {
    let result = await custdata.find({}).populate("orders")
    console.log(result[0])
}

let delmany = async () => {
    let result = await custdata.findByIdAndDelete('6900fcdd82d2226f99b746f0').populate("orders")
    console.log(result)
    
}

delmany()

