const express = require("express");
const app = express();
const router = require("./Route/router")

app.use(router)

app.listen(3000,()=>{
    console.log("서버시작");
})