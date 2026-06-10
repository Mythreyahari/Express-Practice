// this url versioning used in the most cases its more important
const urlVersioning = (version)=>(req,res,next)=>{
     if(req.path.startsWith(`/api/${version}`)){
        next();
     } else {
        return res.status(404).json({
            success:false,
            message:"API version is not supported"
        })
     }
};

// Header versioning it is also the important stuff but focus on more url 
const headerVersioning  = (version)=>(req,res,next)=>{
      if(req.get("Accept-Version") === version){
          next()
      } else {
          return res.status(404).json({
              success:false,
              message:"API version is not supported"
          })
      }
};

// content type versioning 
const contentTypeVersioning = (version)=>(req,res,next)=>{
      const contentType = req.get("Content-Type")
      if(contentType && contentType.includes(`application/vnd.api.${version}+json`)){
          next()
      } else {
          return res.status(404).json({
              success:false,
              message:"API version is not supported"
          })
      }
};

module.exports = {urlVersioning,contentTypeVersioning,headerVersioning};




