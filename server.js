const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"node_modules")));
app.get("/",
async (req,res)=>{
    await res.sendFile(path.resolve(__dirname,"public","index.html"));
})
app.get('/threeAddons/:type/:file', (req, res) => {
    res.sendFile(path.resolve(__dirname,"node_modules","three","examples","jsm",req.params["type"],req.params["file"]));
  })
app.all('*',(req,res)=>{
    res.send("<h1>404 boiii</h1>").status(404);
});

app.listen(16, "10.138.0.2", ()=>{console.log("Listening at IP 35.203.145.230 port 16")});
//app.listen(3000, "localhost", ()=>{console.log("Listening on localhost:3000")});