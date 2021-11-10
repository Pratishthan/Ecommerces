

const Router= require('express');
const controller = require("../controller/cart_controller")
const router=Router();
const {Authentication}=require("../middleware/auth.js");





router.post('/add',[Authentication.verifytoken],controller.addcart);
router.put('/update/:cart_id',[Authentication.verifytoken],controller.updatecart);
router.delete('/delete/:cart_id',[Authentication.verifytoken],controller.deletecartbyId);
module.exports = router;