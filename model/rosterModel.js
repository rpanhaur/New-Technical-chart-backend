const rosterModel = (sequelize, DataTypes) => {

  const roster = sequelize.define('roster', {

    sn: {
      type: DataTypes.BIGINT
    },
    programDetails: {
      type: DataTypes.TEXT
    },
    inTime: {
      type: DataTypes.TIME  
    },
    outTime: {
      type: DataTypes.TIME  
    }  ,
    duration:{
      type:DataTypes.TIME 

    },
    remarks:{
      type:DataTypes.TEXT
    }
  
})


return roster 

}

module.exports=rosterModel 