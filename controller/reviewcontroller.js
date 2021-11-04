const pool = require("../dbconfig");
const query = require('../queries.js');


const getreviews = (req, res) => {
    const id = parseInt(req.params.product_id);
    pool.query(queries.getreviews, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addreview = (req, res) => {
    const {
        user_id,
        product_id,
        rating,
        review
    } = req.body;
    // pool.query(queries.checkproductnameexits, [product_name], (error, results) => {
    //     if (results.rows.length){
    //         res.send("Product name already exists")
    //     }``

    pool.query(queries.addreview, [user_id, product_id, rating, review], (error, results) => {
        if (error) throw error;
        res.status(201).send("Review added successfully")
    })
}



const updatereview = (req, res) => {

    const pro_id = parseInt(req.params.product_id);
    const rev_id = parseInt(req.params.review_id);
    const {
        token,
        rating,
        review
    } = req.body;
    pool.query(query.getproductbyId, [pro_id], (error, results) => {
        if (!results.rows.length) {
            res.send("Product Does not exist")
        } else {
            pool.query(query.updatereview, [token, rating, review], (error, results) => {
                if (error) throw error;
                res.send("Review Updated  successfully")
            })
        }
    });

}

const deletereviewId = (req, res) => {

    const pro_id = parseInt(req.params.product_id);;

    pool.query(query.getproductbyId, [pro_id], (error, results) => {
        if (error) {
            //res.send("Category Does not exist")
        } else {
            pool.query(query.deletereviewId, [pro_id], (error, results) => {
                if (error) throw error;
                res.send("review deleted  successfully")
            })
        }
    });

}




module.exports = {
    getreviews,
    addreview,
    updatereview,
    deletereviewId

}