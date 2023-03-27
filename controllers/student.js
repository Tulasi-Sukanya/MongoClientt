// const mongoClient = require("../database/connection")
// const studentEnrollment = async(req,res)=>{
//     const studentData=req.body;
//     try{
//         const result = await mongoClient.insertToDB(studentData);
//         console.log("The result of database operation =>",result);
//         return res.status(200).send(result);
//     }
//     catch(error){
//         console.log("something went wrong while performing db operation");
//         return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
//     }

//     // return res.status(200).send({message:studentData})
// }

// const getStudentData=async (req,res)=>{
//     const queryParams=req.query;
//     console.log(queryParams);
//     try{
//         const result=await mongoClient.findInDb(queryParams);
//         console.log("the result of database operation =>",result);
//         return res.status(200).send(result);
//     }
//     catch(error){
//         console.log("Something went wrong while performing db operation");
//         return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
//     }
// }

// const updateStudentData=async(req,res)=>{
//     const updateData=req.body;
//     console.log(updateData);
//     const filter=updateData.filter;
//     const value={$set:updateData.value}
//     try{
//         const result=await mongoClient.updateOne(filter,value);
//         console.log("the result of database operation =>",result);
//         return res.status(200).send(result);
//     }
//     catch(error){
//         console.log("Something went wrong while performing db operation");
//         return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
//     }
// }

// const deleteStudentData=async(req,res)=>{
//     const condition=req.query;
//     console.log(condition);
//     try{
//         const result=await mongoClient.deleteInDb(condition);
//         console.log("the result of database operation =>",result);
//         return res.status(200).send(result);
//     }
//     catch(error){
//         console.log("Something went wrong while performing db operation");
//         return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
//     }
// }

// module.exports={
//     studentEnrollment,getStudentData,updateStudentData,deleteStudentData
// }


//MONGOOSE
//impoort information model
const {Information} =require("../models/student")
const studentEnrollment = async(req,res)=>{
    const studentData=req.body;

    try{
        const informationDocument = new Information({
            firstName:studentData.firstName,
            lastName:studentData.lastName,
            age:studentData.age,
            email:studentData.email,
            mobile:studentData.mobile,
            created:Date.now()
        });
        // const validateResult=studentEnrollment.validatesync();
        // console.log(validateResult);
        //save data in collection..
        const dbresponse = await informationDocument.save();
        // await Information.insertMany(informationDocument)
        console.log("Data is Saved =>",dbresponse);
        return res.status(200).send({message:"Student info is Saved"})
    }
    catch(error){
        console.log("Something went wrong while performing db operation");
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const getStudentData=async (req,res)=>{
        const queryParams=req.query;
        console.log(queryParams);
        const query={"firstName":queryParams.firstName}
        try{
           const result = await Information.find(query);
           console.log("Data fetched =>",result);
           return res.status(200).send({message:"Student info is Fetched.."})
        }
        catch(error){
            console.log("Something went wrong while performing db operation");
            return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
        }
    }
    
 const updateStudentData=async(req,res)=>{
            const updateData=req.body;
            console.log(updateData);
            const filter=updateData.filter;
            console.log(filter);
            const value={$set:updateData.value}
            console.log(value);
            try{
                const result=await Information.updateOne(filter,value);
                console.log("the result of database operation =>",result);
                return res.status(200).send(result);
            }
            catch(error){
                console.log("Something went wrong while performing db operation");
                return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
            }
        }
 const deleteStudentData=async(req,res)=>{
                const condition=req.query;
                console.log(condition);
                try{
                    const result=await Information.deleteOne(condition);
                    console.log("the result of database operation =>",result);
                    return res.status(200).send(result);
                }
                catch(error){
                    console.log("Something went wrong while performing db operation");
                    return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
                }
            }

module.exports={
    studentEnrollment,getStudentData,updateStudentData,deleteStudentData
}