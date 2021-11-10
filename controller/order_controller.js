const pool = require("../dbconfig")

const queries = require("../queries.js");



// const getOrders = (req,res) => {
//     pool.query(queries.getOrders, (error, results) => {
//         if (error){
//             console.log(error);
//         } 
//         else{
//             console.log(results);
//             res.send(results)

//         }
//     })
//  }


const getordersById = (req, res) => {
    const ord_id = parseInt(req.params.order_id);
    pool.query(queries.getorderById, [ord_id], (error, results) => {
        //   if (error) throw error ;
        if (!results.rows.length) {
            res.send("Order Id does not exist");
        } else {
            res.send(results.rows);
        }
    })
}

const createorder = (req, res) => {
    const {
        user_id,
        order_address,
        product_id,
        quantity,
        total_price,
        shipping_price,
        pay_through,
        payment_reference
    } = req.body;
    // pool.query(queries.checkorderidexists,[user_id,order_address, product_id, quantity, item_price, shipping_price, total_price, pay_through], (error,results) => {

    //     if (results.rows.length){
    //         res.send("Order id already exists")
    //     }

    // else{

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var created_at = date + ' ' + time;
    let payment_status = 'Success';
    let order_status = 'Ordered';
    let delivered_at = created_at;
    pool.query(queries.createorder, [user_id, order_address, product_id, created_at, quantity, order_status, created_at, total_price, shipping_price, delivered_at, pay_through, payment_status, payment_reference], (error, results) => {
        if (error) throw error;
        res.send("Order created successfully")
    })
    // }
    // });

}




const deleteorerById = (req, res) => {

    const ord_id = parseInt(req.params.order_id);;

    pool.query(queries.getorderById, [ord_id], (error, results) => {
        if (!results.rows.length) {
            res.send("order Id Does not exist")
        } else {
            pool.query(queries.deleteorderbyId, [ord_id], (error, results) => {
                if (error) throw error;
                res.send("order deleted  successfully")
            })
        }
    });

}
// const updateorder=(req,res)=>{

//     const ord_id=parseInt(req.params.order_id);
//     const{token, order_address, product_id, quantity, item_price, shipping_price, total_price, payment_method} = req.body;
//     pool.query(query.getorerbyId,[ord_id],(error,results)=>{
//     if(!results.rows.length){
//         res.send("Order Does not exist")
//     }
//     else{
//         pool.query(query.updateproduct,[order_address, product_id, quantity, item_price, shipping_price, total_price, payment_method],(error,results)=>{
//             if(error) throw error;
//             res.send("Order Updated  successfully")
//         })
//     }
//     });

//     }


module.exports = {
    // getOrders,
    getordersById,
    createorder,
    deleteorerById,
    // updateorder

}