const {  fetchDuty, postDuty, deletedDuty, editDuty, singleDuty } = require('../controller/dutyController')




const dutyRouter=require('express').Router()

dutyRouter.route('/duties').get(fetchDuty).post(postDuty)
dutyRouter.route('/duties/:id').delete(deletedDuty).patch(editDuty).get(singleDuty)

module.exports=dutyRouter