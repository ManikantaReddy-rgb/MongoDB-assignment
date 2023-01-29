const MongoClient=require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/studentsData",(error,client)=>{
    if(error){
        return console.log("unable to connect");

    }
    console.log("connected successfully");

    const db=client.db("studentsData");



    db.collection("marksdata").find().sort( { Name: 1 } ).toArray().then((docs)=>{
        console.log("Details found");

        console.log(JSON.stringify(docs,undefined,2));
    },(error)=>{
        console.log("unable to fetch the data",error);
    });


    client.close();
});