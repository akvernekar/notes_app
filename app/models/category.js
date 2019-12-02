const mongoose= require('mongoose')
const Schema = mongoose.Schema


const category =new Schema({
    title:{
        type:String,
        required:true,
    
    },
    userid:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
})

//model
const Category=mongoose.model('Category',category)

module.exports =Category