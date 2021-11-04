const express = require("express");
const app = express();
const port = 5500;
const dotenv = require("dotenv");

const {
    pool
} = require("./dbconfig");
const {
    json
} = require("express");
const userRoutes = require("./routes/userroutes.js")
const reviewRoutes = require("./routes/reviewroutes.js")
const categoryRoutes = require("./routes/categoryroutes.js")
const productRoutes = require("./routes/productroutes.js")
const orderRoutes = require("./routes/orderroutes")
const userrRoutes = require("./routes/userroutes")
const cartRoutes = require("./routes/cartroutes")
const adminroutes = require("./routes/adminroutes.js")

// require("dotenv").config({ path: './config.env'});
dotenv.config({
    path: './config.env'
});

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// app.use(require('./routes/userroutes.js'));

app.use("/api/v1/users", userrRoutes)
app.use("/api/v1/reviews", reviewRoutes)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)
app.use("/api/v1/order", orderRoutes)
app.use("/api/v1/review", reviewRoutes)
app.use("/api/v1/cart", cartRoutes)
app.use("/api/v1/admin", adminroutes)



app.listen(port, () => {
    console.log(`Connection successful is at port ${port}`);
})