const MongoClient=require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/studentsData",(error,client)=>{
    if(error){
        return console.log("unable to connect");
    }
    console.log("connected successfully");

    const db=client.db("studentsData");
    db.collection("marksdata").insertMany([
    {
        Id: 101,
        Name:"Alex",
        Marks: 90,
        Grade:"A",
        Date: "2023-11-10",
    },
    {
        Id: 102,
        Name:"John",
        Marks: 80,
        Grade:"B",
        Date: "2023-10-11",
    },
    {
        Id: 103,
        Name:"Sam",
        Marks: 92,
        Grade:"A",
        Date: "2023-11-10",
    },
    {
        Id: 104,
        Name:"Rob",
        Marks: 74,
        Grade:"C",
        Date: "2023-11-10",
    },
    {
        Id: 105,
        Name:"Jax",
        Marks: 93,
        Grade:"A",
        Date: "2023-10-11",
    }
],(error,result)=>{
        if(error){
            return console.log("unable to insert",error);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    client.close();
});