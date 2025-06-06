const { rosters } = require("../database/connection")

exports.fetchRoster = async function (req, res) {

  try {
    const roster = await rosters.findAll()



    res.json({
      message: 'Roster is Successfully fetched',
      rosters: roster
    })

  } catch (error) {
    res.json({
      message: 'Something is Wrong'
    })

  }


}

exports.postRoster = async function (req, res) {

 

  try {
  

    const {sn,scheduleTime,programDetails,inTime,outTime,duration,onAirTime,remarks,shift,shiftDate } = req.body

    const result = await rosters.create({
      sn,
      scheduleTime,
      programDetails,
      inTime,
      outTime,
      duration,
      onAirTime,
      remarks,
      shift,
      shiftDate


    })
    
    console.log(result);

    res.json({
      message: 'Roster is  is Successfully posted',
      results: result
    })

  } catch (error) {

    res.json({
      message: 'Something is Wrong'
    })

  }


}

exports.deleteRoster = async function (req, res) {

  try {
    const id = req.params.id

    const deletedRoster = await rosters.destroy({
      where: {
        id: id
      }
    })
    res.json({
      message: 'Roster is Successfully Deleted',
      deletedRoster
    })

  } catch (error) {
    res.json({
      message: 'Something is Wrong'
    })

  }


}

exports.editRoster = async function (req, res) {

  try {
    const id = req.params.id
    const { sn,scheduleTime,programDetails,inTime,outTime,duration,onAirTime,remarks,shift,shiftDate } = req.body

    const rosterUpdate=await rosters.update({
      sn,
      scheduleTime,
      programDetails,
      inTime,
      outTime,
      duration,
      onAirTime,
      remarks,
      shift,
      shiftDate

      

    }, {
      where: {
        id: id
      }
    })

    res.json({
      message: 'Roster is Successfully updated',
      rosterUpdate
    })

  } catch (error) {

    res.json({
      message:'Something is wrong'
    })

  }

}

exports.singleRoster=async function(req,res){

  try {
    const id=req.params.id
    const singleRoster=await rosters.findByPk(id)

    res.json({
      message:'Single Roster is Successfully fetched',
      singleRoster
    })
    
  } catch (error) {

    res.json({
      message:'Something is Wrong'
    })
    
  }

 
}
 