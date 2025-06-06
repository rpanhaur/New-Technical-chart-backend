const { rosters, duties } = require("../database/connection")

exports.fetchDuty = async function (req, res) {

  try {
    const duty = await duties.findAll()



    res.json({
      message: 'Shift Duty Data is Successfully fetched',
      duties: duty
    })

  } catch (error) {
    res.json({
      message: 'Something is Wrong'
    })

  }


}

exports.postDuty = async function (req, res) {

 

  try {
  

    const {engineer1,engineer2,engineer3,engineer4,engineer5,producer,anchor,camera1,camera2,technician,electrician } = req.body

    const result = await duties.create({
      
      engineer1,
      engineer2,
      engineer3,
      engineer4,
      engineer5,
      producer,
      anchor,
      camera1,
      camera2,
      technician,
      electrician

    })
    
    console.log(result);

    res.json({
      message: 'Shift Duty Schedule  is Successfully posted',
      duties: result 
    })

  } catch (error) {

    res.json({
      message: 'Something is Wrong'
    })

  }


}

exports.deletedDuty = async function (req, res) {

  try {
    const id = req.params.id

    const deletedDuty = await duties.destroy({
      where: {
        id: id
      }
    })
    res.json({
      message: 'Shift Duty Data  is Successfully Deleted',
      deletedDuty
    })

  } catch (error) {
    res.json({
      message: 'Something is Wrong'
    })

  }


}

exports.editDuty = async function (req, res) {

  try {
    const id = req.params.id
    const { engineer1,engineer2,engineer3,engineer4,engineer5,producer,anchor,camera1,camera2,technician,electrician } = req.body

    const dutyUpdate=await rosters.update({
      engineer1,
      engineer2,
      engineer3,
      engineer4,
      engineer5,
      producer,
      anchor,
      camera1,
      camera2,
      technician,
      electrician

      

    }, {
      where: {
        id: id
      }
    })

    res.json({
      message: 'Shift Duty is Successfully updated',
      dutyUpdate
    })

  } catch (error) {

    res.json({
      message:'Something is wrong'
    })

  }

}

exports.singleDuty=async function(req,res){

  try {
    const id=req.params.id
    const singleDuty=await duties.findByPk(id)

    res.json({
      message:'Single Shift Duty is Successfully fetched',
      singleDuty
    })
    
  } catch (error) {

    res.json({
      message:'Something is Wrong'
    })
    
  }

 
}
 