// //initiates connection to MYSQL

// //require MYSQL
// var mysql = require("mysql");

// //setup connection
// var connection;

// //heroku
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// }

// //localhost
// else {
//     connection = mysql.createConnection({
//         port: 3306,
//         host: "vvfv20el7sb2enn3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
//         user: "wds65avhcpegkq9q",
//         password: "jykb1kgia5xuhf29",
//         database: "burgers_db"
//     });
// }

// connection.connect();
// //export connection
// module.exports = connection;