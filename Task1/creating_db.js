const MongoClient=require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/studentsData",(error,client)=>{
    if(error){
        return console.log("unable to connect");
    }
    console.log("connected successfully");

    const db=client.db("studentsData");
    db.collection("assignmentsdata").insertMany([
    {
        Id: 101,
        Email: "a@a.com",
        Name:"Alex",
        Department: "CSE",
        Submission: 1,
        Grade:"N.A"
    },
    {
        Id: 203,
        Email: "b@a.com",
        Name:"John",
        Department: "CIVIL",
        Submission: 0,
        Grade:"N.A"
    },
    {
        Id: 305,
        Email: "c@c.com",
        Name:"Sam",
        Department: "CSE",
        Submission: 0,
        Grade:"N.A"
    },
    {
        Id: 719,
        Email: "d@d.com",
        Name:"Rob",
        Department: "ELECTRONICS",
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