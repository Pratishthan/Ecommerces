const pool = require('../dbconfig');
const query = require('../queries');
// const Router= require('express');
// const router = Router();
// const port =3000;


// router.get('/',(req,res)=>{
// res.send("Creating cart");
// })

const addcart = (req, res) => {

    const {
        user_id,
        product_id,
        total_items,
        total_price,
        total_discount,
        delivery_fee,
        quantity
    } = req.body;




    pool.query(query.addCart, [user_id, product_id, total_items, total_price, total_discount, delivery_fee, quantity], (error, results) => {
        if (error) throw error;
        res.send("Cart Successfully added")
    })


}
const updatecart = (req, res) => {

    const cart_id = parseInt(req.params.cart_id);
    const {
        product_id,
        total_items,
        total_price,
        total_discount,
        delivery_fee,
        quantity
    } = req.body;
    pool.query(query.getcartbyId, [cart_id], (error, results) => {
        if (!results.rows.length) {
            res.send("Cart Does not exist")
        } else {
            pool.query(query.updatecart, [product_id, total_items, total_price, total_discount, delivery_fee, quantity, cart_id], (error, results) => {
                if (error) throw error;
                res.send("Cart Updated  successfully")
            })
        }
    });

}
const deletecartbyId = (req, res) => {

    const cart_id = parseInt(req.params.cart_id);

    pool.query(query.getcartbyId, [cart_id], (error, results) => {
        if (!results.rows.length) {
            res.send("Cart does not exist")
        } else {
            pool.query(query.deletecartbyId, [cart_id], (error, results) => {
                if (error) throw error;
                res.send("Cart deleted  successfully")
            })
        }
    });

}
// const addcart=(req,res)=>{

//     const{name,details}=req.body;



// }
module.exports = {
    addcart,
    updatecart,
    deletecartbyId
};