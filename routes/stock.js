const express=require("express");
const router=express.Router();
const {handleStockResponse,handleStaticRequest} =require("../Controller/stock");

router.get('/',handleStaticRequest);
router.post('/data',handleStockResponse);

module.exports=router;