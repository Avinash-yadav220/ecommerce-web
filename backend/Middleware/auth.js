
const{ validateToken }=require("../services/jwtAuth");

const verifyUser=(req,res,next)=>{
 const token=req.header('Authorization')?.split(" ")[1];
 if(!token){
  return res.status(401).json({msg:"NO token"})
 }
 try {
  const payload=validateToken(token);
   req.user=payload
   next()
 } catch (error) {
    return res.status(401).json({msg:"NO token"})
 }
}

 const isAdmin=(req,res,next)=>{
 if(req.user.role!=='admin'){
    return res.status(403).json({msg:"unauthorized"})
 }
 next();
}

module.exports={
verifyUser,
isAdmin
}


