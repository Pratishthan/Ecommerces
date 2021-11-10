const Router= require('express');
const controller = require("../controller/category_controller")
const router=Router();
const {Adminauthentication}=require("../middleware/admin")
router.get('/',[Adminauthentication.verifyadmin],controller.getAllcategory);
router.get('/id/:category_id',[Adminauthentication.verifyadmin],controller.getcategorybyId);
router.get('/name/:category_name',[Adminauthentication.verifyadmin],controller.getcategorybyname);
router.post('/',[Adminauthentication.verifyadmin],controller.addCategory);
router.delete('/:category_id',[Adminauthentication.verifyadmin],controller.deletecategorybyId);  //nw
router.put('/id/:category_id',[Adminauthentication.verifyadmin],controller.updatecategory);    //nw
module.exports = router;



