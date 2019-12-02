const mongoose =require('mongoose')
const Schema = mongoose.Schema


const noteSchema =new Schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default:new Date
        },
    categoryId:{
            type:Schema.Types.ObjectId,
            required:true,
            ref:'Category'
        },
    userid:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
        }
})


//model
const Note=mongoose.model('Note',noteSchema)

module.exports =Note