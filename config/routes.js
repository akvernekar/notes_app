const express=require('express')
const router=express.Router()
const notescontrollers =require('../app/controllers/notescontrollers')
const categoriescontrollers =require('../app/controllers/categoriescontrollers')
const usercontroller=require('../app/controllers/usercontroller')
const {authenticateUser}=require('../app/middlewares/authentication')


router.get('/notes',authenticateUser,notescontrollers.list)
router.get('/notes/:id',authenticateUser,notescontrollers.show)
router.post('/notes',authenticateUser,notescontrollers.create)
router.delete('/notes/:id',authenticateUser,notescontrollers.remove)
router.put('/notes/:id',authenticateUser,notescontrollers.update)

router.get('/categories',authenticateUser,categoriescontrollers.list)
router.post('/categories',authenticateUser,categoriescontrollers.create)
router.get('/categories/:id',authenticateUser,categoriescontrollers.show)
router.put('/categories/:id',authenticateUser,categoriescontrollers.update)
router.delete('/categories/:id',authenticateUser,categoriescontrollers.remove)

router.post('/users/register',usercontroller.create)
router.post('/users/login',usercontroller.login)
router.get('/users/account',authenticateUser,usercontroller.show)
router.delete('/users/logout',authenticateUser,usercontroller.remove)


module.exports=router