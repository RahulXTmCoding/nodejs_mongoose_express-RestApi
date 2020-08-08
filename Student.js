const express=require('express')
const router=express.Router()
const schema=require("./StudentModel")

const controller=require('./StudentController')
router.route('/').get(controller.index).post(controller.new);
router.route('/:id').get(controller.view).put(controller.update).patch(controller.update).delete(controller.delete);



module.exports=router;