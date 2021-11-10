// const router = Router();
// const port =3000;
const pool = require('../dbconfig.js');
const query = require('../queries.js');



// pool.connect((error) => {
//     if (error) {
//         console.log(result);
//     } else {
//         console.log("Connected to PSQL");
//     }
// })

// router.get('/',(req,res)=>{
// res.send("Creating cart");
// })
const getAllcategory = (req, res) => {
    pool.query(query.getAllcategory, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows);
    })
}
const getcategorybyId = (req, res) => {
    console.log("Inside the route");
    const cat_id = parseInt(req.params.category_id);
    // query.getcategorybyId += cat_id+";";
    pool.query(query.getcategorybyId[cat_id], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            console.log(results);
            res.send(results.rows);
        }

    })
}
const getcategorybyname = (req, res) => {
    const cat_name = req.params.category_name;
    // query.getcategorybyname += "'"+cat_name+"'"+";";
    // console.log(query.getcategorybyname);
    pool.query(query.getcategorybyname[cat_name], (error, results) => {
        if (error) {
            res.send("Category Does not exist")
        } else {
            console.log(results.rows);
            res.send(results.rows);
        }
        // if(error) throw error

    })
}
const addCategory = (req, res) => {

    const {
        name,
        details
    } = req.body;

    pool.query(query.checkcategoryexist, [name], (error, results) => {
        if (results.rows.length) {
            res.send("Category with same name already exists")
        } else {
            pool.query(query.addCategory, [name, details], (error, results) => {
                if (error) throw error;
                res.send("Category inserted successfully")
            })
        }
    });
}
const deletecategorybyId = (req, res) => {

    const cat_id = parseInt(req.params.category_id);;

    pool.query(query.getcategorybyId, [cat_id], (error, results) => {
        if (error) {
            //res.send("Category Does not exist")
        } else {
            pool.query(query.deletecategorybyId, [cat_id], (error, results) => {
                if (error) throw error;
                res.send("Category deleted  successfully")
            })
        }
    });

}
const updatecategory = (req, res) => {

    const cat_id = parseInt(req.params.category_id);
    const {
        name,
        details
    } = req.body;
    pool.query(query.getcategorybyId, [cat_id], (error, results) => {
        if (!results.rows.length) {
            res.send("Category Does not exist")
        } else {
            pool.query(query.updatecategory, [name, details, cat_id], (error, results) => {
                if (error) throw error;
                res.send("Category Updated  successfully")
            })
        }
    });

}

module.exports = {
    getAllcategory,
    getcategorybyId,
    getcategorybyname,
    addCategory,
    deletecategorybyId,
    updatecategory
};