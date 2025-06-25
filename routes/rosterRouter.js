const { fetchRoster, postRoster, deleteRoster, editRoster, singleRoster } = require('../controller/rosterController')
const {signIn}=require('../controller/signInController')


const rosterRouter=require('express').Router()

rosterRouter.route('/roster').get(fetchRoster).post(postRoster)
rosterRouter.route('/roster/:id').delete(deleteRoster).patch(editRoster).get(singleRoster)

module.exports=rosterRouter