const {MongoClient} = require("mongodb")

const url="mongodb://127.0.0.1:27017"; //always we define url..
const client=new MongoClient(url);   //new client..

const insertToDB = async (data) =>{
    try{
        const database = client.db("student"); //here we are giving our db name..
        const collection = database.collection("information") //here we mentioned collection name..
        await client.connect();
        //making connection to db
        // client.insertOne(data)  //data should be in json format..
        const dbResponse=await collection.insertOne(data) 
        await client.close(); //closing the connection to db
        return dbResponse;
    }
   catch(error){
    return error.message;
   }
}

const findInDb=async(query)=>{
    try{
        const database=client.db("student");
        const collection=database.collection("information");
        await client.connect()
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}
const updateInDb=async(filter,value)=>{
    try{
        const database=client.db("student");
        const collection=database.collection("information");
        await client.connect();
        const dbResponse=await collection.updateOne(filter,value);
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}
const deleteInDb=async(filter)=>{
    try{
        const database=client.db("student");
        const collection=database.collection("information");
        await client.connect();
        const dbResponse=await collection.deleteOne(filter);
        await client.close();
        return dbResponse;
    }
    catch(error){
        return error.message;
    }
}

module.exports={
    insertToDB,findInDb,updateInDb,deleteInDb
}