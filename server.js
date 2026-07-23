const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
  res.send("AI Boss Server Running 🤖");
});


app.post("/chat",(req,res)=>{

let message = req.body.message;

res.json({
reply: "AI Boss ne aapka message receive kiya: " + message
});

});


app.listen(3000,()=>{
console.log("Server running on port 3000");
});