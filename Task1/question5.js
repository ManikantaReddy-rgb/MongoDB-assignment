const MongoClient=require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/studentsData",(error,client)=>{
    if(error){
        return console.log("unable to connect");

    }
    console.log("connected successfully");

    const db=client.db("studentsData");
    db.collection("assignmentsdata").findOneAndUpdate({
        Name:"Sam"
    },{
        $set:{
            Department: "MECHANICAL"
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });
    client.close();
});