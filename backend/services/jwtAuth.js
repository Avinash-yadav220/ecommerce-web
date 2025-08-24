const jwt=require("jsonwebtoken")
const secretKey="10ee79f64c838b4162df220477c32899a0f4a05181bd9016761eacfb2911b2c6"

const createToken=(user)=>{
 const payload={
    _id:user._id,
    name:user.name,
    email:user.email,
    role:user.role
 }
 const token=jwt.sign(payload,secretKey)
 return token;
}
const validateToken=(token)=>{
    if(typeof token != "string"){
        throw new Error("Token must be of string type") 
    }
 const userPayload=jwt.verify(token,secretKey)
 return userPayload;
}

module.exports={
    createToken,
    validateToken
}