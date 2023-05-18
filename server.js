

const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>hello, world</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at ikwanthareq@gmail.com");
});

app.get("/about", function(req, res){
    res.send("my name is ikwan thareq k and the owner of this web!!");
});

// listen is the server listen on port 3000

app.listen(3000, function(){
    console.log("server started in port 3000")
});
