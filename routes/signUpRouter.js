const { postUsers } = require('../controller/userController')


const signUpRouter = require('express').Router()

signUpRouter.route('/sign-up').post(postUsers)

module.exports = signUpRouter