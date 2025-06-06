const {Sequelize,DataTypes}=require('sequelize');

const rosterModel = require('../model/rosterModel');
const dutyModel = require('../model/dutyModel');
const sequelize=new Sequelize('postgresql://postgres.zjvordofvqyvjqtxriwj:rabindrapanhaur@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true')

sequelize.authenticate().then(()=>{
  console.log('Database is Successfully connected');
}).catch((err)=>{
  console.log('Database is not connected');
})

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.rosters=rosterModel(sequelize,DataTypes)
db.duties=dutyModel(sequelize,DataTypes)

sequelize.sync({alter:true}).then(()=>{
  console.log('Database is Successfully Migrated');
}).catch((error)=>{
  console.log('Something is wrong ' +error);
})

module.exports=db 