//establish connection to db using mongoose..
const mongoose=require("mongoose");
// in url /student..i.e, db name...
// in test db data is stored here..
// const url="mongodb://127.0.0.1:27017/test";
// const url="mongodb+srv://sukanya271tulasi:sukanyatvs@cluster0.tahj1ah.mongodb.net/test?retryWrites=true&w=majority"
const url=`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.tahj1ah.mongodb.net/test?retryWrites=true&w=majority`
// console.log(process.env.DATABASE_USERNAME);
// console.log(process.env.DATABASE_PASSWORD);
//making connection..
const connect=async()=>{
try{
    console.log("Connection to mongodb...!!!!");
    const dbConnection = await mongoose.connect(url);
    // console.log("Connected =>",dbConnection);  //in terminal u can see dbconnection object..
    console.log("Connected =>");
}
catch(error){
    console.log("Error in connecting to db..",error);
}
}

module.exports=connect;
