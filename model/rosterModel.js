const rosterModel = (sequelize, DataTypes) => {

  const roster = sequelize.define('roster', {

    sn: {
      type: DataTypes.BIGINT
    },
    scheduleTime:{
      type:DataTypes.TIME 
    },
    programDetails: {
      type: DataTypes.TEXT
    },
    inTime:{
      type:DataTypes.TIME
    },
    outTime:{
      type:DataTypes.TIME
    },

     
    duration:{
      type:DataTypes.TIME 

    },
    onAirTime:{
      type:DataTypes.TIME
    },
    remarks:{
      type:DataTypes.TEXT
    }
  
})


return roster 

}

module.exports=rosterModel 