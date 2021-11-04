const Router= require('express');
const controller = require("../controller/ordercontroller");
const router=Router();
const {Authentication}=require("../middleware/auth.js");
// router.get('/',controller.getOrders);
router.get('/:order_id',[Authentication.verifytoken],controller.getordersById);
router.post('/',[Authentication.verifytoken],controller.createorder);
router.delete('/:order_id',[Authentication.verifytoken],controller.deleteorerById);
// router.put('/:order_id',controller.updateorder);


module.exports = router;



