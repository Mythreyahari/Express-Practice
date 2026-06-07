require("dotenv").config();
const express = require("express");
const {cofigureCors} = require("./config/corsConfig")

const app = express();
const PORT = process.env.PORT = 3000

// app.use(cors)

// middleware
app.use(requestLogger)
app.use(addTimeStamp)
app.use(cofigureCors())
app.use(express.json())


app.listen(PORT,()=>{
    console.log(`server is now running on port:${PORT}`);
    
})


