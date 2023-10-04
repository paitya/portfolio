const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>
{
    res.render('index',{title:"Home"})
})
router.get('/about',(req,res,next)=>{
    res.render('about',{title:'About me'})
})

router.get('/contact',(req,res,next)=>{
    res.render('contact',{title:'Contact us'})
})
router.get('/service',(req,res,next)=>{
    res.render('service',{title:'Services'})
})
router.get('/projects',(req,res,next)=>{
    res.render('projects',{title:'Project'})
})

//router.get('/public/images')
//router.get('/public/style')
//router.get('/public/js/scripts')
module.exports=router;