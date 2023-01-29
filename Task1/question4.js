const MongoClient=require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/studentsData",(error,client)=>{
    if(error){
        return console.log("unable to connect");
    }
    console.log("connected successfully");

    const db=client.db("studentsData");
    db.collection("assignmentsdata").insertMany([
    {
        Id: 812,
        Email: "e@e.com",
        Name:"Rick",
        Submission: 1,
        Grade:"N.A"
    }
],(error,result)=>{
        if(error){
            return console.log("unable to insert",error);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    client.close();
});