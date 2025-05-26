const express=require('express')
const rosterRouter=require('./routes/rosterRouter')
const cors=require('cors')



const app=express()
require('./database/connection')

app.use(cors())

app.use(express.json())

app.use('/api',rosterRouter)







app.listen(3000,()=>{
  console.log('server address: http://localhost:3000');
})