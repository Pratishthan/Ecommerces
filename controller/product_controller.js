const pool = require("../dbconfig")

const queries = require("../queries.js");


const getProducts = (req, res) => {
    pool.query(queries.getProducts, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getProductsById = (req, res) => {
    const pro_id = parseInt(req.params.pro_id);
    pool.query(queries.getProductsById, [pro_id], (error, results) => {
        if (!results.rows.length) {
            res.send("product Does not exist")
        } else {
            res.send(results.rows);
            console.log(results);
        }

    })
}

const getproductbyname = (req, res) => {
    let pro_name = req.params.product_name;
    // query.getproductbyname += "'"+pro_name+"'"+";";
    // console.log(query.getproductbyname);
    pool.query(queries.getproductbyname, [pro_name], (error, results) => {
        if (!results.rows.length) {
            res.send("product Does not exist")
            console.log(error);
        } else {
            console.log(results);
            res.send(results.rows);
        }
        // if(error) throw error

    })
}

const addProduct = (req, res) => {
    let {
        product_name,
        price,
        product_details,
        category_id,
        rating,
        stock
    } = req.body;

    pool.query(queries.checkproductnameexists, [product_name], (error, results) => {
        if (results.rows.length) {
            res.send("Product name already exists")
        } else {
            pool.query(queries.addProduct, [product_name, price, product_details, category_id, rating, stock], (error, results) => {

                res.send("Products added successfully")
            })
        }
    })
    // console.log("insert into products (product_name, price,product_details)  values("+ product_name +" ,  "+ price +" , "+ product_details + ");");





}

const deleteproductId = (req, res) => {

    let pro_id = parseInt(req.params.pro_id);

    pool.query(queries.getProductsById, [pro_id], (error, results) => {
        if (!results.rows.length) {
            res.send("Product Does not exist")
        } else {
            pool.query(queries.deleteproductbyId, [pro_id], (error, results) => {
                if (error) throw error;
                res.send("product deleted  successfully")
            })
        }
    });

}


const updateproduct = (req, res) => {

    let pro_id = parseInt(req.params.pro_id);
    const {
        product_name,
        price,
        product_details
    } = req.body;
    pool.query(queries.getProductsById, [pro_id], (error, results) => {
        if (!results.rows.length) {
            res.send("Product Does not exist")
        } else {
            pool.query(queries.updateproduct, [product_name, price, product_details, pro_id], (error, results) => {
                if (error) throw error;
                res.send("Product Updated  successfully")
            })
        }
    });

}

module.exports = {
    getProducts,
    getProductsById,
    addProduct,
    deleteproductId,
    getproductbyname,
    updateproduct

}