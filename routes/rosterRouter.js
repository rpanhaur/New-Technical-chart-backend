const { fetchRoster, postRoster, deleteRoster, editRoster, singleRoster } = require('../controller/rosterController')

const router=require('express').Router()

router.route('/roster').get(fetchRoster).post(postRoster)
router.route('/roster/:id').delete(deleteRoster).patch(editRoster).get(singleRoster)

module.exports=router