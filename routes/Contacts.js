import  Express  from "express";

const router = Express.Router();

router.route('/').get();

router.route('/').post((req,res)=>{
    res.json({"Message":"This is contact Page which is created"})
})


router.route('/:id').get((req,res)=>{res.json({"Messgae":`Get contact for ${req.params.id}`})})
router.route('/:id').put((req,res)=>{res.json({"Messgae":`Update contact for ${req.params.id}`})})
router.route('/:id').delete((req,res)=>{res.json({"Messgae":`Delete contact for ${req.params.id}`})})
export default router