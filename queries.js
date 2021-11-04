// const getUsers = "SELECT * FROM users";


// module.exports = {
//     getUsers
// }


const getProducts = "SELECT * FROM products";
const getProductsById = "select * from products where product_id =$1";
const getproductbyname ="select * from products where product_name=$1";
const checkproductnameexists = "select * from products where  product_name=$1";
const addProduct = "insert into products (product_name, price,product_details,category_id,rating,stock)  values($1,$2,$3,$4,$5,$6)";
const deleteproductbyId="delete from products where product_id=$1";
const updateproduct="update products set product_name=$1 ,price=$2, product_details=$3 where product_id=$4";

// ==========================================================================
const getAllcategory="select * from category";
const getcategorybyId="select * from category where category_id=$1";
const getcategorybyname ="select * from category where name=$1";
const  checkcategoryexist="select name from category  where  name=$1";
const addCategory ="insert into category(name,details)  values($1,$2)";
const deletecategorybyId="delete from category where category_id=$1";
const updatecategory="update category set name=$1 ,details=$2 where category_id=$3";


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const getOrders="select * from order;";
const getorderById = "select * from \"Order\" where order_id=$1";
// /const  checkorderidexists ="select * from Order  where user_id=$1 and order_address = $2 and product_id = $3 and quantity = $4 and item_price = $5 and  shipping_price = $6 and total_price = $7 and  pay_through  = $8";

const createorder = "insert into \"Order\"(user_id ,order_address ,product_id ,created_at , quantity , order_status , order_time , total_price , shipping_price , delivered_at ,pay_through ,payment_status , payment_reference)  values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)";
const deleteorderbyId="delete from \"Order\" where order_id=$1";
//const updateorder="update  set order_address=$1 ,product_id=$2,quantity = $3, item_price = $4, shipping_price = $5, total_price = $6   where payment_method=$7";





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const userController = require('./userController');

const signUp = "INSERT INTO \"User\"(firstname, lastname, gender, email, password, phone_number, user_status, user_created, user_updated,user_role) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9,$10);";
const signIn = "SELECT * FROM \"User\" WHERE email=$1 AND password=$2;";
const update = "UPDATE \"User\" SET firstname=$1, lastname=$2, email=$3, password=$4, phone_number=$5 WHERE user_id=$6;";



// ------------------------------------------------------------------------------------

const addCart="insert into cart(user_id,product_id,total_items,total_price,total_discount,delivery_fee,quantity)  values($1,$2,$3,$4,$5,$6,$7)";
const getcartbyId="select * from cart  where cart_id=$1";
const updatecart="update cart set product_id=$1 ,total_items=$2,total_price=$3,total_discount=$4,delivery_fee=$5,quantity=$6  where cart_id=$7 ";
const deletecartbyId="delete from cart where cart_id=$1";

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const addreview = "insert into review(user_id, product_id, rating, review)  values($1,$2,$3,$4)";
const getreviews="select * from review  where product_id=$1";
const updatereview="update review set user_id=$1 ,product_id=$2,rating=$3  where review=$4";
const deletereviewId = "delete from review where review_id=$1";
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//admin

const addlookup="INSERT INTO \"admin\"(product_logo,header_text,banner_image,admin_email,payment_type) VALUES($1, $2, $3, $4, $5)";

module.exports={
    getAllcategory,
    getcategorybyId,
    getcategorybyname,
    addCategory,
    checkcategoryexist,
    deletecategorybyId,
    updatecategory,
    getProducts,
    getProductsById,
    checkproductnameexists,
    addProduct,
    getproductbyname,
    deleteproductbyId,
    updateproduct,
    signUp, signIn, update,
    addCart,
    getcartbyId,
    updatecart,
    deletecartbyId,
    // getOrders,
    getorderById,
  //  checkorderidexists,
    createorder,
    deleteorderbyId,
    // updateorder,
    addreview,
    getreviews,
    updatereview,
    deletereviewId,
    addlookup
}
;


    