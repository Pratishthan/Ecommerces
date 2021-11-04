const {Router} = require ("express");

const router = Router();
const {Authentication}=require("../middleware/auth.js")

const controller = require("../controller/reviewcontroller")

router.get('/product_id/reviews',[Authentication.verifytoken],controller.getreviews);
router.post('/product_id/review',[Authentication.verifytoken],controller.addreview);
router.delete('/product_id/reviews',[Authentication.verifytoken],controller.deletereviewId);
router.put('/product_id/reviews/reviewid',[Authentication.verifytoken],controller.updatereview);

module.exports = router;