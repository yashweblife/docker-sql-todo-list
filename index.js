const express = require("express");
const app = express()
const port = process.env.PORT || 3000;


app.get("/",(req, res)=>{
    res.send("HELLO WORLD")
})
app.listen(port, ()=>{console.log("PORT AT: ", port)})