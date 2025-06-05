const rosterModel = (sequelize, DataTypes) => {

  const roster = sequelize.define('roster', {

    sn: {
      type: DataTypes.INTEGER
    },
    scheduleTime:{
      type:DataTypes.TEXT  
    },
    programDetails: {
      type: DataTypes.TEXT
    },
    inTime:{
      type:DataTypes.TEXT 
      
    },
    outTime:{
      type:DataTypes.TEXT
      
    },

     
    duration:{
      type:DataTypes.TEXT 
     

    },
    onAirTime:{
      type:DataTypes.TEXT 
    },
    remarks:{
      type:DataTypes.TEXT
    },
    shift: {
      type: DataTypes.STRING
    },
    shiftDate: {
      type: DataTypes.STRING 
    }
    
  
})


return roster 

}

module.exports=rosterModel 