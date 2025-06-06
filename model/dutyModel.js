const dutyModel = (sequelize, DataTypes) => {

  const duty = sequelize.define('duty', {

   
    engineer1:{
      type:DataTypes.TEXT  
    },
    engineer2:{
      type:DataTypes.TEXT  
    },
    engineer3:{
      type:DataTypes.TEXT  
    },
    engineer4:{
      type:DataTypes.TEXT  
    },
    engineer5:{
      type:DataTypes.TEXT  
    },
    producer:{
      type:DataTypes.TEXT  
    },
    anchor:{
      type:DataTypes.TEXT  
    },
    camera1:{
      type:DataTypes.TEXT  
    },
    
    camera2:{
      type:DataTypes.TEXT  
    },
    technician:{
      type:DataTypes.TEXT  
    },
    electrician:{
      type:DataTypes.TEXT  
    } 

    
})


return duty 

}

module.exports=dutyModel 