// require("dotenv").config();

const Pool  = require("pg").Pool;

// const isProduction = process.env.NODE_ENV === "production";

// const connectionString  = `postgresql://${process.env.DB_USER}: ${process.env.DB_PASSWORD}@${process.env.DB_HOST}
//               :${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// const pool = new Pool({
//     connectionString : isProduction ? process.env.DATABASE_URL : connectionString
// })


// const pool = new Pool ({
//     user : "postgres",
//     host : "localhost",
//     database : "testecomm",
//     password : "Muks@0621",
//     port : 5432
// })



const pool= new Pool({
    user:"postgres",
    host:"localhost",
    database:"ecommerce",
    password:"Ajith",
    port:5432
    
    
    });


    pool.connect((error) => {
        if (error) {
            console.log(result);
        } else {
            console.log("Connected to PSQL");
        }
    })
module.exports = pool;