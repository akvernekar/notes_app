const express =require('express')
const connectDb =require('./config/database')
const router =require('./config/routes')
const cors =require('cors')
const app=express()
const port =3015

connectDb()



// app.get('/',(req,res)=>{
//     res.send('welcome to the note app')
// })
app.use(express.json())
app.use(cors())
app.use('/',router)

app.listen(port,()=>{
    console.log('listning to port', port)
})
