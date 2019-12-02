const Note=require('../models/note')


module.exports.list=(req,res)=>{
    Note.find({userid:req.user._id}).populate("categoryId")
    .then((notes)=>{
     res.json(notes)
    }).catch((err)=>{
     res.json(err)
    })
}

// app.get('/notes/:id',(req,res)=>{
//     const id=req.params.id
//     Note.find()
//     .then((note)=>{
//        res.json(note.find(item=>{
//                 return item._id==id}))

module.exports.show=(req,res)=>{
    const id=req.params.id
    Note.findOne({_id:id,userid:req.user._id}).populate('categoryId')
       .then((note)=>{
           if(note){
               res.json(note) 
           }else{
               res.json({})  
           }
   })
   .catch((err)=>{
       res.json(err)
   })
}


module.exports.remove=(req,res)=>{
   const id=req.params.id
   Note.findOneAndDelete({_id:id,userid:req.user._id})
      .then((note)=>{
          if(note){
              res.json(note) 
          }else{
              res.json({})  
          }
  })
  .catch((err)=>{
      res.json(err)
  })
}

module.exports.update=(req,res)=>{
   const id=req.params.id
   const body=req.body
   Note.findByIdAndUpdate({_id:id,userid:req.user._id},body,{new:true ,runValidators:true})
  .then((note)=>{
          if(note){
              res.json(note) 
          }else{
              res.json({})  
          }
  })
  .catch((err)=>{
      res.json(err)
  })
}

module.exports.create=(req,res)=>{
   const body=req.body
   const note=new Note(body)
   note.userid=req.user._id
   note.save()
   .then((note)=>{
       res.json(note)
   })
   .catch((err)=>{
       res.json(err)
   })
}
