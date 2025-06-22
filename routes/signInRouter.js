const { signIn } = require('../controller/signInController')

const signRouter=require('express').Router()

signRouter.route('/sign-in').post(signIn)



module.exports=signRouter
