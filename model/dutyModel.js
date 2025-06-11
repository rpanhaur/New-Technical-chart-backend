// const { Sequelize } = require("../database/connection")

// const dutyModel = (sequelize, DataTypes) => {

//   const duty = sequelize.define('duty', {

   
//     engineer1:{
//       type:DataTypes.TEXT  
//     },
//     engineer2:{
//       type:DataTypes.TEXT  
//     },
//     engineer3:{
//       type:DataTypes.TEXT  
//     },
//     engineer4:{
//       type:DataTypes.TEXT  
//     },
//     engineer5:{
//       type:DataTypes.TEXT  
//     },
//     engineer6:{
//       type:DataTypes.TEXT  
//     },
    
//     technician:{
//       type:DataTypes.TEXT  
//     },
//     electrician:{
//       type:DataTypes.TEXT  
//     } ,
//     shiftDate: {
//       type: Sequelize.DATEONLY,  
//       allowNull: false
//     },
//     shiftTime: {
//       type: Sequelize.ENUM('Morning', 'Evening', 'Night'),
//       allowNull: false
//     }

    
// })


// return duty 

// }

// module.exports=dutyModel 

const dutyModel = (sequelize, DataTypes) => {
  const duty = sequelize.define('duty', {
    engineer1: {
      type: DataTypes.TEXT
    },
    engineer2: {
      type: DataTypes.TEXT
    },
    engineer3: {
      type: DataTypes.TEXT
    },
    engineer4: {
      type: DataTypes.TEXT
    },
    engineer5: {
      type: DataTypes.TEXT
    },
    engineer6: {
      type: DataTypes.TEXT
    },
    technician: {
      type: DataTypes.TEXT
    },
    electrician: {
      type: DataTypes.TEXT
    },
    shiftDate: {
      type: DataTypes.DATE 
      
      
    },
    shiftTime: {
      type: DataTypes.ENUM('Morning', 'Evening', 'Night'), // ✅ use DataTypes
     
    }
  });

  return duty;
};

module.exports = dutyModel;
