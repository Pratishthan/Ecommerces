const {Router} = require ("express");

const router = Router();
const controller = require("../controller/productcontroller")
const {Adminauthentication}=require("../middleware/admin")

router.get ("/",[Adminauthentication.verifyadmin], controller.getProducts);
router.get("/id/:pro_id",[Adminauthentication.verifyadmin], controller.getProductsById);
router.get("/name/:product_name",[Adminauthentication.verifyadmin], controller.getproductbyname);
router.post("/",[Adminauthentication.verifyadmin],controller.addProduct);
router.delete('/:pro_id',[Adminauthentication.verifyadmin],controller.deleteproductId);
router.put('/:pro_id',[Adminauthentication.verifyadmin],controller.updateproduct);



module.exports = router;
