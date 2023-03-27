const mongoose=require("mongoose");


//schema definition..i.e,,defining structure to the data of the document..
const informationSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    email:String,
    mobile:String,
    // city:String,
    created:Date
    //Schema validation..i.e required fields..
    // firstName:{type:String,required:true},
    // lastName:String,
    // age:Number,
    // email:{type:String,required:true},
    // mobile:String,
    // created:Date,
});

// "collection name" and schema name .. in model
const Information = mongoose.model("information",informationSchema);

module.exports={
    Information
};