const dotenv=require("dotenv")
dotenv.config();
const express=require("express");
const bodyParser=require("body-parser")
const studentRouter=require("./routes/student")
const connect=require("./database/mongoose")


const app=express();
app.use(bodyParser.json());
app.use(studentRouter);

app.listen(7000,async ()=>{
    console.log("Server running at port 7000");
    console.log(process.env.DATABASE_USERNAME,process.env.DATABASE_PASSWORD);
    await connect();
});