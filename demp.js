var express=require('express');
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');
var app=express();

app.get('/',function(req,res)
{
    res.send('Hello World!');
});

app.get('/auth', function(req, res)
    {
        const uri = "mongodb+srv://<admin>:<admin>@cluster0.wqxas1z.mongodb.net/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        // console.log(req);
        // res.send("Authenticating the user"+req);
        // res.sendFile(path.join(__dirname, '/first.html'));

        client.connect(async err => {
            const table = client.db("Users").collection("Login");
            // perform actions on the collection object
            const actual_pass = await table.findOne({username: "admin"});
            if(actual_pass == "admin"){
                res.send("You are allowed to enter!");
            }else{
                res.send("You are not allowed to enter");
            }
          });

          client.close();
    }
);

var server=app.listen(3000,function() {});


