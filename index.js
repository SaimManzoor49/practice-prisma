const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors())




app.get('/',(req,res)=>{
    res.send('Hello World!!')
})

app.use('/api',require('./routes/userRoutes'))
app.use('/posts',require('./routes/postRoutes'))



app.listen(3500,()=>{
    console.log('app is listning on port 3500');
})