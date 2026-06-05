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
        },

        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:[
            "Content-Type",
            "Authorization",
            "Accept-Version"
        ],

        exposedHeaders:["X-Total-Count","Content-Range"],
        credentials:true, // enable support for cookies,
        preflightContinue:false,
        maxAge:600,
        optionsSuccessStatus:204
    })
};