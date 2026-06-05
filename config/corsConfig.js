const cors = require("cors");


const cofigureCors = ()=>{
    
   return cors({
   
        origin:(origin,callback)=>{
         const allowedOrgins = [
        "http://localhost:3000",
        "https://localhost:3000",
        "https://yourcustomdomain.com"
    ]
            if(!origin || allowedOrgins.indexOf(origin)){
                 callback(null,true)
            } else {
                callback(new Error("Not allowed by Cors"))
            }
        }
    })
};