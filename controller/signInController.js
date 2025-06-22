const { users } = require("../database/connection")
const bcrypt =require('bcrypt')
const jwt=require('jsonwebtoken')

exports.signIn=async (req,res)=>{

  const {email,password}=req.body

  if(!email || !password){
    return res.status(401).json({
      message:'Enter your Email and Password'
    })
  }

  const userInfo=await users.findAll({
    where:{
      email:email
    }
  })
  if(userInfo.length==0){

    res.status(400).json({
      message:'Please Enter your Valid Email'
    })
  }else{

    const isPasswordMatch=bcrypt.compareSync(password,userInfo[0].password)

    if(isPasswordMatch){
      //Token Generation Process Code 

      const token=jwt.sign({id:userInfo[0].id},process.env.JWT_SECRET,{
        expiresIn:'1d'
      })

      res.status(200).json({
        token:token,
        message:'Congratulation You are Successfully Login '
      })
    }else{
      res.status(400).json({
        message:'Enter your Valid Credentials'
      })
    }


  }







}