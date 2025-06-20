// const {Sequelize,DataTypes}=require('sequelize');

// const rosterModel = require('../model/rosterModel');
// const dutyModel = require('../model/dutyModel');
// const sequelize=new Sequelize('postgresql://postgres.zjvordofvqyvjqtxriwj:rabindrapanhaur@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true')

// sequelize.authenticate().then(()=>{
//   console.log('Database is Successfully connected');
// }).catch((err)=>{
//   console.log('Database is not connected');
// })

// const db={}
// db.Sequelize=Sequelize
// db.sequelize=sequelize

// db.rosters=rosterModel(sequelize,DataTypes)
// db.duties=dutyModel(sequelize,DataTypes)

// sequelize.sync({alter:true}).then(()=>{
//   console.log('Database is Successfully Migrated');
// }).catch((error)=>{
//   console.log('Something is wrong ' +error);
// })

// module.exports=db 

const { Sequelize, DataTypes } = require('sequelize');

// Import models
const rosterModel = require('../model/rosterModel');
const dutyModel = require('../model/dutyModel');
const userModel = require('../model/userModel');

// Initialize Sequelize with your Supabase PostgreSQL connection
const sequelize = new Sequelize('postgresql://postgres.zjvordofvqyvjqtxriwj:rabindrapanhaur@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true', {
  dialect: 'postgres',
  logging: false, // Optional: Turn off SQL query logging
});

// Test DB connection
sequelize.authenticate()
  .then(() => console.log('✅ Database is successfully connected'))
  .catch((err) => console.error('❌ Database connection failed:', err));

// Define models
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.rosters = rosterModel(sequelize, DataTypes);
db.duties = dutyModel(sequelize, DataTypes);
db.users=userModel(sequelize,DataTypes)

// Sync models to DB
sequelize.sync({ alter: true }) // `alter:true` updates tables without dropping them
  .then(() => console.log('✅ Database is successfully migrated'))
  .catch((error) => console.error('❌ Migration error:', error));

// Export DB object
module.exports = db;
