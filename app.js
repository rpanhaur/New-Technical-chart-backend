const express=require('express')

const rosterRouter=require('./routes/rosterRouter')
const dutyRouter=require('./routes/dutyRouter')
const cors=require('cors')

const dotenv=require('dotenv')
const signUpRouter = require('./routes/signUpRouter')
const signRouter = require('./routes/signInRouter')


dotenv.config()


const app=express()
require('./database/connection')

app.use(cors())

app.use(express.json())



app.use('/api',rosterRouter)
app.use('/api',dutyRouter)
app.use('/api',signUpRouter)
app.use('/api',signRouter)





const port=process.env.PORT


app.listen(port,()=>{
  console.log(`server address: http://localhost: ${port}`);
})