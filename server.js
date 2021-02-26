const express = require("express");
const app = express()
const router = require("./routes")

app.use(router)

app.listen(8081, (req, res)=>{
    console.log("Run")
})