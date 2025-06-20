// const {  duties } = require("../database/connection")

// exports.fetchDuty = async function (req, res) {

//   try {
//     const duty = await duties.findAll()



//     res.json({
//       message: 'Shift Duty Data is Successfully fetched',
//       duties: duty
//     })

//   } catch (error) {
//     res.json({
//       message: 'Something is Wrong'
//     })

//   }


// }

// exports.postDuty = async function (req, res) {

 

//   try {
  

//     const {engineer1,engineer2,engineer3,engineer4,engineer5,engineer6,technician,electrician,status,shiftDate,shiftTime } = req.body

//     const result = await duties.create({
      
//       engineer1,
//       engineer2,
//       engineer3,
//       engineer4,
//       engineer5,
//       engineer6,      
//       technician,
//       electrician,
//       status,
//       shiftDate,
//       shiftTime

//     })
    
//     console.log(result);

//     res.json({
//       message: 'Shift Duty Schedule  is Successfully posted',
//       duties: result 
//     })

//   } catch (error) {

//     res.json({
//       message: 'Something is Wrong'
//     })

//   }


// }

// exports.deletedDuty = async function (req, res) {

//   try {
//     const id = req.params.id

//     const deletedDuty = await duties.destroy({
//       where: {
//         id: id
//       }
//     })
//     res.json({
//       message: 'Shift Duty Data  is Successfully Deleted',
//       deletedDuty
//     })

//   } catch (error) {
//     res.json({
//       message: 'Something is Wrong'
//     })

//   }


// }

// exports.editDuty = async function (req, res) {

//   try {
//     const id = req.params.id
//     const { engineer1,engineer2,engineer3,engineer4,engineer5,engineer6,technician,electrician,status,shiftDate,shiftTime, } = req.body

//     const dutyUpdate=await duties.update({
//       engineer1,
//       engineer2,
//       engineer3,
//       engineer4,
//       engineer5,
//       engineer6,      
//       technician,
//       electrician,
//       status,
//       shiftDate,
//       shiftTime

      

//     }, {
//       where: {
//         id: id
//       }
//     })

//     res.json({
//       message: 'Shift Duty is Successfully updated',
//       dutyUpdate
//     })

//   } catch (error) {

//     res.json({
//       message:'Something is wrong'
//     })

//   }

// }

// exports.singleDuty=async function(req,res){

//   try {
//     const id=req.params.id
//     const singleDuty=await duties.findByPk(id)

//     res.json({
//       message:'Single Shift Duty is Successfully fetched',
//       singleDuty
//     })
    
//   } catch (error) {

//     res.json({
//       message:'Something is Wrong'
//     })
    
//   }

 
// }


const {  duties } = require("../database/connection")

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

// exports.postDuty = async function (req, res) {

 

//   try {
  

//     const {engineer1,engineer2,engineer3,engineer4,engineer5,engineer6,technician,electrician,status,shiftDate,shiftTime } = req.body

//     const result = await duties.create({
      
//       engineer1,
//       engineer2,
//       engineer3,
//       engineer4,
//       engineer5,
//       engineer6,      
//       technician,
//       electrician,
//       status,
//       shiftDate,
//       shiftTime

//     })
    
//     console.log(result);

//     res.json({
//       message: 'Shift Duty Schedule  is Successfully posted',
//       duties: result 
//     })

//   } catch (error) {

//     res.json({
//       message: 'Something is Wrong'
//     })

//   }


// }
exports.postDuty=async (req, res) => {
  try {
    const duty = await duties.create({
      shiftDate: req.body.shiftDate,
      shiftTime: req.body.shiftTime,

      engineer1: req.body.engineer1,
      engineer1Status: req.body.engineer1Status,
      engineer2: req.body.engineer2,
      engineer2Status: req.body.engineer2Status,
      engineer3: req.body.engineer3,
      engineer3Status: req.body.engineer3Status,
      engineer4: req.body.engineer4,
      engineer4Status: req.body.engineer4Status,
      engineer5: req.body.engineer5,
      engineer5Status: req.body.engineer5Status,
      engineer6: req.body.engineer6,
      engineer6Status: req.body.engineer6Status,

      technician: req.body.technician,
      technicianStatus: req.body.technicianStatus,
      electrician: req.body.electrician,
      electricianStatus: req.body.electricianStatus,
    });

    res.status(201).json(duty);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    const { engineer1,engineer2,engineer3,engineer4,engineer5,engineer6,technician,electrician,status,shiftDate,shiftTime, } = req.body

    const dutyUpdate=await duties.update({
      engineer1,
      engineer2,
      engineer3,
      engineer4,
      engineer5,
      engineer6,      
      technician,
      electrician,
      status,
      shiftDate,
      shiftTime

      

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
 
 